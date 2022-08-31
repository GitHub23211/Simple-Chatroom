import {useState} from 'react'
import {auth} from '../To be categorised'
import {RegistrationForm} from '../components'

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
  
    return (
      <div className="container">
        <RegistrationForm registerUser={registerNewUser} onChange={[onChangeRegisterFormName, onChangeRegisterFormPassword]}/>
      </div>
    )
}

export default Registration