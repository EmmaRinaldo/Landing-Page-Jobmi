import React from 'react'
import aAz from '../images/soulignage-a-z.svg'
import choix from '../images/soulignage-choix.svg'

function AccordionComponent() {
  return (
    <div className='accordion-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-y-5 sm:gap-x-5 my-10'>

      <div className="bg-accordion col-span-12 sm:col-span-5 px-[1.5rem] sm:px-10 py-10 rounded-xl flex flex-col justify-between relative items-start">
        <div className="relative">
          <h2 className='text-white text-2xl sm:text-3xl font-bold font-sans'>Pour ça, nous allons<br></br> t’accompagner de&nbsp;&nbsp;<span className="font-september font-normal text-[3.5rem] sm:text-[5.5rem]">A à Z.</span><img
              className="absolute bottom-1 right-0 w-16 sm:w-20 md:w-24 sm:bottom-1 sm:right-0"
              src={aAz}
              alt="Ligne soulignant 'A à Z'"
            ></img></h2>
          
        </div>
        <br />
        <div className="relative">
          <p className='text-white text-lg sm:text-xl font-normal font-sans opacity-90'>Un test personnalisé qui te montrera la<br></br> liste des métiers qui te correspond<br></br> pour tester ces métiers afin d’être sûr<br></br>de ton&nbsp;&nbsp;<span className="font-september text-[3.5rem] sm:text-[4.5rem] relative">choix.</span><img
                className="absolute bottom-1 left-14 w-12 sm:w-15 md:w-18 sm:bottom-2 sm:left-19"
                src={choix}
                alt="Ligne soulignant 'choix'"
              ></img></p>
          
        </div>
      </div>

      <div className="accordion-content col-span-12 sm:col-span-7 flex flex-col gap-4 font-sans">
        <a href="#test-section" className="bg-[#F8F8F8] rounded-xl px-4 py-2 text-black font-semibold flex justify-between items-center no-underline">
          Fais le test en 5 questions <img src={require("../images/accordion-down-icon.png")} alt="arrow icon" className="w-6 h-6" />
        </a>
        <a href="#metier-section" className="bg-[#F8F8F8] rounded-xl px-4 py-2 text-black font-semibold flex justify-between items-center no-underline">
          Trouve un métier qui te correspond <img src={require("../images/accordion-down-icon.png")} alt="arrow icon" className="w-6 h-6" />
        </a>
        <a href="#essaye-section" className="bg-[#F8F8F8] rounded-xl px-4 py-2 text-black font-semibold flex justify-between items-center no-underline">
          Essaye avant de t’engager <img src={require("../images/accordion-down-icon.png")} alt="arrow icon" className="w-6 h-6" />
        </a>
        <a target="_blank" href="https://626063d8.sibforms.com/serve/MUIFAEtkyLp2CKWZ3dK7tZAaV913c-SP0e_IP8fVFhikgJbXeSQSKrIBS_d-L0WUIziK7BVpRA-4qmg1RW6kU-7j7rKYnwCGuIOrgcqaEtKr7d060ZPGT22jUjuO2vZhW1-fOtMV78j2rBU-04_F8pj7pPLi_oHLjV-8Gns1ljpjWJRXuuVT2LVH3B1OBRwulcezAhR5VOqWQDnn" className="no-underline">
          <button className='accordion-btn justify-between w-fit rounded-xl px-4 py-2 flex items-center gap-2 text-white mt-4 sm:mt-5 font-semibold'>Inscris-toi à la waitinglist <img src={require("../images/accordion-arrow.png")} alt="arrow-icon" className='w-7' /></button>
        </a>
      </div>
    </div>
  )
}

export default AccordionComponent