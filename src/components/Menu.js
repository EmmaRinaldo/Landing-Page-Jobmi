// src/components/Menu.js
import React from 'react';
import insta from '../images/insta.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';

function Menu() {
    return (  
        <ul className="flex flex-row bottom-10 w-max justify-center space-x-5">
            <li>
                <a href="#" className="text-white hover:text-zinc-300 dark:hover:text-white dark:text-gray-400">
                    <img src={insta} alt="Instagram" className="w-5 h-5" />
                </a>
            </li>
            <li>
                <a href="#" className="text-white hover:text-zinc-300 dark:hover:text-white dark:text-gray-400">
                    <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
            </li>
            <li>
                <a href="#" className="text-white hover:text-zinc-300 dark:hover:text-white dark:text-gray-400">
                    <img src={facebook} alt="Facebook" className="w-5 h-5" />
                </a>
            </li>
        </ul>
         );
}

export default Menu;
