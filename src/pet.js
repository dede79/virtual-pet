function Pet(name) {
	// reminder for myself only: 'this' keyword means whatever instance is created, it belongs to the Pet constructor:
	this.name = name;
	this.age = 0;
	this.hunger = 5;
	this.fitness = MAXIMUM_FITNESS;
	this.children = [];

};

//getter methods must come immmediately after constructor function
Pet.prototype = {
		get isAlive() {
			return this.age < 30 && this.hunger < 10 && this.fitness > 0;
	}
};

Pet.prototype.growUp = function () {
		if (!this.isAlive) {
			throw new Error('Your pet is no longer alive :(');	  
		}

		this.age += 1;
		this.hunger += 5;
		this.fitness -= 3;
	};
	
const MAXIMUM_FITNESS = 10;

Pet.prototype.walk = function () {
	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');	  
	}

		this.fitness += 4;
}

const MINIMUM_HUNGER_LEVEL = 0; 

Pet.prototype.feed = function () {

if (!this.isAlive) {
	throw new Error('Your pet is no longer alive :(');
}

	if ((this.hunger - 3) >= MINIMUM_HUNGER_LEVEL) {
		this.hunger -= 3;
	} else {
		this.hunger = MINIMUM_HUNGER_LEVEL;
	}
};

Pet.prototype.checkUp = function () {
	
	const petFitnessLevel = 3;
	const petHungerLevel = 5;

	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');	  
	}
	
	if (this.fitness <= petFitnessLevel && this.hunger >= petHungerLevel) {
		return 'I am hungry AND I need a walk';
	}

	if(this.hunger >= petHungerLevel) {
		return 'I am hungry';
	}

	if (this.fitness < petFitnessLevel) {
		return 'I need a walk';
	}

	if (this.fitness > petFitnessLevel && this.hunger < petHungerLevel) {
		return 'I feel great!';
	}

	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');	  
	}

};

Pet.prototype.haveBaby = function (child) {
	return  this.children.push(child);
  }

module.exports = Pet;