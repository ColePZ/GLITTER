// modules
const readline = require('readline');

// devs
const dev = "colepz"

// versions
let version = "0.0.1"

// other things
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(
    `Hey there! You are playing Glitter version ${version} by ${dev}
Please make sure you are using node.js version 9.3.0
====================================================`
)



rl.question('What is your name? ', (name) => {
    let userName = name
    
  
    rl.close();
    console.log("Welcome to GLITTER")
    console.log(`Your name is set as: ${name}`);
    console.log(
        `Welcome to GLITTER, ${userName}`
    )
    console.log(`Your character was auto-named to ${userName}`)
    console.log("More coming soon!")
});