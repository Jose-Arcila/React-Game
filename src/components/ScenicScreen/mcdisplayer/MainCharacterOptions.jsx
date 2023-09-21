import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../context/AppContext'

export const MainCharacterOptions = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter, fight} = currentAppState
    const {currentTurn, currentEnemy} = fight
    const {stats} = MainCharacter

    const handleLoss =()=>{
        if(MainCharacter.hp.value <= 0){
            setCurrentAppState(state=>{
                return {
                    ...state,
                    button: {
                        ...state.button,
                        activated: true
                    },
                    fight: {
                        ...state.fight, 
                        isFighting: false,
                        currentEnemy: {},
                        currentTurn: 'mainCharacter',
                    },
                    events: [
                        `${'You have lost.'}`,
                        `${'You have been badly wounded. It would be best to retire and lay low for now.'}`,
                        ...state.events
                    ]
                }
            })
        }else {
            return
        }
    }

    useEffect(() => {
      handleLoss()
    
    }, [MainCharacter.hp.value])

    const handleFlee =()=>{
        let chanceOfFleeing = (stats.dex.value + (currentEnemy.agi - stats.dex.value)) + (Math.floor(Math.random() * stats.dex.value))
        console.log(chanceOfFleeing)
        if (chanceOfFleeing > (currentEnemy.agi * 2)){
            setCurrentAppState(state=>{
                return {
                    ...state,
                    button: {
                        ...state.button,
                        activated: true
                    },
                    fight: {
                        ...state.fight, 
                        isFighting: false,
                        currentEnemy: {},
                        currentTurn: 'mainCharacter',
                    },
                    events: [
                        `${'You have managed to escape from the enemy!'}`,
                        ...state.events
                    ]
                }
            })
        }else {
            Object.values(currentEnemy.skills)[0].effect(currentEnemy.atk, setCurrentAppState, MainCharacter);
            setCurrentAppState(state=>{
                return{
                    ...state,
                    fight: {
                        ...state.fight,
                        currentTurn: 'mainCharacter'
                    },
                    events: [
                        `${currentEnemy.name + ' has stopped you from fleeing' + '!'}`,
                        `${currentEnemy.name + ' has used ' + Object.values(currentEnemy.skills)[0].name + '!'}`,
                        ...state.events
                    ]
                }
            })
        }
    }
    

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
            <button className="mc-displayer-options-button" onClick={handleFlee}>Flee</button>

        </div>
    )
}
