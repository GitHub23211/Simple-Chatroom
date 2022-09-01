import {Conversation, ConversationList, Form} from './components'
import { Home } from './pages'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  const [currentUser, changeUser] = useState({token: "630e072e6af13c96e18cf4aa"})

  return (
    <Router>
        <header style={style.header}>
          <div style={style.logo}>CHAT</div>
            <div className="nav-menu" style={style.menu}>
              <Link style={style.link} to="/">Home</Link>
              <Link style={style.link} to="/conversations">Conversations</Link>
            </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Home />}/>
          <Route path="/conversations" element={<ConversationList currentUser={currentUser}/>}/>
          <Route path="/conversations/:convoId" element={<Conversation currentUser={currentUser}/>}/>
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
