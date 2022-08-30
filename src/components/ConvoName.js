function ConvoName ({convo, getConvo}) {
    return(
        <li data-id={convo.id} onClick={getConvo}> {convo.title}</li>
    )
}

const style = {

}


export default ConvoName