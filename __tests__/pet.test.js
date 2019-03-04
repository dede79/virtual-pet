const Pet = require('../src/pet');

let pet;

beforeEach(() => {
  pet = new Pet('Fido');
});

describe('constructor', () => {

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

  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
  	expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});


describe('walk', () => {

  it('increases fitness by 4', () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it('throws an error if the pet is not alive', () => {
    pet.fitness = 0;
  	expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });

});


// adds missing test case, when hunger does not decrease as it's on its minimum
describe('feed', () => {

  it('decreases hunger by 3', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it('it stays on minimum hunger level if pet is not hungry', () => {
    pet.hunger = 0;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
  	expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});


describe('checkUp', () => {

  it('check if both hunger and fitness are outside of their minimum levels', () => {
    pet.hunger = 8;
    pet.fitness = 2;
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

  it('throws an error if the pet is not alive', () => {
    pet.age = 100;
  	expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  });
});

describe('isAlive', () => {

  it("if the pet's fitness is 0 or less, it should return false", () => {
    pet.fitness = 0;
    expect(pet.isAlive).toBeFalsy();
  });

  it("if the pet's hunger is 10 or more, it should return false", () => {
    pet.hunger = 15;
    expect(pet.isAlive).toBeFalsy();
  });

  it("if the pet's age is 30 or more, it should return false", () => {
    pet.age = 31;
    expect(pet.isAlive).toBeFalsy();
  });

  it('otherwise it should return true - pet is still alive', () => {
    expect(pet.isAlive).toBeTruthy();
  });
});

describe('haveBaby', () => {
  it("Assert that the parent pet's children property is an array, where the first element is an instance of Pet with a name property of Billy", () => {
    const parent = new Pet('Dave');
    const newChild = new Pet('Billy');
    parent.haveBaby(newChild);
    expect(parent.children).toContain(newChild);
  });
});
