import { useContext, useEffect } from 'react'
import { AppContext } from '../../../context/AppContext'
import { HpBar } from '../../HpBar'
import { MainCharacterOptions } from './MainCharacterOptions'

export const MCDisplayer = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {fight, MainCharacter} = currentAppState
    const {isFighting, currentEnemy} = fight
    const {name, hp, hprecovery, maxhp} = MainCharacter

    return (
        <div className="mc-displayer">

            <div className="mc-displayer-top-row">
                {   isFighting && 
                    <HpBar 
                        health={hp.value}
                        maxhealth={maxhp}
                        name={name}
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
