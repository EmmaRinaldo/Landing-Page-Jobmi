import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoStar } from "react-icons/io5";

function Testimonial() {
    const options = {
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 1800,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    return (
        <div className="testimonial-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-24 rounded-xl">
            <div className="col-span-12">
                <div className="title-part relative mb-7 sm:mb-12">
                    <h1 className="text-3xl font-bold flex items-center justify-center gap-3">Ils parlent de nous</h1>
                    <img src={require("../images/bg-purpule.png")} alt="" className="w-32 absolute top-2 left-[3rem] sm:left-[35rem]" />
                </div>
            </div>
            <div className="col-span-12">
                <OwlCarousel className='owl-theme' {...options}>
                    <div className='testimonial-box py-8 px-4 rounded-xl'>
                        <div className="testimonial-header flex items-center gap-3">
                            <div className="user-img w-10 h-10 rounded-full bg-black"></div>
                            <h1 className='text-lg text-black font-bold m-0'>MARIE, 20 ANS</h1>
                        </div>
                        <p className='text-base font-medium w-52 mt-16'>Jobmi m’a vraiment aidé à surmonter ma peur de l’echec !</p>
                        <ul className="rating-part p-0 flex gap-3 mb-0 mt-36">
                            <li><IoStar className='active-icon' /></li>
                            <li><IoStar className='active-icon' /></li>
                            <li><IoStar className='active-icon' /></li>
                            <li><IoStar className='star-icon' /></li>
                            <li><IoStar className='star-icon' /></li>
                        </ul>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonial
