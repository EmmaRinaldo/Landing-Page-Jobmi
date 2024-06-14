// src/components/Card.js
import React from "react";

function Card() {
  return (
    <div className="card-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-y-5 sm:gap-x-5 mt-32">
      <div className="img-box col-span-12 sm:col-span-5 relative">
        <img src={require("../images/card-image.png")} alt="card-image" />
        <div className="btn-groups">
          <button className="purple-btn text-white text-sm px-7 py-2 rounded-lg uppercase font-medium w-fit relative">
            0000000
          </button>
        </div>
        <button className="w-fit rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white ms-auto me-5">
          Faire le test
          <img
            src={require("../images/accordion-arrow.png")}
            alt="arrow-icon"
            className="w-7"
          />
        </button>
      </div>
      <div className="col-span-12 sm:col-span-7">
        <div className="card-content rounded-xl h-full relative pb-4">
          <img
            src={require("../images/card-arrow.png")}
            alt="card-arrow"
            className="w-24 absolute top-8 sm:top-14"
          />
          <div className="card-details-content pt-[9rem] sm:pt-[11rem] px-[1.5rem] sm:px-[2rem] m-0">
            <h1 className="text-2xl font-bold w-full sm:w-96">
              Réponds à 5 questions simples pour découvrir.
            </h1>
            <p className="text-lg w-72 sm:w-96 mb-0 mt-28 sm:mt-32">
              Ce test rapide t’aidera à identifier les métiers par rapport à ce
              que tu faire et tes compétences.
            </p>
          </div>
          <img
            src={require("../images/matter-text-img.png")}
            alt="matter-img"
            className="w-40 absolute top-[12rem] sm:top-[11.5rem] left-[1.5rem] sm:left-[14.5rem]"
          />
          <img
            src={require("../images/kiffes-img.png")}
            alt="kiffes-img"
            className="absolute top-[21.3rem] sm:top-[24.3rem] left-[19.4rem] sm:left-[20.4rem] h-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
