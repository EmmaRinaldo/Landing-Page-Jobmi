import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


function AccordionComponent() {
  return (
    <div className='accordion-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-y-5 sm:gap-x-5 mb-10'>
      <div className="bg-accordion col-span-12 sm:col-span-5 px-[1.5rem] sm:px-10 py-10 rounded-xl flex flex-col justify-between relative">
        <h1 className='text-white text-2xl sm:text-3xl font-bold'>Pour ça, nous allons t’accompagner de</h1>
        <p className='text-white text-xl font-normal opacity-80'>Un test personnalisé qui te montrera la liste des métiers qui te correspond pour tester ces métiers afin d’être sûr de ton</p>
        <img src={require("../images/a-to-z-image.png")} alt="image" className='w-20 absolute top-20 sm:top-[5.5rem] right-[2.2rem] sm:right-[11.2rem]' />
        <img src={require("../images/choix-image.png")} alt="image" className='w-14 absolute top-[12.5rem] sm:top-[21.5rem] right-[5rem] sm:right-[25rem]' />
      </div>
      <div className="accordion-content col-span-12 sm:col-span-7">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Fais le test en 5 questions
          </AccordionSummary>
          <AccordionDetails>
            Reponds simples pour découuvir
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Trouve un métier qui te correspond
          </AccordionSummary>
          <AccordionDetails>
            Trouve le metier banger!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Essaye avant de t’engager ! Participe à des stages de découverte pour expérimenter les métiers qui t’intéressent afin de confirmer ton orientation avant de te lancer.
          </AccordionSummary>
          <AccordionDetails>
            Essaye avant de t’engager
          </AccordionDetails>
        </Accordion>
        <button className='accordion-btn w-fit rounded-xl px-4 py-2 flex items-center gap-2 text-white mt-4 sm:mt-5 mx-auto'>Inscris-toi à la waitinglist <img src={require("../images/accordion-arrow.png")} alt="arrow-icon" className='w-7' /></button>
      </div>
    </div>
  )
}

export default AccordionComponent