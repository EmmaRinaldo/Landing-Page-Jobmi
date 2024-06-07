// src/components/Newsletter.js
import React from 'react';

function Newsletter() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center bg-zinc-100 m-5 p-8 sm:py-[10rem] h-[30vh] gap-7 rounded-2xl">
                <p className="text-lg text-zinc-500 leading-5 sm:w-1/2">Ne manquez aucune de nos actualités exclusives : inscrivez-vous dès maintenant à notre newsletter !</p>
                <form action="" method="POST" className="w-full sm:w-1/2 flex flex-col gap-3">
                    <input class="input input-block input-lg input-ghost-secondary" placeholder="Email" />
                    <button type="submit" className="btn bg-[#6500FF] text-white">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;