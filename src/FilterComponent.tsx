import React from "react";

type PropsTypeFilterComponent = {
    currentMoney:Array<MoneyType>
    callback: ()=>void
}
type MoneyType={
    banknots: string,
    value: number,
    number: string
}

export function FilterComponent(props:PropsTypeFilterComponent){
    const filterHendlerProps =()=>{
        props.callback()
    }
    return(
        <div>
            <ul>
                {props.currentMoney.map((objMoney, index: number) => {
                    return (
                        <li key={index + 1}>
                            <span>{index + 1} banknota : {objMoney.banknots} value: {objMoney.value} number: {objMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={filterHendlerProps}>All Money</button>
            <button onClick={filterHendlerProps}>RUBLS</button>
            <button onClick={filterHendlerProps}>Dollars</button>

        </div>
    )
}