export const getDays = (startDay, endday) => {
  const day = [];
  for (let i = 0; i < startDay; i++) {
    day.push("");
  }
  for (let i = 1; i <= endday; i++) {
    day.push(i);
  }
  return day;
};
