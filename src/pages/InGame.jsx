import React from "react"
import { useState } from "react";

import TerrainCollection from "../components/terrainManager";
import { modelsData } from "../models/allModelsDatasheets";
import { Model } from "../components/common/index";



export default function InGame() {

    const [isClicked, setIsClicked] = useState('false')


    function handleClick(event) {

        clickTarget = event.target

        setIsClicked(previsClicked => !previsClicked)

        if (isClicked == false) {
            clickTarget.style.display = 'none'
        } else {
            clickTarget.style.display = 'inline'
        }
    }

    return (
        <main>
            <div></div>

            <div className="playing--mat">
                <TerrainCollection />

                {/* <div className="players">

                    <div className="red--player">
                        <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                    </div>

                    <div className="blue--player">
                        <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                    </div>
                </div> */}
            </div>

            <div>

            </div>
        </main>
    )
}