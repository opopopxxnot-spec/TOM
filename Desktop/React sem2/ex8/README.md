# Experiment 8 – Week 8: Managing Global State Using React Context API

## 🎯 Overview

This experiment demonstrates the implementation and usage of React Context API for efficient global state management across multiple components, eliminating the need for prop drilling.

## 📋 Project Description

A multi-component React application that uses Context API to manage three independent global states:
- **Theme Context** - Light/dark mode and font size preferences
- **Auth Context** - User authentication and profile management
- **Cart Context** - Shopping cart items and totals

## ✨ Features Implemented

### 1. **Theme Context** 🎨
- Toggle between light and dark themes
- Adjust font sizes (small, medium, large)
- Real-time UI updates across all components
- Smooth theme transitions

### 2. **Auth Context** 🔐
- Login/logout functionality
- User profile display
- Loading and error states
- User data storage and retrieval

### 3. **Cart Context** 🛒
- Add/remove items from cart
- Update quantities
- Calculate totals
- Clear cart functionality
- Display item count

### 4. **Re-render Monitoring** 📊
- ContextMonitor component tracks render counts
- Demonstrates independent context updates
- Console logging for debugging
- Shows no interference between contexts

## 📁 Project Structure

```
ex8/
├── src/
│   ├── contexts/
│   │   ├── ThemeContext.jsx          # Theme state management
│   │   ├── AuthContext.jsx           # Authentication state
│   │   ├── CartContext.jsx           # Shopping cart state
│   │   └── index.js                  # Context exports
│   ├── components/
│   │   ├── LoginForm.jsx             # Auth consumer
│   │   ├── UserProfile.jsx           # Auth consumer
│   │   ├── ThemeSwitcher.jsx         # Theme consumer
│   │   ├── CartManager.jsx           # Cart consumer
│   │   ├── ContextMonitor.jsx        # All contexts monitoring
│   │   └── index.js                  # Component exports
│   ├── styles/
│   │   ├── LoginForm.css
│   │   ├── UserProfile.css
│   │   ├── ThemeSwitcher.css
│   │   ├── CartManager.css
│   │   ├── ContextMonitor.css
│   │   └── App.css
│   ├── App.jsx                       # Main app with providers
│   ├── main.jsx
│   └── index.css
├── README_CONTEXT_API.md             # Detailed documentation
├── QUICK_START.md                    # Quick setup guide
├── IMPLEMENTATION_GUIDE.md           # Step-by-step guide
├── COMPLETION_CHECKLIST.md          # Requirements checklist
├── package.json
├── vite.config.js
└── index.html
```

## 🚀 Quick Start

### Installation
```bash
cd ex8
npm install
```

### Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build
```bash
npm run build
```

## 💡 Core Concepts Demonstrated

### 1. Creating Contexts
```jsx
export const ThemeContext = createContext();
```

### 2. Provider Components
```jsx
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 3. Consuming Contexts
```jsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

### 4. Provider Hierarchy
```jsx
<ThemeProvider>
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
</ThemeProvider>
```

## 📚 Skills Covered

✅ **Creating React Context**
- Define context with `createContext()`
- Create provider components
- Manage state within providers

✅ **Providing Context**
- Wrap application with providers
- Pass values to Provider component
- Handle multiple providers

✅ **Consuming Context**
- Use `useContext()` hook
- Access context values
- Use context functions

✅ **Updating Global State**
- Modify context state from components
- Propagate changes automatically
- Observe updates across app

✅ **Understanding Re-renders**
- Track re-render behavior
- Monitor independent contexts
- Optimize performance
- Use console logging

✅ **Managing Multiple Contexts**
- Create independent contexts
- Prevent state interference
- Use multiple contexts together
- Optimize re-renders

## 🎮 How to Use

### Theme Management
1. Click "☀️ Light Mode" or "🌙 Dark Mode" to switch themes
2. Select font size (small, medium, large)
3. Changes apply instantly across the app

### Authentication
1. Enter any email (e.g., `user@example.com`)
2. Enter any password
3. Click "Login" 
4. View user profile on the right
5. Click "Logout" to end session

### Shopping Cart
1. Click "Add to Cart" on any product
2. Use +/- buttons or type to change quantity
3. Click ✕ to remove items
4. Total updates automatically
5. Click "Clear Cart" to empty

### Monitoring
1. Watch ContextMonitor section
2. Each context shows its render count
3. Open DevTools Console to see logs
4. Update contexts and watch counts increase

## 🔍 Debugging Features

### Console Logging
All context updates are logged:
```
[ThemeContext] Toggling theme...
[AuthContext] Logging in user: email@example.com
[CartContext] Adding item to cart: Laptop
```

Open DevTools (F12) → Console tab to see live logs.

### ContextMonitor Component
Displays:
- Render count for each context
- Current context values
- Demonstrates independent updates
- Shows re-render optimization in action

## 📖 Documentation

- **README_CONTEXT_API.md** - Comprehensive Context API documentation
- **QUICK_START.md** - Quick setup and usage guide
- **IMPLEMENTATION_GUIDE.md** - Detailed step-by-step implementation
- **COMPLETION_CHECKLIST.md** - Requirements verification

## 🎓 Learning Outcomes

After completing this experiment, you will understand:
1. ✓ How to create React contexts
2. ✓ How to provide contexts to components
3. ✓ How to consume contexts with useContext hook
4. ✓ How to update global state from components
5. ✓ How context re-rendering works
6. ✓ How to manage multiple independent contexts
7. ✓ Performance optimization with contexts
8. ✓ Best practices for global state management

## ⚙️ Technical Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool
- **React DOM 19.2.0** - DOM rendering
- **CSS3** - Styling with transitions

## 🏆 Key Achievements

✅ Multiple independent contexts (Theme, Auth, Cart)
✅ Five consumer components demonstrating best practices
✅ Complete UI with light/dark theme support
✅ Re-render monitoring and tracking
✅ Console logging for debugging
✅ Comprehensive documentation
✅ Responsive design (mobile, tablet, desktop)
✅ Performance optimization with useCallback

## 📝 Notes

- Contexts are independent and don't interfere with each other
- All state updates are logged to browser console for debugging
- Theme changes apply instantly to all consuming components
- Login simulates a 500ms async operation
- Cart calculates totals automatically on any change
- ContextMonitor tracks render behavior accurately

## 🔗 Related Resources

- [React Context API Docs](https://react.dev/reference/react/createContext)
- [useContext Hook](https://react.dev/reference/react/useContext)
- [State Management Patterns](https://react.dev/learn/passing-data-deeply-with-context)

## ✅ Completion Status

**All requirements met and exceeded** ✅

- [x] Create a Context for shared state
- [x] Wrap application with Context Provider
- [x] Consume context in nested components using useContext
- [x] Update global state from child components
- [x] Demonstrate re-render behavior
- [x] Create multiple contexts (Theme, Cart, Auth)
- [x] Handle independent updates
- [x] Comprehensive documentation
- [x] Best practices implementation
- [x] Performance optimization

---

**Experiment 8 Complete** 🎉
