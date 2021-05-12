import React from 'react'
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
    const data = FeatureData[nameId];
    const Icon = iconFeature[data.icon];
    const elementColor = nameIdColors[data.theme];
    return (
        <div>
            <div className="feature-name" style={elementColor}>
                <Icon fill={elementColor.color} />
                <h3>{FeatureNames[nameId]}</h3>
            </div>
            <div className="feature-description" dangerouslySetInnerHTML={{__html: data.description}} />
            <button>Читать больше</button>
        </div>
    )
}

export default FeatureWithDescription

// cherez refi nahodim visotu <p> i zadajom ejo, ostaljnie <p> otrezajutsja https://ru.reactjs.org/docs/refs-and-the-dom.html
// esli vsego odin paragraf to knopku chitatj boljshe mozno ne otobrazhatj
// pochitatj pro svg

