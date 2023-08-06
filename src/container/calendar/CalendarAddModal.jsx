import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../util/theme';

export default function CalendarAddModal() {
	const [modal, setModal] = useState(true);

	const onToggleMoal = () => {
		console.log("modal controll")
		setModal(!modal);
	};

	const onModalClose = () => {
		console.log("modal close");
		setModal(false);
	};

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

						<div className='mj__modal__overlay'></div>

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

							{/* 날짜 선택 */}
							

							{/* 내용 입력 */}
							<div>
								<span>어떤 일정이 있나요?</span>
								
								<form action="">
									<input type="text" />
									<label htmlFor=""></label>
								</form>
							</div>

							{/* 추가 버튼 */}
							<button type='button'>완료</button>
						</div>
					</section>
				</CalendarModal>
			)}
		</>
	)
};

const CalendarModal = styled.div`
	
	.mj {
		&__modal {
			position: relative;

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
				width: 300px;
				min-height: 400px;
				padding: 20px;
				background: ${theme.color.white};
				border-radius: 4px;
			}

			&__header {
				${theme.flexCenter}
				justify-content: space-between;
			}

			&__title {

			}
		}
	}
`