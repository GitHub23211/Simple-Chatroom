import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { userService } from '../services'

function UserPage() {
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")
    const [avatar, setAvatar] = useState("")
    const userid = useParams().userid

    const getUser = () => {
        userService.displayUser(userid).then(response => {
          setUsername(response.username)
          setBio(response.bio)  
          setAvatar(response.avatar)
        })
    }

    useEffect(getUser, [])

    return(
        <div style={style.container} className="container">

                <div style={style.picContainer}>
                    <img style={style.pic} src={avatar} alt="user avatar"/>
                </div>

                <div style={style.top}>
                    <span style={style.nameContainer}><h1 style={style.name}>{username}</h1></span>
                </div>

                <div>
                    <label htmlFor="bio">Bio</label>
                    <p>{bio}</p>
                </div>

        </div>
    )
}

const style = {
    container: {
        marginTop: "3rem"
    },

    top: {
        display: "flex",
        flexWrap: "wrap",
        width: "50%",
        marginRight: "25%",
        marginLeft: "25%"
    },

    nameContainer: {
        flexGrow: 5,
        marginLeft: "1rem",
        textAlign: "center"
    },

    name: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxWidth: "35vw"
    },

    picContainer: {
        textAlign: "center"
    },

    pic: {
        height: "90%",
        width: "20%"
    }
}

export default UserPage