# Experiment 8: File Reference Guide

## 📁 Complete File Listing

### Context Files (Providers)

#### [ThemeContext.jsx](src/contexts/ThemeContext.jsx)
**Purpose:** Manages theme state and preferences
**Exports:** `ThemeContext`, `ThemeProvider`
**State Variables:**
- `theme` - 'light' or 'dark'
- `fontSize` - 'small', 'medium', or 'large'
**Functions:**
- `toggleTheme()` - Switch between light/dark
- `updateFontSize(size)` - Update font size

**Usage:**
```jsx
const { theme, fontSize, toggleTheme, updateFontSize, isDark } = useContext(ThemeContext);
```

#### [AuthContext.jsx](src/contexts/AuthContext.jsx)
**Purpose:** Manages user authentication and profile
**Exports:** `AuthContext`, `AuthProvider`
**State Variables:**
- `user` - User object or null
- `isLoading` - Boolean loading state
- `error` - Error message or null
**Functions:**
- `login(email, password)` - Authenticate user
- `logout()` - Clear session
- `updateUser(updates)` - Update user data

**Usage:**
```jsx
const { user, isLoading, error, login, logout, updateUser, isAuthenticated } = useContext(AuthContext);
```

#### [CartContext.jsx](src/contexts/CartContext.jsx)
**Purpose:** Manages shopping cart state
**Exports:** `CartContext`, `CartProvider`
**State Variables:**
- `items` - Array of cart items
- `total` - Sum of all items' costs
**Functions:**
- `addItem(product)` - Add to cart
- `removeItem(productId)` - Remove from cart
- `updateQuantity(productId, quantity)` - Change quantity
- `clearCart()` - Empty cart

**Usage:**
```jsx
const { items, total, itemCount, addItem, removeItem, updateQuantity, clearCart } = useContext(CartContext);
```

#### [contexts/index.js](src/contexts/index.js)
**Purpose:** Export all contexts and providers
**Exports:** All context and provider components

### Component Files (Consumers)

#### [LoginForm.jsx](src/components/LoginForm.jsx)
**Purpose:** Login form component that uses AuthContext
**Consumes:** `AuthContext`
**Features:**
- Email and password inputs
- Login button with loading state
- Error message display
- Form validation and clearing
**Key Props:** None (uses context)

#### [UserProfile.jsx](src/components/UserProfile.jsx)
**Purpose:** Display user profile information
**Consumes:** `AuthContext`
**Features:**
- Display logged-in user info
- Show name, email, login time, ID
- Logout button
- Empty state for non-authenticated users
**Key Props:** None (uses context)

#### [ThemeSwitcher.jsx](src/components/ThemeSwitcher.jsx)
**Purpose:** Theme switching UI component
**Consumes:** `ThemeContext`
**Features:**
- Light/dark mode toggle button
- Font size selector (small, medium, large)
- Preview text showing font size
- Visual indication of selected options
**Key Props:** None (uses context)

#### [CartManager.jsx](src/components/CartManager.jsx)
**Purpose:** Shopping cart UI component
**Consumes:** `CartContext`
**Features:**
- Product list with "Add to Cart" buttons
- Cart items display
- Quantity controls (±, input)
- Item removal
- Total calculation
- Clear cart button
- Empty cart message
**Key Props:** None (uses context)

#### [ContextMonitor.jsx](src/components/ContextMonitor.jsx)
**Purpose:** Monitor re-render behavior and context values
**Consumes:** `ThemeContext`, `AuthContext`, `CartContext` (All)
**Features:**
- Render count tracking for each context
- Display current context values
- Show independent updates
- Helpful explanation text
**Key Props:** None (uses context)

#### [components/index.js](src/components/index.js)
**Purpose:** Export all components
**Exports:** All consumer components

### Main Application

#### [App.jsx](src/App.jsx)
**Purpose:** Main application component with provider hierarchy
**Components:**
- `App` - Wraps providers around AppContent
- `AppContent` - Uses all contexts and components
**Key Features:**
- Provider nesting (Theme → Auth → Cart)
- Main layout and sections
- Documentation and features display
- Demo instructions

### Styling Files

#### [App.css](src/App.css)
**Purpose:** Main application styles
**Features:**
- Light/dark theme support
- Responsive layouts
- Header and footer styling
- Documentation section styles
- Features and tips sections
- Mobile responsive design

#### [styles/LoginForm.css](src/styles/LoginForm.css)
**Purpose:** Login form styling
**Features:**
- Form layout and spacing
- Input styling with focus states
- Button styling
- Error message styling

#### [styles/UserProfile.css](src/styles/UserProfile.css)
**Purpose:** User profile styling
**Features:**
- Profile card layout
- Info display styling
- Logout button styling
- Empty state styling

#### [styles/ThemeSwitcher.css](src/styles/ThemeSwitcher.css)
**Purpose:** Theme switcher styling
**Features:**
- Theme button styling
- Font size selector styling
- Preview text styling
- Active state indicators

#### [styles/CartManager.css](src/styles/CartManager.css)
**Purpose:** Shopping cart styling
**Features:**
- Product grid layout
- Product card styling
- Cart items list styling
- Quantity controls
- Total display styling
- Clear cart button
- Mobile responsive

#### [styles/ContextMonitor.css](src/styles/ContextMonitor.css)
**Purpose:** Context monitor styling
**Features:**
- Monitor panel styling
- Section styling
- Render count highlighting
- Info box styling

### Documentation Files

#### [README.md](README.md)
**Purpose:** Main project documentation
**Contains:**
- Project overview
- Feature descriptions
- Quick start guide
- Usage instructions
- Core concepts
- Skills covered
- Learning outcomes

#### [README_CONTEXT_API.md](README_CONTEXT_API.md)
**Purpose:** Detailed Context API documentation
**Contains:**
- Project structure explanation
- Detailed implementation details
- Context API concepts
- Re-render behavior explanation
- Performance considerations
- Best practices
- Learning outcomes

#### [QUICK_START.md](QUICK_START.md)
**Purpose:** Quick setup and usage guide
**Contains:**
- Installation steps
- How to start dev server
- Feature demonstrations
- File locations table
- Code examples
- Console debugging guide
- Common issues FAQ

#### [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)
**Purpose:** Step-by-step implementation walkthrough
**Contains:**
- Phase-by-phase implementation
- Code explanations
- Design decisions
- Advanced concepts
- Debugging techniques
- Testing scenarios
- Common patterns
- Performance optimization tips
- Migration from props drilling

#### [COMPLETION_CHECKLIST.md](COMPLETION_CHECKLIST.md)
**Purpose:** Requirements and completion verification
**Contains:**
- Core requirements checklist
- UI/UX component checklist
- Styling checklist
- Documentation checklist
- Advanced features checklist
- Code quality checklist
- Project structure verification
- Testing scenarios
- Summary of achievements

## 🔄 Component Relationships

```
App (wraps with providers)
├── ThemeProvider
│   ├── AuthProvider
│   │   └── CartProvider
│   │       └── AppContent (uses all contexts)
│   │           ├── ThemeSwitcher (uses ThemeContext)
│   │           ├── LoginForm (uses AuthContext)
│   │           ├── UserProfile (uses AuthContext)
│   │           ├── CartManager (uses CartContext)
│   │           └── ContextMonitor (uses all contexts)
```

## 📊 Context Usage Matrix

| Component | Theme | Auth | Cart |
|-----------|-------|------|------|
| ThemeSwitcher | ✓ | - | - |
| LoginForm | - | ✓ | - |
| UserProfile | - | ✓ | - |
| CartManager | - | - | ✓ |
| ContextMonitor | ✓ | ✓ | ✓ |

## 🎯 Key Features by File

### Contexts
- **Independent state management**
- **useCallback for optimization**
- **Console logging for debugging**
- **Derived values (isDark, isAuthenticated, itemCount)**

### Components
- **Context consumption with useContext**
- **State-driven rendering**
- **Event handling and updates**
- **Loading and error states**
- **Form handling**

### Styling
- **Light/dark theme support**
- **Responsive grid layouts**
- **CSS transitions and animations**
- **Mobile-first design**
- **Accessibility considerations**

## 📖 How to Navigate

### For Learning Context API
1. Start with [README.md](README.md)
2. Read [README_CONTEXT_API.md](README_CONTEXT_API.md)
3. Study [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)
4. Follow [QUICK_START.md](QUICK_START.md)

### For Quick Reference
1. Check [QUICK_START.md](QUICK_START.md) for setup
2. Use this file for component information
3. Refer to [COMPLETION_CHECKLIST.md](COMPLETION_CHECKLIST.md) for verification

### For Implementation Details
1. Review [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)
2. Study specific context files
3. Examine component consumption patterns

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Navigate to `http://localhost:5173`

4. **Try features:**
   - Toggle theme
   - Login/logout
   - Add to cart
   - Monitor renders

5. **Debug:**
   - Open DevTools (F12)
   - Check Console tab
   - Watch for context logs

## 💾 File Statistics

- **Total Contexts:** 3 (Theme, Auth, Cart)
- **Total Components:** 5 (LoginForm, UserProfile, ThemeSwitcher, CartManager, ContextMonitor)
- **CSS Files:** 6 (App + 5 components)
- **Documentation Files:** 5 (main + 4 guides)
- **Lines of Code:** ~2000+ (excluding styles)
- **Total Files:** 20+

## ✅ Quality Metrics

- ✓ **All contexts working independently**
- ✓ **All components properly consuming contexts**
- ✓ **All styles responsive**
- ✓ **Comprehensive documentation**
- ✓ **Performance optimized**
- ✓ **Console logging enabled**
- ✓ **Error handling implemented**
- ✓ **Loading states included**

---

**Last Updated:** February 21, 2026
**Status:** Complete ✅
