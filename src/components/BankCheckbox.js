import React from 'react';
import BankFilterData from '../BankFilterData.json';
import { ReactComponent as VTB } from '../img/VTB.svg';
import { ReactComponent as Gazprom } from '../img/Gazprom.svg';
import { ReactComponent as Delta } from '../img/Delta.svg';
import { ReactComponent as PSB } from '../img/PSB.svg';
import { ReactComponent as Raiffaizen } from '../img/Raiffaizen.svg';
import BankNames from '../BankNames.json';

const bankIcon = {
    "VTB": VTB,
    "Gazprom": Gazprom,
    "Delta": Delta,
    "PSB": PSB,
    "Raiffaizen": Raiffaizen
}

function BankFilter({data, onClick}) {
    const showBank = e => onClick(e.target.value);
    return (
        <div className="bank-filter">
            <h4>Банк</h4>
            <div className="bank-names">
                {data.filter((item, index) => data.indexOf(item) === index).map(bank => {
                    const test = BankFilterData[bank];
                    const Icon = bankIcon[test.icon];
                    return <label className="bank-single">
                        <input className="bank-name-checkbox" type="checkbox" value={BankFilterData[bank].name} onClick={showBank} />
                        <Icon />
                        <span className="bank-single-name">{BankNames[BankFilterData[bank].name]}</span>
                    </label>
                })}
            </div>
        </div>
    )
}

export default BankFilter