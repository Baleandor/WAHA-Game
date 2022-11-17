import React from "react";
import Image from "./Image";

export default function ReserveBoard({ src, id, className }) {
    return (
        <Image src={src} id={id} className={className}/>
    )
}