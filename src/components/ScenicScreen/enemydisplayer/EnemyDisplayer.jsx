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

    const getRandomEnemyAttack = Math.floor(Math.random() * Object.values(currentEnemy.skills).length);
    const randomAttackSelector = Object.values(currentEnemy.skills)[getRandomEnemyAttack]
    const getRandomEnemyDrop = Math.floor(Math.random() * Object.values(currentEnemy.drops).length);
    const randomDropSelector = Object.values(currentEnemy.drops)[getRandomEnemyDrop]

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
                    randomAttackSelector.effect(randomAttackSelector.damage, setCurrentAppState, MainCharacter);
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            fight: {
                                ...state.fight,
                                currentTurn: 'mainCharacter'
                            },
                            events: [
                                `${currentEnemy.name + ' has used ' + randomAttackSelector.name + '! ' + MainCharacter.name + ' has received ' + randomAttackSelector.damage + ' damage!'}`,
                                ...state.events
                            ]
                        }
                    })
                }, 300);
            } else {
                let newDrop = randomDropSelector
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
                            `${currentEnemy.name + ' has died.' + ' You have managed to obtain ' + randomDropSelector.label + ' from its carcass'}`,
                            ...state.events
                        ],
                    }
                })
                if(newDrop.quantity === 0) {
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            inventory: {
                                ...state.inventory,
                                [newDrop.name]: JSON.parse(JSON.stringify(newDrop))
                            }
                        }
                    })
                    newDrop.quantity++;
                }else if(newDrop.quantity > 0){
                    let newQuantity = newDrop.quantity++
    
                    setCurrentAppState(state=>{
                        return{
                            ...state,
                            inventory: {
                                ...state.inventory,
                                [newDrop.name]: {
                                    ...newDrop,
                                    quantity: newQuantity
                                }
                            }
                        }
                    })
                }
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
