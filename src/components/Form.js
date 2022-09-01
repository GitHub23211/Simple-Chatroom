import {Link} from "react-router-dom"

function Form ({registerUser, onChange}) {
    return (
        <form style={style.form} onSubmit={registerUser}>
                <div >
                    <label style={style.label} for="username">Username</label>
                    <input  style={style.input} class="u-full-width" id="username" type="text" onChange={onChange[0]}></input>
                </div>

            <div >
                    <label style={style.label} for="passwrod">Password</label>
                    <input style={style.input} class="u-full-width" id="password" type="password" onChange={onChange[1]}></input>
                </div>

            <button style={style.input} class="button button-primary" type="submit">
                Log In
            </button>

            <p>Need an account? <Link to="/register">Register</Link></p>

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