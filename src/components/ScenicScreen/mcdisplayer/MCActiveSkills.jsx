import { useContext, useState } from "react"
import { AppContext } from "../../../context/AppContext"
import { ActiveSkill } from "./ActiveSkill"

export const MCActiveSkills = ({setAreSkillsDisplayed}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    const {skills} = MainCharacter
    let displaySkills = {}

    for (const [key, value] of Object.entries(skills)) {
        if(value.class === "active" && value.combatSkill === true){
            displaySkills[key] = value
        }
      }

  return (
    <div className="active-skills-container" onMouseLeave={()=>setAreSkillsDisplayed(false)}>
        {
            Object.values(displaySkills).map((u, i)=>
                <ActiveSkill 
                    key={i}
                    name={u.name}
                    description={u[Function('return ' + '"' + 'description' + u.level + '"')()]}
                    level={u.level}
                    damage={u[Function('return ' + '"' + 'damage' + u.level + '"')()]}
                    cost={u.cost}
                />
            )
        }
    </div>
  )
}
