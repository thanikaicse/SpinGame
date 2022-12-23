import React from 'react'

export default function test() {
    alert("test called"+React.version);
    //const [n,setCount]=React.useState(0);
    //setCount(n=>n+1);
    //alert("test n:"+n);
  return (
    <div>hi test project in react version {React.version} </div>
  )
}
