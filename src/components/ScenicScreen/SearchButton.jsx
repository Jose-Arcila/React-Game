import React, { useContext, useState } from 'react'
import { AppContext } from "../../context/AppContext"
import { exprelated, buttonRelated } from '../../Data/importantFunctions'
import { ButtonDescription } from './buttons/ButtonDescription';


export const SearchButton = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {currentLocation, button, inventory, availableSkills, MainCharacter, navigatorButtons, secondaryEvents} = currentAppState;
    const {search} = button
    const {skills} = MainCharacter
    const {searching} = secondaryEvents
    const {turnOffAll, turnOnAll, deactivateAll} = buttonRelated
    const {activated, currentBar} = search

    const [isDescrip, setIsDescrip] = useState(false)
    
    let skillWaittime = (3000)
    if(MainCharacter.skills.search){
        skillWaittime = skills.search[Function("return " + "'" + 'cooldown' + skills.search.level + "'")()]
    }


    const giveRandomNumber100 =()=>{
        const randomNumberForSearch = Math.floor(Math.random() * 100);
        return randomNumberForSearch;
    }

    const giveRandomNumber10 =()=>{
        const randomNumberForSearch = Math.floor(Math.random() * Object.values(currentLocation.subLocation.availableItems.general).length);
        return randomNumberForSearch;
    }

    const handleSearch =({target})=>{
        const randomNumberForSearch100 = giveRandomNumber100();
        const randomNumberForSearch10 = giveRandomNumber10();
        let searchLocation = currentLocation.subLocation

        deactivateAll(secondaryEvents, setCurrentAppState, searching)

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
                            `You feel something strange. As if the simple action of searching had changed something inside you.`,
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
            target.disabled = true

            setCurrentAppState(state=>{
                return{
                    ...state,
                    button: {
                        ...button,
                        search: {
                            ...search,
                            currentBar: 'deactivated-search-bar'
                        }
                    },
                    secondaryEvents: {
                        ...state.secondaryEvents,
                        searching: {
                            ...state.secondaryEvents.searching,
                            isActive: true
                        }
                    }
                }
            })

            if(activated === true) {
                setTimeout(() => {
                    target.disabled = false
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            button: {
                                ...button,
                                search: {
                                    ...search,
                                    currentBar: 'search-button-bar'
                                }
                            },
                            secondaryEvents: {
                                ...state.secondaryEvents,
                                searching: {
                                    ...state.secondaryEvents.searching,
                                    isActive: false
                                }
                            }
                        }
                    })

                    /////// These are the scripts to determine what happens after the player hits search

                    // object randomizer
                    if(randomNumberForSearch100 <= 80){
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
                        if(!inventory[randomObjectSelector.name]) {
                            setCurrentAppState(state=>{
                                return{
                                    ...state,
                                    inventory: {
                                        ...state.inventory,
                                        [randomObjectSelector.name]: {
                                            ...randomObjectSelector,
                                            quantity: 1
                                        }
                                    }
                                }
                            })
                        }else{
                            let newQuantity = inventory[randomObjectSelector.name].quantity++
                            setCurrentAppState(state=>{
                                return{
                                    ...state,
                                    inventory: {
                                        ...state.inventory,
                                        [randomObjectSelector.name]: {
                                            ...randomObjectSelector,
                                            quantity: inventory[randomObjectSelector.name].quantity++
                                        }
                                    }
                                }
                            })
                        }
            
                    }
                    // enemies randomizer
                    else if(81 <= randomNumberForSearch100 <= 95){
                        const randomEnemySelector = Object.values(searchLocation.availableEnemies.general)[randomNumberForSearch10]
                        setCurrentAppState(state=>{
                            return {
                                ...state,
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
                        turnOffAll(button, setCurrentAppState)
                    }
                    // locale randomizer
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
                                            [randomSublocationSelector.name]: {
                                                ...randomSublocationSelector,
                                                isSelected: 'background-reversed'
                                            },
                                            TwistedTree:{
                                                ...state.currentLocation.availableSubLocations.TwistedTree,
                                                isSelected: "background-normal"
                                            } 
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

                }, skillWaittime);
            }
        } 
    }

    return (
        <>
            {
                activated === true ?
                <button className={"button-holder-button search-button " + 'action-' +searching.isActive} onClick={(e)=>handleSearch(e)} onMouseOver={()=>setIsDescrip(true)} onMouseLeave={()=>setIsDescrip(false)}>
                    Search
                    <div className={currentBar}></div>
                    {
                        isDescrip &&
                        <ButtonDescription 
                            name={'Search'}
                            quantity={searching.quantity}
                            description={'Use your eyes.'}
                            cooldown={skillWaittime/1000}
                            isOn={searching.isActive}
                        />
                    }
                </button>
                :
                <button className="disabled-search-button" disabled onClick={handleSearch}>
                    Blocked
                    <div className="disabled-search-button-bar"></div>
                </button>

            }       
        </>
    )
}
