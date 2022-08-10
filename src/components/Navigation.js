import Link from './Link'

function Navigation({view}) {
    return (
        <header style={style.header}>
            <div style={style.logo}>CHAT</div>
                <div className='nav-menu' style={style.menu}>
                <Link func={view} label="Home" style={style.div}/>
                <Link func={view} label="Conversations" style={style.div}/>
                <Link func={view} label="Profile" style={style.div}/>
            </div>
        </header>
    )
}

const style = {
    logo: {
        gridColumn: 1,
        display: 'inlineBlock',
        textAlign: 'center',
        fontSize: '250%',
        fontWeight: 'bold',
        marginRight: '50%',
        marginLeft: '5%',
    },

    header: {
        borderBottom: 'solid 1px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        padding: '0.3% 0% 0.3% 0%'
    },

    menu: {
        gridColumn: 2,
        display: 'flex',
        flexWrap: 'nowrap'
    },
      
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
}

export default Navigation