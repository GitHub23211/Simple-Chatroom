function Registration ({registerUser}) {
    return (
        <form onSubmit={registerUser}>
            <input onChange={console.log('typing')}></input>
            <input onChange={console.log('typing')}></input>
            <button type="submit">
                Register
            </button>
        </form>
    )
}

export default Registration