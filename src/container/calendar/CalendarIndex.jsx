import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import CommonHeader from '../../components/Header/CommonHeader';
import styled from 'styled-components';

function CalendarIndex() {
	const [value, onChange] = useState(new Date());

	return (
		<CalendarIndexSection>
			<CommonHeader/>
			<Calendar onChange={onChange} value={value} />
		</CalendarIndexSection>
	)
}

export default CalendarIndex;

const CalendarIndexSection = styled.section`
	.react-calendar {
		margin: 30px auto;
	}
`

