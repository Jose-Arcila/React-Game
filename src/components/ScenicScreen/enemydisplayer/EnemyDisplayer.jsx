import { useContext, useEffect } from 'react'
import { AppContext } from '../../../context/AppContext'
import { HpBar } from '../../HpBar'

export const EnemyDisplayer = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {fight, MainCharacter, inventory} = currentAppState
    const {currentEnemy, currentTurn} = fight

    const currentAvailableEnemyAttacks = {
        ...currentEnemy.skills
    }

    const randomAttackSelector = Object.values(currentAvailableEnemyAttacks)[0]

    useEffect(() => {
        if(currentEnemy.agi > MainCharacter.stats.dex.value){
            setCurrentAppState(state=>{
                return{
                    ...state,
                    fight: {
                        ...state.fight,
                        currentTurn: 'enemy'
                    }
                }
            })
        }
        return () => {
            setCurrentAppState(state=>{
                return{
                    ...state,
                    fight: {
                        ...state.fight,
                        currentTurn: 'mainCharacter'
                    }
                }
            })
        }
    }, [])

    useEffect(() => {
        if(currentTurn === 'enemy'){
            if(0 < currentEnemy.hp){
                setTimeout(() => {
                    randomAttackSelector.effect(currentEnemy.atk, setCurrentAppState, MainCharacter);
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            fight: {
                                ...state.fight,
                                currentTurn: 'mainCharacter'
                            },
                            events: [
                                `${currentEnemy.name + ' has used ' + randomAttackSelector.name + '!'}`,
                                ...state.events
                            ]
                        }
                    })
                }, 300);
            } else {
                setCurrentAppState(state=>{
                    return{
                        ...state,
                        fight: {
                            ...state.fight,
                            isFighting: false,
                            currentEnemy: {},
                            currentTurn: 'MainCharacter'
                        },
                        button: {
                            ...state.button,
                            activated: true
                        },
                        events: [
                            `${currentEnemy.name + ' has died.'}`,
                            ...state.events
                        ]
                    }
                })
            }
        }
    }, [currentTurn])



    return (
        <div className="enemy-displayer">

            <HpBar 
                health={currentEnemy.hp}
                maxhealth={currentEnemy.maxhp}
                name={currentEnemy.name}
            />
            
        </div>
    )
}
