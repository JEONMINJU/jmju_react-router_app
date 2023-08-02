import { createContext, useContext, useState } from "react";
import '../App.css';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

	const toggleDarkMode = () => {
		setIsDark((prev) => !prev);
		updateDarkMode(!isDark);
	};
  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function updateDarkMode(isDark) {
	if(isDark) {
		console.log("dark-mode");
		document.getElementsByTagName("html")[0].classList.add('onDarkMode');
	} else {
		document.getElementsByTagName("html")[0].classList.remove('onDarkMode');
	}
}

export const useDarkMode = () => useContext(ThemeContext);