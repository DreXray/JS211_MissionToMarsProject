'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here

// shift + option + down to reflect code down
class Ship {
  constructor(ONE, TWO, THREE) {

    // attributes
    this.name = ONE
    this.type = TWO
    this.ability = THREE
    this.crew = [];

    // functions
    this.addCrew = function (___newMember) {
      this.crew.push(___newMember);
    }

    this.missionStatement = function () {
      if(this.crew.length >0);
        return this.ability
    }
      return "Can't perform a mission yet."
  }
}

class CrewMember {
  constructor(ONE, TWO, THREE) {
    this.name = ONE
    this.job = TWO
    this.specialSkill = THREE
    this.ship = null;
  }

  enterShip(x) {
    this.ship = x;
    this.ship.addCrew(this);
  }
}

// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function') {
  describe('CrewMember', function () {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function () {
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function () {
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let __ship = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');


      //  check that if we give a CrewMember a ship, then the crewmember's 'ship' attribute is...... that ship we gave it
      crewMember1.enterShip(__ship); // give crew member the ship
      assert.equal(crewMember1.ship, __ship); // here we test that the ship attribute ..... is the ship we just gave it

      // now, we test that the ship we're passing around........ after giving it to a random, unrelated crew member, something
      // on the SHIP>>>>>>>> the SHIP has an attribute changd now
      assert.equal(__ship.crew.length, 1);
      assert.equal(__ship.crew[0], crewMember1);
    });
  });

  describe('Ship', function () {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function () {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function () {


      // setup  
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit'); // make a new ship
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel'); // make a new ship

      // tests, assertions
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");


      // make some crew members
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
