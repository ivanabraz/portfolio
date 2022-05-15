import React from "react";
import { Link } from 'react-router-dom'
import HappyFace from "../../images/logos/happy-face.svg";
import Marquee from "react-fast-marquee";

const NavBarMarquee = () => {
    return (
            <div className="border-b border-zinc-900 mb-5">
                <Link to="/curriculum-vitae">
                    <Marquee gradient={false} pauseOnHover={true}>
                        <p className="bg-g h-10 flex items-center justify-center text-sm font-light text-zinc-400 px-4 sm:px-6 lg:px-8">
                            My portfolio is in the works, it will be available soon  <img className="w-auto h-3 self-center" src={HappyFace} alt="Happy face icon"/>
                        </p>
                    </Marquee>
                </Link>
            </div>
    )
}

export default NavBarMarquee;