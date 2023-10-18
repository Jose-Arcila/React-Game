export const exprelated= {
    giveexp: (skillname, currentAppState, setCurrentAppState)=>{
        if(currentAppState.MainCharacter.skills[skillname] && currentAppState.MainCharacter.skills[skillname].currentexp < currentAppState.MainCharacter.skills[skillname].requiredexp){
            let newExpAmount = currentAppState.MainCharacter.skills[skillname].currentexp + 1;
            setCurrentAppState(prevState => ({
                ...prevState,
                MainCharacter: {
                    ...prevState.MainCharacter,
                    skills: {
                        ...prevState.MainCharacter.skills,
                        [skillname]: {
                            ...prevState.MainCharacter.skills[skillname],
                            currentexp: newExpAmount
                        }
                    }
                }
            }));
        } else {
            let newLevel = currentAppState.MainCharacter.skills[skillname].level + 1;
            let newExpAmount = currentAppState.MainCharacter.skills[skillname].currentexp + 1;
            let newExpRequired = currentAppState.MainCharacter.skills[skillname].requiredexp * 4;
            setCurrentAppState(prevState => ({
                ...prevState,
                MainCharacter: {
                    ...prevState.MainCharacter,
                    skills: {
                        ...prevState.MainCharacter.skills,
                        [skillname]: {
                            ...prevState.MainCharacter.skills[skillname],
                            currentexp: newExpAmount,
                            requiredexp: newExpRequired,
                            level: newLevel
                        }
                    }
                },
                events: [
                    `${"Learning successful. The skill " + skillname + " has been upgaded."}`,
                    ...prevState.events
                ]
                
            }));
        }
    }
}

export const countRelated = {
    changeCountThings: (thing, setCurrentAppState)=>{
        setCurrentAppState(state=>{
            return {
                ...state,
                countThings: {
                    ...state.countThings,
                    [thing]: state.countThings[thing] + 1
                }
            }
        })
    }
}

export const skillsRelated = {
    addSkill: (grantedSkill, setCurrentAppState )=>{
        setCurrentAppState(state=>{
            return {
                ...state,
                MainCharacter: {
                    ...state.MainCharacter,
                    skills: {
                        ...state.MainCharacter.skills,
                        [grantedSkill]: {
                            ...state.availableSkills[grantedSkill]
                        }
                    }
                },
                events: [
                    `Learning successful. The skill ${grantedSkill} has been acquired.`,
                    ...state.events
                ]
            }
        })
    }
}

export const buttonRelated = {
    turnOffAll: (valueHere, setCurrentAppState)=>{
        for (const [key, value] of Object.entries(valueHere)) {
            setCurrentAppState(state=>{
                return{
                    ...state,
                    button: {
                        ...state.button,
                        [key]: {
                            ...state.button[key],
                            activated: false
                        }
                    }
                }
            })
        }
    },
    turnOnAll: (valueHere, setCurrentAppState)=>{
        for (const [key, value] of Object.entries(valueHere)) {
            setCurrentAppState(state=>{
                return{
                    ...state,
                    button: {
                        ...state.button,
                        [key]: {
                            ...state.button[key],
                            activated: true
                        }
                    }
                }
            })
        }
    },
    deactivateAll: (valueHere, setCurrentAppState, happening)=>{
        for (const [key, value] of Object.entries(valueHere)) {
            setCurrentAppState(state=>{
                return{
                    ...state,
                    secondaryEvents: {
                        ...state.secondaryEvents,
                        [key]: {
                            ...state.secondaryEvents[key],
                            isActive: false
                        },
                        [happening]: {
                            ...state.secondaryEvents[happening],
                            isActive: true
                        }
                    }
                }
            })
        }
    }
}

export const eventRelated = {
    addEvent: (event, setCurrentAppState)=>{
        setCurrentAppState(state=>{
            return{
                ...state,
                events: [
                    event,
                    ...state.events
                ]
            }
        })
    },
    changePrimaryPrompt: (prompt, setCurrentAppState)=>{
        setCurrentAppState(state=>{
            return{
                ...state,
                prompts: {
                    ...state.prompts,
                    primaryPrompt: prompt
                }
            }
        })
    }
}

export const inventoryRelated = {
    addItem: (id, name, setCurrentAppState, inventory, availableItems, rarity, type)=>{
        if(!inventory[name]){
            setCurrentAppState(state=>{
                return{
                    ...state,
                    inventory: {
                        ...state.inventory,
                        [name]: {
                            ...availableItems[rarity][type][id],
                            quantity: 1
                        }
                    },
                    events: [
                        `You have acquired ${name}.`,
                        ...state.events
                    ]
                }
            })
        }else{
            setCurrentAppState(state=>{
                return{
                    ...state,
                    inventory: {
                        ...state.inventory,
                        [name]: {
                            ...state.inventory[name],
                            quantity: state.inventory[name].quantity +1
                        }
                    },
                    events: [
                        `You have acquired ${name}.`,
                        ...state.events
                    ]
                }
            })
        }
    },
    addCraftItem: (name, setCurrentAppState, inventory, availableCrafts, level)=>{
        if(!inventory[name]){
            setCurrentAppState(state=>{
                return{
                    ...state,
                    inventory: {
                        ...state.inventory,
                        [name]: {
                            ...availableCrafts[level][name],
                            quantity: 1
                        }
                    }
                }
            })
        }else{
            setCurrentAppState(state=>{
                return{
                    ...state,
                    inventory: {
                        ...state.inventory,
                        [name]: {
                            ...state.inventory[name],
                            quantity: state.inventory[name].quantity +1
                        }
                    }
                }
            })
        }
    },
    removeItem: (name, setCurrentAppState)=>{
        setCurrentAppState(state=>{
            return{
                ...state,
                inventory: {
                    ...state.inventory,
                    [name]: {
                        ...state.inventory[name],
                        quantity: state.inventory[name].quantity-1
                    }
                },
            }
        })
    },
    removeCraftItem: (name, setCurrentAppState, quantity)=>{
        setCurrentAppState(state=>{
            return{
                ...state,
                inventory: {
                    ...state.inventory,
                    [name]: {
                        ...state.inventory[name],
                        quantity: state.inventory[name].quantity- quantity
                    }
                },
            }
        })
    },
    addFurniture: (name, setCurrentAppState, furnishing, availableCrafts, type)=>{
        if(!furnishing[name]){
            setCurrentAppState(state=>{
                return{
                    ...state,
                    furnishing: {
                        ...state.furnishing,
                        [name]: {
                            ...availableCrafts[type][name],
                            quantity: 1
                        }
                    },
                }
            })
        }else{
            setCurrentAppState(state=>{
                return{
                    ...state,
                    furnishing: {
                        ...state.furnishing,
                        [name]: {
                            ...state.furnishing[name],
                            quantity: state.furnishing[name].quantity +1
                        }
                    }
                }
            })
        }
    }
}

export const statRelated = {
    changeStat: (stat, setCurrentAppState, summedValue, label)=>{
        setCurrentAppState(state=>{
            return{
                ...state,
                MainCharacter: {
                    ...state.MainCharacter,
                    stats: {
                        ...state.MainCharacter.stats,
                        [stat]: {
                            ...state.MainCharacter.stats[stat],
                            value: state.MainCharacter.stats[stat].value + summedValue
                        }
                    }
                },
                events: [
                    `your ${label} has risen!`,
                    ...state.events
                ]
            }
        })
    }
}