import React from "react";
import {Button} from "./Button";

type PropsTypeNewComponent = {
    topCars: Array<topCarsType>
}
type topCarsType = {
    manufacturer: string,
    model: string
}

export function NewComponent(props: PropsTypeNewComponent) {
    let arr = props.topCars.map((objCar: topCarsType, index: number) => {
        return (
            <table>
                <tr key={index}>
                    <td> Auto № {index + 1}</td>
                    <td> {objCar.manufacturer}</td>
                    <td> model : {objCar.model}</td>
                </tr>
            </table>

        )
    })
    const buttonHand = (name: string, num: number) => {
        console.log(name, num)
    }
    return (
        <div>
            <div>{arr}</div>
            <hr/>
            <div>
                <Button name={3} callback={() => buttonHand("I am button №", 3)}/>
            </div>
            <hr/>
        </div>
    )
}