import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../util/theme';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getLocalStorage, setLocalStorage } from '../../util/util';
import { v4 as uuidv4 } from "uuid";
import dayjs from 'dayjs';

export default function CalendarAddModal({onAdd}) {
	const [modal, setModal] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [text, setText] = useState('');
	
	const onChange = (e) => {setText(e.target.value);}

	const onToggleMoal = () => {
		setModal(!modal);
	};

	const onModalClose = () => {
		setModal(false);
	};

	const onAddSchedule = () => {
		const storageSchedule = getLocalStorage("scheduleList") || [];
		const scheduleDate = dayjs(new Date(startDate)).format('YYYY-MM-DD');

		if(text === '') {
			alert('텍스트를 입력해주세요.');

			return false;
		} else {
			setLocalStorage("scheduleList", [
				...storageSchedule,
				{ id: uuidv4(), text: text, date: scheduleDate },
			]);
	
			setText('');
	
			onModalClose();
		}
	};

	if(modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<>
			<button 
				type="button"
				onClick={onToggleMoal}
			>
				+
			</button>

			{modal && (
				<CalendarModal>
					<section className='mj__modal'>
						<h2 className='mj__title__hidden'>일정 추가</h2>

						<div 
							onClick={onModalClose}
							className='mj__modal__overlay'
						></div>

						<div className='mj__modal__content'>
							<header className='mj__modal__header'>
								<span className='mj__modal__title'>일정 추가</span>

								<button type='buton'
								className='mj__modal__close'
								onClick={onModalClose}
							>
								닫기
							</button>
							</header>

							<div className='mj__modal__inner'>
								{/* 날짜 선택 */}
								<DatePicker
									showIcon
									dateFormat='yyyy.MM.dd'
									shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
									selected={startDate}
									onChange={(date) => setStartDate(date)}
								/>

								{/* 내용 입력 */}
								<div className='mj__modal__write'>
									<span>어떤 일정이 있나요?</span>
									
									<form className='mj__modal__form'>
										<input 
											className="mj__modal__input"
											type="text" 
											placeholder="일정을 입력하세요."
											value={text}
											onChange={onChange}
										/>
									</form>
								</div>

								{/* 추가 버튼 */}
								<div className='mj__modal__button'>
									<button type='button' className='mj__modal__add' onClick={onAddSchedule}>추가</button>
								</div>
							</div>
						</div>
					</section>
				</CalendarModal>
			)}
		</>
	)
};

const CalendarModal = styled.div`
	position: relative;

	.mj__title__hidden {
		${theme.hidden};
	}
	
	.mj {
		&__modal {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100vh;

			&__overlay {
				position: fixed;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				background-color: rgba(49, 49, 49, .8);
			}

			&__content {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 1;
				transform: translate(-50%, -50%);
				width: 340px;
				min-height: 340px;
				background: ${theme.color.white};
				border-radius: 4px;
			}

			&__header {
				${theme.flexCenter}
				justify-content: space-between;
				padding: 20px;
				border-bottom: 1px solid ${theme.color.ec};
			}

			&__title {
				font-size: 14px;
				font-weight: 500;
			}

			&__inner {
				padding: 20px;
			}

			&__button {
				text-align: right;
			}

			// reset 필요
			&__input {
				width: 300px;
				margin-top: 10px;
			}

			&__write {
				margin-top: 20px;
			}

			&__add {
				margin-top: 10px;
			}
		}
	}
`