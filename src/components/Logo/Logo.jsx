import React from "react";
import './Logo.css';


// IMAGES
import LogoGray from "../../images/logos/logo-gray.svg";
// import LogoHover from "../../images/logos/logo-hover.svg";


const Logo = () => {

    return (
            // <div className="h-20 text-center">
            //     <img className="h-24 w-auto absolute z-[2] opacity-0 transition ease-in-out duration-[1000ms] hover:opacity-100" src={LogoHover} alt="Ivana Braz logo"/>
            //     <img className="h-24 w-auto absolute z-[1]" src={LogoGray} alt="Ivana Braz logo"/>
            // </div>
            <div className="h-20 text-center">
                <img className="h-24" src={LogoGray} alt="Ivana Braz logo"/>
            </div>

    )
}

export default Logo;