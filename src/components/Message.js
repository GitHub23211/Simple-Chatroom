function Message ({msg, onClick}) {
    return(
        <>
            <li style={style.message}>
                {msg.text}
                <button data-id={msg.id} onClick={onClick}>
                delete
                </button>
            </li>
        </>
    )
}

const style = {
    message: {
        listStyle: "none"
    }
}


export default Message