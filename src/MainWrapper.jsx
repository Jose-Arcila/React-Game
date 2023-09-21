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
        inventory: {},
        prompts: {
            primaryPrompt: 'Your eyes feel strangely heavy as you pry them open. As you stand to your feet you look around, stranged, and find yourself surrounded by nothing but wilderness.',
            secondaryPrompt: 'A twisted tree laying low beneath the canopies is your only reference.'
        }, 
        MainCharacter,
        AvailableEnemies,
        availableSkills,
        Locations,
        fight: {
            isFighting: false,
            currentEnemy: {},
            currentTurn: 'mainCharacter',
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
            }
        },
        button: {
            activated: true,
            currentBar: 'search-button-bar',
            waitTime: 30
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
