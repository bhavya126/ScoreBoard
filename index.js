let homeScore=document.getElementById("homeScore")
let guestScore=document.getElementById("guestScore")
let hs=0;
let gs=0;

function compareScore(){
    if(gs>hs){
        guestScore.style.color='yellow'
        homeScore.style.color='rgb(244, 63, 63)'
    }
    else if(hs>gs){
        homeScore.style.color='yellow'
        guestScore.style.color='rgb(244, 63, 63)'
    }
    else{
        guestScore.style.color='green'
        homeScore.style.color='green'
    }
}
function hAdd(n){
    hs+=n;
    homeScore.textContent=hs;
    compareScore()
}

function gAdd(n){
    gs+=n;
    guestScore.textContent=gs;
    compareScore()
}

function resetScore(){
    gs=0;
    hs=0;
    guestScore.textContent=gs;
    homeScore.textContent=hs;
    guestScore.style.color='rgb(244, 63, 63)'
    homeScore.style.color='rgb(244, 63, 63)'
}