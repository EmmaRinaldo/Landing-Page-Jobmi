import React from "react";

export default function Confiance() {
  return (
    <section className="confiance-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-36">
      <div className="col-span-12">
        <div className="title-part relative mb-12">
          <h1 className="text-3xl font-bold text-center">Tu ne nous fait pas confiance ?</h1>
          <img src={require("../images/bg-purpule.png")} alt="" className="absolute top-[3rem] sm:top-[0.4rem] left-[6rem] sm:left-[46.5rem] w-44" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <div className="confiance-left-box rounded-xl relative h-full px-4 pt-16 pb-8 sm:p-0">
          <img src={require("../images/Subtract.png")} alt="" className="ms-auto w-72 hidden sm:block" />
          <h1 className="text-3xl font-bold w-60 absolute bottom-8 left-8">Jetez un oeil à l’actualité</h1>
          <img src={require("../images/purple-circle-image.png")} alt="" className="w-[12rem] absolute top-[6rem] sm:top-[20.3rem] left-[0.5rem] sm:left-2" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <div className="confiance-right-box relative">
          <div className="img-box">
            <img src={require("../images/alexriviere 1.png")} alt="" className="w-[40rem]" />
          </div>
          <div className="confiance-right-box-content absolute bottom-7 left-7">
            <p className="text-white font-bold w-[15.6rem]">Decouvrez l’histoire de Stephanie 27 ans, anciennement pharmacienne devenue créatrice de vêtements.</p>
            <button className="w-fit rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white">
              Voir l’article
              <img
                src={require("../images/accordion-arrow.png")}
                alt="arrow-icon"
                className="w-7"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
