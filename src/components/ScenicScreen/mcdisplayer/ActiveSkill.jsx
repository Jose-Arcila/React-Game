export const ActiveSkill = ({name, description, level}) => {
  return (
    <div className="active-skill">
        <div className="flex-row-apart">
          <h1>{name}</h1>
          <p>{level}</p>
        </div>
        <hr />
        <p>{description}</p>
    </div>
  )
}
