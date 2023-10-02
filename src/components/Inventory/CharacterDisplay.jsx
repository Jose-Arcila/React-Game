import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { EquipmentItem } from "./EquipmentItem";

export const CharacterDisplay = ({inventoryAffairsState, setInventoryAffairsState}) => {

    const {currentAppState} = useContext(AppContext)

    const {MainCharacter} = currentAppState;
    const {equipment} = MainCharacter
    const showStats=()=>{
        if(inventoryAffairsState.statsVisible === false){
            setInventoryAffairsState({
                ...inventoryAffairsState,
                statsVisible: true
            })
        }else{
                setInventoryAffairsState({
                    ...inventoryAffairsState,
                    statsVisible: false
                })
        }
    }

    return (
        <div className="character-display">
            
            <div className="character-display-name">
                <div className="character-display-name-column-one">
                    <p>name: {MainCharacter.name}</p>
                    <div className="flex-row stats-displayer">
                        <button onClick={showStats}></button>
                        <p>Stats</p>
                    </div>
                </div>
                <div className="character-display-name-column-two">
                    <div className="status-health-bar">
                        <p>HP: {MainCharacter.hp.value}/{MainCharacter.maxhp}</p>  
                        <p>MP: {MainCharacter.mp.value}/{MainCharacter.maxmp}</p>
                        <p>Stamina: {MainCharacter.stamina.value}/{MainCharacter.stamina.maxvalue}</p>
                    </div>
                </div>
                <div className="character-display-name-column-two"></div>
            </div>
            <hr></hr>

            <div className="character-display-items">
                {
                    Object.values(equipment).map(u=>
                        <EquipmentItem 
                            equipment={equipment}
                            key={u.name}
                            name={u.name}
                            itemContainer={u}
                        />
                    )
                }

            </div>

            <div className="character-display-status"></div>

        </div>
    )
}
