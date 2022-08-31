function Message ({msg, onClick}) {
    return(
        <>
            <li style={style.message} data-id={msg.id} onClick={onClick}>
                {msg.text}
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