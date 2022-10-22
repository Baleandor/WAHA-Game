import React from "react"
import { useState } from "react"

import Image from "../Image"
import BriefTerrainInfo from "./BriefTerrainInfo"
import DetailedTerrainInfo from "./DetailedTerrainInfo"

export default function Terrain({ src, className, id, dataDetailed, dataBrief }) {

    const [isClicked, setIsClicked] = useState(false)

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className={className} id={id}>
            <Image src={src}
                onClick={() => setIsClicked(prevClick => !prevClick)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} />
            {isHovered && <BriefTerrainInfo dataBrief={dataBrief} />}
            {isClicked && <DetailedTerrainInfo dataDetailed={dataDetailed} />}
        </div>
    )
}