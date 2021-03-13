import Character from './basic';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
    this.level = 1;
  }
}
