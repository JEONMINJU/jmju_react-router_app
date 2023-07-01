import { createContext, useContext, useState } from "react";

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
		// document.documentElement.classList.add('onDarkMode');
		document.getElementsByClassName("mj__app__container")[0].classList.add('onDarkMode');
	} else {
		// document.documentElement.classList.remove('onDarkMode');
		document.getElementsByClassName("mj__app__container")[0].classList.remove('onDarkMode');
	}
}

export const useDarkMode = () => useContext(ThemeContext);