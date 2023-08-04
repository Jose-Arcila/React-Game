import React, { useState} from 'react'
import { AppContext } from './context/AppContext'
import { Navigator } from './components/Navigator'
import { DisplayScreen } from './components/DisplayScreen'
import { Locations } from './Data/Locations'
import { MainCharacter } from './Data/MainCharacter.js'
import { AvailableEnemies } from './Data/AvailableEnemies.js'
import { HistoryDisplayer } from './components/HistoryDisplayer'

export const MainWrapper = () => {

    const [currentAppState, setCurrentAppState] = useState({
        screenName: 'ScenicScreen',
        currentLocation: {
            name: Locations.DarkForest.name,
            subLocation: Locations.DarkForest.subLocations.TwistedTree
        },
        inventory: {},
        prompts: {
            primaryPrompt: 'Your eyes feel strangely heavy as you pry them open. As you stand to your feet you look around, stranged, and find yourself surrounded by nothing but wilderness.',
            secondaryPrompt: 'A twisted tree laying low beneath the canopies is your only reference.'
        },
        MainCharacter,
        AvailableEnemies,
        fight: {
            isFighting: false,
            currentEnemy: {},
            currentTurn: 'mainCharacter',
        },
        button: {
            activated: true
        },
        events: [
            'You wake up. An eerie sensation permeates the air.'
        ]
    });

    const {screenName} = currentAppState;
    
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
