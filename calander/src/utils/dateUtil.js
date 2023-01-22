export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

//returns total number of days
export const daysInAMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

//return day for the date;
export const monthDays = (date) => {
  console.log(date);
  return new Date(date).getDay();
};
//0 - 6 => 0 sunday, 1 - monday, 2 - tuesday, 3 - wednesday
