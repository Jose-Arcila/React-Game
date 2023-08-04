import React, { useContext } from 'react'
import { Inventory } from "../Inventory/Inventory"
import { AppContext } from "../../context/AppContext"

export const SearchButton = () => {

    const {currentAppState, setCurrentAppState, Locations} = useContext(AppContext);
    const {currentLocation, prompts, button} = currentAppState;
    const {activated} = button

    const {primaryPrompt, secondaryPrompt} = prompts;

    const giveRandomNumber100 =()=>{
        const randomNumberForSearch = Math.floor(Math.random() * 100);
        return randomNumberForSearch;
    }

    const giveRandomNumber10 =()=>{
        const randomNumberForSearch = Math.floor(Math.random() * 10);
        return randomNumberForSearch;
    }

    const handleSearch =()=>{
        const randomNumberForSearch100 = giveRandomNumber100();
        const randomNumberForSearch10 = giveRandomNumber10();
        let searchLocation = currentLocation.subLocation

        console.log(randomNumberForSearch100)

        if(randomNumberForSearch100 <= 90){
            const randomObjectSelector = Object.values(searchLocation.availableItems.general)[randomNumberForSearch10]

            setCurrentAppState(state=>{
                return{
                    ...state,
                    prompts: {
                        ...state.prompts,
                        primaryPrompt: randomObjectSelector.prompt,
                    },
                    events: [
                        `${'You have found ' + randomObjectSelector.label}`,
                        ...state.events
                    ]
                }
            })
            if(randomObjectSelector.quantity == 0) {
                setCurrentAppState(state=>{
                    return{
                        ...state,
                        inventory: {
                            ...state.inventory,
                            [randomObjectSelector.name]: randomObjectSelector
                        }
                    }
                })
                randomObjectSelector.quantity++;
            }else if(randomObjectSelector.quantity > 0){
                randomObjectSelector.quantity++
                console.log('added object')
            }

        }
        else if(91 <= randomNumberForSearch100 <= 95){
            const randomEnemySelector = Object.values(searchLocation.availableEnemies.general)[randomNumberForSearch10]
            setCurrentAppState(state=>{
                return {
                    ...state,
                    button: {
                        ...state.button,
                        activated: false
                    },
                    prompts: {
                        ...state.prompts,
                        primaryPrompt: randomEnemySelector.prompt,
                    },
                    fight: {
                        ...state.fight,
                        isFighting: true,
                        currentEnemy: randomEnemySelector
                    },
                    events: [
                        `${'You have entered a fight with ' + randomEnemySelector.name + '!'}`,
                        ...state.events

                    ]
                }
            })
        }
    }

    return (

        <div>
            {
                activated === true ?
                <button className="search-button" onClick={handleSearch}>
                    Search
                    <div className="search-button-bar"></div>
                </button>
                :
                <button className="disabled-search-button" disabled onClick={handleSearch}>
                    Blocked
                    <div className="disabled-search-button-bar"></div>
                </button>
            }
        </div>


    )
}
