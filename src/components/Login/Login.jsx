import './login.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setConected, setUser } from '../../features/loginSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
  const login = useSelector((state)=>state.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] =useState('')
  const [mdp, setMdp] =useState('')

  const tryLogin = () => {
    let valid = false
    login.users.forEach(user => {
      if (user.email === email && user.mdp === mdp) {
        valid = true
        dispatch(setConected(true))
        dispatch(setUser(user))
        navigate('/home')
      }
    });
    if (!valid) {
      alert('email ou mot de passe incorrect')
    }
  }

  return(
    <div className="Login">
      <h1>Page de connexion</h1>
      {login.connected ?
        <h1>déjà connecté</h1>
        ://ou...
        <div>
            <input placeholder='entrez votre email' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder='entrez votre mot de passe' value={mdp}
            onChange={(e)=>{setMdp(e.target.value)}}></input>
            <button onClick={tryLogin}>login</button>
        </div>
      }
    </div>
  )

}

export default Login
