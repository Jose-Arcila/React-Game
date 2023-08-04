import React, { useContext, useEffect } from 'react'
import { ScenicScreen } from './ScenicScreen/ScenicScreen'
import { Inventory } from './Inventory/Inventory'
import { AppContext } from '../context/AppContext'

export const DisplayScreen = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {screenName, MainCharacter, fight} = currentAppState
    const {isFighting} = fight
    const {hp, maxhp, hprecovery} = MainCharacter

    const regenHealth =()=>{
        setTimeout(() => {
            let newHealthValue = Math.round((hp.value + hprecovery) * 10)/10

            if(hp.value < maxhp && !isFighting){
                setCurrentAppState(state=>{
                    return {
                        ...state,
                        MainCharacter: {
                            ...state.MainCharacter,
                            hp: {
                                ...state.MainCharacter.hp,
                                value: newHealthValue
                            }
                        }
                    }
                })
            }
            // console.log(newHealthValue)
        }, 1000);
    }

    console.log('hol')

    regenHealth()

    return (
        <div className="main-screen mainWrapper__container">

            { screenName === 'ScenicScreen' ? <ScenicScreen />
                : screenName === 'Inventory' ? <Inventory />
                : 'neither'
            }
        </div>
            
    )
}
