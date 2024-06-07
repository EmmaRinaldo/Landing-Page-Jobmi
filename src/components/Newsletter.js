// src/components/Newsletter.js
import React, { useState } from 'react';

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
                <form onSubmit={handleSubmit}className="w-full sm:w-1/2 flex flex-col gap-3" id="newsletter-form">
                    <input type="email" class="input input-block input-lg input-ghost-secondary text-black" placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                    <button type="submit" className="btn bg-[#6500FF] text-white">Submit</button>
                </form>
                {message && <p id="message" className="text-sm text-zinc-500">{message}</p>}

            </div>
        </div>
    );
}

export default Newsletter;