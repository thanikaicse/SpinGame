import React from 'react'

export default function spin() {
    
    let s1=document.querySelector('.table1');
    console.log(s1);        
    console.log(s1.firstElementChild.firstElementChild.lastElementChild);
    let u=s1.firstElementChild.firstElementChild.lastElementChild;
        //console.log(s1.firstElementChild.firstElementChild.getElementsByClassName('scircle').closest);
    
        if(u.classList.contains('animationstop')){
            u.classList.replace('animationstop','animationstart');
        }else{
            u.classList.add('animationstart');    
        }
        
        console.log(u);
  return (u)
}
