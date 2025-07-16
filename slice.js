const address = 'andorKilla';
const part = address.slice(2,5);
// console.log(part);

const sentence = 'I am a good and hardworking man';
// console.log(sentence.split(' '));

const friendsStr = 'Rahim,Kahim,Dahim,Lahim,Sahin';
const friends = friendsStr.split(',');
// console.log(friends);

const friendsArray = ['Rahim', 'Kahim' , 'Dahim' ,'Lahim' ,'Sahin'];
console.log(friendsArray.join());
console.log(friendsArray.join('|'));