import { AvailableItems } from "./AvailableItems"
import { AvailableEnemies } from "./AvailableEnemies"

export const Locations = {
    DarkForest: {
        name: 'DarkForest',
        subLocations: {
            TwistedTree: {
                availableItems: {
                    general: AvailableItems.oneStar.general
                },
                availableEnemies: {
                    general: AvailableEnemies.oneStar.general
                }
            },
            RuinedFountain: {
                availableItems: {
                    general: {
                        ...AvailableItems.oneStar.general, 
                        ...AvailableItems.oneStar.decayedFountain
                    }
                }
            },

        }
    }

}
