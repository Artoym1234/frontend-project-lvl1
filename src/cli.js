import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
function greetings() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
export default greetings;
