import React from 'react';

function EssayePart() {
    return (
        <div className="card-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-36">
            <div className="title-part col-span-12 flex flex-col items-start gap-8 relative px-[0rem] sm:px-[3rem] border-b">
                <h1 className="text-3xl font-bold w-full sm:w-56 flex flex-col gap-2">
                    Essaye avant de t’engager !
                    <img
                        src={require("../images/essay-underline-img.png")}
                        alt=""
                        className="w-36"
                    />
                </h1>
                <p className="w-full sm:w-96 mb-4 text-lg">
                    Participe à des stages de découverte pour expérimenter les métiers qui t’intéressent afin de confirmer ton orientation avant de te lancer.
                </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mt-1.5">
                <div className="essay-box-content relative">
                    <div className="essay-img-box">
                        <img src={require("../images/essay-img-1.png")} alt="" />
                    </div>
                    <img src={require("../images/essay-icon.png")} alt="" className='absolute top-10 right-10 w-7' />
                    <div className="essay-content absolute bottom-4 left-0 px-3">
                        <h1 className='text-7xl text-white'>80%</h1>
                        <p className='text-white text-lg w-full sm:w-44 m-0 mt-4'>des personnes ayant changé de métier se disent plus satisfaites de leur travail après leur reconversion</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-3 mt-1.5">
                <div className="essay-box-content relative">
                    <div className="essay-img-box">
                        <img src={require("../images/essay-img-1.png")} alt="" />
                    </div>
                    <img src={require("../images/essay-icon.png")} alt="" className='absolute top-10 right-10 w-7' />
                    <div className="essay-content absolute bottom-4 left-0 px-3">
                        <h1 className='text-7xl text-white'>50%</h1>
                        <p className='text-white text-lg w-full sm:w-44 m-0 mt-4'>des reconvertis ont vu une augmentation de leur salaire après avoir changé de métier</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-3 mt-1.5">
                <div className="essay-box-content relative">
                    <div className="essay-img-box">
                        <img src={require("../images/essay-img-1.png")} alt="" />
                    </div>
                    <img src={require("../images/essay-icon.png")} alt="" className='absolute top-10 right-10 w-7' />
                    <div className="essay-content absolute bottom-4 left-0 px-3">
                        <h1 className='text-7xl text-white'>95%</h1>
                        <p className='text-white text-lg w-full sm:w-44 m-0 mt-4'>des reconvertis recommanderaient à d'autres de changer de métier pour suivre leur passion</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-3 mt-1.5">
                <div className="essay-box-content relative">
                    <div className="essay-img-box">
                        <img src={require("../images/essay-img-4.png")} alt="" />
                    </div>
                    <img src={require("../images/essay-icon.png")} alt="" className='absolute top-10 right-10 w-7' />
                    <div className="essay-content absolute bottom-4 left-0 px-3">
                        <h1 className='text-7xl text-white'>60%</h1>
                        <p className='text-white text-lg w-full sm:w-44 m-0 mt-4'>des reconvertis recommanderaient à d'autres de changer de métier pour suivre leur passion</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EssayePart;