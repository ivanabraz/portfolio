import React from "react";

//IMAGES
import ArrowTop from '../../images/arrows/arrow-top.svg';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth'
        })
    };

    return (
        <footer className="w-full h-20 text-md font-light text-zinc-400 flex justify-between
        p-5 sm:p-6 lg:p-10">
            <p>© 2022 Ivana Braz</p>
            <a className="hover:text-white border-b border-transparent 
            transition duration-[1000ms] hover:border-solid hover:border-b hover:border-zinc-600" 
            href="mailto:braz.ivana@gmail.com" rel="noopener noreferrer">
                Contact me
            </a>
            {/* <div onClick={scrollTop} className="hover:text-white transition duration-[1000ms]">
                <p className="inline">Scroll to top</p>  <img src={ArrowTop} className="h-5 w-auto inline" alt="arrow"/>
            </div> */}
        </footer>
    )
}

export default Footer;