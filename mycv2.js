
window.onload = function ()  {




setInterval(()=>one_step(), 5000); 
document.querySelector("#michael").addEventListener("mouseover", displayText) 
document.querySelector("#michael").addEventListener("mouseout", invdisplayText) 
};

function one_step() {
    let color = document.querySelector("body").style.backgroundColor ;
    
    if (color == "rgb(44, 120, 115)") {
        document.querySelector("body").style.backgroundColor =" rgb(255, 216, 0)";
    }
    else if (color == "rgb(255, 216, 0)") {
        document.querySelector("body").style.backgroundColor = "rgb(111, 185, 143)";
    }
    else if (color == "rgb(111, 185, 143)") {
        document.querySelector("body").style.backgroundColor = "rgb(44, 120, 115)";
    }  

};

function displayText() {
    console.log(document.querySelector("#hidden").style)
    document.querySelector("#hidden").style.display = "flex"
}

function invdisplayText(){
    document.querySelector("#hidden").style.display = "none"
}




