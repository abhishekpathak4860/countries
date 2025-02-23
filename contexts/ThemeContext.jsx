import { createContext ,useState} from "react";

export const themecontext=createContext();

export function ThemeProvider({children}){
    
   const [mode,setmode]=useState(JSON.parse(localStorage.getItem("isDarkMode")));
  return <themecontext.Provider value={[mode,setmode]}>{children}</themecontext.Provider>
}


