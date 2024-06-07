// src/components/NavbarMobile.js
import React from 'react';
import logoWhite from '../images/logo_white.png';
import logoBlack from '../images/logo_black.png';

function NavbarMobile() {
    return (
        <div className="navbar navbar-sticky  backdrop-blur shadow-none h-max items-center  sm:items-start">
            <div className="navbar-start flex flex-col  sm:h-10">
            <a className="sm:navbar-item">
              <img src={ logoBlack } alt="Logo" className="hidden sm:block w-2/5 drop-shadow-md" />
            </a>
            <a className="navbar-item">
             <img src={ logoWhite } alt="Logo" className="sm:hidden w-3/4 drop-shadow-md" />
            </a>
            </div>
            <div className="navbar-end sm:m-10">
                <label htmlFor="drawer-top" className="btn btn-primary bg-white h-max w-[80px] rounded-full drop-shadow-md">
                    <div className="flex flex-col gap-1 m-3">
                        <div className="flex w-6 h-[2px] bg-black"></div>
                        <div className="flex w-6 h-[2px] bg-black"></div>
                        <div className="flex w-6 h-[2px] bg-black"></div>
                    </div>
                </label>
                <label className="overlay" htmlFor="drawer-top"></label>
            </div>
        </div>
    );
}
export default NavbarMobile;