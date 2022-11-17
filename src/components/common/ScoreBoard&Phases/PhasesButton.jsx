import React from "react";
import { phases } from "../../../constants/phases";

export default function PhasesButton() {

    const phase = phases

    function nextPhase() {
        phase.push(phase.shift())

        document.querySelector('.phase--button').innerHTML = phase[0]
    }
    return (
        <button onClick={nextPhase} className="phase--button">Command</button>
    )
}