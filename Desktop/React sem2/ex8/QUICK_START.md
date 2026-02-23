# Quick Start Guide - Experiment 8

## Setup

### 1. Install Dependencies
```bash
cd ex8
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173` (or similar)

## Key Features to Try

### 1. Theme Context
**Location:** Top section
- Click "☀️ Light Mode" / "🌙 Dark Mode" to toggle theme
- Select font size (small, medium, large)
- Changes apply instantly across app
- Watch the ContextMonitor update render count

### 2. Auth Context
**Location:** Authentication Section
**Left Column - Login Form:**
- Enter any email (e.g., user@example.com)
- Enter any password (at least 1 character)
- Click Login button
- Watch it transition from "Logging in..." to complete

**Right Column - User Profile:**
- After login, displays user information
- Shows email, name derivation, login time, user ID
- Click Logout to clear the session

### 3. Cart Context
**Location:** Shopping Cart Section
**Available Products:**
- Laptop ($999.99)
- Phone ($699.99)
- Headphones ($199.99)
- Tablet ($449.99)

**Actions:**
- Click "Add to Cart" on any product
- Use +/- buttons to adjust quantities
- Type number directly to set quantity
- Click ✕ to remove item
- Total updates automatically
- Click "Clear Cart" to empty

### 4. Context Monitor
**Location:** Bottom section
- Tracks render counts for each context
- Shows current context values
- Demonstrates independent context updates
- Updates when any context changes

## File Locations

| File | Purpose |
|------|---------|
| `src/contexts/ThemeContext.jsx` | Theme state and functions |
| `src/contexts/AuthContext.jsx` | Authentication management |
| `src/contexts/CartContext.jsx` | Shopping cart state |
| `src/components/ThemeSwitcher.jsx` | Theme UI component |
| `src/components/LoginForm.jsx` | Login form component |
| `src/components/UserProfile.jsx` | User info display |
| `src/components/CartManager.jsx` | Cart UI component |
| `src/components/ContextMonitor.jsx` | Re-render tracker |
| `src/App.jsx` | Main app with providers |

## Understanding the Code

### Creating a Context
```jsx
// Step 1: Create context
export const ThemeContext = createContext();

// Step 2: Create provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Using a Context
```jsx
// Step 3: Use in component
function MyComponent() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme}</div>;
}
```

### Wrapping with Providers
```jsx
// In App.jsx
<ThemeProvider>
  <AuthProvider>
    <CartProvider>
      <AppContent />
    </CartProvider>
  </AuthProvider>
</ThemeProvider>
```

## Console Debugging

1. **Open DevTools:** 
   - Press `F12` or `Ctrl+Shift+I` (Windows)
   - Press `Cmd+Option+I` (Mac)

2. **Go to Console Tab**

3. **Perform Actions:**
   - Toggle theme → See `[ThemeContext] Toggling theme...`
   - Login → See `[AuthContext] Logging in user: email`
   - Add to cart → See `[CartContext] Adding item to cart: Product Name`

4. **Track State Changes**
   - Each log shows when context updates
   - Use this to understand execution flow

## Performance Notes

- **Independent Contexts:** Theme, Auth, and Cart update separately
- **No Re-render Propagation:** Updating Cart doesn't re-render Theme components
- **ContextMonitor:** Tracks which contexts triggered re-renders

## Common Issues

### Q: Theme changes don't apply?
A: Ensure you're using a component inside `ThemeProvider` and using `useContext(ThemeContext)`

### Q: Login form doesn't work?
A: Enter both email and password (any values work for demo)

### Q: Cart total not updating?
A: Total updates automatically - check console for logs if unsure

### Q: Why no re-render log?
A: Each component tracks its own re-renders independently

## Next Steps

1. Examine each context file to understand implementation
2. Try modifying context values to see effects
3. Create a new context (notification, modal, etc.)
4. Add more products to the cart
5. Extend user profile with more fields
6. Create a combined shopping history context

## Related Files

- `README_CONTEXT_API.md` - Detailed documentation
- `IMPLEMENTATION_GUIDE.md` - Step-by-step implementation
- `package.json` - Dependencies and scripts
