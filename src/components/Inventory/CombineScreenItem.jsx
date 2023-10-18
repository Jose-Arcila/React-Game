import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { AvailableItems } from "../../Data/AvailableItems"
import { availableSkills } from "../../Data/AvailableSkills"
import { exprelated } from "../../Data/importantFunctions"

export const CombineScreenItem = ({label, id, quantity, firstItem, name, setIsCombining}) => {
    let newID = firstItem.id + id

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    const {skills} = MainCharacter

    const handleCraft=()=> {
        const newItem = AvailableItems.oneStar.combinedItems[newID]
        if(newItem !== undefined ) {        
            if(!skills.craft){
                setCurrentAppState(state=>{
                    return{
                        ...state,
                        MainCharacter: {
                            ...MainCharacter,
                            skills: {
                                ...skills,
                                craft: JSON.parse(JSON.stringify(availableSkills.craft))
                            }
                        }
                    }
                })
            }else{
                if(skills.craft.currentexp === 5){
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            navigatorButtons: {
                                ...state.navigatorButtons,
                                fourthButton: {
                                    name: 'Crafts',
                                    screenName: 'Crafts',
                                    imgSrc: './craft-icon.svg'
                                }
                            },
                            events: [
                                `A torrent of information floods your mind. Blueprints and instructions you are sure you didn't know, but are now nested in your brain.`,
                                ...state.events
                            ]
                        }
                    })
                }
            }
            if(firstItem.id === id){
                if(quantity < 2){
                    setCurrentAppState(state=>{
                        return {
                            ...state,
                            events: [
                                `You dont have enough of that item.`,
                                ...state.events
                            ]
                        }
                    }) 
                }else {
                    if(skills.craft){exprelated.giveexp('craft', currentAppState, setCurrentAppState)}
                    if(currentAppState.inventory[newItem.name] === undefined){
                        setCurrentAppState(state=>{
                            return {
                                ...state,
                                inventory: {
                                    ...state.inventory, 
                                    [newItem.name]: {
                                        ...newItem,
                                        quantity: 1
                                    },
                                    [name]: {
                                        ...state.inventory[name],
                                        quantity: state.inventory[name].quantity - 2
                                    }
                                },
                                events: [
                                    `You have crafted a ${newItem.label}`,
                                    ...state.events
                                ]
                            }
                        }) 
                    }else{
                        setCurrentAppState(state=>{
                            return {
                                ...state,
                                inventory: {
                                    ...state.inventory, 
                                    [newItem.name]: {
                                        ...newItem,
                                        quantity: state.inventory[newItem.name].quantity+1
                                    },
                                    [name]: {
                                        ...state.inventory[name],
                                        quantity: state.inventory[name].quantity - 2
                                    }
                                },
                                events: [
                                    `You have crafted a ${newItem.label}`,
                                    ...state.events
                                ]
                            }
                        }) 
                    }
                }
            }else{
                if(quantity > 0 && currentAppState.inventory[firstItem.name].quantity > 0){
                    if(skills.craft){exprelated.giveexp('craft', currentAppState, setCurrentAppState)}
                    if(currentAppState.inventory[newItem.name] === undefined){
                        setCurrentAppState(state=>{
                            return {
                                ...state,
                                inventory: {
                                    ...state.inventory, 
                                    [newItem.name]: {
                                        ...newItem,
                                        quantity: 1
                                    },
                                    [name]: {
                                        ...state.inventory[name],
                                        quantity: state.inventory[name].quantity - 1
                                    },
                                    [firstItem.name]: {
                                        ...state.inventory[firstItem.name],
                                        quantity: state.inventory[firstItem.name].quantity - 1
                                    }
                                },
                                events: [
                                    `You have crafted a ${newItem.label}`,
                                    ...state.events
                                ]
                            }
                        })
                    }else{
                        setCurrentAppState(state=>{
                            return {
                                ...state,
                                inventory: {
                                    ...state.inventory, 
                                    [newItem.name]: {
                                        ...newItem,
                                        quantity: state.inventory[newItem.name].quantity+1
                                    },
                                    [name]: {
                                        ...state.inventory[name],
                                        quantity: state.inventory[name].quantity - 1
                                    },
                                    [firstItem.name]: {
                                        ...state.inventory[firstItem.name],
                                        quantity: state.inventory[firstItem.name].quantity - 1
                                    }
                                },
                                events: [
                                    `You have crafted a ${newItem.label}`,
                                    ...state.events
                                ]
                            }
                        }) 
                    }
                }else{
                    setCurrentAppState(state=>{
                        return {
                            ...state,
                            events: [
                                `You dont have enough of that item.`,
                                ...state.events
                            ]
                        }
                    }) 
                }
            }
        }else{
            setCurrentAppState(state=>{
                return {
                    ...state,
                    events: [
                        `Craft failed. It seems like ${firstItem.label} and ${label} don't go together well.`,
                        ...state.events
                    ]
                }
            }) 
        }
        
    }

  return (
    <div className="combine-screen-item" onClick={handleCraft}>
        <h1>{label}</h1>
        <h1>{quantity}</h1>
    </div>
  )
}
