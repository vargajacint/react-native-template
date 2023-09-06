export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};
