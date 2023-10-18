import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/AppContext'
import { buttonRelated, countRelated, exprelated, skillsRelated } from '../../../Data/importantFunctions'
import { availableSkills } from '../../../Data/AvailableSkills'
import { MCActiveSkills } from './MCActiveSkills'

export const MainCharacterOptions = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter, fight, countThings, button, secondaryEvents} = currentAppState
    const {currentTurn, currentEnemy} = fight
    const {stats} = MainCharacter
    const {changeCountThings} = countRelated
    const {addSkill} = skillsRelated
    const {turnOnAll, turnOffAll} = buttonRelated

    const getRandomEnemyAttack = Math.floor(Math.random() * Object.values(currentEnemy.skills).length);
    const randomAttackSelector = Object.values(currentEnemy.skills)[getRandomEnemyAttack]

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

    const attackEffect=(damage, setCurrentAppState, MainCharacter)=>{
        setCurrentAppState(state=>{
            return {
                ...state,
                MainCharacter: {
                    ...state.MainCharacter,
                    hp: {
                        ...state.MainCharacter.hp,
                        value: MainCharacter.hp.value - damage
                    }
                }
            }
        })
    }

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
            attackEffect(randomAttackSelector.damage, setCurrentAppState, MainCharacter);
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
                }else if(isThereItem.type.includes('cutting')){
                    changeCountThings('slashingAttacks', setCurrentAppState)
                    console.log(countThings)
                    if(countThings.slashingAttacks > 9 && !MainCharacter.skills.slam){
                        addSkill('slam', setCurrentAppState)
                    }
                    if(isThereItem.type.includes('axe')){
                        if(secondaryEvents.woodChop.quantity > 9 && !MainCharacter.skills.chop){
                            addSkill('chop', setCurrentAppState)
                        }
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
                <MCActiveSkills 
                    setAreSkillsDisplayed={setAreSkillsDisplayed}
                />
            }

        </div>
    )
}
