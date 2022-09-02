import Reaction from './Reaction'

function ReactionList({convoId, msgId}) {
    
    const emojis = ['\u{1F44D}', '\u{1F44E}', '\u{1F44F}', '\u{1F600}', '\u{1F606}',
    '\u{1F60E}', '\u{1F60F}', '\u{1F610}', '\u{1F612}', '\u{1F614}', 
    '\u{1F620}', '\u{1F622}', '\u{1F62D}', '\u{1F634}', '\u{1F602}'
    ]
    
    return (
        <>
            <div>
                {emojis.slice(0, 5).map(e => <Reaction convoId={convoId} msgId={msgId} key={emojis.indexOf(e)} emoji={e}/>)}
            </div>

            <div>
                {emojis.slice(5, 10).map(e => <Reaction convoId={convoId} msgId={msgId} key={emojis.indexOf(e)} emoji={e}/>)}
            </div>

            <div>
                {emojis.slice(10, 15).map(e => <Reaction convoId={convoId} msgId={msgId} key={emojis.indexOf(e)} emoji={e}/>)}
            </div>
        </>
    )
}

export default ReactionList