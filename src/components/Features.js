import React from 'react'
// import OtherFeatures from './OtherFeatures';
// import star from '../img/star.png';

const featureObj = {
    'GOS_HELP_COVID': 'Помощь во время COVID-19',
    'MORTGAGED_PROPERTY': 'Ипотека залогового жилья',
    'VTB-PAYMENT': 'Платить удобно',
    'MATERNITY_CAPITAL': 'Материнский капитал',
    'VTB-ONLINE': 'Онлайн одобрение недвижимости',
    'PAYROLL_RATE': 'Ставка для зарплатного клиента'
    
}

function Features({features}) {
    console.log(features);
    return (
        <div className="offer-features">
            <div className="features">
                {features.length >= 1 && 
                features.map(f => <p>{featureObj[f]}</p>)
                // <p>{featureObj[features[0]]}</p>
                }
            </div>
            <div className="other-features">
                {features.length > 1 && <span>{'+' + (features.length - 1)}</span>}
            </div>
        </div>
    )
}

export default Features