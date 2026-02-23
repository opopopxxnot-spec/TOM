import { ThemeProvider, AuthProvider, CartProvider } from './contexts';
import { LoginForm, UserProfile, ThemeSwitcher, CartManager, ContextMonitor } from './components';
import { useContext } from 'react';
import { ThemeContext } from './contexts';
import './App.css';

/**
 * App Component with Context API Implementation
 * 
 * This component demonstrates:
 * 1. Creating multiple contexts (Theme, Auth, Cart)
 * 2. Providing contexts at the application root level
 * 3. Consuming context values in nested components
 * 4. Updating global state from child components
 * 5. Observing re-render behavior when context changes
 */
function AppContent() {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <header className="app-header">
        <h1>🎯 React Context API Experiment</h1>
        <p className="subtitle">Managing Global State Efficiently</p>
      </header>

      <main className="app-main">
        <section className="section theme-section">
          <ThemeSwitcher />
        </section>

        <section className="section auth-section">
          <div className="two-column">
            <div className="column">
              <LoginForm />
            </div>
            <div className="column">
              <UserProfile />
            </div>
          </div>
        </section>

        <section className="section cart-section">
          <CartManager />
        </section>

        <section className="section monitor-section">
          <ContextMonitor />
        </section>

        <section className="documentation">
          <h2>📚 Implementation Details</h2>
          <div className="docs-grid">
            <div className="doc-item">
              <h3>1. Theme Context</h3>
              <p>Manages light/dark theme and font size preferences globally.</p>
              <code>✓ ThemeContext.jsx</code>
            </div>
            <div className="doc-item">
              <h3>2. Auth Context</h3>
              <p>Handles user authentication state, login/logout, and user data.</p>
              <code>✓ AuthContext.jsx</code>
            </div>
            <div className="doc-item">
              <h3>3. Cart Context</h3>
              <p>Manages shopping cart items, quantities, and total price.</p>
              <code>✓ CartContext.jsx</code>
            </div>
            <div className="doc-item">
              <h3>4. Context Monitor</h3>
              <p>Tracks and displays re-render counts for each context.</p>
              <code>✓ Demonstrates re-render optimization</code>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>✨ Features Implemented</h2>
          <ul>
            <li>✅ Multiple independent contexts (Theme, Auth, Cart)</li>
            <li>✅ Context providers wrapping the application root</li>
            <li>✅ Components consuming context with useContext hook</li>
            <li>✅ Global state updates from nested components</li>
            <li>✅ Re-render behavior tracking and monitoring</li>
            <li>✅ Console logging for state change tracking</li>
            <li>✅ Responsive UI with theme switching</li>
            <li>✅ Simulated async operations (e.g., login with delay)</li>
          </ul>
        </section>

        <section className="tips">
          <h2>💡 Try These Actions</h2>
          <ol>
            <li>Toggle the theme and watch the app update instantly</li>
            <li>Change font size to see how ThemeContext affects the UI</li>
            <li>Login with any email/password to see Auth state update</li>
            <li>Add items to cart and watch the total update</li>
            <li>Open browser DevTools Console to see context update logs</li>
            <li>Check the Context Monitor to see render counts increase</li>
          </ol>
        </section>
      </main>

      <footer className="app-footer">
        <p>Experiment 8 - Managing Global State Using React Context API</p>
      </footer>
    </div>
  );
}

/**
 * App Component
 * Wraps the entire application with Context Providers
 */
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
