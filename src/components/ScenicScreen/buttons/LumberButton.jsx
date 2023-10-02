import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext';
import { buttonRelated, eventRelated, exprelated, skillsRelated } from '../../../Data/importantFunctions';

export const LumberButton = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {currentLocation, prompts, button, Locations, availableSkills, MainCharacter, navigatorButtons} = currentAppState;
    const {lumber} = button
    const {turnOnAll, turnOffAll} = buttonRelated

    const handleChopWood=()=>{
      
      if(!MainCharacter.skills.lumberjack){
        eventRelated.addEvent('You hit the broad side of a trees trunk with all your might.', setCurrentAppState)
      }

    }

  return (
    <button className='button-holder-button' onClick={handleChopWood}>
        cut wood
        <div className={lumber.currentBar}></div>
    </button>
  )
}
