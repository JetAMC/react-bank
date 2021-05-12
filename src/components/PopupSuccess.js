import React from 'react'
import img from '../img/check.png'

function PopupSuccess(props) {
    const className = props.oneOffer ? 'open' : 'closed';
    
    // classnames - biblioteka
    return (
        <div onClick={props.close} className={'popup__area ' + className}>
            <div className="popup">
                <div className="popup__icon">
                    <img alt="" src={img} />
                </div>
                <div className="popup__title">
                    <h2>Заявка на ипотеку по данной программе отправлена</h2>
                </div>
                <div className="popup__small-text">
                    <p>С вами свяжется специалист банка {props.oneOffer ? props.oneOffer.bankId : undefined}, обработка заявки занимает до 8 часов</p>
                </div>
                <button className="offer-button">Понятно, жду звонка</button>
            </div>
        </div>
    )
}

export default PopupSuccess