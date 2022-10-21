import React from "react"

import TerrainCollection from "../components/TerrainCollection";
import { modelsData } from "../models/allModelsDatasheets";
import { Model } from "../components/common/index";


export default function InGame() {

    return (
        <main>
            <div></div>

            <div className="playing--mat" >
                <TerrainCollection />
                <div className="players">

                    <div className="red--player">
                        <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                    </div>

                    <div className="blue--player">
                        <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                    </div>
                </div>

            </div>

            <div className="sidebar">

            </div>
        </main>
    )
}