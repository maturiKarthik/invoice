/** @format */

export const CalulatePercentage = (percentage, amount) => {
  let gstAmount = (percentage / 100) * amount;
  return parseFloat(Math.round((gstAmount + Number.EPSILON) * 100) / 100);
};

export const GstPercentage = [
  { key: 0, value: 0, text: "0%" },
  { key: 1, value: 18, text: "18%" },
  { key: 2, value: 12, text: "12%" },
  { key: 3, value: 2.5, text: "2.5%" },
  { key: 4, value: 5, text: "5%" },
  { key: 5, value: 6, text: "6%" },
  { key: 6, value: 9, text: "9%" },
  { key: 7, value: 14, text: "14%" },
  { key: 8, value: 28, text: "28%" },
];
