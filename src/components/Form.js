import {Link} from "react-router-dom"
import {auth} from '../To be categorised'

function newUser() {
    return (
        <div>
            <button style={style.input} class="button button-primary" type="submit">
                Register
            </button>
            <p>Already have an account? <Link to="/">Log in</Link></p> 
        </div>
    )
}

function oldUser() {
    return (
        <div>
            <button style={style.input} class="button button-primary" type="submit">
                Log In
            </button>

            <p>Need an account? <Link to="/register">Register</Link></p> 
        </div>
    )
}

function Form ({userState}) {
    const registerNewUser = (event) => {
        // auth.registerUser(event)
        // .then(response => {
        //   if(response.token) {
        //         changeUser(response)
        //         console.log("registration succcess", currentUser)
        //     }   
        //     console.log(currentUser)
        //     console.log(response)
        // })
        event.preventDefault()
        console.log("registered")
    }

    const loginUser = (event) => {
        event.preventDefault()
        console.log('logged in')
    }
    
    const onChangeRegisterFormName = (event) => {
        console.log(event.target.value)
    }
    
    const onChangeRegisterFormPassword = (event) => {
        console.log(event.target.value)
    }

    const onSubmit = userState ? registerNewUser : loginUser
    const buttonText = userState ? newUser() : oldUser()
    console.log(userState)

    return (
        <form style={style.form} onSubmit={onSubmit}>
                <div >
                    <label style={style.label} for="username">Username</label>
                    <input  style={style.input} class="u-full-width" id="username" type="text" onChange={onChangeRegisterFormName}></input>
                </div>

            <div >
                    <label style={style.label} for="passwrod">Password</label>
                    <input style={style.input} class="u-full-width" id="password" type="password" onChange={onChangeRegisterFormPassword}></input>
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