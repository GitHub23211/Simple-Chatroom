function Form ({onSubmit, sendMsg}) {
    return (
        <form onSubmit={onSubmit}>
            <input onChange={console.log('typing')}></input>
            <button>
                Send
            </button>
        </form>
    )
}

export default Form