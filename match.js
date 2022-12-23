import React from 'react'
   
export default function match() {
   
        let i;
        let s1=document.querySelector('.table1');
        let cl=s1.firstElementChild.firstElementChild.lastElementChild.getElementsByTagName('label');
        let c2=s1.firstElementChild.firstElementChild.firstElementChild;
        let temp,temp1,max_right=0,label_id;
        console.log(c2);
        console.log(cl.length);
        console.log(c2.getBoundingClientRect());
        
        /*console.log(cl[0].getBoundingClientRect());
        console.log(cl[1].getBoundingClientRect());
        console.log(cl[2].getBoundingClientRect());
        console.log(cl[3].getBoundingClientRect());
        console.log(cl[4].getBoundingClientRect());
        console.log(cl[5].getBoundingClientRect());
        console.log(cl[6].getBoundingClientRect());*/
        for(i=0;i<cl.length;i++){
            temp=cl[i].getBoundingClientRect();//mark
            temp1=c2.getBoundingClientRect();//each label
            console.log(cl[i].getBoundingClientRect());
            console.log(temp1.x,temp.x,temp1.y,temp.y,temp1.left,temp.right);
            // find greatest of temp.right, delete that name in table using lable, update delete dom
            if(((temp.right-temp1.left)<16) && (temp1.x-temp.x)<110 && ((temp1.y-temp.y)<70)||((temp.y-temp1.y)<40)&&((temp1.top-temp.right)<15 || (temp1.bottom-temp.right)<15))
            {
                console.log((i+1),temp1.x,temp.x,temp1.y,temp.y,temp1.left,temp.right,temp1.top,temp1.bottom);
                if(temp.right>max_right){
                    max_right=temp.right;
                    label_id=i+1;
                    console.log(label_id,max_right);
                    //alert(label_id+" "+max_right);            
                }
            }
                      //alert(label_id+" "+max_right);
        }
     return(label_id)
    }
