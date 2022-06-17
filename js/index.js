// Iteration 1: Names and Input

let hacker1 = 'rita'
console.log(`The driver's name is ${hacker1}`)

let navigator = 'karen'
console.log(`The navigator's name is ${navigator}`)

// Iteration 2: Conditionals

let names = [hacker1, navigator] ;
let lengthNum = []
lenghtName(names)

function lenghtName(names) {

    let counter =[];
    for (let i = 0 ; i < names.length; i ++ ) {
        let name = names[i]
        
        counter = name.length
        lengthNum.push(counter)
    }  
    console.log(lengthNum)

    let driver = lengthNum[0]
    let driver2 = lengthNum[1]

    if (driver > driver2) {
        console.log(`The driver has the longest name, it has ${driver} characters.`)
    } else if (driver < driver2) {
        console.log(`It seems that the navigator has the longest name, it has ${driver2} characters.`)
    } else if (driver === driver2) {
        console.log(`Wow, you both have equally long names, ${driver} characters!`)
    }
}

// option 2 - using .length

if ( hacker1.length > navigator.length) {
    console.log(`The driver has to longest name, it has ${hacker1.length} characters`)
} else if ( hacker1.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)    
    } else {
        console.log(`Wow, you both have equally long names, ${navigator.length} characters!`)
}

// Iteration 3: Loops

// 3.1

// option 1 
const myArr = hacker1.split("")
console.log(myArr.join(" ").toUpperCase())

// option 2 - without using .join()
spaceAndUpper(hacker1)

function spaceAndUpper (pessoa) {
    let newPessoa = ''

    for (let i = 0 ; i < pessoa.length; i++) {
        let letter = pessoa.charAt(i).toUpperCase() + " "
        newPessoa += letter
    } 
    console.log(newPessoa)
}


//3.2
function inverter(name){
    let str ='';
    for(let i = name.length - 1;i>= 0 ; i--){
        str+=name[i];
    }
    return str;
}
console.log(inverter(navigator));

// 3.3 Lexicographic Order
let lista = [hacker1, navigator]
lista.sort(); 
console.log(lista)

if (hacker1 === navigator){   
    console.log('What?! You both have the same name?')
} else {
    if(lista[0] === hacker1) {
        console.log(`The driver's name goes first.`)
    } else if (lista[0] === navigator) {
        console.log(`Yo, the navigator goes first definitely.`)
    } 
}
