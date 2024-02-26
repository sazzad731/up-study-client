import { createContext, useState } from "react";

export const ToggleTheme = createContext();

const ThemeContext = ({children}) => {
  const [ theme, setTheme ] = useState("light");
  const info = {theme, setTheme}
  return (
    <ToggleTheme.Provider value={info}>
      {children}
    </ToggleTheme.Provider>
  );
};

export default ThemeContext;