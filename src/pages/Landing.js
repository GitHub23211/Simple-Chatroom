import {useState} from 'react'
import {auth} from '../To be categorised'
import {RegistrationForm} from '../components'

function Landing() {
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
      <div className="container">
        <div className="row"  style={style.div}>
            <div className="offset-by-four columns">
              <h2>Register now</h2>
              <button type="button" class="button button-primary">Login</button>
              <button type="button" class="button button-primary">Register</button>
            </div>
          </div>

          <div className="offset-by-three columns">
            <RegistrationForm registerUser={registerNewUser} onChange={[onChangeRegisterFormName, onChangeRegisterFormPassword]}/>
          </div>
      </div>
    )
}

const style = {
  div: {
    paddingBottom: "10%"
  }
}


export default Landing