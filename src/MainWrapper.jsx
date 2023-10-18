import React, { useState, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Navigator } from './components/Navigator'
import { DisplayScreen } from './components/DisplayScreen'
import { Locations } from './Data/Locations'
import { MainCharacter } from './Data/MainCharacter.js'
import { AvailableEnemies } from './Data/AvailableEnemies.js'
import { HistoryDisplayer } from './components/HistoryDisplayer'
import { availableSkills } from './Data/AvailableSkills'
import { AvailableItems } from './Data/AvailableItems'

export const MainWrapper = () => {

    const [currentAppState, setCurrentAppState] = useState({
        screenName: 'ScenicScreen',
        currentLocation: {
            ...Locations.DarkForest,
            subLocation: {
                ...Locations.DarkForest.subLocations.TwistedTree,
                availableItems: {...Locations.DarkForest.subLocations.TwistedTree.availableItems}
            },
            availableSubLocations: {
                TwistedTree: {
                    ...Locations.DarkForest.subLocations.TwistedTree,
                    isSelected: 'background-reversed'
                }
            }
        },
        inventory: {       
        },
        furnishing: {},
        house: {
            name: 'Twisted Tree',
            space: 5,
            modifications: {},
            takenSpace: 0
        },
        prompts: {
            primaryPrompt: 'Your eyes feel strangely heavy as you pry them open. As you stand to your feet you look around, stranged, and find yourself surrounded by nothing but wilderness.',
            secondaryPrompt: 'A twisted tree laying low beneath the canopies is your only reference.'
        }, 
        MainCharacter: {...MainCharacter},
        AvailableEnemies: {...AvailableEnemies},
        availableSkills: {
            ...availableSkills
        },
        locations: {
            ...Locations
        },
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

    function stringify(obj) {
        let cache = [];
        let str = JSON.stringify(obj, function(key, value) {
          if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            }
            // Store value in our collection
            cache.push(value);
          }
          return value;
        });
        cache = null; // reset the cache
        return str;
      }

    useEffect(() => {
      const data = window.localStorage.getItem('CURRENT_APP_STATE')
      if (data !== null ) setCurrentAppState(JSON.parse(data))
      console.log(data)
    
    }, [])
    
    useEffect(() => {
        window.localStorage.setItem('CURRENT_APP_STATE', JSON.stringify(currentAppState));
    }, [currentAppState]);
    
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
