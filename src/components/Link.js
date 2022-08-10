function Link ({func, label, style}) {
    return (
     <div style={style} onClick={func}>
       {label}
     </div>
    )
 }

 export default Link