import { useState, useContext, useEffect } from "react"
import { ItemMenu } from "./ItemMenu"
import { AppContext } from "../../context/AppContext"
import { AvailableItems } from "../../Data/AvailableItems"

export const InventoryItem = ({itemName, itemType, itemSource, itemQuantity, itemEquipable, itemConsumable, itemDamage, totalItem, itemLabel, id}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {inventory, MainCharacter, currentLocation} = currentAppState
    const {skills} = MainCharacter

    const currentItem = inventory[itemName]

    let itemDescriptionLevel = eval("currentItem.description0")

    const changeDescriptionLevel =()=> {
        if(skills.analyze){
            itemDescriptionLevel = eval("currentItem.description" + skills.analyze.level)
        }
    }
    changeDescriptionLevel()
    
    const [itemMenuState, setItemMenuState] = useState({
        exist: false,
        name: itemName,
        description: itemDescriptionLevel,
        equipable: itemEquipable, 
        consumable: itemConsumable,
        damage: itemDamage,
        quantity: itemQuantity,
        type: itemType,
        item: totalItem,
        label: itemLabel,
        id: id
    })
    
    const handleItemMenu=()=>{
        setItemMenuState({
            ...itemMenuState,
            exist: true
        })
    }

    return (
        <div className={"inventory-item " + itemType} onClick={handleItemMenu}>

            { itemMenuState.exist && <ItemMenu 
                itemMenuState={itemMenuState}
                setItemMenuState={setItemMenuState}
            /> }

            <div className="inventory-item-content">
                <p className="inventory-item-content-title">{itemLabel}</p>
                <img className="inventory-item-content-icon" src={itemSource}/>

                <p className="inventory-item-content-quantity">{itemQuantity}</p>
                <p className="inventory-item-content-type">{itemType}</p>
            </div>
        </div>

    )
}
