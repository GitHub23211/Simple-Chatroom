import {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {auth} from '../services'

function UserInfo({user, setUser}) {
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()

    const getUserInfo = () => {
        auth.getUser(user).then(response => {
            setUserInfo(response)
        })
    }

    const logoutUser = () => {
        setUser(null)
        localStorage.clear()
        navigate('/')
    }

    useEffect(getUserInfo, [])

    return(
        <div style={style.container}>
            <div style={style.picContainer}>
                <img style={style.pic} src={userInfo.avatar} alt="user profile picture"/>
            </div>

            <div style={style.profile}>
                <Link to={`/profile/${userInfo.id}`}>{userInfo.username}</Link>
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
        flexGrow: 2,
    },

    pic: {
        maxHeight: "40px",
        maxWidth: "40px"
    },

    profile: {
        flexGrow: 3,
        overflow: "hidden",
        maxWidth: "15vw",
        textOverflow: "ellipsis"
    },

    logout: {
        flexGrow: 1
    }
}

export default UserInfo