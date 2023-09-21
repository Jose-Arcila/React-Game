import { useState, useContext } from "react"
import { ItemMenu } from "./ItemMenu"
import { AppContext } from "../../context/AppContext"

export const InventoryItem = ({itemName, itemDescription, itemType, itemSource, itemQuantity, itemEquipable, itemConsumable, itemDamage, totalItem, itemLabel}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {inventory} = currentAppState
    
    const [itemMenuState, setItemMenuState] = useState({
        exist: false,
        name: itemName,
        equipable: itemEquipable, 
        consumable: itemConsumable,
        damage: itemDamage,
        quantity: itemQuantity,
        type: itemType,
        item: totalItem,
        label: itemLabel
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
                <p className="inventory-item-content-description">{itemDescription}</p>
                <img className="inventory-item-content-icon" src={itemSource}/>

                <p className="inventory-item-content-quantity">{itemQuantity}</p>
                <p className="inventory-item-content-type">{itemType}</p>
            </div>
        </div>

    )
}
