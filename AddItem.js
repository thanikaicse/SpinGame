import React,{ useState } from "react";

function randomGenerate(min, max){
    
    //setCount(n=>n+1);
    return (Math.floor(Math.random()*max+min));
}

function AddItem()
{

   setCount(count+1);
 

    console.log("Entered AddItems");
    const ran1=randomGenerate(1,360)+"deg";
    const ran2=randomGenerate(1,360)+"deg";
    document.documentElement.style.setProperty(`--ran`,`${ran1}`);
    document.documentElement.style.setProperty(`--ra`,`${ran2}`);
    console.log(ran1);
    var ope=new Array();  //check the stmt validity and increment n by 1
    //t=document.write("Spin started");
    //document.body.appendChild(t);
    console.log(randomGenerate(1,360));
    alert("Add Function called");
    
   

    alert("count:"+count);
    
    //var n=0; //dynamic static counter initiallization
    var k=0;
    alert("Add Function called:");
    alert("n"+n);
    alert("k"+k);
        
    n=parseInt(n)+1; //dynamic static counter increment
   
    let i,c ;
    var ope=new Array();  //check the stmt validity and increment n by 1      

    //convert ope to dynamic array
    ope[k++]= document.getElementById('name').value;
   // ope[k]= document.getElementById('name').value;

   alert(ope.length);
    if(n<=20 && ope.length<=20)
    {
    for(i=0;i<ope.length;i++)
    {
        //alert(ope[i]);
    }
    //k=parseInt(k)+1;
    
    //convert ope array to Table dynamic create for ope array
    //|No.| Participaten Name|
    var table1="<table><tr>";
    var rowSize=2;
    ope.forEach((value,i)=>{
        //alert(i+" "+ value);
        table1+=`<td>${i+1}</td>`;
        table1+=`<td>${value}</td>`;
        table1+=`</tr><tr>`;
    });
    table1+="</tr></table>";    
    let c1=document.createElement('div');
    
    c1.classList.add("circle1");
    
    //L.classList.add('scircle');
    let L1=document.createElement('label');
    L1.innerText="1";
    //c1.appendChild(L,L1);
    //c1.appendChild(L);
    L1.classList.add("label1","case1-label1");
    //L1.classList.add('case1');
    let c2=document.createElement('div');
    c2.classList.add("circle2");
    //c2.appendChild('scircle');
    let L2=document.createElement('label');
    L2.innerText="2";
    //c2.appendChild(L,L1,L2);
    //c2.appendChild(L2);
    L2.classList.add("label2","case2-label2");
    let c3=document.createElement('div');
    c3.classList.add('circle3');
    let L3=document.createElement('label');
    L3.innerText="3";
    //c3.appendChild(L,L1,L2,L3);
    L3.classList.add("label3","case3-label3");
    let c4=document.createElement('div');
    c4.classList.add('circle4');
    let L4=document.createElement('label');
    L4.innerText="4";
    //c4.appendChild(L,L1,L2,L3,L4);
    L4.classList.add("label4","case4-label4");
    let c5=document.createElement('div');
    c5.classList.add('circle5');
    let L5=document.createElement('label');
    L5.innerText="5";
    //c5.appendChild(L,L1,L2,L3,L4,L5);
    L5.classList.add("label5","case5-label5");
    let c6=document.createElement('div');
    c6.classList.add('circle6');
    let L6=document.createElement('label');
    L6.innerText="6";
    //c6.appendChild(L,L1,L2,L3,L4,L5,L6);
    L6.classList.add("label6","case6-label6");
    let c7=document.createElement('div');
    c7.classList.add('circle7');
    let L7=document.createElement('label');
    L7.innerText="7";
    //c7.appendChild(L,L1,L2,L3,L4,L5,L6,L7);
    L7.classList.add("label7","case7-label7");
    let c8=document.createElement('div');
    c8.classList.add('circle8');
    let L8=document.createElement('label');
    L8.innerText="8";
    //c8.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8);
    L8.classList.add("label8","case8-label8");
    let c9=document.createElement('div');
    c9.classList.add('circle9');
    let L9=document.createElement('label');
    L9.innerText="9";
    //c9.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9);
    L9.classList.add("label9","case9-label9");
    let c10=document.createElement('div');
    c10.classList.add('circle10');
    let L10=document.createElement('label');
    L10.innerText="10";
    //c10.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10);
    L10.classList.add("label10","case10-label10");
    let c11=document.createElement('div');
    c11.classList.add('circle11');
    let L11=document.createElement('label');
    L11.innerText="11";
    //c11.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11);
    L11.classList.add("label11","case11-label11");
    let c12=document.createElement('div');
    c12.classList.add('circle12');
    let L12=document.createElement('label');
    L12.innerText="12";
    //c12.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12);
    L12.classList.add("label12","case12-label12");
    let c13=document.createElement('div');
    c13.classList.add('circle13');
    let L13=document.createElement('label');
    L13.innerText="13";
    //c13.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13);
    L13.classList.add("label13","case13-label13");
    let c14=document.createElement('div');
    c14.classList.add('circle14');
    let L14=document.createElement('label');
    L14.innerText="14";
    //c14.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14);
    L14.classList.add("label14","case14-label14");
    let c15=document.createElement('div');
    c15.classList.add('circle15');
    let L15=document.createElement('label');
    L15.innerText="15";
    //c15.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15);
    L15.classList.add("label15","case15-label15");
    let c16=document.createElement('div');
    c16.classList.add('circle16');
    let L16=document.createElement('label');
    L16.innerText="16";
    //c16.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16);
    L16.classList.add("label16","case16-label16");
    let c17=document.createElement('div');
    c17.classList.add('circle17');
    let L17=document.createElement('label');
    L17.innerText="17";
    //c17.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17);
    L17.classList.add("label17","case17-label17");
    let c18=document.createElement('div');
    c18.classList.add('circle18');
    let L18=document.createElement('label');
    L18.innerText="18";
    //c18.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18);
    L18.classList.add("label18","case18-label18");
    let c19=document.createElement('div');
    c19.classList.add('circle19');
    let L19=document.createElement('label');
    L19.innerText="19";
    //c19.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19);
    L19.classList.add("label19","case19-label19");
    let c20=document.createElement('div');
    c20.classList.add('circle20');
    let L20=document.createElement('label');
    L20.innerText="20";
    //c20.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20);
    L20.classList.add("label20","case20-label20");
    
    let s1=document.querySelector('.table1');
    //let u=document.append(c1,n.parentElement.firstElementChild.firstChild)
    console.log(s1);
    console.log(s1.firstElementChild.firstElementChild);
    let u=s1.firstElementChild.firstElementChild;
    //u.appendChild(L);
      //=document.createElement('div');;
    //alert("N"+" "+ n);
    switch (n) {
        case 1:
           //c1.innerText='Spin Created';
           //document.body.appendChild
           u.appendChild(c1);
            //document.body.appendChild(c1);
    
            c1.appendChild(L1);
            //c1.appendChild(L);
            //u.appendChild(L1);
            break;
        case 2:
          //  document.body.removeChild(c1);
          //c1=document.body.getElementsByClassName('circle1');
          let n1=document.querySelector('.circle1');
          console.log(n1.parentNode.lastChild);
          
    //        c2=document.createElement('div');
            u.replaceChild(c2,n1.parentNode.lastChild);
      //      c2.classList.add('circle2');
            //c2.innerText='Spin Created';
            L1.classList.replace("case1-label1","case2-label1");
            c2.appendChild(L1);
             c2.appendChild(L2);
            //c2.appendChild(L);
            //u.appendChild(L1);
            //u.appendChild(L2);
            break;
        case 3:
        //document.body.removeChild(c);
        //c3=document.createElement('div');
        let n2=document.querySelector('.circle2');
          console.log(n2.parentNode.lastChild);
          
    //        c2=document.createElement('div');
            u.replaceChild(c3,n2.parentNode.lastChild);
        //document.body.replaceChild(c3,document.body.getElementsByClassName('circle'));
        //c3.classList.add('circle3');
        //c3.innerText='Spin Created';
        L1.classList.replace("case1-label1","case3-label1");
        L2.classList.replace("case2-label2","case3-label2");
        //c3.appendChild(L);
        c3.appendChild(L1);
        c3.appendChild(L2);
        c3.appendChild(L3);
        var t=document.getElementsByClassName(".label2");
       // var t1=$('.label2').offset();
       //var getele=t.closest(".scircle");
       //console.log(getele);
        //alert("L2 left: "+t.offset+" "+"t1.left"+" "+"L2 top: "+t.offsetTop+" "+"t1.top");
        break;
        case 4:
        //document.body.removeChild(c);
        //c4=document.createElement('div');
        let n3=document.querySelector('.circle3');
          console.log(n3.parentNode.lastChild);
          
    //        c2=document.createElement('div');
            u.replaceChild(c4,n3.parentNode.lastChild);
        //document.body.c3.replaceChild(c4);
        //c4.classList.add('circle4');
        //c4.innerText='Spin Created';
        L1.classList.replace("case1-label1","case4-label1");
        L2.classList.replace("case2-label2","case4-label2");
        L3.classList.replace("case3-label3","case4-label3");
        //c4.appendChild(L);
        c4.appendChild(L1);
        c4.appendChild(L2);
        c4.appendChild(L3);
        c4.appendChild(L4);
        break;
        case 5:
            let n4=document.querySelector('.circle4');
            console.log(n4.parentNode.lastChild);
            u.replaceChild(c5,n4.parentNode.lastChild);
          //  c5.innerText='Spin Created';
          L1.classList.replace("case1-label1","case5-label1");
        L2.classList.replace("case2-label2","case5-label2");
        L3.classList.replace("case3-label3","case5-label3");
        L4.classList.replace("case4-label4","case5-label4");
            //c5.appendChild(L);
            c5.appendChild(L1);
            c5.appendChild(L2);
            c5.appendChild(L3);
            c5.appendChild(L4);
            c5.appendChild(L5);
            break;    
        case 6:
            let n5=document.querySelector('.circle5');
            u.replaceChild(c6,n5.parentNode.lastChild);
            //c6.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case6-label1");
        L2.classList.replace("case2-label2","case6-label2");
        L3.classList.replace("case3-label3","case6-label3");
        L4.classList.replace("case4-label4","case6-label4");
        L5.classList.replace("case5-label5","case6-label5");
            //c6.appendChild(L);
            c6.appendChild(L1);
            c6.appendChild(L2);
            c6.appendChild(L3);
            c6.appendChild(L4);
            c6.appendChild(L5);
            c6.appendChild(L6);
            break;        
        case 7:
            let n6=document.querySelector('.circle6');
            u.replaceChild(c7,n6.parentNode.lastChild);
            //c7.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case7-label1");
        L2.classList.replace("case2-label2","case7-label2");
        L3.classList.replace("case3-label3","case7-label3");
        L4.classList.replace("case4-label4","case7-label4");
        L5.classList.replace("case5-label5","case7-label5");
        L6.classList.replace("case6-label6","case7-label6");
            //c7.appendChild(L);
            c7.appendChild(L1);
            c7.appendChild(L2);
            c7.appendChild(L3);
            c7.appendChild(L4);
            c7.appendChild(L5);
            c7.appendChild(L6);
            c7.appendChild(L7);
            break;
        case 8:
            let n7=document.querySelector('.circle7');
            u.replaceChild(c8,n7.parentNode.lastChild);
            //c8.innerText='Spin Created';        
        L1.classList.replace("case1-label1","case8-label1");
        L2.classList.replace("case2-label2","case8-label2");
        L3.classList.replace("case3-label3","case8-label3");
        L4.classList.replace("case4-label4","case8-label4");
        L5.classList.replace("case5-label5","case8-label5");
        L6.classList.replace("case6-label6","case8-label6");
        L7.classList.replace("case7-label7","case8-label7")
            //c8.appendChild(L);
            c8.appendChild(L1);
            c8.appendChild(L2);
            c8.appendChild(L3);
            c8.appendChild(L4);
            c8.appendChild(L5);
            c8.appendChild(L6);
            c8.appendChild(L7);
            c8.appendChild(L8);
            break;    
        case 9:
            let n8=document.querySelector('.circle8');
            u.replaceChild(c9,n8.parentNode.lastChild);
            //c9.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case9-label1");
        L2.classList.replace("case2-label2","case9-label2");
        L3.classList.replace("case3-label3","case9-label3");
        L4.classList.replace("case4-label4","case9-label4");
        L5.classList.replace("case5-label5","case9-label5");
        L6.classList.replace("case6-label6","case9-label6");
        L7.classList.replace("case7-label7","case9-label7")
        L8.classList.replace("case8-label8","case9-label8");
            //c9.appendChild(L);
            c9.appendChild(L1);
            c9.appendChild(L2);
            c9.appendChild(L3);
            c9.appendChild(L4);
            c9.appendChild(L5);
            c9.appendChild(L6);
            c9.appendChild(L7);
            c9.appendChild(L8);
            c9.appendChild(L9);
            break;
        case 10:
            let n9=document.querySelector('.circle9');
            u.replaceChild(c10,n9.parentNode.lastChild);
            //c10.innerText='Spin Created';        
        L1.classList.replace("case1-label1","case10-label1");
        L2.classList.replace("case2-label2","case10-label2");
        L3.classList.replace("case3-label3","case10-label3");
        L4.classList.replace("case4-label4","case10-label4");
        L5.classList.replace("case5-label5","case10-label5");
        L6.classList.replace("case6-label6","case10-label6");
        L7.classList.replace("case7-label7","case10-label7")
        L8.classList.replace("case8-label8","case10-label8");
        L9.classList.replace("case9-label9","case10-label9");
            //c10.appendChild(L);    
            c10.appendChild(L1);
            c10.appendChild(L2);
            c10.appendChild(L3);
            c10.appendChild(L4);
            c10.appendChild(L5);
            c10.appendChild(L6);
            c10.appendChild(L7);
            c10.appendChild(L8);
            c10.appendChild(L9);
            c10.appendChild(L10);
            break;
        case 11:
            let n10=document.querySelector('.circle10');
            u.replaceChild(c11,n10.parentNode.lastChild);
            //c11.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case11-label1");
        L2.classList.replace("case2-label2","case11-label2");
        L3.classList.replace("case3-label3","case11-label3");
        L4.classList.replace("case4-label4","case11-label4");
        L5.classList.replace("case5-label5","case11-label5");
        L6.classList.replace("case6-label6","case11-label6");
        L7.classList.replace("case7-label7","case11-label7")
        L8.classList.replace("case8-label8","case11-label8");
        L9.classList.replace("case9-label9","case11-label9");
        L10.classList.replace("case10-label10","case11-label10");
            //c11.appendChild(L);
            c11.appendChild(L1);
            c11.appendChild(L2);
            c11.appendChild(L3);
            c11.appendChild(L4);
            c11.appendChild(L5);
            c11.appendChild(L6);
            c11.appendChild(L7);
            c11.appendChild(L8);
            c11.appendChild(L9);
            c11.appendChild(L10);
            c11.appendChild(L11);
            break;
        case 12:
            let n11=document.querySelector('.circle11');
            u.replaceChild(c12,n11.parentNode.lastChild);
            //c12.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case12-label1");
        L2.classList.replace("case2-label2","case12-label2");
        L3.classList.replace("case3-label3","case12-label3");
        L4.classList.replace("case4-label4","case12-label4");
        L5.classList.replace("case5-label5","case12-label5");
        L6.classList.replace("case6-label6","case12-label6");
        L7.classList.replace("case7-label7","case12-label7")
        L8.classList.replace("case8-label8","case12-label8");
        L9.classList.replace("case9-label9","case12-label9");
        L10.classList.replace("case10-label10","case12-label10");
        L11.classList.replace("case11-label11","case12-label11");
            //c12.appendChild(L);
            c12.appendChild(L1);
            c12.appendChild(L2);
            c12.appendChild(L3);
            c12.appendChild(L4);
            c12.appendChild(L5);
            c12.appendChild(L6);
            c12.appendChild(L7);
            c12.appendChild(L8);
            c12.appendChild(L9);
            c12.appendChild(L10);
            c12.appendChild(L11);
            c12.appendChild(L12);
            break;    
        case 13:
            let n12=document.querySelector('.circle12');
            u.replaceChild(c13,n12.parentNode.lastChild);
            //c13.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case13-label1");
        L2.classList.replace("case2-label2","case13-label2");
        L3.classList.replace("case3-label3","case13-label3");
        L4.classList.replace("case4-label4","case13-label4");
        L5.classList.replace("case5-label5","case13-label5");
        L6.classList.replace("case6-label6","case13-label6");
        L7.classList.replace("case7-label7","case13-label7")
        L8.classList.replace("case8-label8","case13-label8");
        L9.classList.replace("case9-label9","case13-label9");
        L10.classList.replace("case10-label10","case13-label10");
        L11.classList.replace("case11-label11","case13-label11");
        L12.classList.replace("case12-label12","case13-label12");
            //c13.appendChild(L);
            c13.appendChild(L1);
            c13.appendChild(L2);
            c13.appendChild(L3);
            c13.appendChild(L4);
            c13.appendChild(L5);
            c13.appendChild(L6);
            c13.appendChild(L7);
            c13.appendChild(L8);
            c13.appendChild(L9);
            c13.appendChild(L10);
            c13.appendChild(L11);
            c13.appendChild(L12);
            c13.appendChild(L13);
            break;    
        case 14:
            let n13=document.querySelector('.circle13');
            u.replaceChild(c14,n13.parentNode.lastChild);
            //c14.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case14-label1");
        L2.classList.replace("case2-label2","case14-label2");
        L3.classList.replace("case3-label3","case14-label3");
        L4.classList.replace("case4-label4","case14-label4");
        L5.classList.replace("case5-label5","case14-label5");
        L6.classList.replace("case6-label6","case14-label6");
        L7.classList.replace("case7-label7","case14-label7")
        L8.classList.replace("case8-label8","case14-label8");
        L9.classList.replace("case9-label9","case14-label9");
        L10.classList.replace("case10-label10","case14-label10");
        L11.classList.replace("case11-label11","case14-label11");
        L12.classList.replace("case12-label12","case14-label12");
        L13.classList.replace("case13-label13","case14-label13");
            //c14.appendChild(L);
            c14.appendChild(L1);
            c14.appendChild(L2);
            c14.appendChild(L3);
            c14.appendChild(L4);
            c14.appendChild(L5);
            c14.appendChild(L6);
            c14.appendChild(L7);
            c14.appendChild(L8);
            c14.appendChild(L9);
            c14.appendChild(L10);
            c14.appendChild(L11);
            c14.appendChild(L12);
            c14.appendChild(L13);
            c14.appendChild(L14);
            break;    
        case 15:
            let n14=document.querySelector('.circle14');
            u.replaceChild(c15,n14.parentNode.lastChild);
            //c15.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case15-label1");
        L2.classList.replace("case2-label2","case15-label2");
        L3.classList.replace("case3-label3","case15-label3");
        L4.classList.replace("case4-label4","case15-label4");
        L5.classList.replace("case5-label5","case15-label5");
        L6.classList.replace("case6-label6","case15-label6");
        L7.classList.replace("case7-label7","case15-label7")
        L8.classList.replace("case8-label8","case15-label8");
        L9.classList.replace("case9-label9","case15-label9");
        L10.classList.replace("case10-label10","case15-label10");
        L11.classList.replace("case11-label11","case15-label11");
        L12.classList.replace("case12-label12","case15-label12");
        L13.classList.replace("case13-label13","case15-label13");
        L14.classList.replace("case14-label14","case15-label14");
            //c15.appendChild(L);
            c15.appendChild(L1);
            c15.appendChild(L2);
            c15.appendChild(L3);
            c15.appendChild(L4);
            c15.appendChild(L5);
            c15.appendChild(L6);
            c15.appendChild(L7);
            c15.appendChild(L8);
            c15.appendChild(L9);
            c15.appendChild(L10);
            c15.appendChild(L11);
            c15.appendChild(L12);
            c15.appendChild(L13);
            c15.appendChild(L14);
            c15.appendChild(L15);
            break;    
        case 16:
            let n15=document.querySelector('.circle15');
            u.replaceChild(c16,n15.parentNode.lastChild);
            //c16.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case16-label1");
        L2.classList.replace("case2-label2","case16-label2");
        L3.classList.replace("case3-label3","case16-label3");
        L4.classList.replace("case4-label4","case16-label4");
        L5.classList.replace("case5-label5","case16-label5");
        L6.classList.replace("case6-label6","case16-label6");
        L7.classList.replace("case7-label7","case16-label7")
        L8.classList.replace("case8-label8","case16-label8");
        L9.classList.replace("case9-label9","case16-label9");
        L10.classList.replace("case10-label10","case16-label10");
        L11.classList.replace("case11-label11","case16-label11");
        L12.classList.replace("case12-label12","case16-label12");
        L13.classList.replace("case13-label13","case16-label13");
        L14.classList.replace("case14-label14","case16-label14");
        L15.classList.replace("case15-label15","case16-label15");
            //c16.appendChild(L);
            c16.appendChild(L1);
            c16.appendChild(L2);
            c16.appendChild(L3);
            c16.appendChild(L4);
            c16.appendChild(L5);
            c16.appendChild(L6);
            c16.appendChild(L7);
            c16.appendChild(L8);
            c16.appendChild(L9);
            c16.appendChild(L10);
            c16.appendChild(L11);
            c16.appendChild(L12);
            c16.appendChild(L13);
            c16.appendChild(L14);
            c16.appendChild(L15);
            c16.appendChild(L16);
            break;    
        case 17:
            let n16=document.querySelector('.circle16');
            u.replaceChild(c17,n16.parentNode.lastChild);
            //c17.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case17-label1");
        L2.classList.replace("case2-label2","case17-label2");
        L3.classList.replace("case3-label3","case17-label3");
        L4.classList.replace("case4-label4","case17-label4");
        L5.classList.replace("case5-label5","case17-label5");
        L6.classList.replace("case6-label6","case17-label6");
        L7.classList.replace("case7-label7","case17-label7")
        L8.classList.replace("case8-label8","case17-label8");
        L9.classList.replace("case9-label9","case17-label9");
        L10.classList.replace("case10-label10","case17-label10");
        L11.classList.replace("case11-label11","case17-label11");
        L12.classList.replace("case12-label12","case17-label12");
        L13.classList.replace("case13-label13","case17-label13");
        L14.classList.replace("case14-label14","case17-label14");
        L15.classList.replace("case15-label15","case17-label15");
        L16.classList.replace("case16-label16","case17-label16");
            //c17.appendChild(L);
            c17.appendChild(L1);
            c17.appendChild(L2);
            c17.appendChild(L3);
            c17.appendChild(L4);
            c17.appendChild(L5);
            c17.appendChild(L6);
            c17.appendChild(L7);
            c17.appendChild(L8);
            c17.appendChild(L9);
            c17.appendChild(L10);
            c17.appendChild(L11);
            c17.appendChild(L12);
            c17.appendChild(L13);
            c17.appendChild(L14);
            c17.appendChild(L15);
            c17.appendChild(L16);
            c17.appendChild(L17);
            break;
        case 18:
            let n17=document.querySelector('.circle17');
            u.replaceChild(c18,n17.parentNode.lastChild);
            //c18.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case18-label1");
        L2.classList.replace("case2-label2","case18-label2");
        L3.classList.replace("case3-label3","case18-label3");
        L4.classList.replace("case4-label4","case18-label4");
        L5.classList.replace("case5-label5","case18-label5");
        L6.classList.replace("case6-label6","case18-label6");
        L7.classList.replace("case7-label7","case18-label7")
        L8.classList.replace("case8-label8","case18-label8");
        L9.classList.replace("case9-label9","case18-label9");
        L10.classList.replace("case10-label10","case18-label10");
        L11.classList.replace("case11-label11","case18-label11");
        L12.classList.replace("case12-label12","case18-label12");
        L13.classList.replace("case13-label13","case18-label13");
        L14.classList.replace("case14-label14","case18-label14");
        L15.classList.replace("case15-label15","case18-label15");
        L16.classList.replace("case16-label16","case18-label16");
        L17.classList.replace("case17-label17","case18-label17");
            //c18.appendChild(L);
            c18.appendChild(L1);
            c18.appendChild(L2);
            c18.appendChild(L3);
            c18.appendChild(L4);
            c18.appendChild(L5);
            c18.appendChild(L6);
            c18.appendChild(L7);
            c18.appendChild(L8);
            c18.appendChild(L9);
            c18.appendChild(L10);
            c18.appendChild(L11);
            c18.appendChild(L12);
            c18.appendChild(L13);
            c18.appendChild(L14);
            c18.appendChild(L15);
            c18.appendChild(L16);
            c18.appendChild(L17);
            c18.appendChild(L18);
            break;        
        case 19:
            let n18=document.querySelector('.circle18');
            u.replaceChild(c19,n18.parentNode.lastChild);
            //c19.innerText='Spin Created';
            L1.classList.replace("case1-label1","case19-label1");
        L2.classList.replace("case2-label2","case19-label2");
        L3.classList.replace("case3-label3","case19-label3");
        L4.classList.replace("case4-label4","case19-label4");
        L5.classList.replace("case5-label5","case19-label5");
        L6.classList.replace("case6-label6","case19-label6");
        L7.classList.replace("case7-label7","case19-label7")
        L8.classList.replace("case8-label8","case19-label8");
        L9.classList.replace("case9-label9","case19-label9");
        L10.classList.replace("case10-label10","case19-label10");
        L11.classList.replace("case11-label11","case19-label11");
        L12.classList.replace("case12-label12","case19-label12");
        L13.classList.replace("case13-label13","case19-label13");
        L14.classList.replace("case14-label14","case19-label14");
        L15.classList.replace("case15-label15","case19-label15");
        L16.classList.replace("case16-label16","case19-label16");
        L17.classList.replace("case17-label17","case19-label17");
        L18.classList.replace("case18-label18","case19-label18");
            //c19.appendChild(L);
            c19.appendChild(L1);
            c19.appendChild(L2);
            c19.appendChild(L3);
            c19.appendChild(L4);
            c19.appendChild(L5);
            c19.appendChild(L6);
            c19.appendChild(L7);
            c19.appendChild(L8);
            c19.appendChild(L9);
            c19.appendChild(L10);
            c19.appendChild(L11);
            c19.appendChild(L12);
            c19.appendChild(L13);
            c19.appendChild(L14);
            c19.appendChild(L15);
            c19.appendChild(L16);
            c19.appendChild(L17);
            c19.appendChild(L18);
            c19.appendChild(L19);
            break;    
        case 20:
            let n19=document.querySelector('.circle19');
            u.replaceChild(c20,n19.parentNode.lastChild);
            //c20.innerText='Spin Created';        
            
            L1.classList.replace("case1-label1","case20-label1");
        L2.classList.replace("case2-label2","case20-label2");
        L3.classList.replace("case3-label3","case20-label3");
        L4.classList.replace("case4-label4","case20-label4");
        L5.classList.replace("case5-label5","case20-label5");
        L6.classList.replace("case6-label6","case20-label6");
        L7.classList.replace("case7-label7","case20-label7")
        L8.classList.replace("case8-label8","case20-label8");
        L9.classList.replace("case9-label9","case20-label9");
        L10.classList.replace("case10-label10","case20-label10");
        L11.classList.replace("case11-label11","case20-label11");
        L12.classList.replace("case12-label12","case20-label12");
        L13.classList.replace("case13-label13","case20-label13");
        L14.classList.replace("case14-label14","case20-label14");
        L15.classList.replace("case15-label15","case20-label15");
        L16.classList.replace("case16-label16","case20-label16");
        L17.classList.replace("case17-label17","case20-label17");
        L18.classList.replace("case18-label18","case20-label18");
        L19.classList.replace("case19-label19","case20-label19");
            //c20.appendChild(L);
            c20.appendChild(L1);
            c20.appendChild(L2);
            c20.appendChild(L3);
            c20.appendChild(L4);
            c20.appendChild(L5);
            c20.appendChild(L6);
            c20.appendChild(L7);
            c20.appendChild(L8);
            c20.appendChild(L9);
            c20.appendChild(L10);
            c20.appendChild(L11);
            c20.appendChild(L12);
            c20.appendChild(L13);
            c20.appendChild(L14);
            c20.appendChild(L15);
            c20.appendChild(L16);
            c20.appendChild(L17);
            c20.appendChild(L18);
            c20.appendChild(L19);
            c20.appendChild(L20);
            break;    
        
        default:
        
            c.classList.add('circle');
            c.innerText='Spin Created';
            document.body.appendChild(c);
            break;    
            
    }
    }else{
        alert("Only 20 participants allowed in spin game");
    }
    return(
        document.getElementById('table1').innerHTML=table1
    )
    //alert("Name:"+" "+ope);
    //create dynamic circles each time and adding number to it 1,2,3,4,...20
    //let L=document.createElement('p');
    //var t=$('.circle3').offset();
    //var t=document.getElementsByClassName("label2");
    //alert("L2 left: "+t.left+" "+"L2 top: "+t.top);
    /*let arrow=document.getElementsByClassName('td');
    console.log(arrow);
    arrow.classList.add('scircle');*/ 
}


/*function newname(){
    alert("Add Function called");
    var n=0; //dynamic static counter initiallization
    var k=0;
    let i,c ;
    var ope=new Array();  //check the stmt validity and increment n by 1

    n=parseInt(n)+1; //dynamic static counter increment
    alert("n");
      
//convert ope to dynamic array
    ope[k++]= document.getElementById('name').value;
    alert(ope.length);
    if(n<=20 && ope.length<=20)
    {
    for(i=0;i<ope.length;i++)
    {
        //alert(ope[i]);
    }
    //k=parseInt(k)+1;
    
    //convert ope array to Table dynamic create for ope array
    //|No.| Participaten Name|
    var table1="<table><tr>";
    var rowSize=2;
    ope.forEach((value,i)=>{
        //alert(i+" "+ value);
        table1+=`<td>${i+1}</td>`;
        table1+=`<td>${value}</td>`;
        table1+=`</tr><tr>`;
    });
    table1+="</tr></table>";    
    let c1=document.createElement('div');
    c1.classList.add("circle1");
    //L.classList.add('scircle');
    let L1=document.createElement('label');
    L1.innerText="1";
    //c1.appendChild(L,L1);
    //c1.appendChild(L);
    L1.classList.add("label1","case1-label1");
    //L1.classList.add('case1');
    let c2=document.createElement('div');
    c2.classList.add("circle2");
    //c2.appendChild('scircle');
    let L2=document.createElement('label');
    L2.innerText="2";
    //c2.appendChild(L,L1,L2);
    //c2.appendChild(L2);
    L2.classList.add("label2","case2-label2");
    let c3=document.createElement('div');
    c3.classList.add('circle3');
    let L3=document.createElement('label');
    L3.innerText="3";
    //c3.appendChild(L,L1,L2,L3);
    L3.classList.add("label3","case3-label3");
    let c4=document.createElement('div');
    c4.classList.add('circle4');
    let L4=document.createElement('label');
    L4.innerText="4";
    //c4.appendChild(L,L1,L2,L3,L4);
    L4.classList.add("label4","case4-label4");
    let c5=document.createElement('div');
    c5.classList.add('circle5');
    let L5=document.createElement('label');
    L5.innerText="5";
    //c5.appendChild(L,L1,L2,L3,L4,L5);
    L5.classList.add("label5","case5-label5");
    let c6=document.createElement('div');
    c6.classList.add('circle6');
    let L6=document.createElement('label');
    L6.innerText="6";
    //c6.appendChild(L,L1,L2,L3,L4,L5,L6);
    L6.classList.add("label6","case6-label6");
    let c7=document.createElement('div');
    c7.classList.add('circle7');
    let L7=document.createElement('label');
    L7.innerText="7";
    //c7.appendChild(L,L1,L2,L3,L4,L5,L6,L7);
    L7.classList.add("label7","case7-label7");
    let c8=document.createElement('div');
    c8.classList.add('circle8');
    let L8=document.createElement('label');
    L8.innerText="8";
    //c8.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8);
    L8.classList.add("label8","case8-label8");
    let c9=document.createElement('div');
    c9.classList.add('circle9');
    let L9=document.createElement('label');
    L9.innerText="9";
    //c9.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9);
    L9.classList.add("label9","case9-label9");
    let c10=document.createElement('div');
    c10.classList.add('circle10');
    let L10=document.createElement('label');
    L10.innerText="10";
    //c10.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10);
    L10.classList.add("label10","case10-label10");
    let c11=document.createElement('div');
    c11.classList.add('circle11');
    let L11=document.createElement('label');
    L11.innerText="11";
    //c11.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11);
    L11.classList.add("label11","case11-label11");
    let c12=document.createElement('div');
    c12.classList.add('circle12');
    let L12=document.createElement('label');
    L12.innerText="12";
    //c12.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12);
    L12.classList.add("label12","case12-label12");
    let c13=document.createElement('div');
    c13.classList.add('circle13');
    let L13=document.createElement('label');
    L13.innerText="13";
    //c13.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13);
    L13.classList.add("label13","case13-label13");
    let c14=document.createElement('div');
    c14.classList.add('circle14');
    let L14=document.createElement('label');
    L14.innerText="14";
    //c14.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14);
    L14.classList.add("label14","case14-label14");
    let c15=document.createElement('div');
    c15.classList.add('circle15');
    let L15=document.createElement('label');
    L15.innerText="15";
    //c15.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15);
    L15.classList.add("label15","case15-label15");
    let c16=document.createElement('div');
    c16.classList.add('circle16');
    let L16=document.createElement('label');
    L16.innerText="16";
    //c16.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16);
    L16.classList.add("label16","case16-label16");
    let c17=document.createElement('div');
    c17.classList.add('circle17');
    let L17=document.createElement('label');
    L17.innerText="17";
    //c17.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17);
    L17.classList.add("label17","case17-label17");
    let c18=document.createElement('div');
    c18.classList.add('circle18');
    let L18=document.createElement('label');
    L18.innerText="18";
    //c18.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18);
    L18.classList.add("label18","case18-label18");
    let c19=document.createElement('div');
    c19.classList.add('circle19');
    let L19=document.createElement('label');
    L19.innerText="19";
    //c19.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19);
    L19.classList.add("label19","case19-label19");
    let c20=document.createElement('div');
    c20.classList.add('circle20');
    let L20=document.createElement('label');
    L20.innerText="20";
    //c20.appendChild(L,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20);
    L20.classList.add("label20","case20-label20");
    
    let s1=document.querySelector('.table1');
    //let u=document.append(c1,n.parentElement.firstElementChild.firstChild)
    console.log(s1);
    console.log(s1.firstElementChild.firstElementChild);
    let u=s1.firstElementChild.firstElementChild;
    //u.appendChild(L);
      //=document.createElement('div');;
    //alert("N"+" "+ n);
    switch (n) {
        case 1:
           //c1.innerText='Spin Created';
           //document.body.appendChild
           u.appendChild(c1);
            //document.body.appendChild(c1);
    
            c1.appendChild(L1);
            //c1.appendChild(L);
            //u.appendChild(L1);
            break;
        case 2:
          //  document.body.removeChild(c1);
          //c1=document.body.getElementsByClassName('circle1');
          let n1=document.querySelector('.circle1');
          console.log(n1.parentNode.lastChild);
          
    //        c2=document.createElement('div');
            u.replaceChild(c2,n1.parentNode.lastChild);
      //      c2.classList.add('circle2');
            //c2.innerText='Spin Created';
            L1.classList.replace("case1-label1","case2-label1");
            c2.appendChild(L1);
             c2.appendChild(L2);
            //c2.appendChild(L);
            //u.appendChild(L1);
            //u.appendChild(L2);
            break;
        case 3:
        //document.body.removeChild(c);
        //c3=document.createElement('div');
        let n2=document.querySelector('.circle2');
          console.log(n2.parentNode.lastChild);
          
    //        c2=document.createElement('div');
            u.replaceChild(c3,n2.parentNode.lastChild);
        //document.body.replaceChild(c3,document.body.getElementsByClassName('circle'));
        //c3.classList.add('circle3');
        //c3.innerText='Spin Created';
        L1.classList.replace("case1-label1","case3-label1");
        L2.classList.replace("case2-label2","case3-label2");
        //c3.appendChild(L);
        c3.appendChild(L1);
        c3.appendChild(L2);
        c3.appendChild(L3);
        var t=document.getElementsByClassName(".label2");
       // var t1=$('.label2').offset();
       //var getele=t.closest(".scircle");
       //console.log(getele);
        //alert("L2 left: "+t.offset+" "+"t1.left"+" "+"L2 top: "+t.offsetTop+" "+"t1.top");
        break;
        case 4:
        //document.body.removeChild(c);
        //c4=document.createElement('div');
        let n3=document.querySelector('.circle3');
          console.log(n3.parentNode.lastChild);
          
    //        c2=document.createElement('div');
            u.replaceChild(c4,n3.parentNode.lastChild);
        //document.body.c3.replaceChild(c4);
        //c4.classList.add('circle4');
        //c4.innerText='Spin Created';
        L1.classList.replace("case1-label1","case4-label1");
        L2.classList.replace("case2-label2","case4-label2");
        L3.classList.replace("case3-label3","case4-label3");
        //c4.appendChild(L);
        c4.appendChild(L1);
        c4.appendChild(L2);
        c4.appendChild(L3);
        c4.appendChild(L4);
        break;
        case 5:
            let n4=document.querySelector('.circle4');
            console.log(n4.parentNode.lastChild);
            u.replaceChild(c5,n4.parentNode.lastChild);
          //  c5.innerText='Spin Created';
          L1.classList.replace("case1-label1","case5-label1");
        L2.classList.replace("case2-label2","case5-label2");
        L3.classList.replace("case3-label3","case5-label3");
        L4.classList.replace("case4-label4","case5-label4");
            //c5.appendChild(L);
            c5.appendChild(L1);
            c5.appendChild(L2);
            c5.appendChild(L3);
            c5.appendChild(L4);
            c5.appendChild(L5);
            break;    
        case 6:
            let n5=document.querySelector('.circle5');
            u.replaceChild(c6,n5.parentNode.lastChild);
            //c6.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case6-label1");
        L2.classList.replace("case2-label2","case6-label2");
        L3.classList.replace("case3-label3","case6-label3");
        L4.classList.replace("case4-label4","case6-label4");
        L5.classList.replace("case5-label5","case6-label5");
            //c6.appendChild(L);
            c6.appendChild(L1);
            c6.appendChild(L2);
            c6.appendChild(L3);
            c6.appendChild(L4);
            c6.appendChild(L5);
            c6.appendChild(L6);
            break;        
        case 7:
            let n6=document.querySelector('.circle6');
            u.replaceChild(c7,n6.parentNode.lastChild);
            //c7.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case7-label1");
        L2.classList.replace("case2-label2","case7-label2");
        L3.classList.replace("case3-label3","case7-label3");
        L4.classList.replace("case4-label4","case7-label4");
        L5.classList.replace("case5-label5","case7-label5");
        L6.classList.replace("case6-label6","case7-label6");
            //c7.appendChild(L);
            c7.appendChild(L1);
            c7.appendChild(L2);
            c7.appendChild(L3);
            c7.appendChild(L4);
            c7.appendChild(L5);
            c7.appendChild(L6);
            c7.appendChild(L7);
            break;
        case 8:
            let n7=document.querySelector('.circle7');
            u.replaceChild(c8,n7.parentNode.lastChild);
            //c8.innerText='Spin Created';        
        L1.classList.replace("case1-label1","case8-label1");
        L2.classList.replace("case2-label2","case8-label2");
        L3.classList.replace("case3-label3","case8-label3");
        L4.classList.replace("case4-label4","case8-label4");
        L5.classList.replace("case5-label5","case8-label5");
        L6.classList.replace("case6-label6","case8-label6");
        L7.classList.replace("case7-label7","case8-label7")
            //c8.appendChild(L);
            c8.appendChild(L1);
            c8.appendChild(L2);
            c8.appendChild(L3);
            c8.appendChild(L4);
            c8.appendChild(L5);
            c8.appendChild(L6);
            c8.appendChild(L7);
            c8.appendChild(L8);
            break;    
        case 9:
            let n8=document.querySelector('.circle8');
            u.replaceChild(c9,n8.parentNode.lastChild);
            //c9.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case9-label1");
        L2.classList.replace("case2-label2","case9-label2");
        L3.classList.replace("case3-label3","case9-label3");
        L4.classList.replace("case4-label4","case9-label4");
        L5.classList.replace("case5-label5","case9-label5");
        L6.classList.replace("case6-label6","case9-label6");
        L7.classList.replace("case7-label7","case9-label7")
        L8.classList.replace("case8-label8","case9-label8");
            //c9.appendChild(L);
            c9.appendChild(L1);
            c9.appendChild(L2);
            c9.appendChild(L3);
            c9.appendChild(L4);
            c9.appendChild(L5);
            c9.appendChild(L6);
            c9.appendChild(L7);
            c9.appendChild(L8);
            c9.appendChild(L9);
            break;
        case 10:
            let n9=document.querySelector('.circle9');
            u.replaceChild(c10,n9.parentNode.lastChild);
            //c10.innerText='Spin Created';        
        L1.classList.replace("case1-label1","case10-label1");
        L2.classList.replace("case2-label2","case10-label2");
        L3.classList.replace("case3-label3","case10-label3");
        L4.classList.replace("case4-label4","case10-label4");
        L5.classList.replace("case5-label5","case10-label5");
        L6.classList.replace("case6-label6","case10-label6");
        L7.classList.replace("case7-label7","case10-label7")
        L8.classList.replace("case8-label8","case10-label8");
        L9.classList.replace("case9-label9","case10-label9");
            //c10.appendChild(L);    
            c10.appendChild(L1);
            c10.appendChild(L2);
            c10.appendChild(L3);
            c10.appendChild(L4);
            c10.appendChild(L5);
            c10.appendChild(L6);
            c10.appendChild(L7);
            c10.appendChild(L8);
            c10.appendChild(L9);
            c10.appendChild(L10);
            break;
        case 11:
            let n10=document.querySelector('.circle10');
            u.replaceChild(c11,n10.parentNode.lastChild);
            //c11.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case11-label1");
        L2.classList.replace("case2-label2","case11-label2");
        L3.classList.replace("case3-label3","case11-label3");
        L4.classList.replace("case4-label4","case11-label4");
        L5.classList.replace("case5-label5","case11-label5");
        L6.classList.replace("case6-label6","case11-label6");
        L7.classList.replace("case7-label7","case11-label7")
        L8.classList.replace("case8-label8","case11-label8");
        L9.classList.replace("case9-label9","case11-label9");
        L10.classList.replace("case10-label10","case11-label10");
            //c11.appendChild(L);
            c11.appendChild(L1);
            c11.appendChild(L2);
            c11.appendChild(L3);
            c11.appendChild(L4);
            c11.appendChild(L5);
            c11.appendChild(L6);
            c11.appendChild(L7);
            c11.appendChild(L8);
            c11.appendChild(L9);
            c11.appendChild(L10);
            c11.appendChild(L11);
            break;
        case 12:
            let n11=document.querySelector('.circle11');
            u.replaceChild(c12,n11.parentNode.lastChild);
            //c12.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case12-label1");
        L2.classList.replace("case2-label2","case12-label2");
        L3.classList.replace("case3-label3","case12-label3");
        L4.classList.replace("case4-label4","case12-label4");
        L5.classList.replace("case5-label5","case12-label5");
        L6.classList.replace("case6-label6","case12-label6");
        L7.classList.replace("case7-label7","case12-label7")
        L8.classList.replace("case8-label8","case12-label8");
        L9.classList.replace("case9-label9","case12-label9");
        L10.classList.replace("case10-label10","case12-label10");
        L11.classList.replace("case11-label11","case12-label11");
            //c12.appendChild(L);
            c12.appendChild(L1);
            c12.appendChild(L2);
            c12.appendChild(L3);
            c12.appendChild(L4);
            c12.appendChild(L5);
            c12.appendChild(L6);
            c12.appendChild(L7);
            c12.appendChild(L8);
            c12.appendChild(L9);
            c12.appendChild(L10);
            c12.appendChild(L11);
            c12.appendChild(L12);
            break;    
        case 13:
            let n12=document.querySelector('.circle12');
            u.replaceChild(c13,n12.parentNode.lastChild);
            //c13.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case13-label1");
        L2.classList.replace("case2-label2","case13-label2");
        L3.classList.replace("case3-label3","case13-label3");
        L4.classList.replace("case4-label4","case13-label4");
        L5.classList.replace("case5-label5","case13-label5");
        L6.classList.replace("case6-label6","case13-label6");
        L7.classList.replace("case7-label7","case13-label7")
        L8.classList.replace("case8-label8","case13-label8");
        L9.classList.replace("case9-label9","case13-label9");
        L10.classList.replace("case10-label10","case13-label10");
        L11.classList.replace("case11-label11","case13-label11");
        L12.classList.replace("case12-label12","case13-label12");
            //c13.appendChild(L);
            c13.appendChild(L1);
            c13.appendChild(L2);
            c13.appendChild(L3);
            c13.appendChild(L4);
            c13.appendChild(L5);
            c13.appendChild(L6);
            c13.appendChild(L7);
            c13.appendChild(L8);
            c13.appendChild(L9);
            c13.appendChild(L10);
            c13.appendChild(L11);
            c13.appendChild(L12);
            c13.appendChild(L13);
            break;    
        case 14:
            let n13=document.querySelector('.circle13');
            u.replaceChild(c14,n13.parentNode.lastChild);
            //c14.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case14-label1");
        L2.classList.replace("case2-label2","case14-label2");
        L3.classList.replace("case3-label3","case14-label3");
        L4.classList.replace("case4-label4","case14-label4");
        L5.classList.replace("case5-label5","case14-label5");
        L6.classList.replace("case6-label6","case14-label6");
        L7.classList.replace("case7-label7","case14-label7")
        L8.classList.replace("case8-label8","case14-label8");
        L9.classList.replace("case9-label9","case14-label9");
        L10.classList.replace("case10-label10","case14-label10");
        L11.classList.replace("case11-label11","case14-label11");
        L12.classList.replace("case12-label12","case14-label12");
        L13.classList.replace("case13-label13","case14-label13");
            //c14.appendChild(L);
            c14.appendChild(L1);
            c14.appendChild(L2);
            c14.appendChild(L3);
            c14.appendChild(L4);
            c14.appendChild(L5);
            c14.appendChild(L6);
            c14.appendChild(L7);
            c14.appendChild(L8);
            c14.appendChild(L9);
            c14.appendChild(L10);
            c14.appendChild(L11);
            c14.appendChild(L12);
            c14.appendChild(L13);
            c14.appendChild(L14);
            break;    
        case 15:
            let n14=document.querySelector('.circle14');
            u.replaceChild(c15,n14.parentNode.lastChild);
            //c15.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case15-label1");
        L2.classList.replace("case2-label2","case15-label2");
        L3.classList.replace("case3-label3","case15-label3");
        L4.classList.replace("case4-label4","case15-label4");
        L5.classList.replace("case5-label5","case15-label5");
        L6.classList.replace("case6-label6","case15-label6");
        L7.classList.replace("case7-label7","case15-label7")
        L8.classList.replace("case8-label8","case15-label8");
        L9.classList.replace("case9-label9","case15-label9");
        L10.classList.replace("case10-label10","case15-label10");
        L11.classList.replace("case11-label11","case15-label11");
        L12.classList.replace("case12-label12","case15-label12");
        L13.classList.replace("case13-label13","case15-label13");
        L14.classList.replace("case14-label14","case15-label14");
            //c15.appendChild(L);
            c15.appendChild(L1);
            c15.appendChild(L2);
            c15.appendChild(L3);
            c15.appendChild(L4);
            c15.appendChild(L5);
            c15.appendChild(L6);
            c15.appendChild(L7);
            c15.appendChild(L8);
            c15.appendChild(L9);
            c15.appendChild(L10);
            c15.appendChild(L11);
            c15.appendChild(L12);
            c15.appendChild(L13);
            c15.appendChild(L14);
            c15.appendChild(L15);
            break;    
        case 16:
            let n15=document.querySelector('.circle15');
            u.replaceChild(c16,n15.parentNode.lastChild);
            //c16.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case16-label1");
        L2.classList.replace("case2-label2","case16-label2");
        L3.classList.replace("case3-label3","case16-label3");
        L4.classList.replace("case4-label4","case16-label4");
        L5.classList.replace("case5-label5","case16-label5");
        L6.classList.replace("case6-label6","case16-label6");
        L7.classList.replace("case7-label7","case16-label7")
        L8.classList.replace("case8-label8","case16-label8");
        L9.classList.replace("case9-label9","case16-label9");
        L10.classList.replace("case10-label10","case16-label10");
        L11.classList.replace("case11-label11","case16-label11");
        L12.classList.replace("case12-label12","case16-label12");
        L13.classList.replace("case13-label13","case16-label13");
        L14.classList.replace("case14-label14","case16-label14");
        L15.classList.replace("case15-label15","case16-label15");
            //c16.appendChild(L);
            c16.appendChild(L1);
            c16.appendChild(L2);
            c16.appendChild(L3);
            c16.appendChild(L4);
            c16.appendChild(L5);
            c16.appendChild(L6);
            c16.appendChild(L7);
            c16.appendChild(L8);
            c16.appendChild(L9);
            c16.appendChild(L10);
            c16.appendChild(L11);
            c16.appendChild(L12);
            c16.appendChild(L13);
            c16.appendChild(L14);
            c16.appendChild(L15);
            c16.appendChild(L16);
            break;    
        case 17:
            let n16=document.querySelector('.circle16');
            u.replaceChild(c17,n16.parentNode.lastChild);
            //c17.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case17-label1");
        L2.classList.replace("case2-label2","case17-label2");
        L3.classList.replace("case3-label3","case17-label3");
        L4.classList.replace("case4-label4","case17-label4");
        L5.classList.replace("case5-label5","case17-label5");
        L6.classList.replace("case6-label6","case17-label6");
        L7.classList.replace("case7-label7","case17-label7")
        L8.classList.replace("case8-label8","case17-label8");
        L9.classList.replace("case9-label9","case17-label9");
        L10.classList.replace("case10-label10","case17-label10");
        L11.classList.replace("case11-label11","case17-label11");
        L12.classList.replace("case12-label12","case17-label12");
        L13.classList.replace("case13-label13","case17-label13");
        L14.classList.replace("case14-label14","case17-label14");
        L15.classList.replace("case15-label15","case17-label15");
        L16.classList.replace("case16-label16","case17-label16");
            //c17.appendChild(L);
            c17.appendChild(L1);
            c17.appendChild(L2);
            c17.appendChild(L3);
            c17.appendChild(L4);
            c17.appendChild(L5);
            c17.appendChild(L6);
            c17.appendChild(L7);
            c17.appendChild(L8);
            c17.appendChild(L9);
            c17.appendChild(L10);
            c17.appendChild(L11);
            c17.appendChild(L12);
            c17.appendChild(L13);
            c17.appendChild(L14);
            c17.appendChild(L15);
            c17.appendChild(L16);
            c17.appendChild(L17);
            break;
        case 18:
            let n17=document.querySelector('.circle17');
            u.replaceChild(c18,n17.parentNode.lastChild);
            //c18.innerText='Spin Created';        
            L1.classList.replace("case1-label1","case18-label1");
        L2.classList.replace("case2-label2","case18-label2");
        L3.classList.replace("case3-label3","case18-label3");
        L4.classList.replace("case4-label4","case18-label4");
        L5.classList.replace("case5-label5","case18-label5");
        L6.classList.replace("case6-label6","case18-label6");
        L7.classList.replace("case7-label7","case18-label7")
        L8.classList.replace("case8-label8","case18-label8");
        L9.classList.replace("case9-label9","case18-label9");
        L10.classList.replace("case10-label10","case18-label10");
        L11.classList.replace("case11-label11","case18-label11");
        L12.classList.replace("case12-label12","case18-label12");
        L13.classList.replace("case13-label13","case18-label13");
        L14.classList.replace("case14-label14","case18-label14");
        L15.classList.replace("case15-label15","case18-label15");
        L16.classList.replace("case16-label16","case18-label16");
        L17.classList.replace("case17-label17","case18-label17");
            //c18.appendChild(L);
            c18.appendChild(L1);
            c18.appendChild(L2);
            c18.appendChild(L3);
            c18.appendChild(L4);
            c18.appendChild(L5);
            c18.appendChild(L6);
            c18.appendChild(L7);
            c18.appendChild(L8);
            c18.appendChild(L9);
            c18.appendChild(L10);
            c18.appendChild(L11);
            c18.appendChild(L12);
            c18.appendChild(L13);
            c18.appendChild(L14);
            c18.appendChild(L15);
            c18.appendChild(L16);
            c18.appendChild(L17);
            c18.appendChild(L18);
            break;        
        case 19:
            let n18=document.querySelector('.circle18');
            u.replaceChild(c19,n18.parentNode.lastChild);
            //c19.innerText='Spin Created';
            L1.classList.replace("case1-label1","case19-label1");
        L2.classList.replace("case2-label2","case19-label2");
        L3.classList.replace("case3-label3","case19-label3");
        L4.classList.replace("case4-label4","case19-label4");
        L5.classList.replace("case5-label5","case19-label5");
        L6.classList.replace("case6-label6","case19-label6");
        L7.classList.replace("case7-label7","case19-label7")
        L8.classList.replace("case8-label8","case19-label8");
        L9.classList.replace("case9-label9","case19-label9");
        L10.classList.replace("case10-label10","case19-label10");
        L11.classList.replace("case11-label11","case19-label11");
        L12.classList.replace("case12-label12","case19-label12");
        L13.classList.replace("case13-label13","case19-label13");
        L14.classList.replace("case14-label14","case19-label14");
        L15.classList.replace("case15-label15","case19-label15");
        L16.classList.replace("case16-label16","case19-label16");
        L17.classList.replace("case17-label17","case19-label17");
        L18.classList.replace("case18-label18","case19-label18");
            //c19.appendChild(L);
            c19.appendChild(L1);
            c19.appendChild(L2);
            c19.appendChild(L3);
            c19.appendChild(L4);
            c19.appendChild(L5);
            c19.appendChild(L6);
            c19.appendChild(L7);
            c19.appendChild(L8);
            c19.appendChild(L9);
            c19.appendChild(L10);
            c19.appendChild(L11);
            c19.appendChild(L12);
            c19.appendChild(L13);
            c19.appendChild(L14);
            c19.appendChild(L15);
            c19.appendChild(L16);
            c19.appendChild(L17);
            c19.appendChild(L18);
            c19.appendChild(L19);
            break;    
        case 20:
            let n19=document.querySelector('.circle19');
            u.replaceChild(c20,n19.parentNode.lastChild);
            //c20.innerText='Spin Created';        
            
            L1.classList.replace("case1-label1","case20-label1");
        L2.classList.replace("case2-label2","case20-label2");
        L3.classList.replace("case3-label3","case20-label3");
        L4.classList.replace("case4-label4","case20-label4");
        L5.classList.replace("case5-label5","case20-label5");
        L6.classList.replace("case6-label6","case20-label6");
        L7.classList.replace("case7-label7","case20-label7")
        L8.classList.replace("case8-label8","case20-label8");
        L9.classList.replace("case9-label9","case20-label9");
        L10.classList.replace("case10-label10","case20-label10");
        L11.classList.replace("case11-label11","case20-label11");
        L12.classList.replace("case12-label12","case20-label12");
        L13.classList.replace("case13-label13","case20-label13");
        L14.classList.replace("case14-label14","case20-label14");
        L15.classList.replace("case15-label15","case20-label15");
        L16.classList.replace("case16-label16","case20-label16");
        L17.classList.replace("case17-label17","case20-label17");
        L18.classList.replace("case18-label18","case20-label18");
        L19.classList.replace("case19-label19","case20-label19");
            //c20.appendChild(L);
            c20.appendChild(L1);
            c20.appendChild(L2);
            c20.appendChild(L3);
            c20.appendChild(L4);
            c20.appendChild(L5);
            c20.appendChild(L6);
            c20.appendChild(L7);
            c20.appendChild(L8);
            c20.appendChild(L9);
            c20.appendChild(L10);
            c20.appendChild(L11);
            c20.appendChild(L12);
            c20.appendChild(L13);
            c20.appendChild(L14);
            c20.appendChild(L15);
            c20.appendChild(L16);
            c20.appendChild(L17);
            c20.appendChild(L18);
            c20.appendChild(L19);
            c20.appendChild(L20);
            break;    
        
        default:
        
            c.classList.add('circle');
            c.innerText='Spin Created';
            document.body.appendChild(c);
            break;    
            
    }
    }else{
        alert("Only 20 participants allowed in spin game");
    }
    return(
        document.getElementById('table1').innerHTML=table1
    )
    //alert("Name:"+" "+ope);
    //create dynamic circles each time and adding number to it 1,2,3,4,...20
    //let L=document.createElement('p');
    //var t=$('.circle3').offset();
    //var t=document.getElementsByClassName("label2");
    //alert("L2 left: "+t.left+" "+"L2 top: "+t.top);
    /*let arrow=document.getElementsByClassName('td');
    console.log(arrow);
    arrow.classList.add('scircle');
  }
 
    
  function AddIncrement(){
    const n=()=>{const [r, setCount]=useState(0);
        const handleCall=()=>{setCount(r=>r+1);};
        return n;
} */


export default AddItem;