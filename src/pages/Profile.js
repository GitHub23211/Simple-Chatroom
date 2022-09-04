import { useEffect, useState } from "react"
import {auth} from '../services'
import pic from '../components/placeholder_avatar.png'


const editProfileForm = () => {
    return (
        <form>
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
            <textarea style={style.textarea} className="u-full-width" rows="30" cols="50"/>

            <div style={style.bottom}>
                <div style={style.upload}>
                    <label htmlFor="upload">Upload Avatar</label>
                    <input className="button" type="file" id="upload"/>
                </div>
                <input style={style.submit}className="button button-primary" type="submit"/>
            </div>
        </form>
    )
}

const showUserInfo = () => {

}

function Profile({user}) {
    const [userInfo, setUserInfo] = useState({})
    const [editMode, setEditMode] = useState(false)

    const getUser = () => {
        auth.getUser(user).then(response => setUserInfo(response))
    }

    useEffect(getUser, [])

    return(
        <div style={style.container} className="container">

                <div style={style.picContainer}>
                    <img style={style.pic} src={pic} alt="user profile picture"/>
                </div>

                <div style={style.top}>
                    <span style={style.nameContainer}><h1 style={style.name}>{userInfo.username}</h1></span>
                    <button style={style.edit} onClick={() => setEditMode(!editMode)}>Edit User Profile</button>
                </div>

                {editMode ? editProfileForm() : showUserInfo() }
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

    bottom: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center"
    },

    upload: {
        flexGrow: 2
    },

    submit: {
        flexGrow: 1,
        marginTop: "1rem"
    },

    top: {
        display: "flex",
        flexWrap: "wrap"
    },

    nameContainer: {
        flexGrow: 5,
        marginLeft: "2rem"
    },

    name: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxWidth: "35vw"
    },

    edit: {
        flexGrow: 1,
        marginTop: "2rem"
    },


    picContainer: {
    },

    pic: {
        height: "90%",
        width: "20%"
    }
}

export default Profile