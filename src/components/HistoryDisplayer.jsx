import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const HistoryDisplayer = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {events} = currentAppState

    const onClear=()=>{
        setCurrentAppState(state=>{
            return {
                ...state,
                events: []
            }
        })
    }
    return (
        <div className="history-displayer mainWrapper__container">

            <div className="history-displayer-manager">
                {/* <h1>History</h1> */}
                <button onClick={onClear}>Clear</button>
            </div>

            <ul className="history-displayer-list">
                {
                    events.map((u, i)=>
                        <li key={i} className="history-displayer-list-item">
                            {u}
                        </li>
                    )
                }

            </ul>
            
        </div>
    )
}
