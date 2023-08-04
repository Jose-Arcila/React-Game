import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const CharacterStats = () => {

    const {currentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState

    return (
        <div className="stat-value">
            {
                Object.values(MainCharacter.stats).map(u=>
                    <p className="stat-value-text" key={u.name}><strong>{u.name}:</strong> {u.value}</p>
                )
            }
            
        </div>
    )
}
