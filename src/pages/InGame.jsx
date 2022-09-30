import React from "react"


import { modelsData } from "../models/allModelsDatasheets";
import { Terrain, Model, Image } from "../components/index"


export default function InGame() {


    return (
        <main>
            <div></div>

            <div className="playing--mat">
                <div className="terrain">

                    <Terrain src={"/images/maps/containerboogaloo.png"} className="container" id="horizontal1" />
                    <Terrain src={"/images/maps/containerboogaloo.png"} className="container" id="horizontal2" />
                    <Terrain src={"/images/maps/containerboogaloo.png"} className="container" id="container1" />
                    <Terrain src={"/images/maps/containerboogaloo.png"} className="container" id="container2" />
                    <Terrain src={"/images/maps/containerboogaloo.png"} className="container" id="container3" />
                    <Terrain src={"/images/maps/containerboogaloo.png"} className="container" id="container4" />

                    <Terrain src={"/images/maps/smallbuildingthreefloors.png"} className={"small--building"} id="small1" />
                    <Terrain src={"/images/maps/smallbuildingthreefloors.png"} className={"small--building"} id="small2" />

                    <Terrain src={"/images/maps/middlebuilding.png"} className={"medium--building"} id="medium1" />
                    <Terrain src={"/images/maps/middlebuilding.png"} className={"medium--building"} id="medium2" />
                    <Terrain src={"/images/maps/middlebuilding.png"} className={"medium--building"} id="medium3" />
                    <Terrain src={"/images/maps/middlebuilding.png"} className={"medium--building"} id="medium4" />

                    <div className="players">

                        <div className="red--player">
                            <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                        </div>

                        <div className="blue--player">
                            <Model src={modelsData.orks.HQ["Ghazghul Thrakka"].image} />
                        </div>
                    </div>

                </div>
            </div>

            <div></div>
        </main>
    )
}