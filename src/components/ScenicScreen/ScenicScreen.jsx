import { LocationNavigator } from "./LocationNavigator"
import { useState, useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { SearchButton } from "./SearchButton"
import { MCDisplayer } from "./mcdisplayer/MCDisplayer"
import { EnemyDisplayer } from "./enemydisplayer/EnemyDisplayer"

export const ScenicScreen = () => {

    const {currentAppState} = useContext(AppContext);
    const {prompts, fight} = currentAppState;

    const {primaryPrompt, secondaryPrompt} = prompts;

    return (
        <div className="scenic-screen">

            <LocationNavigator />

            <hr></hr>

            <div className="search-button-container">
                <div className="prompt-container">
                    <p className="primary-prompt prompt-line">{primaryPrompt}</p>
                    <p className="secondary-prompt prompt-line">{secondaryPrompt}</p>
                </div>
                
                <SearchButton />

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
