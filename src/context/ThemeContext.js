import { createContext } from "react";

export const ThemeContext = createContext();

// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export default function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <ThemeContext.Provider value={{ isDark, setIsDark }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export const useDarkMode = () => useContext(ThemeContext);