import './App.css';
import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CategoriesPage } from './pages/categories';
import { JokePage } from './pages/joke';
import { HomePage } from './pages/home';

export const ThemeContext = React.createContext();

function App() {
  let something = 'Martin';

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const themeContextValue = useMemo(() => ({
    isDarkModeEnabled,
    toggleDarkMode: () => setIsDarkModeEnabled(!isDarkModeEnabled)
  }), [isDarkModeEnabled]);

  return <BrowserRouter>
    <ThemeContext.Provider value={themeContextValue}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<JokePage />} />
      </Routes>
    </ThemeContext.Provider >
  </BrowserRouter>;
}

export default App;
