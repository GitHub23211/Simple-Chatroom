import {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import {auth} from '../services'

function UserInfo({user}) {
    const [username, setUsername] = useState("")
    const setUser = () => {
        console.log(user)
        auth.getUser(user).then(response => {console.log(response); setUsername(response.username)})
    }


    useEffect(setUser, [])
    console.log("user is ", username)

    return(
        <div>
            <h6>{username}</h6>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default UserInfo