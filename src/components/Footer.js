// src/components/Footer.js
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-part grid grid-cols-12 gap-4 mt-36 px-6 sm:px-16 bg-black py-20">
      <div className="col-span-12 sm:col-span-3">
        <h5 className="text-white font-semibold">CONTACT</h5>
        <ul className="mb-0 p-0 mt-[1.5rem] sm:mt-[3rem] hidden sm:block">
          <li className="text-white">12 rue odesa 78900</li>
          <li className="text-white">maïa.agencypro@gmail.com</li>
          <li className="text-white">Tel. 01 12 34 57 60</li>
        </ul>
      </div>
      <div className="col-span-12 sm:col-span-3">
        <h5 className="text-white font-semibold">CAREERS</h5>
        <ul className="mb-0 p-0 mt-[1.5rem] sm:mt-[3rem] hidden sm:block">
          <li className="text-white">12 rue odesa 78900</li>
        </ul>
      </div>
      <div className="col-span-12 sm:col-span-3">
        <h5 className="text-white font-semibold">SOCIAL MEDIA</h5>
        <ul className="mb-0 p-0 mt-10 flex items-center gap-4 social-menus">
          <li className="text-white">
            <FaInstagram className="text-2xl" />
          </li>
          <li className="text-white">
            <FaFacebookF className="text-2xl" />
          </li>
          <li className="text-white">
            <FaLinkedinIn className="text-2xl" />
          </li>
        </ul>
      </div>
      <div className="col-span-12 sm:col-span-3">
        <h5 className="text-white font-semibold">REJOINDRE</h5>
        <div className="input-field relative mt-10 flex items-center border-b-2">
          <input
            type="text"
            placeholder="ADRESSE E-MAIL"
            className="w-full text-base text-white border-b-2 bg-transparent focus-within:outline-none border-none"
          />
          <button className="text-white">SOUMETTRE</button>
        </div>
        <p className="text-white mt-4">
          En soumettant votre e-mail, vous acceptez que Jobmi puisse vous
          envoyer des messages électroniques promotionnels contenant des offres,
          des mises à jour et d'autres messages marketing. Vous comprenez que
          Jobmi peut utiliser vos informations conformément à sa&nbsp;
          <span className="font-bold underline underline-white">
            politique de confidentialité
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
