import React from "react"

export default function Terrain({ src, className, id }) {

    return (
        <div className={className} id={id}>
            <img src={src} ></img>
        </div>
    )
}