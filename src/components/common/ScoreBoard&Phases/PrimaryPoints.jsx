import React from "react";

import PointsBox from "./PointsBox";

export default function PrimaryPoints({ redPoints, bluePoints }) {
    return (
        <div>
            <PointsBox id="primary--points--red" points={redPoints} />
            <PointsBox id="primary--points--blue" points={bluePoints} />
            <div className="primary">Primary Points</div>
        </div>
    )
}