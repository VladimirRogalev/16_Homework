//id;firstName;lastName;age
// 333333, Vladimir, Rogalev, 30
// 333322333, Vladimir, Rogalev, 39
// 32333, Vladimir, Rogalev, 14
// 1133, Vladimir, Rogalev, 28


let index = 1;

const persons = [];
let inputData = prompt(`${index}) Enter your person data separate by ","`);


while (inputData) {
    let res = inputData.split(', ');
    if (res.length !== 4 || inputData.trim() === '') {
        alert('Please enter person data as in the example');
    } else {
        const person = new Person(res[0], res [1].trim(), res[2].trim(), res[3]);
        if (findPersons(persons, res[0]) !== undefined) {
            alert('This ID already exists!');
        } else {
            persons.push(person);
            index++;
        }
    }
    inputData = prompt(`${index}) Enter your person data separate by ","`);
}


// printPersons(persons);
// console.log(printPersons(persons));

Person.prototype.toString = function () {
    return `ID: ${this.id}, First name: ${this.firstName}, Last name: ${this.lastName}, Age: ${this.age}`;
}
persons.forEach(person => {
    console.log(person.toString());
})

// function printPersons(persons) {
// //     let res = persons.map((p, i) => `${i + 1} ID: ${p.id}, First name: ${p.firstName}, Last name: ${p.lastName}, Age: ${p.age}`);
// //     console.log(res);
//     toString()
//         return `ID: ${this.id}, First name: ${this.firstName}, Last name: ${this.lastName},
//          Age: ${this.age}`;
//
// }
console.log(printStats(persons).toString());

function printStats(persons) {
    const averageAge=persons.reduce((accum, person) => accum + person.age, 0) / persons.length;
    const sumAge = persons.reduce((accum, person) => accum + person.age, 0);
    const minAge = Math.min(...persons.map(person => person.age));
    const maxAge = Math.max(...persons.map(person => person.age));
return [`Average age: ${averageAge} , Sum age: ${sumAge}, Min age: ${minAge} Max age: ${maxAge}`];
}

function findPersons(persons, id) {
    return persons.find(person => person.id === +id);
}

function Person(id, firstName, lastName, age) {
    this.id = +id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}
