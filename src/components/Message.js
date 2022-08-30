function Message ({msg, deleteMsg}) {
    return(
        <li style={style.message}>
            {msg}
        </li>
    )
}

const style = {
    message: {
        listStyle: "none"
    }
}


export default Message