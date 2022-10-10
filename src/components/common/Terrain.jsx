import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"




export default function Terrain({ src, className, id, dataBrief, dataDetailed }) {

    const [isClicked, setIsClicked] = useState(false)

    let refOne = useRef()

    useEffect(() => {
        let clickHandler = (e) => {
            if (!refOne.current.contains(e.target)) {
                setIsClicked(false)
            }


            // let realTarget = e.target.nextElementSibling
            // realTarget.style.display = 'inline'
            // realTarget.style.data == 'detailed--terrain--info' ? realTarget.style.display = 'inline' : realTarget.style.display = 'none'
        }

        document.addEventListener('click', clickHandler)

        return () => {
            document.removeEventListener('click', clickHandler)
        }
    })

    return (
        <div className={className} id={id} ref={refOne}>
            <img src={src} onClick={() => { setIsClicked(!isClicked) }}></img>
            <div className={`${isClicked ? 'detailed' : 'brief'}--terrain--info`} data={isClicked ? dataDetailed : dataBrief}></div>
        </div>
    )
}