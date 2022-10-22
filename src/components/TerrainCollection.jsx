import React from "react"

import { Terrain } from "./common"
import { containerProps } from "../constants/terrainFeatures"
import { mediumBuildingProps } from "../constants/terrainFeatures"
import { smallBuildingProps } from "../constants/terrainFeatures"
import ObjectiveMarker from "./common/ObjectiveMarker"

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

            <ObjectiveMarker id="objective--marker-1" />
            <ObjectiveMarker id="objective--marker-2" />
            <ObjectiveMarker id="objective--marker-3" />
            <ObjectiveMarker id="objective--marker-4" />
            <ObjectiveMarker id="objective--marker-5" />
        </div >
    )
}