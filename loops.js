let i;

for(i = 1; i <=5; i++){


}
let student;

for(student = 1; student <= 40; student+=2){
    console.log('value of the student is: ' + student);
}

let oddNumbers;

for(oddNumbers = 1; oddNumbers <=10; oddNumbers +=3){
    console.log('value of oddNumbers is:' + oddNumbers);
}

let fruits =['Apple', 'Banana', 'Grapes', 'Berries'];
let fruit;
console.log('******************for in*************')
for(fruit in fruits){
    console.log(fruits[fruit])
}

// while loops
console.log('*******do whileloop********')
let counter = 10;

do {
    counter--;
    console.log('The value of counter is:' +counter);
}while (counter >= -1)