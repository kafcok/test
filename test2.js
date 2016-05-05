function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    
    return firstname + ' ' + lastname;
}

var somePerson = Person('John', 'Doe');
var someOtherPerson = new Person('Jane', 'Doe');

console.log(somePerson);
console.log(someOtherPerson);