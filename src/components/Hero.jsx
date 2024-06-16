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
              <p className="text-white font-jost font-semibold text-3xl sm:text-4xl md:text-6xl drop-shadow-lg m-0 text-left">
                Marre de ton job ?
              </p>
              <img
                src={trait}
                alt="trait"
                className="absolute -bottom-3 right-4 w-16 sm:w-20 md:w-24 sm:-bottom-7"
              />
            </div>

            <p className="text-white font-medium font-inter sm:text-lg drop-shadow-lg w-full text-left px-0">
            Découvres ton prochain métier de rêve en <br/>t’inscrivant dès maintenant
            </p>

            <input
              type="text"
              placeholder="Adresse Email"
              className="px-7 py-3 rounded-xl w-62 sm:w-72 bg-white font-inter"
            />
            <a target="_blank" href="https://626063d8.sibforms.com/serve/MUIFAEtkyLp2CKWZ3dK7tZAaV913c-SP0e_IP8fVFhikgJbXeSQSKrIBS_d-L0WUIziK7BVpRA-4qmg1RW6kU-7j7rKYnwCGuIOrgcqaEtKr7d060ZPGT22jUjuO2vZhW1-fOtMV78j2rBU-04_F8pj7pPLi_oHLjV-8Gns1ljpjWJRXuuVT2LVH3B1OBRwulcezAhR5VOqWQDnn" className="no-underline">
              <button className="bg-white text-black flex items-center gap-3 rounded-xl px-4 py-2 font-medium font-inter">
                Inscris-toi à la waitinglist
                <img
                  src={require("../images/arrow-icon.png")}
                  alt="arrow-icon"
                  className="w-5 h-5 sm:w-7 sm:h-7"
                />
              </button>
            </a>
            
          </div>
          
        </div>
       
      </div>

  
    </div>
  );
}

export default Hero;
