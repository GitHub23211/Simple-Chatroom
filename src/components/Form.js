import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import {auth} from '../services'

function newUser() {
    return (
        <div>
            <button style={style.input} className="button button-primary" type="submit">
                Register
            </button>
            <p>Already have an account? <Link to="/">Log in</Link></p> 
        </div>
    )
}

function oldUser() {
    return (
        <div>
            <button style={style.input} className="button button-primary" type="submit">
                Log In
            </button>

            <p>Need an account? <Link to="/register">Register</Link></p> 
        </div>
    )
}

function invalidCredWarning() {
    return (
        <div>
            Invalid username or password!
        </div>
    )
}

function Form ({toRegister, setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [invalidCred, setFlag] = useState(false)

    const navigate = useNavigate()

    const clearFields = () => {
        setUsername("")
        setPassword("")
        setFlag(false)
    }

    const createUserInfo = () => {
        if(username === "" || password === "") {
            return null
        }
        else {
            return {
                username: username,
                password: password
            }
        }
    }

    const sendUserInfo = (event, userInfo, func) => {
        event.preventDefault()
        func(userInfo)
            .then(response => {
                try {
                    if(response.token) {
                        setUser(response.token)
                        localStorage.setItem('user', response.token)
                        navigate('/conversations')
                    }
                    setFlag(true)
                } 
                catch {
                    console.log(response)
                }
            })
    }

    const createSession = (event, func) => {
        event.preventDefault()
        const userInfo = createUserInfo()
        if(userInfo) {
            setFlag(false)
            sendUserInfo(event, userInfo, func)
        }
        else {
            setFlag(true)
        }
    }

    const updateInputField = (event, func) => {
        func(event.target.value)
        setFlag(false)
    }

    const onSubmit = toRegister ? (event) => createSession(event, auth.registerUser) : (event) => createSession(event, auth.loginUser)
    const buttonText = toRegister ? newUser() : oldUser()

    console.log("reloaded component")
    
    return (
        <form style={style.form} onSubmit={onSubmit}>

            {invalidCred ? invalidCredWarning() : <></>}
            
            <div >
                <label style={style.label} htmlFor ="username">Username</label>
                <input  style={style.input} className="u-full-width" id="username" type="text" onChange={event => updateInputField(event, setUsername)}></input>
            </div>

            <div >
                <label style={style.label} htmlFor ="passwrod">Password</label>
                <input style={style.input} className="u-full-width" id="password" type="password" onChange={event => updateInputField(event, setPassword)}></input>
            </div>

            {buttonText}
        </form>
    )
}

const style = {
    label: {
        textAlign: "left",
        marginRight: "25%",
        marginLeft: "25%"
    },
    input: {
        width: "50%",
        marginRight: "25%",
        marginLeft: "25%"
    },

    form: {
      textAlign: "center"
    }
}

export default Form