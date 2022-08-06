import {Messages, Link, Home} from './components'
import {useState} from 'react'

function App() {
  const [view, setView] = useState(<Home/>)
  
  return (
    <>
      {view}
      <Link func={() => setView(<Messages/>)} label="Messages"/>
    </>
  );
}


export default App;
