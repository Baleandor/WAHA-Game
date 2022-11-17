import React from "react";


export default function SecondaryPoints({ name, id }) {
    return (
        <div className="secondary" id={id}>{name}</div>
    )
}