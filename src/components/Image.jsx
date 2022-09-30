import React from "react";

export default function Image({ src, ...rest }) {

    return (

        <img src={src} {...rest} />

    )
}