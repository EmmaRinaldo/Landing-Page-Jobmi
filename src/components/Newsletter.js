// src/components/Newsletter.js
import React, { useState } from 'react';
import vector3 from '../images/vector3.png';

function Newsletter() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api/newsletter/subscribe', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);
        })
        .catch(error => {
            console.error('Erreur:', error);
            setMessage('Une erreur est survenue. Veuillez réessayer.');
        });
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center bg-zinc-100 m-5 p-8 sm:py-[10rem] h-[30vh] gap-7 rounded-2xl">
                <p className="text-lg text-zinc-500 leading-5 sm:w-1/2">Ne manquez aucune de nos actualités exclusives : inscrivez-vous dès maintenant à notre newsletter !</p>
                <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex flex-col gap-3" id="newsletter-form">
                    <input type="email"
                        className="input input-block input-lg input-ghost-secondary text-black"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
                {message && <p id="message" className="text-sm text-zinc-500">{message}</p>}
            </div>

            <div className="hidden sm:flex gap-5 m-5">
                <div className="flex items-center justify-center h-[30rem] w-1/2 bg-zinc-100 hover:scale-[1.01] transition-all rounded-2xl cursor-pointer">
                    <img src={ vector3 } alt="Vector 3" className="w-2/3" />
                </div>
                <div className="flex flex-row p-10 items-end justify-center h-[30rem] w-1/2 bg-[#04192F] hover:scale-[1.01] transition-all rounded-2xl cursor-pointer">
                    <div className="flex z-20">
                        <div className="absolute translate-y-[-25rem] rotate-[5deg] flex bg-secondary/80 w-1/3 h-20"></div>
                        <div className="absolute translate-y-[-15rem] rotate-[-5deg] flex bg-secondary/80 w-1/3 h-20"></div>
                        <div className="absolute translate-y-[-5rem] rotate-[10deg] flex bg-secondary/80 w-1/3 h-20"></div>
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                        <p className="text-white text-[5rem] font-bold">PATISSIER</p>
                        <p className="text-white text-[5rem] font-bold">PEINTRE</p>
                        <p className="text-white text-[5rem] font-bold">UX UI</p>
                        <p className="text-white text-[5rem] font-bold">DESIGN</p>
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

export default Newsletter;