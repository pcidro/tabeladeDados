export interface CountList {
  [chave: string]: number;
}

export default function countyBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, item) => {
    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});
}
