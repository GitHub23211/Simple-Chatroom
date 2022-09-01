import {useState} from 'react'
import {Form} from '../components'

function Home({userState}) {
    const [currentUser, changeUser] = useState({token: "630e072e6af13c96e18cf4aa"})
    
    return (
        <div style={style.container} className="container">
        {/* <div className="row" style={style.div}>
              <h2 style={style.text}>Register</h2>
              <div style={style.buttons}>
                <a class="button button-primary" onClick={chooseLogin}>Login</a>
                <button type="button" class="button button-primary" onClick={chooseLogin}>Register</button>
            </div>
          </div> */}
          <h1 style={style.text}> {userState ? "Register for Free!" : "Welcome Back!"} </h1>
          <div>
              <Form userState={userState}/>
          </div>
      </div>
    )
}

const style = {
    container: {
      marginTop: "10vh"
    },
  
    div: {
      paddingBottom: "10%"
    },
  
    text: {
      textAlign: "center",
      paddingBottom: "2%"
    },
  
    buttons: {
      textAlign: "center"
    }
  }

  
export default Home