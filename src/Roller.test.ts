import { Roller } from './Roller';

describe("Smoke test", () => {
  test("The test scaffold runs successfully.", () => {
    expect(true).toBe(true);
  });
})

describe("Roller tests", () => {
  test("Description", () => {
  });
});


describe("Roller tests on given constructor", () => {
  test("Test on default constructor by keeping all default values", () => {
    let dice = new Roller();
    expect(dice.last()).toBe(0);
    expect(dice.distribution().size).toBe(6);
    expect(dice.distribution().get(1)).toBe(0);
    expect(dice.distribution().get(5)).toBe(0);
  });

  test("Test on  default the last roll should be 0", () => {
    let dice = new Roller();
    const roller = new Roller(6);
    expect(roller.last()).toBe(0);

    expect(roller.distribution().size).toBe(6);
    expect(roller.distribution().get(1)).toBe(0);
    expect(roller.distribution().get(6)).toBe(0);
  });

  test("Test on default constructor at faces 6", () => {
    let dice = new Roller();
    expect(dice.last()).toBe(0);
    expect(dice.distribution().size).toBe(6);
    expect(dice.distribution().get(1)).toBe(0);
  });

  test("Test on  roll by faces 7 check the invalid cases", () => {
    let dice = new Roller(7);
    expect(dice.last()).toBe(0);
    expect(dice.roll(8)).toBe(0);
    expect(dice.roll(-8)).toBe(0);
    expect(dice.roll(0)).toBe(0);
    expect(dice.distribution().size).toBe(7);
    expect(dice.distribution().get(1)).toBe(0);
  });

  test("Test on  roll by faces 7 check the valid cases", () => {
    let dice = new Roller(8);
    expect(dice.last()).toBe(0);
    expect(dice.distribution().size).toBe(8);

    expect(dice.roll(8)).toBe(8);
    expect(dice.roll(7)).toBe(7);
    expect(dice.roll(8)).toBe(8);
    expect(dice.distribution().get(8)).toBe(2);
    expect(dice.distribution().get(7)).toBe(1);
  });

  test("Test on  roll by faces 7 check the all the distribution", () => {
    let dice = new Roller(5);
    expect(dice.last()).toBe(0);
    expect(dice.distribution().size).toBe(5);

    expect(dice.roll(1)).toBe(1);
    expect(dice.roll(2)).toBe(2);
    expect(dice.roll(3)).toBe(3);
    expect(dice.roll(4)).toBe(4);
    expect(dice.roll(5)).toBe(5);
    expect(dice.roll(5)).toBe(5);



    expect(dice.distribution().get(1)).toBe(1);
    expect(dice.distribution().get(2)).toBe(1);
    expect(dice.distribution().get(3)).toBe(1);
    expect(dice.distribution().get(4)).toBe(1);
    expect(dice.distribution().get(5)).toBe(2);
  });



  test("if the face is 1 then the number faces should be set to 6", () => {
    let dice = new Roller(1);
    expect(dice.last()).toBe(0);
    expect(dice.distribution().size).toBe(6);
    expect(dice.distribution().get(1)).toBe(0);
    expect(dice.distribution().get(6)).toBe(0);
  });

  test('Check the disrubution of all the rolls with all the methods', () => {
    const roller = new Roller();
    expect(roller.roll(0)).toBe(0);
    expect(roller.last()).toBe(0);

    expect(roller.distribution().get(1)).toBe(0);
    expect(roller.roll(8)).toBe(0);
    expect(roller.last()).toBe(0);

    expect(roller.distribution().get(6)).toBe(0);

    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);

    expect(roller.distribution().get(4)).toBe(1);
    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);
    expect(roller.distribution().get(4)).toBe(2);
  });
});

