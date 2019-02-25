function Pet(name) {
  // reminder for myself only: 'this' keyword means whatever instance is created, it belongs to the Pet constructor:
  this.name = name;
  this.age = 0;
};

Pet.prototype.growUp = function() {
    this.age += 1;
  
  };

module.exports = Pet;