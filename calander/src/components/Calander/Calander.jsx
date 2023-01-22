import React from "react";
import { connect, useSelector } from "react-redux";
import { CHANGE_MONTH } from "../../actions/calanderAcions";
import { MONTH_LIST } from "../../constants/calander";
import "./calander.css";
function Calander(props) {
  // const state = useSelector((state) => state);
  // console.log(state);
  console.log(props);

  const changeMonth = (arrow) => {
    let selectedYear;
    let selectedMonth;

    if (arrow === "LEFT") {
      if (props.selectedMonth === 0) {
        selectedMonth = 11;
        selectedYear = props.selectedYear - 1;
      } else {
        selectedMonth = props.selectedMonth - 1;
        selectedYear = props.selectedYear;
      }
    } else if (arrow === "RIGHT") {
      if (props.selectedMonth === 11) {
        selectedMonth = 0;
        selectedYear = props.selectedYear + 1;
      } else {
        selectedMonth = props.selectedMonth + 1;
        selectedYear = props.selectedYear;
      }
    } else {
      selectedYear = props.selectedYear;
      selectedMonth = props.selectedMonth;
    }

    console.log(selectedMonth, selectedYear);

    props.dispatch({
      type: CHANGE_MONTH,
      payload: {
        selectedMonth: selectedMonth,
        selectedYear: selectedYear,
      },
    });
  };

  return (
    <div className="calander-container">
      <div className="calander-inner-container">
        <h2>Calander</h2>
        <div className="calander-display">
          <div className="month-header">
            <div className="left-arrow" onClick={() => changeMonth("LEFT")}>
              {"<"}
            </div>
            <div id="month">
              {MONTH_LIST[props.selectedMonth]} ,{props.selectedYear}
            </div>
            <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>
              {">"}
            </div>
          </div>
          <div className="calander-container-child">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
          <div className="calander-container-child">
            {props.days.map((day, i) => (
              <div key={i}>{day}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    startDay: state.startDay,
    endDay: state.endDay,
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear,
    days: state.days,
  };
};

export default connect(mapStateToProps)(Calander);
