import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppContext';
import { buttonRelated, eventRelated, exprelated, skillsRelated, inventoryRelated } from '../../../Data/importantFunctions';
import { ButtonDescription } from './ButtonDescription';
import { AvailableItems } from '../../../Data/AvailableItems';

export const LumberButton = () => {
    const [isDescrip, setIsDescrip] = useState(false)
    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {button, MainCharacter, secondaryEvents, inventory} = currentAppState;
    const {lumber} = button
    const {woodChop} = secondaryEvents
    const {turnOnAll, turnOffAll} = buttonRelated
    const {addItem} = inventoryRelated

    let forCooldown = woodChop.cooldown * 1000

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

      }, forCooldown);
    }

  return (
    <button className={'button-holder-button ' + 'action-' +woodChop.isActive} onClick={(e)=>handleChopWood(e)} onMouseOver={()=>setIsDescrip(true)} onMouseLeave={()=>setIsDescrip(false)}>
        cut wood
        <div className={lumber.currentBar}></div>
        {
          isDescrip &&
          <ButtonDescription 
            name={'Cut Wood'}
            quantity={woodChop.quantity}
            description={'Axe meets tree.'}
            cooldown={woodChop.cooldown}
            isOn={woodChop.isActive}
          />
        }
    </button>
  )
}
