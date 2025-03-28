let subject = ["A Curious cat","An AI Assistant","The programmer","A time traveller","A sleepy panda"];
let action = ["solves a mystery", "writes a buggy code", "accidentally teleports", "eats too much pizza", "invents a new language"];
let object = ["a self-driving car", "a secret government file", "a talking parrot", "a quantum computer", "a lost treasure map"];
let preposition = ["for","with","about"];
let endings = ["and accidentally breaks the internet!", "but forgets how it happened.", "which leads to unexpected consequences.", "causing chaos in the city.", "and discovers an ancient secret!"];

let subjectLength = subject.length;
let actionLength = action.length;
let objectLength = object.length;
let prepositionLength = preposition.length;
let endingsLength = endings.length;

const randomMessage = () => {
    let subjectMesage = subject[Math.floor(Math.random() * subjectLength)];
    let actionMessage = action[Math.floor(Math.random() * actionLength)];
    let objectMessage = object[Math.floor(Math.random() * objectLength)];
    let prepositionMessage = preposition[Math.floor(Math.random() * prepositionLength)];
    let endingsMessage = endings[Math.floor(Math.random() * endingsLength)];

    return `${subjectMesage} ${actionMessage} ${objectMessage} ${prepositionMessage} ${endingsMessage}`;
}

console.log(randomMessage());