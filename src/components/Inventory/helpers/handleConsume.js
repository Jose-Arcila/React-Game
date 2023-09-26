export const handleConsume=(isConsumable, isHealing, damage, currentAppState, setCurrentAppState, name, label, inventory, MainCharacter, fight)=>{
    if(isConsumable && inventory[name].quantity>0){
        setCurrentAppState(currentAppState=>{
            return {
                ...currentAppState,
                inventory: {
                    ...inventory,
                    [name]: {   
                        ...inventory[name],
                        quantity: inventory[name].quantity-1
                        
                    }
                }
            }
        })
        if(isHealing){
            if(MainCharacter.hp.value < MainCharacter.maxhp) {
                if (!fight.isFighting) {
                    setCurrentAppState(state=> {
                        return {
                        ...state,
                        MainCharacter: {
                            ...state.MainCharacter,
                            hprecovery: state.MainCharacter.hprecovery + damage

                        },
                        events: [
                            `You have eaten a ${label}. ${damage} health recovered`,
                            ...state.events
                        ]
                    }})
                    setTimeout(() => {
                        setCurrentAppState(state=> {
                            return {
                            ...state,
                            MainCharacter: {
                                ...state.MainCharacter,
                                hprecovery: 0.1
    
                            }
                        }})
                    }, 1000);
                }else {
                    const updatedHpValue = currentAppState.MainCharacter.hp.value + damage
                    const newHealthValue = Math.min(updatedHpValue, MainCharacter.maxhp)
                    setCurrentAppState(state=> {
                        return {
                        ...state,
                        MainCharacter: {
                            ...state.MainCharacter,
                            hp: {
                                ...hp,
                                value: newHealthValue
                            }

                        },
                        events: [
                            `You have eaten a ${label}. ${damage} health recovered`,
                            ...state.events
                        ]
                    }})
                }
            }
            else {
                setCurrentAppState(state=> {
                    return {
                    ...state,
                    events: [
                        `${'You have eaten a ' + label + '. But you were already full'}`,
                        ...state.events
                    ]
                }})
            }
        }else {
            setCurrentAppState(state=> {
                return {
                ...state,
                MainCharacter: {
                    ...MainCharacter,
                    hp: {
                        ...hp,
                        value: hp.value - damage
                    }
                }
            }})
        }
    }
}