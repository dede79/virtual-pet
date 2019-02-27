const Pet = require('../src/pet');

describe('constructor', () => {
	let pet;

	beforeEach(() => {
    	pet = new Pet('Fido');
	});

	it('returns an object', () => {
		expect(new Pet('Fido')).toBeInstanceOf(Object);
	});

	it('sets the name property', () => {
	    expect(pet.name).toEqual('Fido');

	});
	
	it('has a initial age of 0', () => {
		expect(pet.age).toEqual(0);

	});	

});

describe('growUp', () => {
	let pet;

	beforeEach(() => {
    	pet = new Pet('Fido');
	  });

	it('increments the age by 1', () => {
		pet.growUp();
		expect(pet.age).toEqual(1);
	});

	it('increase the hunger by 5', () => {
		pet.growUp();
		expect(pet.hunger).toEqual(10);
	});

	it('decrease fitness by 3', () => {
		pet.growUp();
		expect(pet.fitness).toEqual(7);
	});

  });

describe('walk', () => {
	it('increases fitness by 4', () => {
		const pet = new Pet('fido');
		pet.fitness = 4;
		pet.walk();
		expect(pet.fitness).toEqual(8);
	});
  
});

describe('feed', () => {
	it('decreases hunger by 3', () => {
		const pet = new Pet('fido');
		pet.hunger = 5;
		pet.feed();
		expect(pet.hunger).toEqual(2);
	});
  
});

describe('checkUp', () => {
	let pet;

	beforeEach(() => {
    	pet = new Pet('Fido');
	});
	  
	it('check if both hunger and fitness are outside of their minimum levels', () => {
		pet.hunger = 5;
		pet.fitness = 3;
		expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
	});

	it('checks if hunger is above minimum level of 5', () => {
		pet.hunger = 5;
		expect(pet.checkUp()).toBe('I am hungry');
	});

	it('check if fitness level is below minimum level of 3', () => {
		pet.hunger = 3;
		pet.fitness = 1;
		expect(pet.checkUp()).toBe('I need a walk');
	});

	it('check if both are within acceptable levels', () => {
		pet.fitness = 9;
		pet.hunger = 2;
		expect(pet.checkUp()).toBe('I feel great!');
	});
});