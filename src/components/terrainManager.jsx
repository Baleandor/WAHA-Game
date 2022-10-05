import React from "react"

import { Terrain } from "./common"
import { CONTAINER_FEATURES } from "../constants/terrainFeatures"
import { MEDIUM_BUILDING_FEATURES } from "../constants/terrainFeatures"
import { SMALL_BUILDING_FEATURES } from "../constants/terrainFeatures"

export default function TerrainCollection() {

    const containerProps = {
        src: '/images/maps/containerboogaloo.png',
        className: 'container',
        dataBrief: Object.keys(CONTAINER_FEATURES).join(', '),
        dataDetailed: Object.keys(CONTAINER_FEATURES).map((k) => `${k}: ${CONTAINER_FEATURES[k]}`).join('\n')
    }

    const mediumBuildingProps = {
        src: '/images/maps/middlebuilding.png',
        className: 'medium--building',
        dataBrief: Object.keys(MEDIUM_BUILDING_FEATURES).join(', '),
        dataDetailed: Object.keys(MEDIUM_BUILDING_FEATURES).map((k) => `${k}: ${MEDIUM_BUILDING_FEATURES[k]} \n`)
    }

    const smallBuildingProps = {
        src: '/images/maps/smallbuildingthreefloors.png',
        className: 'small--building',
        dataBrief: Object.keys(SMALL_BUILDING_FEATURES).join(', '),
        dataDetailed: Object.keys(SMALL_BUILDING_FEATURES).map((k) => `${k}: ${SMALL_BUILDING_FEATURES[k]} \n`)
    }

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