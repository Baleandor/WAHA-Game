import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

import BriefTerrainInfo from "./BriefTerrainInfo"
import DetailedTerrainInfo from "./DetailedTerrainInfo"


export default function Terrain({ src, className, id, dataDetailed, dataBrief }) {

    //HANDLING TERRAIN CLICK
    const [isClicked, setIsClicked] = useState(false)
    let terrainRef = useRef(null)

    useEffect(() => {
        document.addEventListener('click', clickHandler)

        return () => { document.removeEventListener('click', clickHandler) }
    }, [])

    const clickHandler = (e) => {
        if (terrainRef.current.contains(e.target)) {
            console.log('inside')
            setIsClicked(prevClicked => !prevClicked)

        } else {
            console.log('outside')
            setIsClicked(false)

        }
    }


    //HANDLING TERRAIN MOUSEOVER
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        document.addEventListener('mouseover', hoverHandler)

        return () => { document.removeEventListener('mouseover', hoverHandler) }
    }, [])

    const hoverHandler = (e) => {
        if (terrainRef.current.contains(e.target)) {
            setIsHovered(true)
        } else {
            setIsHovered(false)
        }
    }


    return (
        <div className={className} id={id}>
            <img src={src} ref={terrainRef} ></img>
            {isHovered && <BriefTerrainInfo dataBrief={dataBrief} />}
            {isClicked && <DetailedTerrainInfo dataDetailed={dataDetailed} />}
        </div>
    )
}