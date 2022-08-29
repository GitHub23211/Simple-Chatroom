function Login ({loginUser}) {
    return (
        <form onSubmit={loginUser}>
            <input onChange={console.log('typing')}></input>
            <input onChange={console.log('typing')}></input>
            <button type="submit">
                Login
            </button>
        </form>
    )
}

export default Login