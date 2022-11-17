import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

import Image from "../Image"
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
            setIsClicked(prevClicked => !prevClicked)

        } else {
            setIsClicked(false)
        }
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className={className} id={id} ref={terrainRef}>
            <Image src={src}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} />
            {isHovered && <BriefTerrainInfo dataBrief={dataBrief} />}
            {isClicked && <DetailedTerrainInfo dataDetailed={dataDetailed} />}
        </div>
    )
}