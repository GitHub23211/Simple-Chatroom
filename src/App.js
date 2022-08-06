import {Messages, Link, Home} from './components'
import useState from 'react'

function App() {
  return (
    <>
      <Home/>
      <Link func={() => console.log("clicked")} label="Messages"/>
    </>
  );
}


export default App;
