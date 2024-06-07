// src/components/Hero.js
import React from 'react';
import background from '../images/background.png';
import backgroundPc from '../images/backgroundPc.png';

function Hero() {
    return (
        <div className="flex flex-col h-[110vh]">
            <div className="hidden sm:flex w-full bg-cover bg-center overflow-hidden h-full rounded-bl-[9rem] rounded-br-[10rem]" style={{ backgroundImage: `url(${backgroundPc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex flex-col justify-end p-20 gap-5">
                    <div className="flex flex-col items-start justify-start leading-10">
                        <p className="text-white font-semibold text-[5rem] mb-6 drop-shadow-lg">Votre metier de</p>
                        <p className="text-white font-crusivefont mb-12 text-[15rem] drop-shadow-lg">demain</p>
                    </div>
                    <p className="w-2/3 text-start text-white font-semibold drop-shadow-lg">Vous ne savez pas quel métier est fait pour vous ? Découvrez le en répondant à 5 questions.</p>
                    <a href="#" className="flex flex-row gap-4 items-center justify-center bg-white hover:bg-secondary hover:text-white transition-all py-3 px-5 w-max rounded-3xl">
                        <p className="text-xl font-semibold">Commencer le test</p>
                        <p className="flex items-center justify-center rounded-full bg-secondary w-10 aspect-square text-2xl font-bold text-white -rotate-45">&rarr;</p>
                    </a>
                </div>
            </div>
            <div className="flex sm:hidden bg-white p-0 h-full rounded-bl-[8rem] rounded-br-[8rem]">
                <img src={background} alt="Hero Image" className="h-full w-full object-cover m-0 rounded-bl-[8rem] rounded-br-[8rem]" />
            </div>
        </div>
    );
}

export default Hero;
