const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your prefered programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask (answers.length)
    } else {
        process.exit();
    }
    
});
process.on("exit", () => {
    const [ name, activity, lang ] = answers;

    console.log(` \nThank you for you answers . \nGO ${activity} ${name}, YOu can do ${lang} later `);
});