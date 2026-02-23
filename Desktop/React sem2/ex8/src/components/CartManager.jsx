import { useContext, useState } from 'react';
import { CartContext } from '../contexts';
import '../styles/CartManager.css';

// Sample products
const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Phone', price: 699.99 },
  { id: 3, name: 'Headphones', price: 199.99 },
  { id: 4, name: 'Tablet', price: 449.99 },
];

function CartManager() {
  const { items, total, addItem, removeItem, clearCart, updateQuantity } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  return (
    <div className="cart-manager">
      <h3>Shopping Cart</h3>

      <div className="cart-section">
        <h4>Available Products</h4>
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <div key={product.id} className="product-card">
              <h5>{product.name}</h5>
              <p className="price">${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section">
        <h4>Cart Items ({items.length})</h4>
        {items.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="quantity-input"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)} className="remove-btn">✕</button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <button onClick={clearCart} className="clear-btn">Clear Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartManager;
