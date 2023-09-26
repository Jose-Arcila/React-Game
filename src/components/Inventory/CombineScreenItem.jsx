import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { AvailableItems } from "../../Data/AvailableItems"
import { availableSkills } from "../../Data/AvailableSkills"
import { exprelated } from "../../Data/importantFunctions"

export const CombineScreenItem = ({label, id, quantity, firstItem, name}) => {
    let newID = firstItem.id + id

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState

    const showNewId=()=> {
        const newItem = AvailableItems.oneStar.combinedItems[newID]


        if(newItem !== undefined ) {        
            if(!MainCharacter.skills.craft){
                setCurrentAppState(state=>{
                    return{
                        ...state,
                        MainCharacter: {
                            ...MainCharacter,
                            skills: {
                                ...MainCharacter.skills,
                                craft: JSON.parse(JSON.stringify(availableSkills.craft))
                            }
                        }
                    }
                })
            }else{
            exprelated.giveexp('craft', currentAppState, setCurrentAppState) 
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
                    console.log(currentAppState.inventory[newItem.name])
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
                                }
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
                                }
                            }
                        }) 
                    }
                }
            }else{
                if(quantity > 0 && firstItem.quantity > 0){
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
                                }
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

                                }
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
    <div className="combine-screen-item" onClick={showNewId}>
        <h1>{label}</h1>
        <h1>{quantity}</h1>
    </div>
  )
}
