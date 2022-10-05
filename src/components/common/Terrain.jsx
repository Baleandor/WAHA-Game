import React from "react"
import { useState } from "react"




export default function Terrain({ src, className, id, dataBrief, dataDetailed }) {
    // terrainRules = TERRAIN_RULES
    const [isClicked, setIsClicked] = useState('false')


    function handleClick(event) {

        setIsClicked(previsClicked => !previsClicked)

        if (isClicked == false) {
            document.querySelector('.detailed--terrain--info').style.display = 'none'
        } else {
            document.querySelector('.detailed--terrain--info').style.display = 'inline'
        }
    }


    return (
        <div className={className} id={id} onClick={handleClick}>
            <div className="brief--terrain--info" data-brief={dataBrief}></div>
            <div className="detailed--terrain--info" data-detailed={dataDetailed} ></div>
            <img src={src}></img>
        </div>
    )
}