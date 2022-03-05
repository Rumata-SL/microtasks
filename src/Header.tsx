import React from "react";

type PropsTypeHeader = {
    title: string
}

export function Header(props: PropsTypeHeader) {
    return (
        <div>
            {props.title}
        </div>
    )
}