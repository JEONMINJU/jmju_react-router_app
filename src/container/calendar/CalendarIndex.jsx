import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import CommonHeader from '../../components/Header/CommonHeader';
import styled from 'styled-components';
import dayjs from 'dayjs';
import CalendarAddModal from './CalendarAddModal';
import { getLocalStorage, setLocalStorage } from '../../util/util';
import Dockbar from '../../components/Dockbar/Dockbar';
import theme from '../../util/theme';

function CalendarIndex() {
	const [value, onChange] = useState(new Date());

	// 캘린더 상태관리
	const [calendar, setCalendar] = useState();
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setCalendar(getLocalStorage('scheduleList') || []);
		setMount(true);
	}, []);

	useEffect(() => {
		if (mount) {
			setLocalStorage('scheduleList', calendar);
		}
	}, [calendar, mount]);

	const onAddSchedule = (list) => setCalendar((prev)=>prev.concat(list));

	return (
		<>
			<CalendarIndexSection>
				<CommonHeader title = 'Calendar' />
				<div className='mj__calendar__wrapper'>
					<Calendar 
						onChange={onChange}
						value={value}
						formatDay={(locale, date)=>dayjs(new Date(date)).format('DD')}
						tileContent={({date})=> {
							// console.log(date)
							// 캘린더날짜와 추가날짜같은거 필터
							const matchWithAdded = calendar?.filter(f => f.date === dayjs(new Date(date)).format('YYYY-MM-DD'))
						
							/* 
								배열관련 함수들은 data undefind 시 에러 뜬다. ? 추가
							*/
							return matchWithAdded?.map(item=><div className='mj__calendar__list'>{item.text}</div>)
						}} 
					/>
					<CalendarAddModal onAdd={onAddSchedule}/>
				</div>
			</CalendarIndexSection>
			<Dockbar />
		</>
	)
}

export default CalendarIndex;

const CalendarIndexSection = styled.section`
	.mj {
		&__calendar {
			&__wrapper {
				padding: 0 20px;
			}

			&__list {
				margin-top: 4px;
				padding: 3px 10px;
				background: ${theme.color.black};
				border-radius: 20px;
				font-size :10px;
				color: ${theme.color.white};
				line-height: 1.2;
			}
		}
	}

	.react-calendar {
		overflow: hidden;
		width: 700px;
		margin: 30px auto;
		border-radius: 10px;
	}

	//달력에 오늘 표시 변경하기
	.react-calendar__tile--now {
		position: relative;
		z-index: 0;
		color: ${theme.color.white};
		background: none;

		&:after {
			content: "";
			display: block;
			position: absolute;
			top: 4px;
			left: 4px;
			z-index: -1;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: ${theme.color.black};
			color: ${theme.color.white};
		}
  }

	//day 타일 한개 한개 모양 커스텀하기
	.react-calendar__tile {
		position: relative;
		min-height: 70px;
		padding: 37px 2px 4px;
		border : 0.5px solid ${theme.color.ec};

		> abbr {
      position: absolute;
			top: 11px;
			left: 11px;
    }
  }

	.react-calendar__tile--active {
    background: none;
    color: inherit;
    > abbr {
      color: #fd4381 !important;
    }
  }

	// 비활성
	.react-calendar__month-view__days__day--neighboringMonth {
    > abbr {
      color: ${theme.color.ec} !important;
    }
  }

	//day 타일 hover, focus 시 모양 커스텀
	.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: none;
  }

	// click, focus, hover none
	.react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: none;
  }

	// 오늘 날짜 bg none
	.react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
		background: none;
  }
`

