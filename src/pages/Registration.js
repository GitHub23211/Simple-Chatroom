import {useState} from 'react'
import {auth} from '../To be categorised'
import {Form} from '../components'

function Registration() {
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
  
    const chooseLogin = (event) => {
    console.log(event)
    }
    return (
        <div style={style.container} className="container">
        {/* <div className="row" style={style.div}>
              <h2 style={style.text}>Register</h2>
              <div style={style.buttons}>
                <a class="button button-primary" onClick={chooseLogin}>Login</a>
                <button type="button" class="button button-primary" onClick={chooseLogin}>Register</button>
            </div>
          </div> */}
          <h1 style={style.text}> Welcome Back!</h1>
          <div>
              <Form registerUser={registerNewUser} onChange={[onChangeRegisterFormName, onChangeRegisterFormPassword]}/>
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

  
export default Registration