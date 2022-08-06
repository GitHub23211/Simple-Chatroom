import {View} from './view.js'
import {useState} from 'react'

const Link = ({func, label}) => {
   return (
    <div onClick={func}>
      {label}
    </div>
   )
}

function App() {
  return (
    <>
      <View.Home/>
      <Link func={() => console.log("clicked")} label="Messages"/>
    </>
  );
}


export default App;
