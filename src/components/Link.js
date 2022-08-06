function Link ({func, label}) {
    return (
     <div onClick={func}>
       {label}
     </div>
    )
 }

 export default Link