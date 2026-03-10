/* navigation */

function openPage(id){

document.querySelectorAll(".page").forEach(p=>p.style.display="none")

document.getElementById(id).style.display="block"

}

/* typing text */

const text="Этот сайт - маленькое напоминание о том, как ты для меня важна и как сильно я тебя люблю ❤️"

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,40)

}

}

typing()

/* counter */

const startDate=new Date("2024-11-19")

function updateCounter(){

const now=new Date()

const diff=now-startDate

const days=Math.floor(diff/(1000*60*60*24))
const hours=Math.floor(diff/(1000*60*60)%24)
const minutes=Math.floor(diff/(1000*60)%60)

document.getElementById("counter").innerText=

"Наши отношения уже длятся "+days+" дней "+hours+" часов и "+minutes+" минут ❤️"

}

setInterval(updateCounter,1000)

updateCounter()

/* hearts */

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.animation="fall "+(3+Math.random()*5)+"s linear"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>heart.remove(),8000)

}

setInterval(createHeart,300)

/* petals */

function createPetal(){

const petal=document.createElement("div")

petal.classList.add("petal")

petal.innerHTML="🌸"

petal.style.left=Math.random()*100+"vw"

petal.style.animation="fall "+(5+Math.random()*6)+"s linear"

document.querySelector(".petals").appendChild(petal)

setTimeout(()=>petal.remove(),9000)

}

setInterval(createPetal,800)

/* music */

function toggleMusic(){

const music=document.getElementById("music")

if(music.paused){

music.play()

}else{

music.pause()

}

}

/* love explosion */

function loveExplosion(){

for(let i=0;i<30;i++){

setTimeout(createHeart,i*50)

}

alert("Я тебя люблю, ты самая лучшая ❤️")

}

/* game */

/* GAME */

const symbols = ["❤️","🌸","🌹","💖","🌺","💕","🌷","💘"]

let cards=[]
let firstCard=null
let secondCard=null
let lock=false
let matches=0

function startGame(){

const board=document.getElementById("gameBoard")

board.innerHTML=""

matches=0

const gameSymbols=[...symbols,...symbols]

gameSymbols.sort(()=>0.5-Math.random())

gameSymbols.forEach(symbol=>{

const card=document.createElement("div")
card.classList.add("card")

card.dataset.symbol=symbol

card.innerHTML=`

<div class="card-face card-front"></div>
<div class="card-face card-back">${symbol}</div>

`

card.addEventListener("click",()=>flipCard(card))

board.appendChild(card)

})

}

function flipCard(card){

if(lock) return
if(card.classList.contains("flip")) return

card.classList.add("flip")

if(!firstCard){

firstCard=card
return

}

secondCard=card
lock=true

checkMatch()

}

function checkMatch(){

if(firstCard.dataset.symbol===secondCard.dataset.symbol){

firstCard.classList.add("matched")
secondCard.classList.add("matched")

matches++

resetTurn()

if(matches===8){

setTimeout(winGame,600)

}

}else{

setTimeout(()=>{

firstCard.classList.remove("flip")
secondCard.classList.remove("flip")

resetTurn()

},900)

}

}

function resetTurn(){

firstCard=null
secondCard=null
lock=false

}

function winGame(){

const win=document.getElementById("winMessage")

win.innerHTML="✨ Какая ты умничка! ✨"

loveExplosion()

}

/* start */

startGame()