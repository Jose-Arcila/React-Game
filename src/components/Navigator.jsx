import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Navigator = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext);

    const navigatorButtons = {
        firstButton: {
            name: 'Search',
            screenName: 'ScenicScreen',
            imgSrc: '../src/assets/images/search-icon.svg',
        },
        secondButton: {
            name: 'Inventory',
            screenName: 'Inventory',
            imgSrc: '../src/assets/images/inventory-icon.svg',
        },
        thirdButton: {
            name: '???',
            screenName: '???',
            imgSrc: '../src/assets/images/question-icon.svg',
        },
        fourthButton: {
            name: '????',
            screenName: '????',
            imgSrc: '../src/assets/images/question-icon.svg',
        }
    }

    const handleNavigatorButton = (u) => {
        setCurrentAppState(state => {
            return {
                ...state,
                screenName: u.screenName
            }

        })
    }

    return ( 
        <div className="mainWrapper__container navigator">

            {
                Object.values(navigatorButtons).map(u=>
                    <div className={"navigator__button"} onClick={()=>handleNavigatorButton(u)} key={u.name}>
                        <p className={'navigator__button_name'}>{u.name}</p>
                        <img src={u.imgSrc} alt="icon"/>
                    </div>
                    
                )
            }
        </div>
    )
}
