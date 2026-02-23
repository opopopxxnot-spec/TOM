# Implementation Guide - Experiment 8

## Step-by-Step Implementation

This guide explains how the Context API implementation was built.

## Phase 1: Context Creation

### Step 1: Create ThemeContext
File: `src/contexts/ThemeContext.jsx`

```jsx
import { createContext, useState, useCallback } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Why this structure?**
- `createContext()` creates the context object
- Provider component manages state
- `useCallback` prevents unnecessary re-renders
- Exports both context and provider

### Step 2: Create AuthContext
File: `src/contexts/AuthContext.jsx`

Similar pattern but with:
- `user` state (null when logged out)
- `login()` function to set user
- `logout()` function to clear user
- `isAuthenticated` derived value

### Step 3: Create CartContext
File: `src/contexts/CartContext.jsx`

Similar pattern but with:
- `items` array state
- `total` number state
- Functions: `addItem()`, `removeItem()`, `updateQuantity()`, `clearCart()`

## Phase 2: Component Creation

### Step 4: Create LoginForm Component
File: `src/components/LoginForm.jsx`

```jsx
function LoginForm() {
  const { login, error, isLoading } = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Demonstrates:**
- Consuming AuthContext with `useContext()`
- Calling context functions
- Using context values in UI

### Step 5: Create UserProfile Component
File: `src/components/UserProfile.jsx`

```jsx
function UserProfile() {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  
  if (!isAuthenticated) {
    return <div>Not logged in</div>;
  }
  
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

**Demonstrates:**
- Conditional rendering based on context
- Calling logout function
- Showing derived data

### Step 6: Create ThemeSwitcher Component
File: `src/components/ThemeSwitcher.jsx`

```jsx
function ThemeSwitcher() {
  const { theme, toggleTheme, fontSize, updateFontSize } = useContext(ThemeContext);
  
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>{fontSize}</div>
    </div>
  );
}
```

**Demonstrates:**
- Using multiple values from context
- Calling multiple context functions
- Showing theme state

### Step 7: Create CartManager Component
File: `src/components/CartManager.jsx`

```jsx
function CartManager() {
  const { items, total, addItem, removeItem } = useContext(CartContext);
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  );
}
```

**Demonstrates:**
- Mapping over context state array
- Passing item data to functions
- Displaying calculated values

### Step 8: Create ContextMonitor Component
File: `src/components/ContextMonitor.jsx`

```jsx
function ContextMonitor() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  }, [themeContext]);
  
  return (
    <div>
      <p>Renders: {renderCount.current}</p>
      <p>Theme: {themeContext.theme}</p>
    </div>
  );
}
```

**Demonstrates:**
- Consuming multiple contexts
- Tracking re-renders with `useRef` and `useEffect`
- Using context values for monitoring

## Phase 3: Application Setup

### Step 9: Create App.jsx with Providers
File: `src/App.jsx`

```jsx
function AppContent() {
  // Component that uses contexts
  return <div>...</div>;
}

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
```

**Key Pattern:**
- Separate `App` (wraps providers) from `AppContent` (uses contexts)
- Allows accessing contexts in AppContent
- Providers nest properly

### Why This Structure?

This separation is **crucial** because:
1. If `AppContent` used contexts, it would fail (no provider)
2. Nesting providers must happen before context consumption
3. Creates proper hierarchy

## Phase 4: Styling

### Step 10: Add CSS Files

Created individual CSS files:
- `LoginForm.css` - Form styling
- `UserProfile.css` - Profile styling
- `ThemeSwitcher.css` - Theme UI styling
- `CartManager.css` - Cart UI styling
- `ContextMonitor.css` - Monitor styling

Updated `App.css` with:
- Light/dark theme support
- Responsive grid layouts
- Component styling

## Advanced Concepts Implemented

### 1. Context Value Memoization
```jsx
const value = { theme, toggleTheme };
return <ThemeContext.Provider value={value}>
```

Optimization: In production, wrap value with `useMemo`:
```jsx
const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
```

### 2. Multiple Independent Contexts
Each context doesn't affect others:
- Updating theme doesn't re-render cart components
- Updating cart doesn't re-render auth components
- Each context is independent

### 3. Callback Functions
Used `useCallback` in all contexts:
```jsx
const toggleTheme = useCallback(() => {
  setTheme(prev => prev === 'light' ? 'dark' : 'light');
}, []);
```

Benefits:
- Same function reference on re-renders
- Prevents unnecessary re-renders of components using function

### 4. Derived Values
Computed values in context:
```jsx
const value = {
  isAuthenticated: !!user,  // Derived
  user,                      // State
  login,                     // Function
};
```

### 5. Conditional Rendering
Components conditionally render based on context:
```jsx
if (!isAuthenticated) {
  return <div>Not logged in</div>;
}
```

## Debugging Techniques

### 1. Console Logging
Each context logs updates:
```jsx
console.log('[ThemeContext] Toggling theme...');
```

### 2. React DevTools
Install React DevTools extension to:
- Inspect component tree
- View context values
- Track re-renders

### 3. ContextMonitor Component
Shows:
- Re-render counts
- Current context values
- Independent updates

## Testing the Implementation

### Test 1: Theme Updates
1. Toggle theme
2. Verify all components update
3. Check console logs
4. Verify ContextMonitor count increases

### Test 2: Auth Updates
1. Fill login form
2. Submit - watch "Logging in..." state
3. Profile updates after 500ms
4. Click logout
5. Profile clears

### Test 3: Cart Updates
1. Add items
2. Watch total calculate
3. Change quantity
4. Update reflected immediately
5. Remove item
6. Clear cart

### Test 4: Independent Contexts
1. Update theme (check cart doesn't re-render)
2. Update cart (check theme doesn't re-render)
3. Login/logout (check others don't re-render)
4. Monitor shows independent render counts

## Common Patterns Used

### Pattern 1: Provider Wrapper
```jsx
export function ContextProvider({ children }) {
  const [state, setState] = useState(initialValue);
  const value = { state, setState };
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}
```

### Pattern 2: Consumer Component
```jsx
function ComponentName() {
  const { state, setState } = useContext(Context);
  return <div>{state}</div>;
}
```

### Pattern 3: Multiple Providers
```jsx
<Provider1>
  <Provider2>
    <Provider3>
      <App />
    </Provider3>
  </Provider2>
</Provider1>
```

### Pattern 4: Derived Values
```jsx
const value = {
  user,
  isAuthenticated: !!user,
  isDark: theme === 'dark',
};
```

## Performance Optimization Tips

1. **Split Contexts**
   - Separate concerns
   - Reduces re-render impact

2. **Memoize Values**
   - Use `useMemo` when needed
   - Prevents unnecessary re-renders

3. **Use Callbacks**
   - `useCallback` for functions
   - Maintains reference equality

4. **Consumer Components**
   - Only consume needed contexts
   - Remove unused context dependencies

5. **Lazy Evaluation**
   - Compute values only when used
   - Avoid expensive computations

## Migration from Props

If migrating from prop drilling:

### Before (Prop Drilling):
```jsx
<Parent user={user} onUpdateUser={updateUser}>
  <Child user={user} onUpdateUser={updateUser}>
    <GrandChild user={user} onUpdateUser={updateUser} />
  </Child>
</Parent>
```

### After (Context):
```jsx
<UserProvider>
  <Parent>
    <Child>
      <GrandChild />
    </Child>
  </Parent>
</UserProvider>
```

Then in GrandChild:
```jsx
const { user, updateUser } = useContext(UserContext);
```

## File Organization Summary

```
contexts/     ← Context definitions and providers
  ├── ThemeContext.jsx
  ├── AuthContext.jsx
  ├── CartContext.jsx
  └── index.js

components/   ← Context consumers
  ├── ThemeSwitcher.jsx
  ├── LoginForm.jsx
  ├── UserProfile.jsx
  ├── CartManager.jsx
  ├── ContextMonitor.jsx
  └── index.js

styles/       ← Component styles
  ├── *.css files
  └── App.css

App.jsx       ← Provider wrapping
```

This structure is:
- **Scalable:** Easy to add new contexts and components
- **Maintainable:** Clear separation of concerns
- **Testable:** Each piece can be tested independently
- **Reusable:** Contexts can be used in multiple components
