import React from "react"

import { Terrain } from "./common"
import { containerProps } from "../constants/terrainFeatures"
import { mediumBuildingProps } from "../constants/terrainFeatures"
import { smallBuildingProps } from "../constants/terrainFeatures"

export default function TerrainCollection() {
    return (
        <div className="terrain--collection" >
            <Terrain {...containerProps} id="horizontal-1" />
            <Terrain {...containerProps} id="horizontal-2" />
            <Terrain {...containerProps} id="container-1" />
            <Terrain {...containerProps} id="container-2" />
            <Terrain {...containerProps} id="container-3" />
            <Terrain {...containerProps} id="container-4" />

            <Terrain {...smallBuildingProps} id="small-1" />
            <Terrain {...smallBuildingProps} id="small-2" />

            <Terrain {...mediumBuildingProps} id="medium-1" />
            <Terrain {...mediumBuildingProps} id="medium-2" />
            <Terrain {...mediumBuildingProps} id="medium-3" />
            <Terrain {...mediumBuildingProps} id="medium-4" />
        </div >
    )
}