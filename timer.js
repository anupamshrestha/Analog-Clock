const waitTime = 5000;
const waitInterval = 100;
let currentTime = 0;

console.log(`Setting a ${waitTime / 1000} second delay`);
// console.log(`Setting a ${waitInterval / 1000} seconds`);

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
};
const interval = setInterval(incTime, waitInterval);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done");
}
setTimeout(timerFinished, waitTime);