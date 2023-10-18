import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/AppContext';
import { buttonRelated, eventRelated, exprelated, skillsRelated, inventoryRelated, statRelated } from '../../../Data/importantFunctions';
import { ButtonDescription } from './ButtonDescription';
import { AvailableItems } from '../../../Data/AvailableItems';
import { availableSkills } from '../../../Data/AvailableSkills';

export const LumberButton = () => {
    const [isDescrip, setIsDescrip] = useState(false)
    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {button, MainCharacter, secondaryEvents, inventory} = currentAppState;
    const {skills} = MainCharacter
    const {lumber} = button
    const {woodChop} = secondaryEvents
    const {turnOnAll, turnOffAll} = buttonRelated
    const {addItem} = inventoryRelated
    const {activated} = lumber

    let changedStat = 'str'

    let skillWaittime = 10000

    if(MainCharacter.skills.lumberjack){
      skillWaittime = skills.lumberjack[Function("return " + "'" + 'cooldown' + skills.lumberjack.level + "'")()]
    }
    
    
    const handleChopWood=({target})=>{
      target.disabled = true
      setCurrentAppState(state=>{
        return {
          ...state,
          secondaryEvents: {
            ...state.secondaryEvents,
            woodChop: {
              ...woodChop,
              isActive: true,
              quantity: woodChop.quantity++
            }
          }      
        }
      })
      eventRelated.addEvent('You hit the broad side of a trees trunk with all your might.', setCurrentAppState)
      // add exp or add skill
      if(!MainCharacter.skills.lumberjack){
        skillsRelated.addSkill('lumberjack', setCurrentAppState)
      }else{
        exprelated.giveexp('lumberjack', currentAppState, setCurrentAppState)
      }
      setTimeout(() => {
        setCurrentAppState(state=>{
          return {
            ...state,
            secondaryEvents: {
              ...state.secondaryEvents,
              woodChop: {
                ...woodChop,
                isActive: false
              }
            }
          }
        })
        target.disabled = false
        addItem('SD1', 'wood', setCurrentAppState, inventory, AvailableItems, 'oneStar', 'specialDrops')
        if(skills.lumberjack.currentexp === skills.lumberjack.requiredexp){
          if(skills.lumberjack.level > 0){
            statRelated.changeStat(changedStat, setCurrentAppState, skills.lumberjack[Function("return " + "'" + 'statBonusAmount' + skills.lumberjack.level + "'")()], MainCharacter.stats[changedStat].label)
          }else{
            statRelated.changeStat(changedStat, setCurrentAppState, 1, MainCharacter.stats[changedStat].label)
          }
        }
      }, skillWaittime);
    }

  return (
   <>
     { 
      activated === true ?
      <button className={'button-holder-button ' + 'action-' +woodChop.isActive} onClick={(e)=>handleChopWood(e)} onMouseOver={()=>setIsDescrip(true)} onMouseLeave={()=>setIsDescrip(false)}>
        cut wood
        <div className={lumber.currentBar}></div>
        {
          isDescrip &&
          <ButtonDescription 
            name={'Cut Wood'}
            quantity={woodChop.quantity}
            description={'Axe meets tree.'}
            cooldown={skillWaittime/1000}
            isOn={woodChop.isActive}
          />
        }
      </button>
      :
      <button className="disabled-search-button" disabled>
        Blocked
        <div className="disabled-search-button-bar"></div>
      </button>
      }
   </>
  )
}
