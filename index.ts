export const groupBy = <Item, GroupByProperty extends string | number>(array: Item[], groupByFunc: (item: Item) => GroupByProperty) =>
  array.reduce((prev, cur) => {
    const groupKey = groupByFunc(cur);
    (prev[groupKey] = prev[groupKey] || []).push(cur);
    return prev;
  }, {} as Record<GroupByProperty, Item[]>);