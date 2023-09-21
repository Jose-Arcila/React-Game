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