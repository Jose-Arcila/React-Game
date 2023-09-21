import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { SkillDescription } from './SkillDescription.jsx'


export const Skills = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    const {skills} = MainCharacter

    const [showSkill, setShowSkill] = useState(false)

    const handleShowSkill=()=> setShowSkill(true)
    const handleHideSkill=()=> setShowSkill(false)

  return (
    <div className='skills'>
        <h1>Skills</h1>

        <div className='skills-container'>

            {
                Object.values(skills).map( ( u, i )=> 

                    <div onMouseOver={handleShowSkill} onMouseOut={handleHideSkill} key={i} className='skills-container-skill'>
                        <h2>{u.name}</h2>
                        <p>level {u.level}</p>
                        {
                            showSkill && <SkillDescription 
                                skillName={u.name}
                                skillDescription={eval('u.description' + u.level)}
                                skillLevel={u.level}
                                skillCooldown={u.cooldown + `${u.level}`}
                            />
                        }
                    </div>
                )
            }

        </div>
    </div>
  )
}
