# React Context API Experiment - Week 8

## Overview
This experiment demonstrates the implementation of global state management using React Context API. Instead of prop drilling, we use Context to efficiently share state across multiple components.

## Project Structure

```
ex8/src/
├── contexts/
│   ├── ThemeContext.jsx      # Theme management (light/dark, font size)
│   ├── AuthContext.jsx       # Authentication state management
│   ├── CartContext.jsx       # Shopping cart management
│   └── index.js              # Context exports
├── components/
│   ├── LoginForm.jsx         # Auth context consumer - form
│   ├── UserProfile.jsx       # Auth context consumer - profile display
│   ├── ThemeSwitcher.jsx     # Theme context consumer
│   ├── CartManager.jsx       # Cart context consumer
│   ├── ContextMonitor.jsx    # Re-render behavior tracker
│   └── index.js              # Component exports
├── styles/
│   ├── LoginForm.css
│   ├── UserProfile.css
│   ├── ThemeSwitcher.css
│   ├── CartManager.css
│   └── ContextMonitor.css
├── App.jsx                   # Main app with providers
├── App.css                   # Main styles
├── main.jsx
└── index.css
```

## Implementation Details

### 1. **ThemeContext** - Theme Management
Manages global theme preferences (light/dark mode and font sizes).

**Features:**
- Toggle between light and dark themes
- Adjust font sizes (small, medium, large)
- Immediate UI updates across all components
- Console logging for debugging

**Usage:**
```jsx
const { theme, fontSize, toggleTheme, updateFontSize } = useContext(ThemeContext);
```

### 2. **AuthContext** - Authentication State
Handles user login/logout and profile management.

**Features:**
- Login with email/password simulation
- Logout functionality
- User profile data storage
- Loading and error states
- Update user information

**Usage:**
```jsx
const { user, login, logout, isAuthenticated } = useContext(AuthContext);
```

### 3. **CartContext** - Shopping Cart Management
Manages shopping cart items independently from other contexts.

**Features:**
- Add items to cart
- Remove items
- Update quantities
- Calculate total price
- Clear entire cart
- Track item count

**Usage:**
```jsx
const { items, total, addItem, removeItem, updateQuantity } = useContext(CartContext);
```

## Context API Concepts Implemented

### 1. Creating a Context
```jsx
export const ThemeContext = createContext();
```

### 2. Provider Component
Wraps children with context value:
```jsx
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = { theme, toggleTheme };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 3. Consuming Context
Access context values in components:
```jsx
const { theme } = useContext(ThemeContext);
```

### 4. Updating Global State
Functions from context update state:
```jsx
const { toggleTheme } = useContext(ThemeContext);
toggleTheme(); // Updates context for all consumers
```

### 5. Multiple Providers
Nest multiple providers in App:
```jsx
<ThemeProvider>
  <AuthProvider>
    <CartProvider>
      <AppContent />
    </CartProvider>
  </AuthProvider>
</ThemeProvider>
```

## Re-render Behavior

### How Context Re-renders Work
1. When context value changes, ALL consuming components re-render
2. React compares context values using reference equality
3. Components only re-render if their specific context updates

### ContextMonitor Component
Tracks and displays render counts:
- Shows how many times each context has triggered re-renders
- Demonstrates that contexts update independently
- Useful for debugging re-render performance

### Optimization Techniques
- Memoize context values using `useCallback` and `useMemo`
- Split contexts by concern (Theme, Auth, Cart)
- Only consume contexts that components actually need

## Key Skills Demonstrated

✅ **Creating React Context**
- Define context with `createContext()`
- Create provider components with state management

✅ **Providing Context**
- Wrap application with `ThemeProvider`, `AuthProvider`, `CartProvider`
- Pass values to Provider component

✅ **Consuming Context**
- Use `useContext()` hook in components
- Access and destructure context values

✅ **Updating Global State**
- Call context functions from nested components
- Changes propagate to all consumers automatically

✅ **Understanding Re-renders**
- Multiple contexts can be updated independently
- ContextMonitor tracks render performance
- Console logs show when updates occur

✅ **Managing Multiple Contexts**
- Theme context: UI preferences
- Auth context: User session
- Cart context: Shopping data
- No interference between contexts

## Console Logging

Each context logs its updates to the browser console:
- `[ThemeContext] Toggling theme...`
- `[AuthContext] Logging in user: email@example.com`
- `[CartContext] Adding item to cart: Laptop`

Open DevTools Console to see state changes in real-time.

## Try This

1. **Theme Testing**
   - Click theme toggle to switch light/dark
   - Change font size and observe changes

2. **Authentication Testing**
   - Fill login form with any email/password
   - Click Login to create session
   - View user profile in Profile section
   - Click Logout to end session

3. **Cart Testing**
   - Add different products to cart
   - Change quantities
   - Watch total calculate automatically
   - Clear cart to remove all items

4. **Re-render Monitoring**
   - Make changes to each context
   - Watch ContextMonitor render counts increase
   - Notice each context updates independently

5. **Console Debugging**
   - Open DevTools Console
   - Perform actions and see logs
   - Understand execution flow

## Performance Considerations

### Advantages of Context API
- Eliminates "prop drilling" through multiple components
- Centralized state management
- Easy to understand data flow
- Built-in to React (no external library)

### When to Use Context
- Sharing theme preferences
- User authentication state
- Global notifications
- Multi-level component data

### Limitations
- Not ideal for frequently changing state
- Can cause unnecessary re-renders
- Use Redux/Zustand for complex apps

## Best Practices

1. **Split Contexts by Concern**
   - Separate unrelated state
   - Reduces re-render impact

2. **Memoize Context Value**
   - Use `useCallback` for functions
   - Prevent unnecessary re-renders

3. **Consumer Components**
   - Only import contexts they use
   - Keep components focused

4. **Provider Hierarchy**
   - Place providers at appropriate levels
   - Only wrap components that need them

5. **Debugging**
   - Use console.log in context functions
   - Monitor render counts
   - Track state changes

## Learning Outcomes

After completing this experiment, you will understand:
- How to create and use React Context API
- How to provide contexts at application level
- How to consume context values in components
- How to update global state from any component
- How context re-rendering works
- How to manage multiple independent contexts
- Performance optimization with Context API
- Best practices for global state management

## Resources

- [React Context API Documentation](https://react.dev/reference/react/createContext)
- [useContext Hook](https://react.dev/reference/react/useContext)
- [React State Management Patterns](https://react.dev/learn/passing-data-deeply-with-context)
