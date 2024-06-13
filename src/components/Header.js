import React from "react";

function Header() {
  return (
    <div className="header-part my-20 px-4">
      <div className="title-part block sm:flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-medium text-center">
          FAIT PARTIE DES 3 MILLIONS QUI ONT CHANGÉ LEURS VIES
        </h1>
        <p className="text-lg text-center font-semibold mt-10">
          Toi aussi trouves la raison de te réveiller le matin !
        </p>
        <div className="header-bg-img"></div>
        <div className="header-underline"></div>
      </div>
    </div>
  );
}

export default Header;
