// src/components/Hero.js
import React from "react";
import backgroundPc from "../images/banner-img.svg";
import trait from "../images/soulignage-job.svg";

function Hero() {
  return (
    <div className="p-0 sm:px-6 hero-part sm:mx-6">
      <div
        className="flex w-full bg-cover bg-center bg-no-repeat rounded-t-none rounded-3xl h-screen items-center justify-center"
        style={{
          backgroundImage:
            "url(" +
            backgroundPc +
            ")",
        }}
      >
        <div className="flex flex-col items-start justify-start mt-24 px-4 sm:px-10 gap-6 sm:gap-10 w-full">
          <div className="flex flex-col items-start leading-tight gap-3 sm:gap-5">
            <div className="relative">
              <p className="text-white font-semibold text-3xl sm:text-4xl md:text-6xl drop-shadow-lg m-0 text-left">
                Marre de ton job ?
              </p>
              <img
                src={trait}
                alt="trait"
                className="absolute -bottom-3 right-4 w-16 sm:w-20 md:w-24 sm:-bottom-7"
              />
            </div>

            <p className="text-white font-medium sm:text-lg drop-shadow-lg w-full text-left px-0">
            Découvres ton prochain métier de rêve en <br/>t’inscrivant dès maintenant
            </p>

            <input
              type="text"
              placeholder="Adresse Email"
              className="px-7 py-3 rounded-xl w-62 sm:w-72 bg-white"
            />
            <button className="bg-white text-black flex items-center gap-3 rounded-xl px-4 py-2 font-medium">
              Inscris-toi à la waitinglist
              <img
                src={require("../images/arrow-icon.png")}
                alt="arrow-icon"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
            </button>
          </div>
          
        </div>
       
      </div>

      {/* <div
        className="flex sm:hidden bg-white p-0 h-screen bg-cover bg-center rounded-bottom-lg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(" +
            background +
            ")",
        }}
      >
        <div className="flex flex-col justify-end p-5 gap-5">
          <div className="flex flex-col items-start justify-start leading-[5rem]">
            <p className="text-white font-semibold text-[5rem] drop-shadow-lg text-start">
              Votre metier de
            </p>
            <p className="text-white font-semibold text-[5rem] drop-shadow-lg text-start">
              Demain
            </p>
          </div>
          <p className="w-2/3 text-start text-white font-semibold drop-shadow-lg">
            Vous ne savez pas quel métier est fait pour vous ? Découvrez le en
            répondant à 5 questions.
          </p>
          <a
            href="#"
            className="flex flex-row gap-4 items-center justify-center bg-white hover:bg-secondary hover:text-white transition-all py-2 px-5 w-max rounded-2xl"
          >
            <p className="text-md font-semibold">Commencer le test</p>
            <p className="flex items-center justify-center rounded-full bg-secondary w-8 aspect-square text-2xl font-bold text-white -rotate-45">
              &rarr;
            </p>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
