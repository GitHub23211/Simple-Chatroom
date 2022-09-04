import { ConversationList, UserInfo } from './components'
import { Home, Conversation, Profile } from './pages'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { tokenService } from './services'

function App() {
  const [user, setUser] = useState(null)

  const checkForUser = () => {
    const user = localStorage.getItem('user')
    if(user) {
      setUser(user)
    }
  }

  tokenService.setToken(user)

  useEffect(checkForUser, [])

  return (
    <Router>
        <header>
        <nav style={style.nav}>
          <div style={style.logo}>
            <h1>CHAT</h1>
          </div>

          <div style={style.menu}>
            {user ? <Link style={style.link} to="/conversations">Conversations</Link> : <></>}
          </div>

          <div style={style.userinfo}>
            {user ? <UserInfo user={user} setUser={setUser}/>: <></>}
          </div>
        </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home toRegister={false} user={user} setUser={setUser}/>}/>
          <Route path="/register" element={<Home toRegister={true} user={user} setUser={setUser}/>}/>
          <Route path="/profile/:userid" element={<Profile user={user}/>}/>
          <Route path="/conversations" element={<ConversationList currentUser={user}/>}/>
          <Route path="/conversations/:convoId" element={<Conversation user={user}/>}/>
        </Routes>
    </Router>
  );
}

const style = {

  nav: {
    borderBottom: 'solid 1px',
    display: 'flex',
    alignItems: "center"
  },
  
  logo: {
    textAlign: "center",
    flexGrow: 1
  },

  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: "1rem",
    flexGrow: 3,
    textAlign: "center"
  },

  link: {
    flexGrow: 1
  },
    
  userinfo: {
    flexGrow: 1,
    textAlign: "center",
    marginLeft: "2%"
  }
}

export default App;
