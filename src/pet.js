// global constants should be declared at the top of the file, as this makes for easier
// reference and maintainability

const MAXIMUM_AGE = 30;

const MAXIMUM_FITNESS = 10;
const LOW_FITNESS_LEVEL = 3;
const MINIMUM_FITNESS_LEVEL = 0;

const MAXIMUM_HUNGER_LEVEL = 10;
const HIGH_HUNGER_LEVEL = 5;
const MINIMUM_HUNGER_LEVEL = 0; 

function Pet(name) {
	this.name = name;
	this.age = 0;
	this.hunger = 5;
	this.fitness = MAXIMUM_FITNESS;
	this.children = [];
};


// setting maximum age, maximum hunger level and minimum fitness level as global constants above 
//makes your code 1) easier to read, 2) easier to maintain, 3) more consistent

Pet.prototype = {
	get isAlive() {
		return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER_LEVEL && this.fitness > MINIMUM_FITNESS_LEVEL;
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
	
Pet.prototype.walk = function () {
	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');	  
	}

	this.fitness += 4;
}

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

// Good idea creating petFitnessLevel and petHungerLevel as consts. The naming is a 
// bit too generic, so maybe they can be changed to something more descriptive like 
// highHungerLevel and lowFitnessLevel. Then maybe we can add them to the list of 
// constants available in our application, as this makes our code more organised 
//and easier to maintain

// we are checking that pet is alive twice, being the second redundant

// the last if statement is the 'catch all' statement in our chain so it should be an
// else{} instead

Pet.prototype.checkUp = function () {
	
	if (!this.isAlive) {
		throw new Error('Your pet is no longer alive :(');	  
	}
	
	if (this.fitness <= LOW_FITNESS_LEVEL && this.hunger >= HIGH_HUNGER_LEVEL) {
		return 'I am hungry AND I need a walk';
	}

	if(this.hunger >= HIGH_HUNGER_LEVEL) {
		return 'I am hungry';
	}

	if (this.fitness < LOW_FITNESS_LEVEL) {
		return 'I need a walk';
	}

	else {
		return 'I feel great!';
	}
};

Pet.prototype.haveBaby = function (child) {
	return  this.children.push(child);
}

module.exports = Pet;