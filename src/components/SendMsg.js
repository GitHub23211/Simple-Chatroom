function SendMsg ({sendMsg, currMsg, onChange, placeholder}) {
    return (
        <form onSubmit={sendMsg}>
            <input className="u-full-width" placeholder={placeholder} value={currMsg} onChange={onChange}></input>
            <button>
                Send
            </button>
        </form>
    )
}

export default SendMsg