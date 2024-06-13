import React from "react";

function CardComponent() {
  return (
    <div className="card-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-3 mt-32">
      <div className="title-part col-span-12 flex flex-col sm:flex-row items-center sm:items-start gap-[1rem] sm:gap-[3.5rem] relative px-[0rem] sm:px-[2rem]">
        <h1 className="text-3xl font-bold w-56 flex flex-col items-end gap-2">
          Trouve le metier banger !{" "}
          <img
            src={require("../images/pour-la-vie-image.png")}
            alt=""
            className="w-36"
          />
        </h1>
        <p className="w-80">
          Nous te mettrons en avant les métiers qui te fit parfaitement, mais
          aussi les jobs en forte demande, afin de maximiser tes chances de
          trouver un emploi
        </p>
        <img
          src={require("../images/rapidement-image.png")}
          alt=""
          className="absolute top-[12.3rem] sm:top-14 left-[10rem] sm:left-[28rem] w-20"
        />
      </div>
      <div className="cart-content col-span-12 bg-white sm:bg-slate-50 rounded-xl p-[0rem] sm:p-[1.2rem] flex items-center gap-10 sm:gap-20 flex-col sm:flex-row">
        <img
          src={require("../images/card-image-1.png")}
          alt="car-image"
          className="w-[35rem] rounded-xl h-[30rem] sm:h-auto"
        />
        <div className="menus flex items-end justify-between w-full">
          <ul className="flex flex-col gap-2.5 p-0">
            <li className="font-bold text-sm text-indigo-600">PATISSIER</li>
            <li className="font-normal text-sm text-slate-400">COIFFEUR</li>
            <li className="font-normal text-sm text-slate-400">BARBER</li>
            <li className="font-normal text-sm text-slate-400">JARDINIER</li>
            <li className="font-normal text-sm text-slate-400">STYLISTE</li>
            <li className="font-normal text-sm text-slate-400">CUISINIER</li>
            <li className="font-normal text-sm text-slate-400">HORLOGER</li>
            <li className="font-normal text-sm text-slate-400">DESIGNER</li>
            <li className="font-normal text-sm text-slate-400">BOULANGER</li>
            <li className="font-normal text-sm text-slate-400">Architecte</li>
            <li className="font-normal text-sm text-slate-400">Médecin</li>
            <li className="font-normal text-sm text-slate-400">Ingénieur</li>
          </ul>
          <button className="w-fit rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white">
            Trouve ton job{" "}
            <img
              src={require("../images/accordion-arrow.png")}
              alt="arrow-icon"
              className="w-7"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
