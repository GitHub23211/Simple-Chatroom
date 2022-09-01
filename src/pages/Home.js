import {useState} from 'react'
import Registration from './Registration'

function Home() {
    const [needRegister, setNeedRegister] = useState(true)
  
    if(needRegister) {
      return (
        <Registration />
      )
    }
    return (
      <p>Hi</p>
    )
}

export default Home