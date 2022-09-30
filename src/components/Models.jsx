import React from "react";

import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "react-spring";


export default function Model({ src, modelData }) {

    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ down, offset: [mx, my] }) => {
        api.start({ x: mx, y: my, immediate: down })
    })

    function displaySimpleData() {
        return (
            <span className="mouseover--data"> {`
            M:${modelData.M}" 
            WS:${modelData.WS}+ 
            BS:${modelData.BS}+ 
            S:${modelData.S}+ 
            T:${modelData.T} 
            W:${modelData.W}
            A:${modelData.A}
            Ld:${modelData.Ld} 
            Sv:${modelData.Sv}+
            `}</span>
            // <div>{`${modelData}`}</div>
        )
    }

    return (

        <animated.div className="model--div"
            style={{ x, y }}
            {...bind()}
        >

            <img src={src} ></img>

        </animated.div>

    )
}