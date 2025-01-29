var obj = {
    name: 'omar'
};

var personString = '{"name":"omar","age": 22}';

var stringObj = JSON.stringify(obj);

var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);