import { CHANGE_MONTH } from "../actions/calanderAcions";
import { getDays } from "../utils/calanderUtil";
import {
  daysInAMonth,
  monthDays,
  selectedMonth,
  selectedYear,
} from "../utils/dateUtil";

//reducers are just pure functions
//----------------------------Month- day - year
const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);

console.log(startDay);
//ending date: let jan = 31,, feb = 28
const endDay = daysInAMonth(selectedMonth, selectedYear);

const initialState = {
  startDay,
  endDay,
  selectedMonth,
  selectedYear,
  days: getDays(startDay, endDay),
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      //logic for change month
      console.log(action.payload);
      const { selectedMonth, selectedYear } = action.payload;

      const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
      const endDay = daysInAMonth(selectedMonth, selectedYear);
      const days = getDays(startDay, endDay);

      return { ...state, selectedMonth, selectedYear, startDay, endDay, days };
    default:
      return state;
  }
};
