import { LocationNavigator } from "./LocationNavigator"
import { useState, useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import { SearchButton } from "./SearchButton"
import { MCDisplayer } from "./mcdisplayer/MCDisplayer"
import { EnemyDisplayer } from "./enemydisplayer/EnemyDisplayer"
import { LumberButton } from "./buttons/LumberButton"

export const ScenicScreen = () => {

    const {currentAppState} = useContext(AppContext);
    const {prompts, fight, currentLocation, MainCharacter} = currentAppState;

    const {primaryPrompt, secondaryPrompt} = prompts;
    let mcEquipment = MainCharacter.equipment

    const [showThisButton, setShowThisButton] = useState({
        lumberButton: {
            name: "LumberButton",
            show: false
        }
    })

    const changeShowButton=(condition1, condition2, target, target2, button)=>{
        if(condition1 && condition2){
            let newTarget = target
            if(newTarget.includes(target2)){
                setShowThisButton(state=>{
                    return{
                        ...state,
                        [button]: {
                            ...state[button],
                            show: true
                        }
                    }

                })
            }
        }
    }

    useEffect(() => {
        changeShowButton(currentLocation.name === "DarkForest", mcEquipment.rightHand.content.name, mcEquipment.rightHand.content.type, "axe", 'lumberButton')
    }, [])

    return (
        <div className="scenic-screen">

            <LocationNavigator />

            <hr></hr>

                <div className="search-button-container">
                    <div className="prompt-container">
                        <p className="primary-prompt prompt-line">{primaryPrompt}</p>
                        <p className="secondary-prompt prompt-line">{secondaryPrompt}</p>
                    </div>

                    <div className="button-holder">
                        <SearchButton />
                        {
                            showThisButton.lumberButton.show&&<LumberButton />
                        }
                    </div>
                    
                </div>

            <div className="scenic-screen-action-container">

                <MCDisplayer />

                {
                    fight.isFighting && <EnemyDisplayer />
                }
            
            </div>
            
            
        </div>
    )
}
