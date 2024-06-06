// src/components/BottomCard.js
import React from 'react';

import cardBottomImage from '../images/cardBottomImage.png';
import cardBottomBottomImage from '../images/cardBottomBottom.png';
import cardBottomBottomVector from '../images/vector2.png';

function BottomCard() {
    return (
        <div className="flex flex-col sm:flex-row-reverse">
            <div className="flex flex-col h-[70vh] sm:h-[80vh] sm:w-1/2 overflow-hidden rounded-2xl m-5 bg-no-repeat bg-cover bg-center" style={{backgroundImage : 'url(' + cardBottomImage + ')'}}>
                <div className="flex h-full w-full justify-end p-10">
                </div>
                <div className="flex flex-col h-full z-10 p-5 box-border justify-end">
                    <p className="text-lg text-white text-start justify-between drop-shadow-md">Vivez avec nous l'histoire de Stephanie 27 ans, anciennement pharmacienne devenue créatrice de vêtements.</p>
                    <div className="flex py-5 w-2/3 gap-5 items-start">
                        <a href="" className="flex items-center justify-center backdrop-blur w-max p-3 gap-2 rounded-lg text-2xl font-bold text-white shadow-md">
                            <p className="text-sm font-normal">Voir l'article</p>
                            <img className="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEV0lEQVR4nO2duW7UQBzGJwWHxFGEd+BoOASCFtHwPEiE+w0gUCCBkCjD0ZCKCoVD8BDAA7BACaHmh0brhmB7vSTrvz/P92tSJPLMd+x47Ox6UzLGGGOMMcYYY4wxxhhjzCyAvcA94CtxTIC7eS4zJ2x2FqbhD4VV59szxL7yt/LNBSi7ALgA/RdglQHhAsRsAlerjVg4LsDIAHYB6y5AgTBn+F4BCg8/Ez1vExi+CzCe8F/MyLnx99HzN4t/5b+o/s4FKDX8NP17F6DU8DMuQMHhZ1yAgsPPuAAFh59xAQoOP+MCFBx+xgUoOPxBFgA4BlwDNoBPwC80mSzi/XVz3OHb1fF4taS+Ac4B7xgfq0MNvzpmLTs15y4T2A08An4zTiZDDb86bi07Mecugx8C3jNuJkM659ccu5btzrnrK3/s4WduDzX86vi1bGfOXQfOy/6YmQB3gD1DDb8ao5b/Pd48G762c35+i/R14ASwLxUIPYQfWYC23f7TUkOfM/z17YYfUoDqOr+JJ8BSKhh6DD+qAPkmT9Oyvz8VDD2HH1WAfIevjuupYAgIP6oAnxvGPJ4KhaDwowqw2TBmkcs/Pe32h1SAfgccMASH3/Kp5C+LGs8FGMCy3+FTybcXOWDxKwADCb/mU8nbvnvZZcCiC8AAlv1QSi4ApYdfcgFw+OUWAIdfbgFw+OUWAIdfbgFw+OUWgG7hv1zo9fZQGXsBcPjlFoAe7vBteai03sOdx1oAerq92/BQaZ2HO4+xAPS47Df8907n4c5jKwA9n/Pl/ZMXELzhQ90/eQHBu33U/ZMXEHyph7p/8gKmGtai3syBun/qAoALUeGPwT95AcDlqPDH4J+8AOBiVPhj8E9fwFTD4y3TX+vrbVzy/skLqADOA5fyz57H1fZPXkAwqPsnLyAY1P2TFxAM6v7JCwgGdf/kBQSDun/yAoJB3T95AcGg7p+8gGBQ909eQDCo+ycvIBjU/ZMXEAzq/skLCAZ1/+QFBIO6f/ICgkHdP3kBwaDun7yAYFD3T15AMKj7Jy8gGNT9kxcQDOr+yQsIBnX/5AUEg7p/8gKCQd0/eQHBoO6fvIBgUPdPXkAwqPsnLyAY1P2TFxAM6v7JCwgGdf/kBQSDun/yAoJB3T95AcGg7p+8gGBQ909eQDCo+ycvIBjU/ZMXEAzq/gE/GzQU+eXR8wAcbPDuR1LBXx///wAnGwrwKakAbDSIuBE9t6ED3Grw7lVSAbjaIOKbTwPNAAeA7w3erSQVgKM08wxYip7j0ACWgOctvh1OSgBvZ5TAG8K/X/lt4W8kNYCzwO8WUfl0cBM4VWIZgP2V9lstyz6Vh6eTIsDDFmGmG/eTKtW3brzpKNT8ywdgd1IGWAbe1Ygz7eQ91HIaA9VK8GDGnsBMyR7d7+vR9L0CnAFeV0LNv2zIbvjmATgCXMl3t4CPwCblsVlpzx6syF3nG2OMMcYYY4wxxhhjjBkbfwCGuykBss0ZzgAAAABJRU5ErkJggg=="></img>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-purple-900 h-[50vh] sm:h-[80vh] sm:w-1/2 m-5 px-10 py-20 box-border rounded-3xl items-end justify-end bg-cover bg-center bg-no-repeat" style={{backgroundImage : 'url(' + cardBottomBottomImage + ')'}}>
                <p className="text-white text-3xl sm:text-[4rem] leading-tight font-semibold text-start underline">Jetez un oeil à l'actualité</p>
                <img className="hidden sm:block w-[20rem] absolute left-10 translate-y-[15rem] drop-shadow-md" src={ cardBottomBottomVector } alt="Vector 2" />
            </div>
        </div>
    );
}

export default BottomCard;