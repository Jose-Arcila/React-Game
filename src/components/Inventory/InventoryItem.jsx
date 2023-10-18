import { useState, useContext, useEffect } from "react"
import { ItemMenu } from "./ItemMenu"
import { AppContext } from "../../context/AppContext"
import { AvailableItems } from "../../Data/AvailableItems"
import { CombineScreen } from "./CombineScreen"


export const InventoryItem = ({itemName, itemType, itemSource, itemQuantity, itemEquipable, itemConsumable, itemDamage, totalItem, itemLabel, id}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {inventory, MainCharacter, currentLocation} = currentAppState
    const {skills} = MainCharacter

    const currentItem = inventory[itemName]

    let itemDescriptionLevel = currentItem['description0']

    const changeDescriptionLevel =()=> {
        if(skills.analyze){
            return currentItem[Function("return " + "'" + "description" + skills.analyze.level + "'")()]
        }else{
            return currentItem['description0']
        }

    }

    const [isCombining, setIsCombining] = useState(false)
    const [itemMenuState, setItemMenuState] = useState({
        exist: false,
        name: itemName,
        description: changeDescriptionLevel(),
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
        <div className={"inventory-item " + itemType + " quantity-" + itemQuantity} onClick={handleItemMenu}>

            { itemMenuState.exist && <ItemMenu 
                itemMenuState={itemMenuState}
                setItemMenuState={setItemMenuState}
                isCombining={isCombining}
                setIsCombining={setIsCombining}
            /> }

            {
                isCombining && <CombineScreen 
                    firstItem={itemMenuState}
                    inventory={inventory}
                    isCombining={isCombining}
                    setIsCombining={setIsCombining}
                />
            }

            <div className="inventory-item-content">
                <p className="inventory-item-content-title">{itemLabel}</p>
                <img className="inventory-item-content-icon" src={itemSource}/>

                <p className="inventory-item-content-quantity">{itemQuantity}</p>
                <p className="inventory-item-content-type">{itemType}</p>
            </div>
        </div>

    )
}
