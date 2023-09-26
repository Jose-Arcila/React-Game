export const handleEquip =(isEquip, currentAppState, setCurrentAppState, item, equipSlot, name, type, mcBaseAttack, damage, label)=>{
    if(isEquip){
        setCurrentAppState(prevState=> {
            return {
            ...prevState,
            MainCharacter: {
                ...prevState.MainCharacter,
                equipment: {
                    ...prevState.MainCharacter.equipment,
                    [equipSlot]: {
                        content: item,
                        name: [equipSlot]
                    }
                }
            }
        }})
        if(type.includes('weapon')){
            setCurrentAppState(prevState=>{
                return {
                    ...prevState,
                    MainCharacter: {
                        ...prevState.MainCharacter,
                        stats: {
                            ...prevState.MainCharacter.stats,
                            phyAtk: {
                                ...prevState.MainCharacter.stats.phyAtk,
                                value: mcBaseAttack + damage
                            }
                        }
                    },
                    events: [
                        `${'You have equipped ' + label}`,
                        ...prevState.events
                    ]
                }
            })
        }

    }else {        
    }
}