document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#red").onmouseover=()=>{
        document.getElementById("red").style.color="red";
    }
    document.querySelector("#black").onmouseover=()=>{
        document.getElementById("black").style.color="blue";
    } 
    document.querySelector("#red").onmouseout=()=>{
        document.getElementById("red").style.removeProperty("color");
          
    }
    document.querySelector("#black").onmouseout=()=>{
        document.getElementById("black").style.color="black";
        
    }
    document.querySelector("#tw").onmouseover=()=>{
        document.getElementById("tw").style.color="yellow";
    }
    document.querySelector("#fa").onmouseover=()=>{
        document.getElementById("fa").style.color="blue";
    } 
    document.querySelector("#tw").onmouseout=()=>{
        document.getElementById("tw").style.removeProperty("color");
          
    }
    document.querySelector("#fa").onmouseout=()=>{
        document.getElementById("fa").style.removeProperty("color");
    }
    document.querySelector("#hea").onmouseover=()=>{
        document.getElementById("hea").style.color="white";
    }
    document.querySelector("#lik").onmouseover=()=>{
        document.getElementById("lik").style.color="blue";
    } 
    document.querySelector("#hea").onmouseout=()=>{
        document.getElementById("hea").style.color="red";
          
    }
    document.querySelector("#lik").onmouseout=()=>{
        document.getElementById("lik").style.color="grey";
        
    }
    document.querySelector("#white").onmouseover=()=>{
        document.getElementById("white").style.color="yellow";
    }
    document.querySelector("#grey").onmouseover=()=>{
        document.getElementById("grey").style.color="blue";
    } 
    document.querySelector("#white").onmouseout=()=>{
        document.getElementById("white").style.color="skyblue";
          
    }
    document.querySelector("#grey").onmouseout=()=>{
        document.getElementById("grey").style.color="skyblue";
        
    }
    document.querySelector("#log").onmouseover=()=>{
        document.getElementById("log").style.backgroundColor="blue";
    }
    document.querySelector("#view").onmouseover=()=>{
        document.getElementById("view").style.backgroundColor="rgb(8, 161, 231)";
    } 
    document.querySelector("#log").onmouseout=()=>{
        document.getElementById("log").style.backgroundColor="white";
          
    }
    document.querySelector("#view").onmouseout=()=>{
        document.getElementById("view").style.backgroundColor="skyblue";
        
    }
});   