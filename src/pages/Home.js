import {Form} from '../components'

function Home({toRegister, user, setUser}) {
  if(!user) {
      return (
        <div style={style.container} className="container">
          <h1 style={style.text}> {toRegister ? "Register for Free!" : "Welcome Back!"} </h1>
          <div>
              <Form toRegister={toRegister} setUser={setUser}/>
          </div>
      </div>
    )
  }
  else {
    return (
    <div style={style.container} className="container">
      <h1 style={style.text}>Hi! View Your Conversations!</h1>
    </div>
    )
  }
  
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