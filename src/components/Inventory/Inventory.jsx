import { useState, useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { InventoryItem } from "./InventoryItem"
import { CharacterDisplay } from "./CharacterDisplay"
import { CharacterStats } from "./CharacterStats";

export const Inventory = () => {

    const {currentAppState} = useContext(AppContext)
    const {inventory} = currentAppState

    const [inventoryAffairsState, setInventoryAffairsState] = useState({
        statsVisible: false
    })

    return (
        <div className="inventory">

            <div className="inventory-left">

                <h1>Inventory</h1>

                <div className="inventory-space">
                    {
                        Object.values(inventory).map(u=>
                            <InventoryItem 
                                key={u.name }
                                itemName={u.name}
                                itemDescription={u.description}
                                itemSource={u.src}
                                itemType={u.type}
                                itemQuantity={u.quantity}
                                itemEquipable={u.equipable}
                                itemConsumable={u.consumable}
                                itemLabel={u.label}
                                itemDamage={u.damage}
                                totalItem={u}
                            />
                        )
                    }
                </div>
            </div>
            <div className="inventory-right">

                    {
                        inventoryAffairsState.statsVisible && <CharacterStats /> 
                    }
                    
                    <CharacterDisplay 
                        inventoryAffairsState={inventoryAffairsState}
                        setInventoryAffairsState={setInventoryAffairsState}
                    />

            </div>
        </div>
    )
}
