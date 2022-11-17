import React from "react";
import PlayerNamePlates from "./PlayerNamePlates";
import VictoryPoints from "./VictoryPoints";
import PhasesButton from "./PhasesButton";
import BattleRound from "./BattleRound";
import MissionPoints from "./MissionPoints";
import PlayerCP from "./PlayerCP";
import PlayerTurn from "./PlayerTurn";
import PrimaryPoints from "./PrimaryPoints";
import SecondaryPoints from "./SecondaryPoints";
import PointsBox from "./PointsBox";
import Stratagems from "./Stratagems";


export default function ScoreBoard() {

    let currentBattleRound = 1
    let reTturn = 1
    let blueTurn = 0

    let redPlayerMissionPts = 69
    let bluePlayerMissionPts = 420

    let redTotalPts = 200
    let blueTotalPts = 300

    let redCp = 2
    let blueCp = 5

    let redPrimary = 45
    let bluePrimary = 60

    let oneSecondary = 'Engage On All Fronts'
    let twoSecondary = 'Get Da Good Bits'

    let points = 20

    let currentTurn = 'red'

    return (

        <div className="scoreboard">
            <PlayerNamePlates id="red--player" />
            <PlayerNamePlates id="blue--player" />

            <MissionPoints redPoints={redPlayerMissionPts} bluePoints={bluePlayerMissionPts} />
            <PrimaryPoints redPoints={redPrimary} bluePoints={bluePrimary} />

            <SecondaryPoints id="red--secondary--1" name={oneSecondary} />
            <SecondaryPoints id="red--secondary--2" name={oneSecondary} />
            <SecondaryPoints id="red--secondary--3" name={oneSecondary} />
            <SecondaryPoints id="blue--secondary--1" name={twoSecondary} />
            <SecondaryPoints id="blue--secondary--2" name={twoSecondary} />
            <SecondaryPoints id="blue--secondary--3" name={twoSecondary} />
            <PointsBox id="secondary--points--red--1" points={points} />
            <PointsBox id="secondary--points--red--2" points={points} />
            <PointsBox id="secondary--points--red--3" points={points} />
            <PointsBox id="secondary--points--blue--1" points={points} />
            <PointsBox id="secondary--points--blue--2" points={points} />
            <PointsBox id="secondary--points--blue--3" points={points} />


            <Stratagems id="stratagem--red" />
            <Stratagems id="stratagem--blue" />

            <PhasesButton />

            <PlayerCP id="cp--red" cp={redCp} />
            <PlayerCP id="cp--blue" cp={blueCp} />

            <PlayerTurn id="turn--red" turn={reTturn} />
            <PlayerTurn id="turn--blue" turn={blueTurn} />

            <VictoryPoints id="vp--red" />
            <VictoryPoints id="vp--blue" />
            <PointsBox id="total--points--red" points={redTotalPts} />
            <PointsBox id="total--points--blue" points={blueTotalPts} />

            <BattleRound battleRound={currentBattleRound} />
        </div>
    )
}