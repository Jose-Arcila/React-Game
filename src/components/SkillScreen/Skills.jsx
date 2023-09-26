import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { SkillDescription } from './SkillDescription.jsx'
import { SkillItem } from './SkillItem'


export const Skills = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    const {skills} = MainCharacter

  return (
    <div className='skills'>
        <h1>Skills</h1>

        <div className='skills-container'>

            {
                Object.values(skills).map( ( u, i )=> 
                    <SkillItem 
                        key={i}
                        name={u.name}
                        description={eval('u.description' + u.level)}
                        label={u.label}
                        level={u.level}
                        cooldown={u.cooldown}
                    />
                )
            }

        </div>
    </div>
  )
}
