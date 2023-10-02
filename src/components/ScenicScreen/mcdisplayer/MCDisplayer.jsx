import { useContext, useEffect } from 'react'
import { AppContext } from '../../../context/AppContext'
import { MainCharacterOptions } from './MainCharacterOptions'
import { MCHpBar } from './MCHpBar'

export const MCDisplayer = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {fight, MainCharacter} = currentAppState
    const {isFighting, currentEnemy} = fight
    const {name, hp, hprecovery, maxhp, stamina} = MainCharacter

    return (
        <div className="mc-displayer">

            <div className="mc-displayer-top-row">
                {   isFighting && 
                    <MCHpBar 
                        health={hp.value}
                        maxhealth={maxhp}
                        name={name}
                        stamina={stamina}
                    />  
                }
            </div>

            <div className="mc-displayer-bottom-row">
                {   isFighting && 
                    <MainCharacterOptions 
                        
                    />  
                }
            </div>

        </div>
    )
}
