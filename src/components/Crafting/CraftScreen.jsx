import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { availableCrafts } from "../../Data/AvailableCrafts"
import { CraftItem } from "./CraftItem"

export const CraftScreen = () => {


    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {furnishing} = currentAppState
    const craft1 = {...availableCrafts.craft1}
    const bench1 = {...availableCrafts.bench1}
  return (
    <div className="craft-screen">
        <h1>Crafting</h1>
        <hr />

        <div className="columns-container">
            <div className="columns-container-left column">
              <h2>Craft</h2>
              <div className="available-crafts-craft universal-border">
                {
                  Object.values(craft1).map((u, i)=>
                    u.perequirements!==undefined?
                    <CraftItem 
                      key={i}
                      name={u.name}
                      label={u.label}
                      requirements={u.requirements}
                      requantities={u.requantities}
                      perequirements={u.perequirements}
                      perequantities={u.perequantities}
                      level={u.level}
                      slot={u.slot}
                      space={u.space}
                    />
                    :
                    <CraftItem 
                      key={i}
                      name={u.name}
                      label={u.label}
                      requirements={u.requirements}
                      requantities={u.requantities}
                      level={u.level}
                      slot={u.slot}
                      space={u.space}
                    />
                  )
                }
              </div>
              {
                furnishing.workbench&&
                <>
                  <h2>Workbench</h2>
                  <div className="available-crafts-craft universal-border">
                    {
                      Object.values(bench1).map((u, i)=>
                        u.perequirements!==undefined?
                        <CraftItem 
                          key={i}
                          name={u.name}
                          label={u.label}
                          requirements={u.requirements}
                          requantities={u.requantities}
                          perequirements={u.perequirements}
                          perequantities={u.perequantities}
                          level={u.level}
                          slot={u.slot}
                          space={u.space}
                        />
                        :
                        <CraftItem 
                          key={i}
                          name={u.name}
                          label={u.label}
                          requirements={u.requirements}
                          requantities={u.requantities}
                          level={u.level}
                          slot={u.slot}
                          space={u.space}
 
                        />
                      )
                    }
                  </div>
                </>
                
              }
            </div>
            <div className="columns-container-right column">
                
            </div>
        </div>
    </div>
  )
}
