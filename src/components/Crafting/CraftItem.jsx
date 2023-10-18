import { useContext, useState } from "react"
import { CraftInfo } from "./CraftInfo"
import { AppContext } from "../../context/AppContext"
import { eventRelated, exprelated, inventoryRelated } from "../../Data/importantFunctions"
import { availableCrafts } from "../../Data/AvailableCrafts"


export const CraftItem = ({name, label, requirements, requantities, perequirements, perequantities, level, slot, space}) => {
    const [isShowingInfo, setIsShowingInfo] = useState(false)

    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {furnishing, inventory, house} = currentAppState
    // console.log(space)
    const handleCraft =()=>{
      if((house.space - house.takenSpace)  > space){
        if(perequirements){
          let isQuantity = 0
          for (let index = 0; index < Object.values(requirements).length; index++) {
            if(currentAppState.inventory[Object.values(requirements)[index]].quantity >= Object.values(requantities)[index]){
              isQuantity++
            }else {
              eventRelated.addEvent('Not enough materials.', setCurrentAppState)
              return
            }   
          }
          for (let index = 0; index < Object.values(perequirements).length; index++) {
            if(currentAppState.inventory[Object.values(perequirements)[index]].quantity >= Object.values(perequantities)[index]){
              isQuantity++
            }else {
              eventRelated.addEvent('Not enough tools.', setCurrentAppState)
              return
            }   
          }
          if(isQuantity === (Object.values(requantities).length + Object.values(perequantities).length)){
            if(currentAppState.navigatorButtons.fifthButton.name !== 'Home'){
              setCurrentAppState(state=>{
                return {
                  ...state,
                  navigatorButtons: {
                    ...state.navigatorButtons,
                    fifthButton: {
                      name: 'Home',
                      screenName: 'Home',
                      imgSrc: './skill-icon.svg'
                    }
                  }
                }
              })
            }
            if(slot==='furniture'){
              inventoryRelated.addFurniture(name, setCurrentAppState, furnishing, availableCrafts, level)
              setCurrentAppState(state=>{
                return {
                  ...state,
                  house: {
                    ...state.house,
                    takenSpace: state.house.takenSpace + space
                  }
                }
              })
            }else if(slot==='inventory'){
              let currentItem = availableCrafts[level][name]
              inventoryRelated.addCraftItem(name, setCurrentAppState, inventory, availableCrafts, level)
            }
            eventRelated.addEvent(`You have crafted a ${label}.`, setCurrentAppState)
            Object.values(requirements).map((u, i)=> 
              inventoryRelated.removeCraftItem(currentAppState.inventory[u].name, setCurrentAppState, Object.values(requantities)[i])
            )
          }
  
        }else {
          let isQuantity = 0
          for (let index = 0; index < Object.values(requirements).length; index++) {
            if(currentAppState.inventory[Object.values(requirements)[index]].quantity < Object.values(requantities)[index]){
              eventRelated.addEvent('Not enough materials.', setCurrentAppState)
              return
            }else {
              isQuantity++
              if(isQuantity === Object.values(requantities).length){
                if(currentAppState.navigatorButtons.fifthButton.name !== 'Home'){
                  setCurrentAppState(state=>{
                    return {
                      ...state,
                      navigatorButtons: {
                        ...state.navigatorButtons,
                        fifthButton: {
                          name: 'Home',
                          screenName: 'Home',
                          imgSrc: './skill-icon.svg'
                        }
                      }
                    }
                  })
                }
                if(slot==='furniture'){
                  inventoryRelated.addFurniture(name, setCurrentAppState, furnishing, availableCrafts, level)
                  setCurrentAppState(state=>{
                    return {
                      ...state,
                      house: {
                        ...state.house,
                        takenSpace: state.house.takenSpace + space
                      }
                    }
                  })
                }else if(slot==='inventory'){
                  let currentItem = availableCrafts[level][name]
                  inventoryRelated.addCraftItem(name, setCurrentAppState, inventory, availableCrafts, level)
                }
                eventRelated.addEvent(`You have crafted a ${label}.`, setCurrentAppState)
                Object.values(requirements).map((u, i)=> 
                  inventoryRelated.removeCraftItem(currentAppState.inventory[u].name, setCurrentAppState, Object.values(requantities)[i])
                )
              }
            }   
          }
        }
      }else{
        eventRelated.addEvent(`You don't have enough space.`, setCurrentAppState)
      }
    }

  return (
    <div className="craft-item universal-border" >
        <h1>{label}</h1>
        <button className="craft-item-button universal-border" onClick={handleCraft} onMouseOver={()=>setIsShowingInfo(true)} onMouseLeave={()=>setIsShowingInfo(false)}>
          Craft
          {
              isShowingInfo &&
                <CraftInfo 
                  label={label}
                  requirements={requirements}
                  requantities={requantities}
                  perequirements={perequirements}
                  perequantities={perequantities}

                />
          }
        </button>
       
        
    </div>
  )
}
