import Character from './basic';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
    this.level = 1;
  }
}
