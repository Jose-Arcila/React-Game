export const handleEquip =(isEquip, currentAppState, setCurrentAppState, item, equipSlot, name, type, mcBaseAttack, damage, label)=>{
    if(isEquip){
        setCurrentAppState(state=> {
            return {
            ...state,
            MainCharacter: {
                ...state.MainCharacter,
                equipment: {
                    ...state.MainCharacter.equipment,
                    [equipSlot]: {
                        content: {...item},
                        name: equipSlot
                    }
                }
            }
        }})
        if(type.includes('weapon')){
            setCurrentAppState(state=>{
                return {
                    ...state,
                    MainCharacter: {
                        ...state.MainCharacter,
                        stats: {
                            ...state.MainCharacter.stats,
                            phyAtk: {
                                ...state.MainCharacter.stats.phyAtk,
                                value: mcBaseAttack + damage
                            }
                        }
                    },
                    events: [
                        `${'You have equipped ' + label}`,
                        ...state.events
                    ]
                }
            })
        }

    }else {        
    }
}