import React from "react"

export default function Terrain({ src, className, id, dataBrief, dataDetailed }) {

    return (
        <div className={className} id={id}>
            <div className="brief--terrain--info" data-brief={dataBrief}></div>
            <div className="detailed--terrain--info" data-detailed={dataDetailed}></div>
            <img src={src}></img>
        </div>
    )
}