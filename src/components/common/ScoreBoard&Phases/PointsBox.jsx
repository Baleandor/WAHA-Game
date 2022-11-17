import React from "react";

export default function PointsBox({id, points}){
    return (
        <div className="points--box" id={id}>{points}</div>
    )
}