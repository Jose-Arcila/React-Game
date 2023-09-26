import { useState } from "react"
import { SkillDescription } from "./SkillDescription"


export const SkillItem = ({name, label, level, cooldown, description}) => {

    const [showSkill, setShowSkill] = useState(false)

    const handleShowSkill=()=> setShowSkill(true)
    const handleHideSkill=()=> setShowSkill(false)

  return (
    <div onMouseOver={handleShowSkill} onMouseOut={handleHideSkill} className='skills-container-skill'>
        <h2>{name}</h2>
        <p>level {level}</p>
        {
            showSkill && <SkillDescription 
                skillName={name}
                skillDescription={description}
                skillLevel={level}
                skillCooldown={cooldown + `${level}`}
            />
        }
    </div>
  )
}
