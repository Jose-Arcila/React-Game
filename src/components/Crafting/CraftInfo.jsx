import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const CraftInfo = ({label, requirements, requantities, perequirements, perequantities}) => {
  const {currentAppState, setCurrentAppState} = useContext(AppContext)
  return (
    <div className="craft-info universal-border">
      {label}
      <hr />
      <b>Needs:</b>
      <div className="needs-container">
        <div className="needs-container-column column-left">
          {
            Object.values(requirements).map((u,i)=>
              <p key={i}>{u}:</p>
            )
          }
        </div>
        <div className="needs-container-column column-right">
          {
            Object.values(requantities).map((u,i)=>
              <p key={i}>{u}</p>
            )
          }
        </div>
      </div>
      {
        perequirements?
        <>
          <b>requires:</b>
          <div className="needs-container">
          <div className="needs-container-column column-left">
            {
              Object.values(perequirements).map((u,i)=>
                <p key={i}>{u}:</p>
              )
            }
          </div>
          <div className="needs-container-column column-right">
            {
              Object.values(perequantities).map((u,i)=>
                <p key={i}>{u}</p>
              )
            }
          </div>
          </div>
        </>
        :
        null
      }
    </div>
  )
}
