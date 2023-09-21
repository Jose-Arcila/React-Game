import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const ItemMenu = ({itemMenuState, setItemMenuState}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const{ MainCharacter, inventory, fight } = currentAppState
    const { equipment, hp, stats, hprecovery } = MainCharacter

    const {equipable, item, consumable, damage, name, type, label} = itemMenuState
    const {isConsumable, isHealing} = consumable
    const {isEquipable, equipSlot} = equipable
    const mcBaseAttack = stats.str.value;


    const handleEquip =()=>{
        if(isEquipable){
            setCurrentAppState(state=> {
                return {
                ...state,
                MainCharacter: {
                    ...MainCharacter,
                    equipment: {
                        ...equipment,
                        [equipSlot]: {
                            content: item,
                            name: [equipSlot]
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
                            `${'You have equipped ' + name}`,
                            ...state.events
                        ]
                    }
                })
            }

        }else {        
        }
    }

    const handleConsume=()=>{
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
                                hprecovery: hprecovery + damage
    
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

    const hideMenu=()=>{
        setItemMenuState(state=>{
            return {
                ...state,
                exist: false
        }}
        )
    }

    return (
        <div className="item-menu" onMouseLeave={hideMenu}>

            <button className="item-menu-button">Analyze</button>
            <button className="item-menu-button" onClick={handleConsume}>Consume</button>
            <button className="item-menu-button" onClick={handleEquip}>Equip</button>
            <button className="item-menu-button">Combine</button>
            <button className="item-menu-button">Discard</button>
            
        </div>
    )
}
