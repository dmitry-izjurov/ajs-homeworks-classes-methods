import Character from '../basic';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Объект должен создаваться', () => {
  const unit = new Character('name', 'type');
  expect(unit.name).toBe('name');
});

test('Объект должен создаваться', () => {
  const unit = new Bowerman('Bowerman', 'Bowerman').levelUp();
  expect(unit).toEqual({
    level: 2, attack: 30, defence: 30, health: 100,
  });
});

test('Объект должен создаваться', () => {
  const unit = new Swordsman('Swordsman', 'Swordsman').levelUp();
  expect(unit).toEqual({
    level: 2, attack: 48, defence: 12, health: 100,
  });
});

test('Объект должен создаваться', () => {
  const unit = new Magician('Magician', 'Magician').levelUp();
  expect(unit).toEqual({
    level: 2, attack: 12, defence: 48, health: 100,
  });
});

test('Объект должен создаваться', () => {
  const unit = new Daemon('Daemon', 'Daemon').levelUp();
  expect(unit).toEqual({
    level: 2, attack: 12, defence: 48, health: 100,
  });
});

test('Объект должен создаваться', () => {
  const unit = new Undead('Undead', 'Undead').levelUp();
  expect(unit).toEqual({
    level: 2, attack: 30, defence: 30, health: 100,
  });
});

test('Объект должен создаваться', () => {
  const unit = new Zombie('Zombie', 'Zombie').levelUp();
  expect(unit).toEqual({
    level: 2, attack: 48, defence: 12, health: 100,
  });
});

test('Объект не должен создаваться', () => {
  const unit = new Zombie('Zombie', 'Zombie');
  unit.damage();
  expect(() => unit.levelUp()).toThrow();
});
