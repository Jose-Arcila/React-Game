import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'


export const MCHpBar = ({health, maxhealth, magic, maxmagic, name, stamina}) => {
    const {currentAppState} = useContext(AppContext)
    const {MainCharacter} = currentAppState
    return (
        <div className="status-bar">
            
            <h2>{name}</h2>

            <div className="mc-status-bar-bars">
                <div className="status-bar-bars-is health">
                    <div className="bar">
                        <p>HP {health}/{maxhealth}</p>
                    </div>
                </div>
                <div className="status-bar-bars-is stamina">
                    <div className="bar">
                        <p>Stamina {stamina.value}/{stamina.maxvalue}</p>
                    </div>
                </div>
                {/* {
                    MainCharacter.skills.magicDetection.has &&
                    <div className="status-bar-bars-magic">
                        <p>{magic}/{maxmagic}</p>
                    </div>
                }  */}
                
            </div>

        </div>
    )
}
