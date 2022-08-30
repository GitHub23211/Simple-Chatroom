function SendMsg ({sendMsg, currMsg, onChange}) {
    return (
        <form onSubmit={sendMsg}>
            <input value={currMsg} onChange={onChange}></input>
            <button>
                Send
            </button>
        </form>
    )
}

export default SendMsg