import { useContext, useRef, useEffect } from 'react';
import { ThemeContext, AuthContext, CartContext } from '../contexts';
import '../styles/ContextMonitor.css';

/**
 * ContextMonitor Component
 * Demonstrates re-render behavior when context values change.
 * Tracks render count and displays current context values.
 */
function ContextMonitor() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  const themeRenderCount = useRef(0);
  const authRenderCount = useRef(0);
  const cartRenderCount = useRef(0);

  useEffect(() => {
    themeRenderCount.current++;
  }, [themeContext.theme, themeContext.fontSize]);

  useEffect(() => {
    authRenderCount.current++;
  }, [authContext.user]);

  useEffect(() => {
    cartRenderCount.current++;
  }, [cartContext.items.length]);

  return (
    <div className="context-monitor">
      <h3>🔍 Context Re-render Monitor</h3>
      
      <div className="monitor-section">
        <h4>Theme Context</h4>
        <p>Renders: <strong>{themeRenderCount.current}</strong></p>
        <p>Theme: <strong>{themeContext.theme}</strong></p>
        <p>Font Size: <strong>{themeContext.fontSize}</strong></p>
      </div>

      <div className="monitor-section">
        <h4>Auth Context</h4>
        <p>Renders: <strong>{authRenderCount.current}</strong></p>
        <p>Status: <strong>{authContext.isAuthenticated ? 'Logged In' : 'Logged Out'}</strong></p>
        {authContext.user && (
          <p>User: <strong>{authContext.user.name}</strong></p>
        )}
      </div>

      <div className="monitor-section">
        <h4>Cart Context</h4>
        <p>Renders: <strong>{cartRenderCount.current}</strong></p>
        <p>Items: <strong>{cartContext.itemCount}</strong></p>
        <p>Total: <strong>${cartContext.total.toFixed(2)}</strong></p>
      </div>

      <div className="info-box">
        <p>💡 <strong>Note:</strong> Each section's render count increases when its context value changes. This demonstrates how React re-renders consuming components efficiently when their specific context updates.</p>
      </div>
    </div>
  );
}

export default ContextMonitor;
