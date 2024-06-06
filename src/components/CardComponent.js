// src/components/CardComponent.js
import React from 'react';
import Card from './Card';

import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';

function CardComponent({ title, description, image, link }) {
    return (
        <div className="flex flex-col sm:flex-row">
            <Card title='Faites le test en repondant a 5 questions' description='Afin de completer vorte profil' image={ card1 } link='Hello link' />
            <Card title='Trouvez un metier qui vous correspond' description='Premise une selection faite pour vous' image={ card2 } link='Hello link' />
            <Card title='Essayez avant de vous engager' description='Et si ca vous plait. lancez-vous!' image={ card3 } link='Hello link' />
        </div>
    );
}

export default CardComponent;