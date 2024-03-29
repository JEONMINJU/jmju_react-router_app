import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import styled from "styled-components";
import theme from "../../util/theme";

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        {/* <div className="col col-end">
          <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div>
        </div> */}
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="mj__weekCalendar__days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`mj__weekCalendar__list col cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="mj__weekCalendar__number">{formattedDate}</span>
            {/* <span className="bg">{formattedDate}</span> */}
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="mj__weekCalendar__body">{rows}</div>;
  };
  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev week
          </div>
        </div>
        <div>{currentWeek}</div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next week</div>
        </div>
      </div>
    );
  };
  return (
		<CalendarWeekSection>
			<div className="mj__weekCalendar__wrapper">
				{/* {renderHeader()} */}
				{renderDays()}
				{renderCells()}
				{/* {renderFooter()} */}
			</div>
		</CalendarWeekSection>
  );
};

export default Calendar;

const CalendarWeekSection = styled.section`
	.mj {
		&__weekCalendar {
			&__wrapper {
				display: block;
				position: relative;
				width: 100%;
				border: 1px solid ${theme.color.ec};
				border-radius: 4px;
			}

			&__days {
				padding: 0.75em 0;
				border-bottom: 1px solid var(--border-color);
				color: var(--text-color-light);
				font-size: 70%;
				font-weight: 400;
				text-transform: uppercase;
			}

			&__list {
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				overflow: hidden;
				height: 50px;
				transition: 0.25s ease-out;
				cursor: pointer;

				&:not(:last-child) {
					border-right: 1px solid ${theme.color.ec};
				}

				&:hover {
					background: ${theme.bg.f5};
  				transition: 0.5s ease-out;
				}

				&.today {
					color: rgb(44, 180, 142);
					font-weight: bold;
					border-image-slice: 1;
				}

				.col {
					flex-grow: 0;
					flex-basis: calc(100% / 7);
					width: calc(100% / 7);
				}
			}

			&__number {
				font-size: 16px;
			}
		}
	}
`
