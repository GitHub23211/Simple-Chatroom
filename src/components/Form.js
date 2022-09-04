import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import {auth} from '../services'

function ButtonText(toRegister, setFlag) {
    if(toRegister) {
        return (
            <div>
                <input style={style.input} className="button button-primary" type="submit" value="Register"/>
                <p onClick={() => setFlag(false)}>Already have an account? <Link to="/">Log in</Link></p> 
            </div>
        )
    }
    else {
        return (
            <div>
                <input style={style.input} className="button button-primary" type="submit" value="Log In"/>
                <p onClick={() => setFlag(false)}>Need an account? <Link to="/register">Register</Link></p> 
            </div>
        )
    }
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
    
    return (
        <form style={style.form} onSubmit={onSubmit}>

            {invalidCred ? invalidCredWarning() : <></>}
            
            <div >
                <label style={style.label} htmlFor ="username">Username</label>
                <input  style={style.input} className="u-full-width" id="username" type="text" onChange={event => updateInputField(event, setUsername)}/>
            </div>

            <div >
                <label style={style.label} htmlFor ="passwrod">Password</label>
                <input style={style.input} className="u-full-width" id="password" type="password" onChange={event => updateInputField(event, setPassword)}/>
            </div>

            {ButtonText(toRegister, setFlag)}
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
        marginLeft: "25%",
        marginBottom: "2%"
    },

    form: {
      textAlign: "center"
    }
}

export default Form