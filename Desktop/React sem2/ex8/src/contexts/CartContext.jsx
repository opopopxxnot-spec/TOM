import { createContext, useState, useCallback } from 'react';

// Create the Cart Context
export const CartContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Add item to cart
  const addItem = useCallback((product) => {
    console.log('[CartContext] Adding item to cart:', product.name);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      let newItems;

      if (existingItem) {
        newItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }

      // Calculate total
      const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(newTotal);

      return newItems;
    });
  }, []);

  // Remove item from cart
  const removeItem = useCallback((productId) => {
    console.log('[CartContext] Removing item from cart:', productId);
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== productId);
      const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(newTotal);
      return newItems;
    });
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((productId, quantity) => {
    console.log('[CartContext] Updating quantity for:', productId, 'to:', quantity);
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems(prevItems => {
      const newItems = prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      );
      const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(newTotal);
      return newItems;
    });
  }, [removeItem]);

  // Clear cart
  const clearCart = useCallback(() => {
    console.log('[CartContext] Clearing cart');
    setItems([]);
    setTotal(0);
  }, []);

  const value = {
    items,
    total,
    itemCount: items.length,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
