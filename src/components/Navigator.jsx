import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Navigator = () => {

    const {currentAppState, setCurrentAppState} = useContext(AppContext);

    const navigatorButtons = {
        firstButton: {
            name: 'Search',
            screenName: 'ScenicScreen',
            imgSrc: './search-icon.svg',
        },
        secondButton: {
            name: 'Inventory',
            screenName: 'Inventory',
            imgSrc: './inventory-icon.svg',
        },
        thirdButton: {
            name: '???',
            screenName: '???',
            imgSrc: './question-icon.svg',
        },
        fourthButton: {
            name: '????',
            screenName: '????',
            imgSrc: './question-icon.svg',
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
