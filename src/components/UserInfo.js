import {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {auth} from '../services'
import pic from './1.png'

function UserInfo({user, setUser}) {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const setName = () => {
        auth.getUser(user).then(response => setUsername(response.username))
    }

    const logoutUser = () => {
        setUser(null)
        localStorage.clear()
        navigate('/')
    }

    useEffect(setName, [])

    return(
        <div style={style.container}>
            <div style={style.picContainer}>
                <img style={style.pic} src={pic} alt="user profile picture"/>
            </div>

            <div style={style.profile}>
                <Link to="/profile">{username}</Link>
            </div>

            <div style={style.logout}>
                <button onClick={logoutUser}>logout</button>
            </div>

        </div>
    )
}

const style = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "center"
    },

    picContainer: {
        flexGrow: 1,
    },

    pic: {
        maxHeight: "40px",
        maxWidth: "40px"
    },

    profile: {
        flexGrow: 1
    },

    logout: {
        flexGrow: 1
    }
}

export default UserInfo