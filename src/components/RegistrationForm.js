function RegistrationForm ({registerUser, onChange}) {
    return (
        <form onSubmit={registerUser}>
            <div className="row">
                <div className="six columns">
                    <label for="username">Username</label>
                    <input class="u-full-width" id="username" type="text" onChange={onChange[0]}></input>
                </div>
            </div>

            <div className="row">
            <div className="six columns">
                    <label for="passwrod">Password</label>
                    <input class="u-full-width" id="password" type="password" onChange={onChange[1]}></input>
                </div>
            </div>

            <button class="button button-primary" type="submit">
                Register
            </button>
        </form>
    )
}

const style = {
}

export default RegistrationForm