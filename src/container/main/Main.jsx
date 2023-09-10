import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from 'dayjs';
import theme from "../../util/theme";
import { useDarkMode } from "../../context/ThemeContext";
import { 
	BsList, BsToggleOff, BsToggleOn,
} from "react-icons/bs"; 
import feelingImg01 from '../../images/main/img_main_feeling01.png';
import feelingImg02 from '../../images/main/img_main_feeling02.png';
import feelingImg03 from '../../images/main/img_main_feeling03.png';
import feelingImg04 from '../../images/main/img_main_feeling04.png';
import feelingImg05 from '../../images/main/img_main_feeling05.png';
import feelingImg06 from '../../images/main/img_main_feeling06.png';
import feelingImg07 from '../../images/main/img_main_feeling07.png';
import feelingImg08 from '../../images/main/img_main_feeling08.png';
import Dockbar from "../../components/Dockbar/Dockbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper";

function Main() {
	const date = dayjs(new Date()).format('YY/MM/DD');
	const {isDark, toggleDarkMode} = useDarkMode();
	const feelingImg = [
		feelingImg01,
		feelingImg02,
		feelingImg03,
		feelingImg04,
		feelingImg05,
		feelingImg06,
		feelingImg07,
		feelingImg08,
	];

	const saveFeeling = () => {
	}

	// const [x, setX] = useState(0);
	// const [y, setY] = useState(0);
	const [position, setPosition] = useState({x:0, y:0, z:0});

  const toggleTheme = () =>{
    toggleDarkMode(prev=>!prev);
  };

	// style={{
		// backgroundColor: isDark? 'black' : 'white',
		// color: isDark ? 'white' : 'black',
	// }}>

	return (
		<>
			<MainContainer 	onPointerMove={(e) => {
				// console.log(e.clientX, e.clientY);
				// setX(e.clientX);
				// setY(e.clientY);
				// setPosition((prev) => ({...prev, x:e.clientX}));
				setPosition({y:e.clientY, x:e.clientX});
			}}>
					<div className="pointer" style={{transform:`translate(${position.x}px, ${position.y}px)`}}></div>
					<h2 className="mj__text__hidden">메인페이지</h2>

					<nav className="mj__main__nav">
						<BsList className="nav__menu" size="24" />
						<span className="nav__date">{date}</span>
						<DarkModeButton onClick={toggleTheme}>{!isDark ? <BsToggleOn size="26" /> : <BsToggleOff size="26" color="#fff" />}</DarkModeButton>
					</nav>

					<div className="mj__main__feeling">
						{/* <span className="feeling__title">How do you feeling today?</span> */}
						<span className="feeling__title">오늘의 기분은 어떤가요?</span>

						<ul className="feeling__box">
							{feelingImg.map((item) => (
								<li className="feeling__list" key={item} onClick={saveFeeling}>
									<figure className="feeling__img">
										<img src={item} alt="기분이미지" />
									</figure>
								</li>
							))}
						</ul>
					</div>

					<div className="mj__main__wrapper">
						<h3 className="mj__main__title">매일을 기록하세요.</h3>

						<div className="mj__main__inner">
							
							{/* 오늘 날짜 캘린더 */}
							<div className="mj__main__date">
								<span className="nav__date">{date}</span>
							</div>

							<div className="mj__main__menu">
								<Link to="/calendar">
									<button type="button" className="mj__main__direct">CALENDAR</button>
								</Link>

								{/* 오늘 업무 리스트(간단한 한줄 리스트) */}
								<Link to="/work">
									<button type="button" className="mj__main__direct">WORK</button>
								</Link>

								{/* 이슈 & 에피소드 등(슬라이드형 리스트) */}
								<Link to="/note">
									<button type="button" className="mj__main__direct">ISSUE</button>
								</Link>
							</div>
						</div>
					</div>
			</MainContainer>
			<Dockbar />
		</>
	);
};

export default Main;

const MainContainer = styled.section`
	overflow: hidden;
	width: 100%;
	height: 100vh;
	
	.mj__text__hidden {
		font-size: 0;
	}

	.mj {
		&__main {
			&__nav {
				position: relative;
				padding: 20px;
				${theme.flexCenter};
				justify-content: flex-start;

				.nav {
					&__menu {

					}

					&__date {
						margin-left: 10px;
					}
				}
			}

			&__title {
				margin-bottom: 10px;
			}

			&__date {
				margin-bottom: 10px;
			}

			&__wrapper {
				display: flex;
				flex-direction: column;
				max-width: 100%;
				margin-top: 50px;
				padding: 32px 20px;
				background: ${theme.color.white};
				border-radius: 20px 20px 0 0;
			}

			&__menu {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			&__direct {
				width: 100%;
				padding: 20px 10px;
				border-radius: 10px;
				border: none;
				box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
				cursor: pointer;
			}

			&__feeling {
				padding: 0 20px;

				.feeling {
					&__today {
						display: block;
						margin-top: 10px;
					}

					&__box {
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						gap: 8px;
						margin-top: 20px;
					}

					&__list {
						position: relative;
						overflow: hidden;
						width: 75px;
						height: 75px;
						border-radius: 10px;
						box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
						cursor: pointer;

						&:hover {
							transform: scale(1.1);
						}
					}

					&__img {
						img {
							${theme.imgFitCover};
						}
					}
				}
			}
		}
	}

	.pointer {
		/* position: absolute;
		left: -30px;
		top: -30px;
		z-index: 10;
		width: 30px;
		height: 30px;
		background-color: #2cb48e;
		border-radius: 50%; */
	}
`
const DarkModeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  min-width: 40px;
	background: none;
	border: none;
  cursor: pointer; 
`