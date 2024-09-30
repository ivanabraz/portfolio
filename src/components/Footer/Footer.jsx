import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-14 pb-14 w-full h-20 text-md text-black dark:text-neutral-100 flex justify-between p-5 bg-white dark:bg-black">
            <p>© {currentYear} Ivana Braz</p>
            <a href="mailto:braz.ivana@gmail.com" rel="noopener noreferrer">
                Contact me
            </a>
        </footer>
    )
}

export default Footer;
