let urock = document.getElementById('rock')
let usis = document.getElementById('scissors')
let upaper = document.getElementById('paper')
let result = document.getElementById('result')
let homeAns = document.getElementById('hAns')
let displAns = document.getElementById('dAns')
let uScore = document.getElementById('uScore')
let cScore = document.getElementById('cScore')
let reset = document.getElementById('reset')
let tie = document.getElementById('ties')
let scoreBoard = document.getElementById('scoreBoard')
let uName = document.getElementById('uName')
let head = document.getElementById('head')
let headend = document.getElementById('headend')
let ujScore = 0
let cjScore = 0
let ties = 0
let names = prompt('Whats your name')
console.log(names)

// scoreBoard.innerHTML = 'Click to start'
result.innerHTML = 'Rock Scissors Paper'
displAns.innerHTML = ' '
uName.innerHTML = names
 function rock(){
    head.innerHTML = ' '
    headend.innerHTML = ''
    ramAns = ['rock','paper','scissors']
    ramAns = ramAns[Math.floor(Math.random()*ramAns.length)]
    if (ramAns.toString() === 'rock'){
        result.innerHTML = 'TIE'
        homeAns.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        ties++
        tie.innerHTML = ties
    }else if (ramAns.toString() === 'paper'){
        result.innerHTML = 'LOOSER'
        homeAns.innerHTML = '<i class="fa-solid fa-hand"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        cjScore++
        console.log(cjScore)
        cScore.innerHTML = cjScore
    } else {
        result.innerHTML = 'WINNER'
        homeAns.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        ujScore++
        uScore.innerHTML = ujScore
    }
}

usis.addEventListener('click', () =>{
    headend.innerHTML = ''
    ramAns = ['rock','paper','scissors']
    head.innerHTML = ''
    ramAns = ramAns[Math.floor(Math.random()*ramAns.length)]
    if (ramAns.toString() === 'rock'){
        result.innerHTML = 'LOOSER'
        homeAns.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        cjScore++
        console.log(cjScore)
        cScore.innerHTML = cjScore
    }else if (ramAns.toString() === 'paper'){
        result.innerHTML = 'WINNER'
        homeAns.innerHTML = '<i class="fa-solid fa-hand"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        ujScore++
        uScore.innerHTML = ujScore
    } else {
        ties++
        tie.innerHTML = ties
        result.innerHTML = 'TIE'
        homeAns.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    }
    console.log(ramAns)
})

upaper.addEventListener('click', () =>{
    head.innerHTML = ''
    headend.innerHTML = ''
    ramAns = ['rock','paper','scissors']
    ramAns = ramAns[Math.floor(Math.random()*ramAns.length)]
    if (ramAns.toString() === 'rock'){
        result.innerHTML = 'WINNER'
        homeAns.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand"></i>'
        ujScore++
        uScore.innerHTML = ujScore
    }else if (ramAns.toString() === 'paper'){
        result.innerHTML = 'TIE'
        homeAns.innerHTML = '<i class="fa-solid fa-hand"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand"></i>'
        ties++
        tie.innerHTML = ties
    } else {
        result.innerHTML = 'LOOSER'
        homeAns.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        displAns.innerHTML = '<i class="fa-solid fa-hand"></i>'
        cjScore++
        console.log(cjScore)
        cScore.innerHTML =  cjScore
    }
    console.log(ramAns)
})

reset.addEventListener('click',()=>{
    ujScore = 0
    cjScore = 0
    ties = 0
    uScore.innerHTML = ujScore
    cScore.innerHTML = ujScore
    tie.innerHTML = ties
    result.innerHTML = ''
    homeAns.innerHTML = ''
    displAns.innerHTML = ' '
    head.innerHTML = 'Click Any Button To Start'
})

