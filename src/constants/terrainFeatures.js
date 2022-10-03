const TERRAIN_RULES = {
    Breachable: `INFANTRY, BEAST and SWARM models can move through walls, girders, chains and foliage.`,
    Obscuring: `Blocks visibility if at least 5” tall.
                Models on or within can see and be seen normally.
                AIRCRAFT and models with W characteristic of 18+ can be seen normally.`,
    "Dense Cover": `Subtract 1 from hit rolls made for ranged weapons if at least 3” tall.
                    Does not apply to models that are only shooting through their own terrain feature.
                    No penalty when shooting at AIRCRAFT and units with W characteristic of 18+.`,
    "Light Cover": `+1 to saving throws against ranged weapons.
                    Invulnerable saving throws unaffected.`,
    "Heavy Cover": `+1 to saving throws against melee weapons unless model has made a charge move this turn.
                    Invulnerable saving throws unaffected.`,
    "Difficult Ground": `Subtract 2" when making a Normal Move, Advance, Fall Back or charge move over this terrain feature
                      (unless the moving unit can FLY, or if the moving unit is TITANIC and the terrain feature is less than 3" in height).`,
    Scaleable: `Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
                INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.`,
    Defensible: `INFANTRY units can Hold Steady or Set to Defend (if no enemy within Engagement Range). 
                 Hold Steady: Overwatch attacks hit on 5+. 
                 Set to Defend: Cannot fire Overwatch but add 1 to hit rolls in next Fight phase.`,
    "Exposed Position": `Models do not receive benefits of cover while on top of this terrain feature.`,
    "Unstable Position": `Cannot be set up or end a move on top of this terrain feature.`,
    Inspiring: `+1 Ld if wholly within 6”.`,
    "Defence Line": `Can make a charge move against a unit within 1” of this terrain feature.
                     Can fight if within 2” of enemy.`
}

export const CONTAINER_FEATURES = {
    "Light Cover": `+1 to saving throws against ranged weapons.
                    Invulnerable saving throws unaffected.`,
    Scaleable: `Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
    INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.`,
    "Exposed Position": `Models do not receive benefits of cover while on top of this terrain feature.`
}

export const SMALL_BUILDING_FEATURES = {
    "Light Cover": `+1 to saving throws against ranged weapons.
    Invulnerable saving throws unaffected.`,
    Scaleable: `Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.`,
    Breachable: `INFANTRY, BEAST and SWARM models can move through walls, girders, chains and foliage.`,
    Defensible: `INFANTRY units can Hold Steady or Set to Defend (if no enemy within Engagement Range). 
    Hold Steady: Overwatch attacks hit on 5+. 
    Set to Defend: Cannot fire Overwatch but add 1 to hit rolls in next Fight phase.`
}

export const MEDIUM_BUILDING_FEATURES = {
    "Light Cover": `+1 to saving throws against ranged weapons.
    Invulnerable saving throws unaffected.`,
    Scaleable: `Only INFANTRY, BEAST, SWARM and FLY models can be set up or end a move on top of this terrain feature (excluding ground floor).
INFANTRY, BEAST and SWARM models can move through the floors, ceilings and gantries.`,
    Breachable: `INFANTRY, BEAST and SWARM models can move through walls, girders, chains and foliage.`,
    Defensible: `INFANTRY units can Hold Steady or Set to Defend (if no enemy within Engagement Range). 
    Hold Steady: Overwatch attacks hit on 5+. 
    Set to Defend: Cannot fire Overwatch but add 1 to hit rolls in next Fight phase.`
}