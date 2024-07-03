import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const togglePrivacyModal = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <div className="footer-part grid grid-cols-9 gap-4 mt-[100px] pl-10 pr-2 sm:pl-20 sm:pr-14 bg-black py-20">
      <div className="col-span-9 sm:col-span-2">
        <h5 className="text-white font-inter font-semibold">CONTACT</h5>
        <ul className="mb-0 p-0 mt-[1.5rem] sm:mt-[3rem] block">
          <li className="font-inter text-white text-sm sm:text-base">12 rue odesa 78900</li>
          <li className="font-inter text-white text-sm sm:text-base">maïa.agencypro@gmail.com</li>
          <li className="font-inter text-white text-sm sm:text-base">Tel. 01 12 34 57 60</li>
        </ul>
      </div>
      <div className="col-span-9 sm:col-span-2">
        <h5 className="text-white font-inter font-semibold">SOCIAL MEDIA</h5>
        <ul className="mb-0 p-0 my-4 sm:mt-10 flex items-center gap-4 social-menus">
          <a
            href="https://www.instagram.com/jobmifr?igsh=MXQyczl6cHlka2s2bw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-white">
              <FaInstagram className="text-2xl" />
            </li>
          </a>
          <a
            href="https://www.tiktok.com/@jobmifr?_t=8n1bHZwV2fY&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-white">
              <FaTiktok className="text-2xl" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/company/jobmipro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-white">
              <FaLinkedinIn className="text-2xl" />
            </li>
          </a>
        </ul>
      </div>
      <div className="col-span-9 sm:col-span-2">
        <button onClick={toggleModal} className="text-white text-xl font-inter font-semibold cursor-pointer">
          <p>MENTIONS LEGALES</p>
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded-lg overflow-y-auto w-full max-w-5xl max-h-[75vh] p-6 relative">
              <button onClick={toggleModal} className="absolute top-4 right-4">
                <img src="../images/cancel_Icon.svg" alt="X" className="w-10 h-10" />
              </button>
              <h4 className="font-bold mb-4">MENTIONS LÉGALES</h4>
              <div className="space-y-4 text-sm">
                <h5 className="font-bold">Informations Générales</h5>
                <p>Ce site est édité par Maïa Agency Pro, situé à 12 rue Odesa, 78900.</p>
                <p>Responsable de la publication : maïa.agencypro</p>
                <p>Contact : maïa.agencypro@gmail.com</p>
                <p>Téléphone : 01 12 34 57 60</p>

                <h5 className="font-bold">Hébergement</h5>
                <p>Le site est hébergé par Hostinger.</p>

                <h5 className="font-bold">Propriété Intellectuelle</h5>
                <p>Tous les contenus sont la propriété exclusive de Maïa Agency Pro. Toute reproduction sans autorisation est interdite.</p>

                <h5 className="font-bold">Données Personnelles</h5>
                <p>Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, contactez maïa.agencypro@gmail.com.</p>

                <h5 className="font-bold">Cookies</h5>
                <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez les désactiver dans les paramètres de votre navigateur.</p>

                <h5 className="font-bold">Limitation de Responsabilité</h5>
                <p>Maïa Agency Pro décline toute responsabilité en cas d'erreurs, de problèmes techniques ou d'interprétation des informations publiées.</p>

                <h5 className="font-bold">Liens Hypertextes</h5>
                <p>Les liens vers d'autres sites sont fournis à titre informatif. Maïa Agency Pro n'est pas responsable de leur contenu.</p>

                <h5 className="font-bold">Modification des Mentions Légales</h5>
                <p>Maïa Agency Pro se réserve le droit de modifier ces mentions légales à tout moment.</p>

                <h5 className="font-bold">Droit Applicable</h5>
                <p>Ces mentions légales sont régies par la loi française. Les tribunaux français sont compétents en cas de litige.</p>

                <h5 class="font-bold">Projet Scolaire</h5>
                <p>Ce site a été réalisé dans le cadre d'un projet scolaire et ne doit pas être considéré comme un site officiel.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-9 sm:col-span-3">
        <h5 className="text-white font-inter font-semibold">REJOINDRE</h5>
        <a target="_blank" rel="noreferrer" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="bg-white text-black flex items-center gap-3 rounded-xl px-4 py-2 font-medium font-inter no-underline mt-3 w-fit">
          Inscris-toi à la waitinglist
          <img
            src={require("../images/arrow-icon.png")}
            alt="arrow-icon"
            className="w-5 h-5 sm:w-7 sm:h-7"
          />
        </a>
        <p className="font-inter text-white mt-4 text-xs">
          En soumettant votre e-mail, vous acceptez que Jobmi puisse vous
          envoyer des messages électroniques promotionnels contenant des offres,
          des mises à jour et d'autres messages marketing. Vous comprenez que
          Jobmi peut utiliser vos informations conformément à sa&nbsp;
          <button onClick={togglePrivacyModal} className="font-bold underline underline-white cursor-pointer">
            politique de confidentialité
          </button>
          .
        </p>
        {isPrivacyOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded-lg overflow-y-auto w-full max-w-5xl max-h-[75vh] p-6 relative">
              <button onClick={togglePrivacyModal} className="absolute top-4 right-4">
                <img src="../images/cancel_Icon.svg" alt="X" className="w-10 h-10" />
              </button>
              <h4 className="font-bold mb-4">POLITIQUE DE CONFIDENTIALITÉ</h4>
              <div className="space-y-4 text-sm">
                <h5 className="font-bold">Collecte des Informations</h5>
                <p>Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous créez un compte, participez à une enquête, ou nous contactez pour toute question.</p>
                <h5 className="font-bold">Utilisation des Informations</h5>
                <p>Les informations collectées sont utilisées pour fournir, personnaliser et améliorer nos services, répondre à vos demandes, et envoyer des communications.</p>
                <h5 className="font-bold">Partage des Informations</h5>
                <p>Nous ne partageons vos informations qu'avec votre consentement ou pour répondre à des exigences légales, prévenir la fraude ou sécuriser nos services.</p>
                <h5 className="font-bold">Sécurité des Informations</h5>
                <p>Nous mettons en œuvre des mesures de sécurité pour protéger vos informations contre l'accès non autorisé, l'altération, la divulgation ou la destruction.</p>
                <h5 className="font-bold">Vos Droits</h5>
                <p>Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, contactez maïa.agencypro@gmail.com.</p>
                <h5 className="font-bold">Modifications</h5>
                <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.</p>
                <h5 className="font-bold">Contact</h5>
                <p>Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à maïa.agencypro@gmail.com.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;