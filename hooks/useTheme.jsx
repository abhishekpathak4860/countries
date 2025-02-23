import { useContext } from "react";
import { themecontext } from "../contexts/ThemeContext";

export function useTheme(){
    const [mode,setmode]=useContext(themecontext);
    return [mode,setmode];
}