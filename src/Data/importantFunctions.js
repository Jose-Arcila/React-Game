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
                prompts: [
                    ...state.prompts,
                    
                ]
            }
        })
    }
}