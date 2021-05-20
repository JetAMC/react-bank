import React, { useState, useRef, useEffect } from 'react'
import { ReactComponent as Percent } from '../img/percent.svg';
import { ReactComponent as Stroke } from '../img/stroke.svg';
import { ReactComponent as House } from '../img/house.svg';
import FeatureData from '../FeatureData.json'
import FeatureNames from '../FeatureNames.json'

const iconFeature = {
    "percent": Percent,
    "stroke": Stroke,
    "house": House
}

const nameIdColors = {
    "orange": {color: "#FFF", background: "#F97613"},
    "green": {color: "#FFF", background: "#52B640"},
    "blue": {color: "#FFF", background: "#0074D9"}
}

function FeatureWithDescription({nameId}) {
    const description = useRef()

    const data = FeatureData[nameId];
    const Icon = iconFeature[data.icon];
    const elementColor = nameIdColors[data.theme];

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const paragraph = description.current.querySelectorAll('p');
        setQuantity(paragraph.length);
        
    }, []);

    return (
        <div>
            <div className="feature-name" style={elementColor}>
                <Icon fill={elementColor.color} />
                <h3>{FeatureNames[nameId]}</h3>
            </div>
            <div ref={description} className="feature-description" dangerouslySetInnerHTML={{__html: data.description}} />
            {quantity > 1 && <button>Читать больше</button>}
        </div>
    )
}

export default FeatureWithDescription

// zavodim state kotorij pri nazhatii na knopku budet pokazivatj paragrafi esli ih boljse 1
// delaem daljse filtr



// pochitatj pro svg
