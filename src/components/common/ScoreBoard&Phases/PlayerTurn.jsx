import React from "react";

export default function PlayerTurn({ id, turn }) {
    return (
        <div className="player--turn" id={id}>Turn {turn}</div>
    )
}