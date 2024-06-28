import React from 'react';
import aAz from '../images/soulignage-a-z.svg';
import choix from '../images/soulignage-choix.svg';

function AccordionComponent() {
  return (
    <div className='accordion-part px-4 sm:px-8 grid grid-cols-12 gap-y-5 sm:gap-x-5 my-10'>
      <div className="bg-accordion col-span-12 sm:col-span-5 px-4 sm:px-8 py-8 rounded-xl flex flex-col justify-between items-start mt-10">
        <div className="">
          <h2 className='text-white text-2xl sm:text-3xl font-bold font-sans'>
            Pour ça, nous allons<br />
            t’accompagner de&nbsp;&nbsp;
            <span className="font-september font-normal text-[3.5rem] sm:text-[5.5rem]" style={{
              backgroundImage: `url(${aAz})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 80%',
            }}>A à Z.</span>
          </h2>
        </div>
        <br />
        <div className="relative">
          <p className='text-white text-lg sm:text-xl font-normal font-sans opacity-90'>
            Un test personnalisé qui te montrera la<br />
            liste des métiers qui te correspond<br />
            pour tester ces métiers afin d’être sûr<br />
            de ton&nbsp;&nbsp;
            <span className="font-september text-[3.5rem] sm:text-[4.5rem] relative" style={{
              backgroundImage: `url(${choix})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 80%',
            }}>choix.</span>
          </p>
        </div>
      </div>

      <div className="accordion-content col-span-12 sm:col-span-7 flex flex-col gap-4 font-sans mt-6 sm:mt-0">
        <a href="#test-section" className="bg-[#F8F8F8] rounded-xl px-4 py-2 text-black font-semibold flex justify-between items-center no-underline">
          Fais le test en 5 questions <img src={require("../images/accordion-down-icon.png")} alt="arrow icon" className="w-6 h-6" />
        </a>
        <a href="#metier-section" className="bg-[#F8F8F8] rounded-xl px-4 py-2 text-black font-semibold flex justify-between items-center no-underline">
          Trouve un métier qui te correspond <img src={require("../images/accordion-down-icon.png")} alt="arrow icon" className="w-6 h-6" />
        </a>
        <a href="#essaye-section" className="bg-[#F8F8F8] rounded-xl px-4 py-2 text-black font-semibold flex justify-between items-center no-underline">
          Essaye avant de t’engager <img src={require("../images/accordion-down-icon.png")} alt="arrow icon" className="w-6 h-6" />
        </a>
        <a target="_blank" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="no-underline">
          <button className='accordion-btn justify-between w-fit rounded-xl px-4 py-2 flex items-center gap-2 text-white mt-4 sm:mt-5 font-semibold'>
            Inscris-toi à la waitinglist <img src={require("../images/accordion-arrow.png")} alt="arrow-icon" className='w-7' />
          </button>
        </a>
      </div>
    </div>
  );
}

export default AccordionComponent;