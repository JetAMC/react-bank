import React from 'react'

const featureObj = {
    'VTB-ONLINE': 'Онлайн одобрение недвижимости',
    'MATERNITY_CAPITAL': 'Материнский капитал',
    'VTB-PAYMENT': 'Платить удобно',
    'PAYROLL_RATE': 'Ставка для зарплатного клиента',
    'MORTGAGED_PROPERTY': 'Ипотека залогового жилья'
}

function Features({offer}) {
    console.log(offer.features);
    return (
        <div>{featureObj[offer.features]}</div>
    )
}

export default Features