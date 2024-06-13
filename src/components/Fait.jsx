// src/components/TestComponent.js
import React from "react";
import { FaApple } from "react-icons/fa6";

function Fait() {
  return (
    <div className="fait-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-24">
      <div className="col-span-12">
        <div className="title-part relative mb-12">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-3">Eux, ils l’ont <img src={require("../images/fait-icon.png")} alt="" className="w-16" /></h1>
        </div>
      </div>
      <div className="col-span-12">
        <ul className="brands-menus m-0 p-0 flex gap-4 justify-center">
          <li className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg">
            <FaApple className="text-3xl" />
            <h4 className="m-0 capitalize">apple</h4>
          </li>
          <li className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg">
            <FaApple className="text-3xl" />
            <h4 className="m-0 capitalize">apple</h4>
          </li>
          <li className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg hidden sm:block">
            <FaApple className="text-3xl" />
            <h4 className="m-0 capitalize">apple</h4>
          </li>
          <li className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg hidden sm:block">
            <FaApple className="text-3xl" />
            <h4 className="m-0 capitalize">apple</h4>
          </li>
          <li className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg hidden sm:block">
            <FaApple className="text-3xl" />
            <h4 className="m-0 capitalize">apple</h4>
          </li>
          <li className="w-fit flex items-center gap-2 px-4 py-2.5 rounded-lg hidden sm:block">
            <FaApple className="text-3xl" />
            <h4 className="m-0 capitalize">apple</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fait;
