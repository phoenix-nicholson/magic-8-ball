export const answers = [
    'Probably.', "Fasho'!", 'Ehhh...', 'I think so?',
    'Nahhh.', 'Maybe tomorrow.', 'Yes.', 'NO!', 'Yah.. No.'];



export const getRandomIndx = (max)=>{
    return Math.floor(Math.random() * max);
};
export const randomIndx = getRandomIndx(answers.length);
// console.log(answers[randomIndx]);