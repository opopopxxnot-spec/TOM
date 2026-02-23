import { useContext } from 'react';
import { ThemeContext } from '../contexts';
import '../styles/ThemeSwitcher.css';

function ThemeSwitcher() {
  const { theme, toggleTheme, fontSize, updateFontSize } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <h3>Theme Settings</h3>
      
      <div className="setting">
        <label>Current Theme:</label>
        <button onClick={toggleTheme} className={`theme-btn ${theme}`}>
          {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="setting">
        <label>Font Size:</label>
        <div className="font-size-options">
          {['small', 'medium', 'large'].map(size => (
            <button
              key={size}
              onClick={() => updateFontSize(size)}
              className={`font-btn ${fontSize === size ? 'active' : ''}`}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="preview" style={{ fontSize: `${fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px'}` }}>
        Preview Text
      </div>
    </div>
  );
}

export default ThemeSwitcher;
