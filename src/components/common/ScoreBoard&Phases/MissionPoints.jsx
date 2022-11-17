import React from "react";

import PointsBox from "./PointsBox";

export default function MissionPoints({redPoints, bluePoints}) {
    return (
        <div>
            <PointsBox id="mission--points--red"  points={redPoints}/>
            <PointsBox id="mission--points--blue"  points={bluePoints}/>
            <div className="mission">Tear Down Their Icons</div>
        </div>

    )
}