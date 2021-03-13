import Character from './basic';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
    this.level = 1;
  }
}
