//complete this code
//complete this code
class Animal {
	constructor(species){
	    this.species = species;
	}
	
	get speciesName(){
	    return this.species;
	}
  makeSound(){
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  bark(){
    console.log('woof')
  }
}

class Cat extends Animal {
  purr(){
    console.log('purr');
  }
}

let cat = new Cat("Siamese");
cat.makeSound();
cat.purr();
console.log(cat.speciesName);
let dog = new Dog("Golden Retriever");
dog.makeSound();
console.log(dog.speciesName);
dog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
