function Navigation() {
    return (
        <>
            <div style={style.logo}>CHAT</div>
                <div className='nav-menu' style={style.menu}>
                <div style={style.div}>Home</div>
                <div style={style.div}>Conversations</div>
                <div style={style.div}>Profile</div>
            </div>
        </>
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