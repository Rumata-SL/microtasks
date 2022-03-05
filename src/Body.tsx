import React from "react";

type PropsTypeBody = {
    title: string
}

export function Body(props: PropsTypeBody) {
    return (
        <div>
            {props.title}
        </div>
    )
}