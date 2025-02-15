const final=['Rock','Paper','Scissors'];

const answer1=document.getElementById('answer1');
const answer2=document.getElementById('answer2');
const start= document.querySelector('button');
const win= document.getElementById('win');
start.addEventListener('click',()=>{
    let ans1= Math.floor(Math.random()*3);
    answer1.innerHTML=final[ans1];
    let ans2= Math.floor(Math.random()*3);
    answer2.innerHTML=final[ans2];

    if(ans1===0 && ans2===0  || ans1===1 && ans2===1 ||ans1===2 && ans2===2  ){
        win.innerHTML="Draw";
    }
    else if(ans1===0 && ans2===2||ans1===1 && ans2===0||ans1===2 && ans2===1){
        win.innerHTML="winner is Player 1";
    }
    else{
        win.innerHTML="Winner is Player 2";
    }
})



