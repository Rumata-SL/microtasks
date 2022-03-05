import React from "react";

type PropsTypeButton = {
    name: string
    callback: () => void

}

export function Button(props: PropsTypeButton) {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>Button {props.name}</button>
        </div>
    )
}