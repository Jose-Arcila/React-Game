import React, { useContext } from 'react'
import { AppContext } from "../../context/AppContext"
import { exprelated } from '../../Data/importantFunctions'


export const SearchButton = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {currentLocation, prompts, button, Locations, availableSkills, MainCharacter, navigatorButtons} = currentAppState;
    const {activated, currentBar, waitTime} = button

    const {primaryPrompt, secondaryPrompt} = prompts;

    const giveRandomNumber100 =()=>{
        const randomNumberForSearch = Math.floor(Math.random() * 100);
        return randomNumberForSearch;
    }

    const giveRandomNumber10 =()=>{
        const randomNumberForSearch = Math.floor(Math.random() * 10);
        return randomNumberForSearch;
    }

    const handleSearch =({target})=>{
        const randomNumberForSearch100 = giveRandomNumber100();
        const randomNumberForSearch10 = giveRandomNumber10();
        let searchLocation = currentLocation.subLocation

        if(!MainCharacter.skills.search) {
            setCurrentAppState(state=>{
                return{
                    ...state,
                    MainCharacter: {
                        ...MainCharacter,
                        skills: {
                            ...MainCharacter.skills,
                            search: JSON.parse(JSON.stringify(availableSkills.search))
                        }
                    }
                }
            })
        }else{
            if(currentAppState.MainCharacter.skills.search.level === 0 && currentAppState.MainCharacter.skills.search.currentexp === 0) {
                setCurrentAppState(state=>{
                    return{
                        ...state,
                        navigatorButtons: {
                            ...navigatorButtons,
                            thirdButton: {
                                name: 'Skills',
                                screenName: 'Skills',
                                imgSrc: './skill-icon.svg'
                            }
                        },
                        events: [
                            <i>You feel something strange. As if the simple action of searching had changed something inside you.</i>,
                            ...state.events
                        ]
                    }
                })
            }
        }  

        if(MainCharacter.hp.value < 1) {
            setCurrentAppState(state=>{
                return{
                    ...state,
                    prompts: {
                        ...state.prompts,
                        primaryPrompt: 'Your wounds are much too grave. It would be best to remain under the Twisted Tree for the time being.',
                    },
                    events: [
                        `${'You can barely move from the ground.'}`,
                        ...state.events
                    ]
                }
            })

        }else {
            if(MainCharacter.skills.search){exprelated.giveexp('search', currentAppState, setCurrentAppState)}
            // target.disabled = true

            // setCurrentAppState(state=>{
            //     return{
            //         ...state,
            //         button: {
            //             ...button,
            //             currentBar: 'deactivated-search-bar'
            //         }
            //     }
            // })

            // if(activated === true) {
            //     setTimeout(() => {
            //         target.disabled = false
            //         setCurrentAppState(state=>{
            //             return{
            //                 ...state,
            //                 button: {
            //                     ...button,
            //                     currentBar: 'search-button-bar'
            //                 }
            //             }
            //         })
            //     }, 3000);
            // }

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
                if(randomObjectSelector.quantity === 0) {
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
                    let newQuantity = randomObjectSelector.quantity++
    
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            inventory: {
                                ...state.inventory,
                                [randomObjectSelector.name]: {
                                    ...randomObjectSelector,
                                    quantity: newQuantity
                                }
                            }
                        }
                    })
                }
    
            }
            // else if(91 <= randomNumberForSearch100 <= 95){
            //     const randomEnemySelector = Object.values(searchLocation.availableEnemies.general)[randomNumberForSearch10]
            //     setCurrentAppState(state=>{
            //         return {
            //             ...state,
            //             button: {
            //                 ...state.button,
            //                 activated: false
            //             },
            //             prompts: {
            //                 ...state.prompts,
            //                 primaryPrompt: randomEnemySelector.prompt,
            //             },
            //             fight: {
            //                 ...state.fight,
            //                 isFighting: true,
            //                 currentEnemy: randomEnemySelector
            //             },
            //             events: [
            //                 `${'You have entered a fight with ' + randomEnemySelector.name + '!'}`,
            //                 ...state.events
    
            //             ]
            //         }
            //     })
            // }
            else if(96 <= randomNumberForSearch100 <= 99) {
                const getRandomSublocation = Math.floor(Math.random() * Object.values(currentLocation.subLocations).length)
                const randomSublocationSelector = Object.values(currentLocation.subLocations)[getRandomSublocation]
                if(Object.hasOwn(currentLocation.availableSubLocations, randomSublocationSelector.name)){
                    setCurrentAppState(state=>{
                        return {
                            ...state,
                            events: [
                                `It seems like you have gotten lost. You dejectedly return to the ${randomSublocationSelector.label} after your failed expedition.`,
                                ...state.events
                            ]
                        }
                    })
                }else{
                    setCurrentAppState(state=>{
                        return {
                            ...state,
                            currentLocation: {
                                ...state.currentLocation,
                                availableSubLocations: {
                                    ...state.currentLocation.availableSubLocations,
                                    [randomSublocationSelector.name]: randomSublocationSelector 
                                },
                                subLocation: {
                                    ...randomSublocationSelector
                                }
                            },
                            prompts: {
                                ...state.prompts,
                                primaryPrompt: randomSublocationSelector.primaryPrompt,
                                secondaryPrompt: randomSublocationSelector.secondaryPrompt
                            },
                            events: [
                                `You have found your way through the area and stumbled across the ${randomSublocationSelector.label}`,
                                ...state.events
                            ]
                        }
                    })
                }  
            }
        } 
    }

    return (

        <div>
            {
                activated === true ?
                <button className="search-button" onClick={(e)=>handleSearch(e)}>
                    Search
                    <div className={currentBar}></div>
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
