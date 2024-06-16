import React from "react";
import bgPurple from "../images/bg-surligne-purple.png";
import bgUnderline from "../images/bg-underline-image.png"

function Header() {
  return (
    <div className="header-part my-20 px-4">
      <div className="title-part block sm:flex flex-col gap-4 items-center">
        <div className="relative text-center">
          <h1 className="text-4xl font-medium">
            FAIT PARTIE DES 3 MILLIONS QUI ONT{" "} 
            <span className="relative inline-block">
              <span className="relative z-10">CHANGÉ LEURS VIES</span>
              <span
                className="absolute inset-0 z-0 bg-cover"
                style={{
                  backgroundImage: `url(${bgPurple})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              ></span>
            </span>
          </h1>
          <span
            className="absolute -bottom-5 right-0 w-20 h-20 bg-no-repeat md:w-15 sm:w-10 md:h-15 sm:h-10"
            style={{
              backgroundImage: `url(${bgUnderline})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          ></span>
        </div>
        
        <p className="text-lg text-center font-semibold mt-10">
          Toi aussi trouves la raison de te réveiller le matin !
        </p>
        
      </div>
    </div>
  );
}

export default Header;
