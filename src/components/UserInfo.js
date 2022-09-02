import {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {auth} from '../services'

function UserInfo({user, setUser}) {
    const [username, setUsername] = useState("")
    const setName = () => {
        console.log(user)
        auth.getUser(user).then(response => {console.log(response); setUsername(response.username)})
    }

    const navigate = useNavigate()

    const logoutUser = () => {
        setUser(null)
        navigate('/')
    }


    useEffect(setName, [])
    console.log("user is ", username)

    return(
        <div>
            <h6>{username}</h6>
            <Link to="/profile">Profile</Link>
            <button onClick={logoutUser}>logout</button>
        </div>
    )
}

export default UserInfo