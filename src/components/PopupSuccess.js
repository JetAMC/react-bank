import React from 'react'
import img from '../img/check.png'

function PopupSuccess(props) {
    console.log(props);
    return (
        <div className="popup">
            <div className="popup__icon">
                <img alt="" src={img} />
            </div>
            <div className="popup__title">
                <h2>Заявка на ипотеку по данной программе отправлена</h2>
            </div>
            <div className="popup__small-text">
                <p>С вами свяжется специалист банка {}, обработка заявки занимает до 8 часов</p>
            </div>
            <button>Понятно, жду звонка</button>
        </div>
    )
}

export default PopupSuccess