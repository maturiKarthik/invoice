/** @format */

const date = new Date();
const CurrentDate = String(
  date.getFullYear() +
    "-" +
    (date.getMonth() > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "-" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
);

export default CurrentDate;
