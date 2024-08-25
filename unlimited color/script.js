//generate a random color
  
const randomColor = function(){
    const hex="0123456789ABCDEF";
    let color ='#';
    for( let i=0;i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];

    }
    return color;

};
//console.log(randomColor());
let intervalid;//global variable
const startchangingcolor= function(){
    if(!intervalid){
        intervalid= setInterval( changebgcolor,1500);
    }
    
        function changebgcolor(){
            document.body.style.backgroundColor = randomColor();
        }
    
};
const stopchangingcolor= function(){
    clearInterval( intervalid);
    intervalid= null;
}

document.querySelector("#start").addEventListener('click',startchangingcolor  )
document.querySelector("#stop").addEventListener('click',stopchangingcolor  )