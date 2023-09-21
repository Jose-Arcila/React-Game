export const SkillDescription = ({skillName, skillDescription, skillLevel, skillCooldown}) => {
  return (
    <div className="skill-description">
        <h2>{skillName}</h2>
        <p>level {skillLevel}</p>
        <p>{skillDescription}</p>
    </div>
  )
}
