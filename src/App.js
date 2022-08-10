import {Messages, Navigation, Home} from './components'
import {useState} from 'react'

function App() {
  const [view, setView] = useState(<Home/>)

  return (
    <>
      <Navigation view={()=> console.log("click")}/>
      {view}
    </>
  );
}


export default App;
