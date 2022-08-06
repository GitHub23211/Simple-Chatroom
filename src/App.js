import View from './components/View.js'
import Link from './components/Link.js'
import useState from 'react'

function App() {
  return (
    <>
      <View.Home/>
      <Link func={() => console.log("clicked")} label="Messages"/>
    </>
  );
}


export default App;
