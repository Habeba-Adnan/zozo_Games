window.onload=function(){
    SetGame();
    document.getElementById("btn").addEventListener("click",startAgain);
};

let CurrentMole = null;
let CurrentPlant= null;
let counter=0;
let GameOver=false;

function startAgain() {
    // Reset game variables
    CurrentMole = null;
    CurrentPlant = null;
    counter = 0;
    GameOver = false;

    // Clear the game elements
    let soil = document.getElementById('soil');
    soil.innerHTML = '';

    // Start the game again
    SetGame();
    document.getElementById('score').innerHTML = counter.toString();
}


function SetGame()
{
    for(let i=0 ;i<9;i++)
    {
        let pipe=document.createElement("div");
        pipe.id=i.toString();
        pipe.addEventListener("click",Selected);
        document.getElementById("soil").appendChild(pipe);
    }
    setInterval(SetMole,1000);
    setInterval(SetPlant,2000);
}

function GetRandom()
{
    let RandomNum=Math.floor(Math.random()*9);
    return RandomNum.toString();

}

function SetMole()
{
    if(GameOver)
    {
        return;
    }
    if(CurrentMole)
    {
        CurrentMole.innerHTML= "";
    }


    let mole = document.createElement("img");
    mole.src="monty-mole.png";
    let num = GetRandom();
    if((CurrentPlant && CurrentPlant.id) == num)
    {
        return;
    }
    CurrentMole=document.getElementById(num);
    CurrentMole.appendChild(mole);
}

function SetPlant()
{
    if(GameOver)
    {
        return;
    }
    if(CurrentPlant)
    {
        CurrentPlant.innerHTML= "";
    }

    let plant = document.createElement("img");
    plant.src="piranha-plant.png";
    let num = GetRandom();

    if((CurrentMole && CurrentMole.id) == num)
    {
        return;
    }

    CurrentPlant=document.getElementById(num);
    CurrentPlant.appendChild(plant);
}

function Selected()
{
    if(GameOver)
    {
        return;
    }
    if(this==CurrentMole)
    {
        counter+=10;
        document.getElementById("success").play();
        document.getElementById("score").innerHTML=counter.toString();
    }
    if(this==CurrentPlant)
    {
        document.getElementById("fail").play();
        document.getElementById("score").innerHTML="Game Over: "+counter.toString();
        GameOver=true;
    }
}