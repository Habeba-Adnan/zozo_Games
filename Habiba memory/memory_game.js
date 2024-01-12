$(document).ready(function(){
  $(".CardGame").click(function(){
    $(this).find(".Card").toggleClass("clicked");
  });
});



let TheName=document.getElementById("Name");
document.getElementById("btn").onclick=function(){
  let YourName= prompt("Enter Your Name ");
  if(YourName === null || YourName === "")
  {
      TheName.innerHTML="unknown";
  }
  else{
    TheName.innerHTML=YourName;
  }
  document.getElementById("splash").remove();
  
};


let time = 1000;
let Container=document.querySelector(".container");
let cards= Array.from(Container.children);
let Order= [...Array(cards.length).keys()];

// console.log( Order);
Shuffle(Order);
// console.log( Order);

cards.forEach((card,index)=>{
  // console.log( card);
  // console.log( index);
  card.style.order=Order[index];

  card.addEventListener("click",function(){
      FlipCard(card);
  });
});





function FlipCard(SelectedCard)
{
    SelectedCard.classList.add('clicked');
    let NumOfSelectedCards=cards.filter(FlippedCard=>FlippedCard.classList.contains("clicked"));
    // console.log(NumOfSelectedCards);
    if(NumOfSelectedCards.length ===2)
    {
      Stop();
      // console.log("tttt");
        Match(NumOfSelectedCards[0],NumOfSelectedCards[1]);
    }
}

function Stop()
{
  Container.classList.add('no-click');
  setTimeout(() => {
    Container.classList.remove('no-click');
  }, time);
}

function checkWin() {
  let Container = document.querySelector(".container");
  let cards = Array.from(Container.children);
  let totalCards = cards.length;

  let clickedCards = cards.filter(card => card.classList.contains("matched"));

  if (clickedCards.length === totalCards) {
    console.log("win");
  }
}



function Match(card1,card2)
{
  let NumOfTries=document.getElementById("number");
  if(card1.dataset.fruits===card2.dataset.fruits)
  {
    card1.classList.remove('clicked');
    card2.classList.remove('clicked');
    card1.classList.add('matched');
    card2.classList.add('matched');
    document.getElementById("success").play();
    
  }
  else{
    NumOfTries.innerHTML = parseInt(NumOfTries.innerHTML)+1;
    setTimeout(() => {
      card1.classList.remove('clicked');
      card2.classList.remove('clicked');
    }, time);
    document.getElementById("fail").play();
  }
  checkWin();
}


function Shuffle(array)
{
  let selected= array.length;
  let temp;
  let random;
  while(selected>0)
  {
    random = Math.floor(Math.random()*selected);
    selected--;
    temp = array[selected];
    array[selected]=array[random];
    array[random]=temp;
  }
  return array;

}

