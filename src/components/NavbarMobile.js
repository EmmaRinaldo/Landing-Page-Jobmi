// src/components/NavbarMobile.js
import React, { useEffect, useState } from 'react';
import logoWhite from '../images/logo_white.png';
import logoBlack from '../images/logo_black.png';
import instagramIcon from '../images/instagram-header.svg';
import facebookIcon from '../images/facebook-header.svg';
import linkedinIcon from '../images/linkedin-header.svg';

function NavbarMobile() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar navbar-sticky bg-[#F3F3F3] bg-opacity-90 backdrop-blur-lg shadow-none ${scrolled ? 'h-20' : 'h-24'} sm:${scrolled ? 'h-24' : 'h-28'} items-center sm:items-start transition-all duration-300`}>
            <div className="navbar-start flex flex-col sm:flex-row sm:h-full w-full">
                <a className="sm:navbar-item flex items-center justify-center sm:justify-start py-4 sm:py-6">
                    <img src={logoBlack} alt="Logo" className={`hidden sm:block ${scrolled ? 'w-1/6' : 'w-1/4'} drop-shadow-md transition-all duration-300`} />
                </a>
                <a className="navbar-item">
                        <img src={logoWhite} alt="Logo" className={`sm:hidden mb-6 drop-shadow-md ${scrolled ? 'w-1/3' : 'w-1/2'}`} />
                    </a>
            </div>
            <div className="navbar-end hidden sm:flex space-x-4 mr-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
}

export default NavbarMobile;
