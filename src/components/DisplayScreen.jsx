import React, { useContext, useEffect } from 'react'
import { ScenicScreen } from './ScenicScreen/ScenicScreen'
import { Inventory } from './Inventory/Inventory'
import { AppContext } from '../context/AppContext'
import { Skills } from './SkillScreen/Skills'
import { CraftScreen } from './Crafting/CraftScreen'
import { HomeScreen } from './Home/HomeScreen'

export const DisplayScreen = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext);
    const {screenName, MainCharacter, fight} = currentAppState
    const {isFighting} = fight
    const {hp, maxhp, hprecovery, stamina} = MainCharacter

    const regenValues =()=>{
        // regen health
        let newHealthValue = Math.round((currentAppState.MainCharacter.hp.value + currentAppState.MainCharacter.hprecovery) * 10)/10

        if(hp.value < maxhp && !isFighting){ 
            setCurrentAppState(state=>{
                return {
                    ...state,
                    MainCharacter: {
                        ...state.MainCharacter,
                        hp: {
                            ...state.MainCharacter.hp,
                            value: Math.round((state.MainCharacter.hp.value + state.MainCharacter.hprecovery) * 10)/10
                        }
                    }
                }
            })
        }

        // regen stamina
        let newStaminaValue = Math.round((stamina.value + stamina.recovery) * 10)/10

        if(stamina.value < stamina.maxvalue && !isFighting){
            setCurrentAppState(state=>{
                return {
                    ...state,
                    MainCharacter: {
                        ...state.MainCharacter,
                        stamina: {
                            ...state.MainCharacter.stamina,
                            value: Math.round((state.MainCharacter.stamina.value + state.MainCharacter.stamina.recovery) * 10)/10
                        }
                    }
                }
            })
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            regenValues();
        }, 1000);

        return () => {
            clearInterval(timer); // Clear the timer on unmount
        };
    }, [isFighting]);

    useEffect(() => {
      if(hp.value >= maxhp){
        setCurrentAppState(state=>{
            return {
                ...state,
                MainCharacter: {
                    ...state.MainCharacter,
                    hp: {
                        ...state.MainCharacter.hp,
                        value: maxhp
                    }
                }
            }
        })
      }
    

    }, [hp.value])

    useEffect(() => {
        if(stamina.value >= stamina.maxvalue){
          setCurrentAppState(state=>{
              return {
                  ...state,
                  MainCharacter: {
                      ...state.MainCharacter,
                      stamina: {
                          ...state.MainCharacter.stamina,
                          value: stamina.maxvalue
                      }
                  }
              }
          })
        }
      }, [stamina.value]) 

    return (
        <div className="main-screen mainWrapper__container">

            { screenName === 'ScenicScreen' ? <ScenicScreen />
                : screenName === 'Inventory' ? <Inventory />
                : screenName === 'Skills' ? <Skills />
                : screenName === 'Crafts' ? <CraftScreen />
                : screenName === 'Home' ? <HomeScreen />
                : ''
            }
        </div>
            
    )
}
