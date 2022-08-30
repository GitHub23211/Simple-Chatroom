function Registration ({registerUser, onChange}) {
    return (
        <form onSubmit={registerUser}>
            <input onChange={onChange[0]}></input>
            <input onChange={onChange[1]}></input>
            <button type="submit">
                Register
            </button>
        </form>
    )
}

export default Registration