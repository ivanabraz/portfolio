import React from "react";
import { useContext } from "react";

// CONTEXT
import { ThemeContext } from "../../context/ThemeContext";

// IMAGES
import lightThemeIcon from "../../images/theme/light.svg";
import darkThemeIcon from "../../images/theme/dark.svg";


const ThemeToggle = (ThemeToggleProps) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
            <div className={`flex justify-center h-fit w-${ThemeToggleProps.toggleWidth} self-center ${ThemeToggleProps.toggleCustomClass}`}>
            {theme === 'dark' 
                ? (
                    <img onClick={() => setTheme( theme ==='dark' ? 'light' : 'dark')} className="h-10 xs:h-10 md:h-5" src={darkThemeIcon} alt="lightThemeIcon"/>
                    )
                : (
                    <img onClick={() => setTheme( theme ==='dark' ? 'light' : 'dark')} className="h-10 xs:h-10 md:h-5" src={lightThemeIcon} alt="darkThemeIcon"/>
                )
            }
        </div>  
    )

};

export default ThemeToggle;