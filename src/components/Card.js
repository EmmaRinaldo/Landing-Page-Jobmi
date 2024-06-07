// src/components/Card.js
import React from 'react';

function Card({ title, description, image, link }) {
    return (
        <div className="flex flex-col h-[70vh] sm:h-[80vh] rounded-2xl m-2 bg-no-repeat bg-cover bg-center min-w-96 sm:w-1/3" style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(' + image + ')'}}>
            <div className="flex h-full w-full justify-end p-10">
                <div className="flex flex-col">
                    <div className="flex h-10 w-10 bg-white rounded-full"></div>
                    <div className="flex h-10 w-10 bg-white rounded-full -translate-y-3"></div>
                </div>
            </div>
            <div className="flex flex-col h-full z-10 p-5 box-border justify-end">
                <p className="text-3xl font-bold text-white text-start justify-between drop-shadow-md">{ title }</p>
                <div className="flex py-5 w-2/3 gap-5 items-center self-end">
                    <p className="text-white text-end drop-shadow-md">{ description }</p>
                    <a href={ link } className="flex items-center justify-center rounded-full bg-white w-20 hover:scale-105 transition-all aspect-square text-2xl font-bold text-secondary -rotate-45 shadow-md">&rarr;</a>
                </div>
            </div>
        </div>
    );
}

export default Card;