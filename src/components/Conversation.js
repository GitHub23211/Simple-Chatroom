function Conversation ({convo, deleteConvo}) {
    return(
        <li style={style.message}>
            {convo}
            <button onClick={deleteConvo}>
                Delete Conversation
            </button>
        </li>
    )
}

const style = {
    message: {
        listStyle: "none"
    }
}


export default Conversation