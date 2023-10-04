import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"

export const CraftScreen = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
  return (
    <div className="craft-screen">
        <h1>Crafting</h1>
        <hr />

        <div className="columns-container">
            <div className="columns-container-left">
              <h2>crafting</h2>
              <div className="available-crafts-craft universal-border">

              </div>

            </div>
        </div>
    </div>
  )
}
