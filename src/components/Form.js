function Form ({onSubmit, sendMsg}) {
    return (
        <form onSubmit={onSubmit}>
            <input></input>
            <button type="submit" onClick={sendMsg}>
                Send
            </button>
        </form>
    )
}

export default Form