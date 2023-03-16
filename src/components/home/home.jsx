import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser, setConected } from "../../features/loginSlice"

function Home() {
    const login = useSelector((state)=>state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch(setConected(false))
        dispatch(setUser({}))
        navigate('/')
    }

    return(
        <div>
            {login.connected ?
            <div><h1>Bienvenue {login.connectedUser.name}</h1> <button onClick={logout}>logout</button></div>
             :
            <h1>Vous n'êtes pas connecté</h1>}
        </div>
    )
}

export default Home