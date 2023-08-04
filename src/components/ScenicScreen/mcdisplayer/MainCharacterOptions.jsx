import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

export const MainCharacterOptions = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter, fight} = currentAppState
    const {currentTurn, currentEnemy} = fight
    const {stats} = MainCharacter

    const handleMCAttack =()=> {
        if(currentTurn === 'mainCharacter'){
            setCurrentAppState(state=>{
                return {
                    ...state,
                    fight: {
                        ...state.fight, 
                        currentEnemy: {
                            ...state.fight.currentEnemy,
                            hp: currentEnemy.hp - stats.phyAtk.value
                        },
                        currentTurn: 'enemy'
                    },
                    events: [
                        `${MainCharacter.name + ' has attacked for ' + stats.phyAtk.value + ' damage!'}`,
                        ...state.events
                    ]
                }
            })
        } else {
            console.log('not your turn')
        }
    }

    return (
        <div className="mc-displayer-options">

            <button className="mc-displayer-options-button" onClick={handleMCAttack}>Attack</button>
            <button className="mc-displayer-options-button">Flee</button>

        </div>
    )
}
