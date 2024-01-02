export const formatMoneyToNumber = (str: string): number => {
  return Number(str.replace('R$', '').replace(/(\.)/g, '').replace(',', '.'));
}