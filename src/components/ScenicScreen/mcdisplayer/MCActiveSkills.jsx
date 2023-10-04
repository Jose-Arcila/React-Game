import { useContext, useState } from "react"
import { AppContext } from "../../../context/AppContext"
import { ActiveSkill } from "./ActiveSkill"

export const MCActiveSkills = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    const {skills} = MainCharacter
    let displaySkills = {}

    for (const [key, value] of Object.entries(skills)) {
        if(value.class === "active" && value.combatSkill === true){
            displaySkills[key] = value
        }else{
            console.log('nom')
        }
      }

  return (
    <div className="active-skills-container">
        {
            Object.values(displaySkills).map((u, i)=>
                <ActiveSkill 
                    key={i}
                    name={u.name}
                    description={u[Function('return ' + '"' + 'description' + u.level + '"')()]}
                    level={u.level}
                />
            )
        }
    </div>
  )
}
