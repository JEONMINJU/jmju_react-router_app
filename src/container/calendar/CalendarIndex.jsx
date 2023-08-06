import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import CommonHeader from '../../components/Header/CommonHeader';
import styled from 'styled-components';
import dayjs from 'dayjs';
import CalendarAddModal from './CalendarAddModal';

function CalendarIndex() {
	const [value, onChange] = useState(new Date());

	return (
		<CalendarIndexSection>
			<CommonHeader title = 'Calendar' />
			<div className='mj__calendar__wrapper'>
				<Calendar 
					onChange={onChange}
					value={value}
					formatDay={(locale, date)=>dayjs(new Date(date)).format('DD')}
				/>

				<CalendarAddModal />
			</div>
		</CalendarIndexSection>
	)
}

export default CalendarIndex;

const CalendarIndexSection = styled.section`
	.mj__calendar__wrapper {
		padding: 0 20px;
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

