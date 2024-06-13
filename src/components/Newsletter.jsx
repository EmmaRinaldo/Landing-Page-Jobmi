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
        <div className="news-letter-part mx-[1rem] sm:mx-[2rem] px-10 sm:px-16 py-10 sm:py-16 grid grid-cols-12 mt-24 rounded-xl">
            <div className="col-span-12 sm:col-span-4">
                <div className="new-letter-info flex flex-col gap-7 sm:gap-10">
                    <h1 className='text-3xl text-white'>Encore un p’tit doute ?</h1>
                    <p className='text-lg text-white w-full text-center sm:w-64'>Inscris-toi à notre newsletter pour ne rater aucune de nos actualités et de nos opportunités !</p>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="news-letter-img mt-[1rem] sm:mt-[3rem]">
                    <img src={require("../images/new-letter-image.png")} alt="" className='w-36 sm:w-80' />
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="input-field relative mt-[6rem] sm:mt-[8rem]">
                    <input
                        type="text"
                        placeholder="Adresse mail"
                        className="px-4 py-3 rounded-xl w-full text-xl"
                    />
                    <button className='absolute top-3 right-5'><img src={require("../images/new-letter-arrow-icon.png")} alt="" /></button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;