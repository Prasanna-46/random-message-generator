const subject = ["A Curious cat", "An AI Assistant", "The programmer", "A time traveller", "A sleepy panda"];
const action = ["uncovers", "creates", "hacks into", "discovers", "accidentally activates"];
const object = ["a hidden algorithm", "a top-secret project", "a futuristic device", "a parallel universe", "a mysterious code"];
const preposition = ["for", "with", "about"];
const endings = ["and accidentally breaks the internet!", "but forgets how it happened.", "which leads to unexpected consequences.", "causing chaos in the city.", "and discovers an ancient secret!"];

const randomMessage = () => {
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    return `${getRandomElement(subject)} ${getRandomElement(action)} ${getRandomElement(object)} ${getRandomElement(preposition)} ${getRandomElement(endings)}`;
};

console.log(randomMessage());
