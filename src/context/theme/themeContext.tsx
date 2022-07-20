import { createContext, useState } from "react";
import {ThemeContextState, MyContextProp} from "../../interface/theme"

const contextDefaulValue: ThemeContextState = {
    theme:"light",
    handleTheme: () => {}
}
export const ThemeContext = createContext<ThemeContextState>(
    contextDefaulValue
)
const ThemeProvider = ({children}:MyContextProp) => {
    const [theme, setTheme] = useState<string>(contextDefaulValue.theme);
    const handleTheme = (newTheme : string) => {
        if (newTheme === "light") setTheme("light");
        else setTheme("dark");
    };
    return <ThemeContext.Provider value={{
        theme,
        handleTheme,
    }}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeProvider