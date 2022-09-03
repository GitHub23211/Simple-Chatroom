function Profile() {

    return(
        <div style={style.container} className="container">
                <form>
                    <div classNmae="row">
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

                    <label htmlFor="upload">Upload Avatar</label>
                    <input className="button" type="file" id="upload"/>
                </form>
        </div>
    )
}

const style = {
    container: {
        marginTop: "5rem"
    },

    textarea: {
        resize: "none"
    }
}

export default Profile