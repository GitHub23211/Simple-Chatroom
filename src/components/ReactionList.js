import Reaction from './Reaction'
import {useParams} from "react-router-dom"

function ReactionList({msgId, setReactList}) {
    const convoId = useParams().convoId
    
    const emojis = ['\u{1F44D}', '\u{1F44E}', '\u{1F44F}', '\u{1F600}', '\u{1F606}',
    '\u{1F60E}', '\u{1F60F}', '\u{1F610}', '\u{1F612}', '\u{1F614}', 
    '\u{1F620}', '\u{1F622}', '\u{1F62D}', '\u{1F634}', '\u{1F602}'
    ]

    const renderEmojis = (start, end) => {
        return(
            <div style={style.listRow}>
                {emojis.slice(start, end).map(e => <Reaction key={emojis.indexOf(e)} emoji={e} convoId={convoId} msgId={msgId} setReactList={setReactList} />)}
            </div>
        )
    }
    
    return (
        <div style={style.reactList}>
            {renderEmojis(0, 5)}
            {renderEmojis(5, 10)}
            {renderEmojis(10, 15)}
        </div>
    )
}

const style = {
    reactList: {
        display: "inline-block",
        marginTop: "1rem"
    },

    listRow: {
        display: "flex",
        alignItems: "center"
    }
}

export default ReactionList