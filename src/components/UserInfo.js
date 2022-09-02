import {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {auth} from '../services'

function UserInfo({user, setUser}) {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const setName = () => {
        console.log(user)
        auth.getUser(user).then(response => setUsername(response.username))
    }

    const logoutUser = () => {
        setUser(null)
        localStorage.clear()
        navigate('/')
    }

    useEffect(setName, [])

    return(
        <div>
            <h6>{username}</h6>
            <Link to="/profile">Profile</Link>
            <button onClick={logoutUser}>logout</button>
        </div>
    )
}

export default UserInfo