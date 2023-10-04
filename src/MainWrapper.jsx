import React, { useState} from 'react'
import { AppContext } from './context/AppContext'
import { Navigator } from './components/Navigator'
import { DisplayScreen } from './components/DisplayScreen'
import { Locations } from './Data/Locations'
import { MainCharacter } from './Data/MainCharacter.js'
import { AvailableEnemies } from './Data/AvailableEnemies.js'
import { HistoryDisplayer } from './components/HistoryDisplayer'
import { availableSkills } from './Data/AvailableSkills'

export const MainWrapper = () => {

    const [currentAppState, setCurrentAppState] = useState({
        screenName: 'ScenicScreen',
        currentLocation: {
            ...Locations.DarkForest,
            subLocation: Locations.DarkForest.subLocations.TwistedTree,
            availableSubLocations: {
                TwistedTree: {
                    ...Locations.DarkForest.subLocations.TwistedTree,
                    isSelected: 'background-reversed'
                }
            }
        },
        inventory: {
            // test only
            hatchet: {
                id: 'A1A2A2',
                label: "Hatchet",
                name: 'hatchet',
                type: "cutting weapon, axe",
                class: "savage",
                description0: "A crude hatchet made with stick and stone. \n damage: 3",
                description1: "A crude hatchet made with stick and stone. It could serve as more than a primitive weapon. \n damage: 3",
                description2: "A crude hatchet made with stick and stone. \n damage: 3",
                description3: "A crude hatchet made with stick and stone. \n damage: 3",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 1,
                damage: 3,
                consumable: false,
                src: ''
            }
        },
        prompts: {
            primaryPrompt: 'Your eyes feel strangely heavy as you pry them open. As you stand to your feet you look around, stranged, and find yourself surrounded by nothing but wilderness.',
            secondaryPrompt: 'A twisted tree laying low beneath the canopies is your only reference.'
        }, 
        MainCharacter: {...MainCharacter},
        AvailableEnemies: {...AvailableEnemies},
        availableSkills,
        Locations,
        countThings: {
            bluntAttacks: 0,
            pierceAttacks: 0,
            slashingAttacks: 0,
            fistAttacks: 0
        },
        fight: {
            isFighting: false,
            currentEnemy: {},
            currentTurn: 'mainCharacter',
        },
        secondaryEvents: {
            woodChop: {
                isActive: false,
                quantity: 0,
                cooldown: 10
            },
            searching: {
                isActive: false,
                quantity: 0,
                cooldown: 3
            }
        },
        navigatorButtons: {
            firstButton: {
                name: 'Search',
                screenName: 'ScenicScreen',
                imgSrc: './search-icon.svg',
            },
            secondButton: {
                name: 'Inventory',
                screenName: 'Inventory',
                imgSrc: './inventory-icon.svg',
            },
            thirdButton: {
                name: '???',
                screenName: '???',
                imgSrc: './question-icon.svg',
            },
            fourthButton: {
                name: '????',
                screenName: '????',
                imgSrc: './question-icon.svg',
            },
            fifthButton: {
                name: '?????',
                screenName: '?????',
                imgSrc: './question-icon.svg',
            }
        },
        button: {
            search: {
                activated: true,
                name: 'search',
                currentBar: 'search-button-bar'
            },
            lumber: {
                activated: true,
                name: 'lumber',
                currentBar: 'search-button-bar'
            }
        },
        events: [
            'You wake up. An eerie sensation permeates the air.'
        ]
    });
    
    return (
        <AppContext.Provider value={{currentAppState, setCurrentAppState, Locations}}>
            <div className="mainWrapper">

                <Navigator />

                <DisplayScreen />

                <HistoryDisplayer />
                
            </div>
        </AppContext.Provider>
    )
}
