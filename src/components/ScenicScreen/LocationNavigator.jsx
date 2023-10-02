import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const LocationNavigator = ({nombreBoton}) => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {currentLocation} = currentAppState
    const {availableSubLocations} = currentLocation
    

    const changeSubscreen=(name)=>{
        Object.values(availableSubLocations).map((u, i)=>{
            setCurrentAppState(state=>{
                return{
                    ...state,
                    currentLocation: {
                        ...currentLocation,
                        availableSubLocations: {
                            ...availableSubLocations,
                            [u.name]: {
                                ...availableSubLocations[u.name],
                                isSelected: "background-normal"
                            },
                            TwistedTree: {
                                ...availableSubLocations.TwistedTree,
                                isSelected: "background-normal"
                            },
                            [name]: {
                                ...availableSubLocations[name],
                                isSelected: "background-reversed"
                            }
                        }
                    }
                }
            })
        })
  
    }

    return (
        <div className="location-navigator">

            <h1>{currentLocation.label}</h1>

            {
                Object.values(availableSubLocations).map((u, i)=>
                    <h2 onClick={()=>changeSubscreen(u.name)} key={i} className={"navigator-sublocation-name" + ' ' + u.isSelected }>
                        {u.label}
                    </h2>
                )    
            }
            
        </div>
    )
}
