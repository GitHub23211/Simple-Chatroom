import { ConversationList, UserInfo } from './components'
import { Home, Conversation } from './pages'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { convoService } from './services'

function App() {
  const [user, setUser] = useState(null)
  convoService.setHeaders(user)

  return (
    <Router>
        <header style={style.header}>
          <div style={style.logo}>CHAT</div>
            <div className="nav-menu" style={style.menu}>
              <Link style={style.link} to="/">Home</Link>
              <Link style={style.link} to="/conversations">Conversations</Link>
              {user ? <UserInfo style={style.link} user={user}/> : <></>}
            </div>
        </header>

        <Routes>
          <Route path="/" element={<Home toRegister={false} user={user} setUser={setUser}/>}/>
          <Route path="/register" element={<Home toRegister={true} user={user} setUser={setUser}/>}/>
          <Route path="/conversations" element={<ConversationList currentUser={user}/>}/>
          <Route path="/conversations/:convoId" element={<Conversation currentUser={user}/>}/>
        </Routes>
    </Router>
  );
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
      
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
}

export default App;
