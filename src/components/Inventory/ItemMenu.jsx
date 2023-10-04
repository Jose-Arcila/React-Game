import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { availableSkills } from "../../Data/AvailableSkills"
import { exprelated } from "../../Data/importantFunctions"
import { InventoryItemDescription } from "./InventoryItemDescription"
import { handleEquip } from "./helpers/handleEquip"
import { handleAnalyze } from "./helpers/handleAnalyze"
import { handleConsume } from "./helpers/handleConsume"

export const ItemMenu = ({itemMenuState, setItemMenuState, isCombining, setIsCombining}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const{ MainCharacter, inventory, fight } = currentAppState
    const { equipment, hp, stats, hprecovery, skills } = MainCharacter

    const {equipable, item, consumable, damage, name, type, label, description, quantity} = itemMenuState
    const {isConsumable, isHealing} = consumable
    const {isEquipable, equipSlot} = equipable
    const {giveexp} = exprelated
    const mcBaseAttack = stats.str.value;
    const [isAnalyzing, setIsAnalyzing] = useState({
        analyzing: 'not-analyzing',
        finishedAnalyzing: false,
        buttonDisabled: false
    })
    
    const {analyzing, finishedAnalyzing, buttonDisabled} = isAnalyzing

    const handleDiscard=()=>{
        if(inventory[name].quantity > 0) {
            setCurrentAppState(state=>{
                return {
                    ...state,
                    inventory: {
                        ...state.inventory,
                        [name]: {
                            ...state.inventory[name],
                            quantity: state.inventory[name].quantity - 1
                        }
                    }
                }
            })
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

            <button disabled={buttonDisabled} className={"item-menu-button" + ' ' + analyzing} onClick={()=>handleAnalyze(skills, currentAppState, setCurrentAppState, giveexp, setIsAnalyzing, availableSkills)}>Analyze<div className="loading-analyze">Analyzing...</div></button>
            {
                finishedAnalyzing && <InventoryItemDescription 
                    name={label}
                    description={description}
                />
            }
            <button className="item-menu-button" onClick={()=>handleConsume(isConsumable, isHealing, damage, currentAppState, setCurrentAppState, name, label, inventory, MainCharacter, fight)}>Consume</button>
            <button className="item-menu-button" onClick={()=>handleEquip(isEquipable, currentAppState, setCurrentAppState, item, equipSlot, name, type, mcBaseAttack, damage, label)}>Equip</button>
            <button className="item-menu-button" onClick={()=>setIsCombining(true)}>Combine</button>
            
            <button className="item-menu-button" onClick={handleDiscard}>Discard</button>
            
        </div>
    )
}
