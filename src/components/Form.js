import { useState } from "react"
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

function Form ({toRegister, setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const createUserInfo = () => {
        return {
            username: username,
            password: password
        }
    }

    const createSession = (event, func) => {
        event.preventDefault()
        func(createUserInfo())
            .then(response => {
                try {
                    setUser(response.token)
                    localStorage.setItem('user', response.token)
                    navigate('/conversations')
                } 
                catch {
                    console.log(response)
                }
            })
    }

    const onSubmit = toRegister ? (event) => createSession(event, auth.registerUser) : (event) => createSession(event, auth.loginUser)
    const buttonText = toRegister ? newUser() : oldUser()

    return (
        <form style={style.form} onSubmit={onSubmit}>
                <div >
                    <label style={style.label} htmlFor ="username">Username</label>
                    <input  style={style.input} className="u-full-width" id="username" type="text" onChange={event => setUsername(event.target.value)}></input>
                </div>

            <div >
                    <label style={style.label} htmlFor ="passwrod">Password</label>
                    <input style={style.input} className="u-full-width" id="password" type="password" onChange={event => setPassword(event.target.value)}></input>
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