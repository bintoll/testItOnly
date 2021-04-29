export const groupBy = <Item, GroupByProperty extends string | number>(array: Item[], groupByFunc: (item: Item) => GroupByProperty) =>
  array.reduce((prev, cur) => {
    const groupKey = groupByFunc(cur);
    (prev[groupKey] = prev[groupKey] || []).push(cur);
    return prev;
  }, {} as Record<GroupByProperty, Item[]>);


export const reduce = <T, U extends number | Object>(array: T[], callbackfn: (acc: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U => {
  let acc = <U>(initialValue === undefined ? 0 : initialValue)
  for (let i=0;i<array.length;i++) {
    acc = callbackfn(acc, array[i], i, array)
  }
  return acc
}
