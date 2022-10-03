import React from "react"

import { Terrain } from "./common"
import { CONTAINER_FEATURES } from "../constants/terrainFeatures"
import { SMALL_BUILDING_FEATURES } from "../constants/terrainFeatures"
import { MEDIUM_BUILDING_FEATURES } from "../constants/terrainFeatures"


export default function TerrainCollection() {


    const containerProps = {
        src: '/images/maps/containerboogaloo.png',
        className: 'container',
        dataBrief: 'Light Cover, Scaleable, Exposed Position',
        dataDetailed: `Light Cover: +1 to saving throws against ranged weapons. Invulnerable saving throws unaffected.
        Scaleable: Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.
        Exposed Position: Models do not receive benefits of cover while on top of this terrain feature.`
    }

    const containerFeatures = CONTAINER_FEATURES
    function displayBriefContainerInfo(containerFeatures) {
        return (
            <span className="brief--terrain--info" data-tip="Light Cover, Scaleable, Exposed Position"></span>
        )
    }

    function displayDetailedContainerInfo() {
        return (
            <span className="detailed--terrain--info">
                Light Cover: +1 to saving throws against ranged weapons. Invulnerable saving throws unaffected.
                Scaleable: Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
                INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.
                Exposed Position: Models do not receive benefits of cover while on top of this terrain feature.
            </span>
        )
    }


    const mediumBuildingProps = {
        src: '/images/maps/middlebuilding.png',
        className: 'medium--building',
        dataBrief: `Light Cover, Scaleable, Breachable, Defensible`,
        dataDetailed: `
        Light Cover": +1 to saving throws against ranged weapons. Invulnerable saving throws unaffected.
        Scaleable: Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
        INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.
        Breachable: INFANTRY, BEAST and SWARM models can move through walls, girders, chains and foliage.
        Defensible: INFANTRY units can Hold Steady or Set to Defend (if no enemy within Engagement Range). 
        Hold Steady: Overwatch attacks hit on 5+. 
        Set to Defend: Cannot fire Overwatch but add 1 to hit rolls in next Fight phase.
        `
    }


    const mediumBuildingFeatures = MEDIUM_BUILDING_FEATURES

    function displayBriefMediumBuildingInfo(mediumBuildingFeatures) {
        const info = Object.keys(mediumBuildingFeatures)

        return (
            <span className="brief--terrain--info"> {
                info.forEach((f) => `${f} `)
            } </span>
        )
    }

    function displayDetailedMediumBuildingInfo(mediumBuildingFeatures) {
        const info = Object.entries(mediumBuildingFeatures)

        return (
            <span className="detailed--terrain--info"> {
                info.forEach((f) => `${f[k]} : ${f.k}\n`)
            } </span>
        )
    }


    const smallBuildingProps = {
        src: '/images/maps/smallbuildingthreefloors.png',
        className: 'small--building',
        dataBrief: "Light Cover, Scaleable, Breachable, Defensible",
        dataDetailed: `
        Light Cover: +1 to saving throws against ranged weapons. Invulnerable saving throws unaffected.
        Scaleable: Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
        INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.
        Breachable: INFANTRY, BEAST and SWARM models can move through walls, girders, chains and foliage.
        Defensible: INFANTRY units can Hold Steady or Set to Defend (if no enemy within Engagement Range). 
        Hold Steady: Overwatch attacks hit on 5+. 
        Set to Defend: Cannot fire Overwatch but add 1 to hit rolls in next Fight phase.
        `
    }

    const smallBuildingFeatures = SMALL_BUILDING_FEATURES

    function displayBriefSmallBuildingInfo(smallBuildingFeatures) {
        const info = Object.keys(smallBuildingFeatures)

        return (
            <span className="brief--terrain--info"> {
                info.forEach((f) => `${f} `)
            } </span>
        )
    }

    function displayDetailedSmallBuildingInfo(smallBuildingFeatures) {
        const info = Object.entries(smallBuildingFeatures)

        return (
            <span className="detailed--terrain--info"> {
                info.forEach((f) => `${f[k]} : ${f.k}\n`)
            } </span>
        )
    }

    return (
        <div className="terrain--collection">
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

        </div>
    )
}