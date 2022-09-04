import { useEffect, useState } from "react"
import {auth, profileService} from '../services'

const editProfileForm = (editProfile, generateAvatar) => {
    return (
        <form onSubmit={editProfile}>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="username">Username</label>
                    <input className="u-full-width" type="text" id="username"/>
                </div>
                <div className="six columns">
                    <label htmlFor="password">Password</label>
                    <input className="u-full-width" type="text" id="password"/>
                </div>
            </div>

            <label htmlFor="bio">Bio</label>
            <textarea style={style.textarea} id="bio" className="u-full-width" rows="30" cols="50"/>

            <div style={style.bottom}>
                <div style={style.avatar}>
                    <div style={style.avatarForm}>
                        <input type="text" id="avatar" placeholder="Type in a word!"/>
                        <button onClick={generateAvatar}>Generate Avatar</button>
                    </div>
                </div>
                <input style={style.submit} className="button button-primary" type="submit"/>
            </div>
        </form>
    )
}

const showUserInfo = (userInfo) => {
    return (
        <div>
            <label htmlFor="bio">Bio</label>
            <p>{userInfo.bio}</p>
        </div>
    )
}

function Profile({user}) {
    const [userInfo, setUserInfo] = useState({})
    const [avatar, setAvatar] = useState("")
    const [editMode, setEditMode] = useState(false)

    const getUser = () => {
        auth.getUser(user).then(response => {setUserInfo(response); setAvatar(response.avatar)})
    }

    const generateAvatar = (event) => {
        event.preventDefault()
        setAvatar(`https://robohash.org/${event.target.previousSibling.value}`)
    }

    const editProfile = (event) => {
        event.preventDefault()
        const infoToUpdate = sanitiseInputs(event.target)
        profileService.updateProfile(userInfo.id, infoToUpdate)
                      .then(response => setEditMode(false))
    }

    const sanitiseInputs = (target) => {
        let InfoToUpdate = {}
        for(let i = 0; i < 4; i++) {
            if(target[i].value != "" && target[i].value != null) {
                InfoToUpdate[target[i].id] = target[i].value
                if(i === 3) {
                    InfoToUpdate[target[i].id] = `https://robohash.org/${target[i].value}`
                }
            }
        }
        return InfoToUpdate
    }

    useEffect(getUser, [editMode])

    return(
        <div style={style.container} className="container">

                <div style={style.picContainer}>
                    <img style={style.pic} src={avatar} alt="user avatar"/>
                </div>

                <div style={style.top}>
                    <span style={style.nameContainer}><h1 style={style.name}>{userInfo.username}</h1></span>
                </div>

                <div style={style.edit}>
                    <button onClick={() => setEditMode(!editMode)}>Edit User Profile</button>
                </div>

                {editMode ? editProfileForm(editProfile, generateAvatar) : showUserInfo(userInfo) }
        </div>
    )
}

const style = {
    container: {
        marginTop: "3rem"
    },

    textarea: {
        resize: "none"
    },

    info: {
        display: "flex",
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

    edit: {
        textAlign: "center",
        paddingBottom: "1rem"
    },

    picContainer: {
        textAlign: "center"
    },

    pic: {
        height: "90%",
        width: "20%"
    },

    bottom: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center"
    },

    avatar: {
        flexGrow: 2,
        display: "flex",
        gap: "1rem"
    },

    avatarForm: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem"
    },

    submit: {
        flexGrow: 1,
        marginBottom: "1rem"
    },
}

export default Profile