import React from "react";
import Image from "./Image";

export default function ObjectiveMarker({ id }) {
    return (
        <Image src={'/images/maps/ObjectiveMarker.png'} className='objective--marker' id={id} />
    )
}