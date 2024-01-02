import { MSFilterOrderType } from "../service/mega-sena/models/filter";

export const orderObject = <TData = any> (a: any, b: any, order: MSFilterOrderType = 'asc'): number => {
  if (order === 'asc') {
    if (a > b) return 1;
    if (a < b) return -1;
  } else {
    if (a > b) return -1;
    if (a < b) return 1;
  }

  return 0;
}