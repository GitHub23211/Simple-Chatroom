import {useEffect, useState} from 'react'
import {auth} from '../To be categorised'

function UserInfo({user}) {
    const [username, setUsername] = useState("")
    const setUser = () => {
        console.log(user)
        auth.getUser(user).then(response => {console.log(response); setUsername(response.username)})
    }


    useEffect(setUser, [])
    console.log("user is ", username)

    return(
        <>
        <h1>{username}</h1>
        </>
    )
}

export default UserInfo