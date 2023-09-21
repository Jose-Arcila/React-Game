import { AvailableItems } from "./AvailableItems"
import { AvailableEnemies } from "./AvailableEnemies"

export const Locations = {
    DarkForest: {
        name: 'DarkForest',
        label: 'A Dark Forest',
        subLocations: {
            TwistedTree: {
                name: "TwistedTree",
                label: 'Twisted Tree',
                primaryPrompt: "You are back at the starting point. The crooks and twists of that old faded tree seem nostalgic.",
                secondaryPrompt: 'A twisted tree laying low beneath the canopies is your only reference.',
                availableItems: {
                    general: AvailableItems.oneStar.general
                },
                availableEnemies: {
                    general: AvailableEnemies.oneStar.general
                }
            },
            RuinedFountain: {
                name: 'RuinedFountain',
                label: 'Ruined Fountain',
                primaryPrompt: 'You push your way through the lush forest, pushing aside every green on your way, when a glistening catches your eye. You follow it, filled with curiosity, as the green thins with every passing second. After pushing through you find yourself in a clearing, in the ruins of a desecrated building, and in its center, a singular fountain.',
                secondaryPrompt: 'The air is stagnant. You hear the cry of wolves in the distance. The lonely fountain in the ruins is your only beacon.',
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
