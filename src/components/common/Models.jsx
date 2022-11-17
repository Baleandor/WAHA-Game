import React from "react";

import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "react-spring";


export default function Model({ src, modelsData }) {

    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ down, offset: [mx, my] }) => {
        api.start({ x: mx, y: my, immediate: down })

    })

    // function displaySimpleData() {
    //     return (
    //         <span className="mouseover--data"> {`
    //         M:${modelsData.M}" 
    //         WS:${modelsData.WS}+ 
    //         BS:${modelsData.BS}+ 
    //         S:${modelsData.S}+ 
    //         T:${modelsData.T} 
    //         W:${modelsData.W}
    //         A:${modelsData.A}
    //         Ld:${modelsData.Ld} 
    //         Sv:${modelsData.Sv}+
    //         `}</span>
    //         // <div>{`${modelData}`}</div>
    //     )
    // }

    return (

        <animated.div className="model--div"
            style={{ x, y }}
            {...bind()}
        >

            <img src={src} ></img>

        </animated.div>

    )
}