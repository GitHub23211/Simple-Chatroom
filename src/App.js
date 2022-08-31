import {Registration, Conversation, ConversationList, Home} from './components'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {auth} from './To be categorised'

function TestPage() {
  const [currentUser, changeUser] = useState({token: "630e072e6af13c96e18cf4aa"})
  
  const registerNewUser = (event) => {
    auth.registerUser(event)
    .then(response => {
      if(response.token) {
        changeUser(response)
        console.log("registration succcess", currentUser)
      }
      console.log(currentUser)
      console.log(response)
    })
  }

  const onChangeRegisterFormName = (event) => {
    console.log(event.target.value)
  }

  const onChangeRegisterFormPassword = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Registration registerUser={registerNewUser} onChange={[onChangeRegisterFormName, onChangeRegisterFormPassword]}/>
    </>
  )
}

function App() {
  const [currentUser, changeUser] = useState({token: "630e072e6af13c96e18cf4aa"})

  return (
    <Router>
        <header style={style.header}>
          <div style={style.logo}>CHAT</div>
            <div className="nav-menu" style={style.menu}>
              <Link style={style.link} to="/">Home</Link>
              <Link style={style.link} to="/conversations">Conversations</Link>
              <Link style={style.link} to="/registration">Registrations</Link>
            </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/registration" element={<TestPage />}/>
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
