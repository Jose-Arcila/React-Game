import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/AppContext'
import { buttonRelated, countRelated, exprelated, skillsRelated } from '../../../Data/importantFunctions'
import { availableSkills } from '../../../Data/AvailableSkills'
import { MCActiveSkills } from './MCActiveSkills'

export const MainCharacterOptions = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter, fight, countThings, button} = currentAppState
    const {currentTurn, currentEnemy} = fight
    const {stats} = MainCharacter
    const {changeCountThings} = countRelated
    const {addSkill} = skillsRelated
    const {turnOnAll, turnOffAll} = buttonRelated

    const [areSkillsDisplayed, setAreSkillsDisplayed] = useState(false)

    const handleLoss =()=>{
        if(MainCharacter.hp.value <= 0){
            setCurrentAppState(state=>{
                return {
                    ...state,
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
            turnOnAll(button, setCurrentAppState)
        }else {
            return
        }
    }

    useEffect(() => {
      handleLoss()
    
    }, [MainCharacter.hp.value])

    const handleFlee =()=>{
        let chanceOfFleeing = (stats.dex.value + (currentEnemy.agi - stats.dex.value)) + (Math.floor(Math.random() * stats.dex.value))
        if (chanceOfFleeing > (currentEnemy.agi * 1.5)){
            setCurrentAppState(state=>{
                return {
                    ...state,
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
            turnOnAll(button, setCurrentAppState)
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
            const isThereItem = MainCharacter.equipment.rightHand.content
            if(isThereItem.type){
                if(isThereItem.type.includes('blunt')){
                    changeCountThings('bluntAttacks', setCurrentAppState)
                    console.log(countThings)
                    if(countThings.bluntAttacks > 9 && !MainCharacter.skills.slam){
                        addSkill('slam', setCurrentAppState)
                    }  
                }
            }else{
                changeCountThings('fistAttacks', setCurrentAppState)
                console.log(countThings)
                if(countThings.fistAttacks > 9){
                    addSkill('punch', setCurrentAppState)
                }
            }
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
            <button className="mc-displayer-options-button" onClick={()=>setAreSkillsDisplayed(true)}>Skills</button>
            {
                areSkillsDisplayed
                &&
                <MCActiveSkills />
            }

        </div>
    )
}
