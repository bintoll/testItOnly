import {
  groupBy
} from './index'

it('Вернет объект, ключи которого будут целыми числами из чисел входного массива через Math.floor, а значениями будет сгруппированный массив чисел входного массива', () => {
  expect(groupBy([1.2, 1.1, 2.3, 0.4], Math.floor)).toEqual({
    "0": [0.4],
    "1": [1.2, 1.1],
    "2": [2.3]
  })
})

it('Вернет объект, ключи которого будут целыми числами из длинны строк входного массива, а значениями будет сгруппированный массив строк входного массива', () => {
  expect(groupBy(["one", "two", "three"], (el) => el.length)).toEqual({
    "3": ["one", "two"],
    "5": ["three"],
  })
})

enum Gender {
  Male,
  Female,
}

it('Вернет объект, ключи которого будут enum из значения g объекта входного массива, а значениями будет сгруппированный массив объектов входного массива', () => {
  expect(groupBy([
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ], (el) => el.g)).toEqual({
    [Gender.Male]: [{ g: Gender.Male, n: "A" }],
    [Gender.Female]: [
      { g: Gender.Female, n: "B" },
      { g: Gender.Female, n: "C" },
    ],
  })
})