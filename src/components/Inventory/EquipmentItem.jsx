import { useState } from "react"
import { EquippedItemDescription } from "./EquippedItemDescription"


export const EquipmentItem = ({name, itemContainer}) => {
    const [descriptionShowState, setDescriptionShowState] = useState({
        showItemDescription: false,
    })

    const {showItemDescription} = descriptionShowState

    const showCurrentItem=()=>{
        if(itemContainer.content.name !== undefined){
            setDescriptionShowState(descriptionShowState=>{
                return {
                    ...descriptionShowState,
                    showItemDescription: true
                }
            })
        }else {
            return
        }
    }
    const hideCurrentItem=()=>{
        setDescriptionShowState(descriptionShowState=>{
            return {
                ...descriptionShowState,
                showItemDescription: false
            }
        })
    }

    return (
        <div onMouseOver={showCurrentItem} onMouseOut={hideCurrentItem} className={'equipment-item-container ' + `${name}`}>
            <p>{itemContainer.content.label}</p>
            {   showItemDescription && 
                <EquippedItemDescription
                    item={itemContainer}
                 />
            }
        </div>
    )
}
