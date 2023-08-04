import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const HpBar = ({health, maxhealth, magic, maxmagic, name}) => {
    const {currentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    return (
        <div className="status-bar">
            
            <h2>{name}</h2>

            <div className="status-bar-bars">
                <div className="status-bar-bars-health">
                    <div className="health-bar">
                        <p>{health}/{maxhealth}</p>
                    </div>
                </div>
                {
                    MainCharacter.skills.magicDetection.has &&
                    <div className="status-bar-bars-magic">
                        <p>{magic}/{maxmagic}</p>
                    </div>
                } 
                
            </div>

        </div>
    )
}
