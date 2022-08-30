import Message from './Message'

function Conversation({createConvo, myConvos}) {
    
    return(
        <>
            <ul>
                {myConvos}
            </ul>
            <form onSubmit={createConvo}>
                <input onChange={console.log('typing')}></input>
                <button>
                    Create Conversation
                </button>
            </form>
        </>
    )
}

const style = {
    
}


export default Conversation