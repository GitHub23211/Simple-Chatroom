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
        listStyle: "none",
        maxWidth: "75ch",
        wordBreak: "break-all"
    }
}


export default Message