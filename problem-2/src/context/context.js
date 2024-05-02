import { createContext,useState ,useContext  } from "react";

const themes = {
    light: {
      background: '#ffffff',
      text: '#000000',
    },
    dark: {
      background: '#333333',
      text: '#ffffff',
    },
  };
 const themesContext=createContext()
 export const usethemes=useContext(themesContext)

 export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light');
  
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <themesContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
        {children}
      </themesContext.Provider>
    );
  };