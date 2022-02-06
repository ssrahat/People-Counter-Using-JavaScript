let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')

let count = 0
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    //saveEl.innerText += countStr
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let username = 'per'
let message = 'You have three new notifications'
let messageTouser = message + ', ' + username + '!'
//console.log(messageTouser)

let nameR = 'Rahat'
let greeting = 'Hi, my name is'
let myGreeting = greeting + ' ' + nameR
//console.log(myGreeting)

let welcomeEl = document.getElementById('welcome-el')

let nameV = 'Admin Name';
let greetings = 'Hi,';
welcomeEl.innerText = greetings + " " + nameV
welcomeEl.innerText += " !!"












