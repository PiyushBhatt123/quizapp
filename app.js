let arr=[{question:"what is the capital of unight kindom",
          opetion:["landon","newdelhi","vasgitondc","sidini"],
          answer:"landon"},
          {question:"who is the prime minister of india",
          opetion:["Narandr modi","rahul gandhi","Vivek srivastav","jerjoia meloni"],
          answer:"Narandr modi"},
          {question:"who is the chief minister of uttrakhand",
          opetion:["puskar singh dhami","vedugopal ayyar","govind ballab pant","genrel gurmit patel"],
          answer:"puskar singh dhami"},
         {question:"alaknanda river comes from which distic of uttrakhand",
          opetion:["Chamoli","rudraprayag","pithoragarh","bageshwar"],
          answer:"Chamoli"}];
          let timeout=20;
          let index=0;
          let score=0;
          let div=document.querySelector("#container");
          let button=document.querySelector(".btn");
          button.style.display="none";
          let q=arr[index];
          let h1=document.querySelector("h1");
          let arropt=q.opetion;
          let opt=document.querySelector("#option"); 
          let h2=document.querySelector("h2");
          let timout;
          function timer (){     // this function will create 20s time to every question
           timout=setInterval(() => {
           h2.innerText=`${timeout}s`
            if(index>=4){
              h2.innerText="";
            }
        
           else if(timeout==0){
             clearInterval(timout);    
             if(index!=4) {
               index++;
               q=arr[index];
              timeout=20;
             disappereoption();      
             } 
                
           }
             timeout--
         },1000); 
          
   }
   
     function Createqus(){  // by the help of index number this function creats question
            if(index==4){
            h1.innerText=`you scored ${score} out of ${arr.length}`;
            // disappereoption();
            div.removeChild(button);
            }
            timer();  
            let qus=q.question; 
            h1.innerText=qus;// to show the question inside the h1 element
            CreateOption()
     }     
         function CreateOption(){  // opetion will create
          q.opetion.forEach((optn)=>{ 
          let btn=document.createElement("button");
          btn.innerText=optn;
          opt.appendChild(btn);
          btn.classList.add("btn");
          btn.onclick=(()=>{ 
          checkans(btn,q);
            let allbutton=document.querySelectorAll(".btn");
             for(let i=0;i<allbutton.length-1;i++){
              allbutton[i].disabled="true";
             }   
            clearInterval(timout);   

          // resetoption()
         });
         })
        }
         function checkans(checkans,answer){ // ans will check 
         if(checkans.innerText==answer.answer){
         checkans.classList.add("flash");
         score++;
         }
         else{
          checkans.classList.add("worng");
         }
          button.style.display="inline";
         }
         button.onclick=()=>{  // what will  happen when next button will click
          index++;
          q=arr[index];
          timeout=20;
          disappereoption();
           
          // resetquiz();
        }
         function disappereoption(){ // disapper all the button 
            let allbutton=document.querySelectorAll(".btn");
            //  clearInterval(timout);
             for(let i=0;i<allbutton.length-1;i++){
              opt.removeChild(allbutton[i]);  
             }
              button.style.display="none";
            Createqus();// function call for creating next question 
        }
        Createqus();
       
    
         
          
    