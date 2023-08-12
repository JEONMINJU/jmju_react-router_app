import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import CommonHeader from '../../components/Header/CommonHeader';
import styled from 'styled-components';
import dayjs from 'dayjs';
import CalendarAddModal from './CalendarAddModal';
import { getLocalStorage, setLocalStorage } from '../../util/util';
import Dockbar from '../../components/Dockbar/Dockbar';

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
				padding: 4px 0;
				background: #ffa454;
				border-radius: 2px;
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
    background: #ffa454;
    color: #fff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    /* color: ; */
  }

	//day 타일 한개 한개 모양 커스텀하기
	.react-calendar__tile {
    /* color:;
    background: ;
    text-align: ; */
		height: 70px;
		border : 1px solid #eee;
  }

	//day 타일 hover, focus 시 모양 커스텀
	.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: none;
    border-radius: 4px;
    /* color: #fff; */
  }
`

const CalendarAdd = styled.button`

`

