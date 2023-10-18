import { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import { exprelated, skillsRelated } from "../../../Data/importantFunctions"

export const ActiveSkill = ({name, description, level, damage, cost}) => {
  
  const {currentAppState, setCurrentAppState} = useContext(AppContext)
  const {fight, MainCharacter} = currentAppState
  const {currentTurn, currentEnemy} = fight

  const handleSkillUse=()=>{
    if(currentTurn === 'mainCharacter' && MainCharacter.stamina.value >= cost){
      setCurrentAppState(state=>{
          return {
              ...state,
              fight: {
                  ...state.fight, 
                  currentEnemy: {
                      ...state.fight.currentEnemy,
                      hp: currentEnemy.hp - (state.MainCharacter.stats.str.value + damage)
                  },
                  currentTurn: 'enemy'
              },
              MainCharacter: {
                ...state.MainCharacter,
                stamina: {
                  ...state.MainCharacter.stamina,
                  value: state.MainCharacter.stamina.value - cost
                }
              },
              events: [
                  `${MainCharacter.name + ' has attacked for ' + (state.MainCharacter.stats.str.value + damage) + ' damage!'}`,
                  ...state.events
              ]
          }
      })
    } else {
      console.log('not your turn')
    }
  }

  return (
    <div className="active-skill" onClick={handleSkillUse}>
        <div className="flex-row-apart">
          <h1>{name}</h1>
          <p>{level}</p>
        </div>
        <hr />
        <p>{description}</p>
    </div>
  )
}
