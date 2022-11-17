import React from "react"

import ReserveBoard from "../components/common/ReserveBoard";

import ScoreBoard from "../components/common/ScoreBoard&Phases/ScoreBoard";

import TerrainCollection from "../components/TerrainCollection";
import { modelsData } from "../models/allModelsDatasheets";
import { Model } from "../components/common/index";


export default function InGame() {

    return (
        <main>
            <div className="sidebar" id="left--sidebar">

                <ReserveBoard src={'/images/RedReserveBoard.png'} className="reserves" id="red--reserves" />

                <ScoreBoard />

                <ReserveBoard src={'/images/BlueReserveBoard.png'} className="reserves" id="blue--reserves" />

            </div>

            <div className="playing--mat" >
                <TerrainCollection />
                {/* <div className="players">

                    <div className="red--player">
                        <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} modelData={mo}/>
                    </div>

                    <div className="blue--player">
                        <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                    </div>
                </div> */}

            </div>

            <div className="sidebar" name="right--sidebar">

            </div>
        </main>
    )
}