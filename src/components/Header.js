// src/components/Header.js
import React from 'react';
import vector1 from '../images/vector1.png';

function Header() {
    return (
        <div className="flex flex-col gap-10 px-5 py-20 sm:py-[10rem]">
            <img src={ vector1 } alt="Vector 1" className="w-[10rem] absolute left-1/2 mt-20" />
            <h1 className="text-5xl sm:text-[5rem] sm:w-2/3 font-bold text-start font-Montserrat">DEVENEZ L'UN 3 MILLIONS</h1>
            <h1 className="text-5xl sm:text-[5rem] sm:self-end sm:w-2/3 font-bold text-end font-Montserrat">DE RECRUTÉS</h1>

            <div className="flex gap-5 items-center justify-end w-full">
                <span className="dot dot-secondary"></span>
                <p className="text-start font-semibold leading-5">N'ATTENDEZ <br /> PLUS</p>
            </div>
        </div>
    );
}

export default Header;