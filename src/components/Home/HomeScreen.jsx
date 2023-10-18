import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const HomeScreen = () => {
    const {currentAppState, setCurrentAppState} = useContext(AppContext)
    const {furnishing, house} = currentAppState
    console.log(house)
  return (
    <div className="home-screen">
        <h1>Home</h1>
        <hr />
        <div className="columns-container">
            <div className="columns-container-column left-column">
                <div className="home-screen-house">
                    <div className="home-announce">
                        <h3>Home:</h3>
                        <hr />
                        <p>{house.takenSpace}/{house.space}</p>
                    </div>
                    <div className="home-container">
                        {house.name}
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Furnishing</th>
                            <th>Space</th>
                            <th>Owned</th>
                        </tr>
                        {
                            Object.values(furnishing).map((u,i)=>
                                u.slot !== 'home'?
                                    <tr key={i}>
                                        <td>{u.label}</td>
                                        <td>{u.space}</td>
                                        <td>{u.quantity}</td>
                                    </tr>
                                : null
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="columns-container-column right-column">

            </div>
        </div>
    </div>
  )
}
