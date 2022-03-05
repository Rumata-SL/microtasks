import React from "react";
import {FilterType} from "./App";
import {Button} from "./Button";

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}
type PropsTypeFilterComponent = {
    currentMoney: Array<MoneyType>
    filterHandler: (name: FilterType) => void
}


export function FilterComponent(props: PropsTypeFilterComponent) {

    return (
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
            <Button name={"All"} callback={() => props.filterHandler("All")}/>
            <Button name={"RUBLS"} callback={() => props.filterHandler("RUBLS")}/>
            <Button name={"Dollars"} callback={() => props.filterHandler("Dollars")}/>
            {/*<button onClick={()=>filterHendlerProps("All")}>All Money</button>
            <button onClick={()=>filterHendlerProps("RUBLS")}>RUBLS</button>
            <button onClick={()=>filterHendlerProps("Dollars")}>Dollars</button>*/}

        </div>
    )
}