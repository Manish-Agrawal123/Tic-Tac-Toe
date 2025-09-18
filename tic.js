let btns=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".newgame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let dturn=document.querySelector("#displayturn");
//track game state
let count=0;
let check=false;//winner found or not
let turno=true;// true=playerO,false=playerX

let Oscore=0;
let Xscore=0;

let PlayerO=document.querySelector("#playerO");
let PlayerX=document.querySelector("#playerX");
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetnewGame = ()=>{
    // turno="O";
    check=false;
    count=0;
    enableButton();
    msgContainer.classList.add("hide");
}
const resetGame=()=>{
    Oscore=0;
    PlayerO.innerText=0;
    Xscore=0;
    PlayerX.innerText=0;
    check=false;
    count=0;
    enableButton();
    msgContainer.classList.add("hide");
}
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    if(turno){
        dturn.innerText="Player 'X' Turn";
        btn.innerText="O";
        count++;
        turno=false;
     } else {
        dturn.innerText="Player 'O' Turn";
        btn.innerText="X";
        count++;
        turno=true;

     }
    btn.disabled=true;
    checkWinner();
    });
});
const showWinner =(winner)=>{
    if(winner==="X"){
        Xscore++;
        PlayerX.innerText=Xscore;
    }else{
        Oscore++;
        PlayerO.innerText=Oscore;
    }
    msg.innerText=` 🎉🥳 Congratulation! 🥳🎉 \n Winner is Player '${winner}'`;
    msgContainer.classList.remove("hide");
}
const draw=()=>{
    msg.innerText="🤝🤝 It's a Draw";
    msgContainer.classList.remove("hide");
}
const disableButton = ()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
const enableButton = ()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1=btns[pattern[0]].innerText;
       let pos2=btns[pattern[1]].innerText;
       let pos3=btns[pattern[2]].innerText;
    if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
            disableButton();
            showWinner(pos1);
            check=true;
            return;//stop checking further
        }
    }
    }
    if(check===false && count===9){
         draw(); 
    }
} ;
newGame.addEventListener("click", resetnewGame);
reset.addEventListener("click", resetGame);
    
