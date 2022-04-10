export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return {
        level: this.level,
        attack: this.attack,
        defence: this.defence,
        health: this.health,
      };
    }
    throw new Error('Нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health <= 0) {
        this.health = 0;
      }
    }
    return this.health;
  }
}
