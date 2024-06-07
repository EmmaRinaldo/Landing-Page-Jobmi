// src/components/TestComponent.js
import React from 'react';

import Testimonials from './Testimonials';
import vector3 from '../images/vector3.png';

function TestComponent() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col my-20 bg-zinc-200 px-3 py-10 m-2 sm:mx-5 rounded-2xl">
                <p className="text-[2rem] sm:text-[3rem] font-bold">Ils nous font confiance</p>
                <div className="flex flex-row sm:flex-row overflow-scroll gap-2 rounded-lg my-5 sm:mx-5">
                    <Testimonials />
                    <Testimonials />
                    <Testimonials />
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-5 m-5">
                <div className="flex items-center justify-center h-[30rem] w-full sm:w-1/2 bg-zinc-100 hover:scale-[1.01] transition-all rounded-2xl cursor-pointer">
                    <img src={vector3} alt="Vector 3" className="w-2/3" />
                </div>
                <div className="flex flex-col sm:flex-row p-10 items-end justify-center h-[30rem] w-full sm:w-1/2 bg-[#04192F] hover:scale-[1.01] transition-all rounded-2xl cursor-pointer">
                    <div className="flex z-20">
                        <div className="absolute translate-y-[2rem] translate-x-[-20rem] sm:translate-y-[-25rem] sm:translate-x-[0rem] rotate-[5deg] flex bg-secondary/80 w-2/3 sm:w-1/3 h-20 transition-all"></div>
                        <div className="absolute translate-y-[10rem] translate-x-[-20rem] sm:translate-y-[-15rem] sm:translate-x-[0rem] rotate-[-5deg] flex bg-secondary/80 w-2/3 sm:w-1/3 h-20 transition-all"></div>
                        <div className="absolute translate-y-[18rem] translate-x-[-20rem] sm:translate-y-[-5rem] sm:translate-x-[0rem] rotate-[10deg] flex bg-secondary/80 w-2/3 sm:w-1/3 h-20 transition-all"></div>
                    </div>
                    <div className="flex flex-col items-start leading-tight w-full">
                        <p className="text-white w-full text-start text-[4rem] sm:text-[5rem] font-bold">PATISSIER</p>
                        <p className="text-white w-full text-start text-[4rem] sm:text-[5rem] font-bold">PEINTRE</p>
                        <p className="text-white w-full text-start text-[4rem] sm:text-[5rem] font-bold">UX UI</p>
                        <p className="text-white w-full text-start text-[4rem] sm:text-[5rem] font-bold">DESIGN</p>
                    </div>
                    <div className="flex gap-3 z-50">
                        <div className="flex flex-col items-center justify-start text-start">
                            <p className="text-white text-md font-semibold text-start w-full">N'HÉSITEZ PLUS !</p>
                            <p className="text-white text-md text-start w-full">Faites le test</p>
                        </div>
                        <div className="flex bg-white text-black w-[3rem] aspect-square rounded-full items-center justify-center font-bold">&rarr;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestComponent;