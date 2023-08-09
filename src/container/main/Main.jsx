import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from 'dayjs';
import theme from "../../util/theme";
import { useDarkMode } from "../../context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import { 
	BsList,
} from "react-icons/bs"; 


function Main() {
	const date = dayjs(new Date()).format('YY/MM/DD');
	const {isDark, toggleDarkMode} = useDarkMode();

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
		<MainContainer 	onPointerMove={(e) => {
			// console.log(e.clientX, e.clientY);
			// setX(e.clientX);
			// setY(e.clientY);
			// setPosition((prev) => ({...prev, x:e.clientX}));
			setPosition({y:e.clientY, x:e.clientX});
		}}>
				<div className="pointer" style={{transform:`translate(${position.x}px, ${position.y}px)`}}></div>

				<h2 className="mj__text__hidden">main</h2>
				<nav className="mj__main__nav">
					<BsList className="nav__menu" size="24" />
					<span className="nav__date">{date}</span>

					{/* 다크모드 토글 */}
					<DarkModeButton onClick={toggleTheme}>{!isDark ? <HiMoon /> : <HiSun />}</DarkModeButton>
				</nav>

				<figure className="mj__main__banner">
					<img src="" alt="" />
				</figure>

				<div className="mj__main__wrapper">
					<h3 className="mj__main__title">매일의 기록 ☺</h3>

					{/* 캘린더 */}
					<Link to="/calendar">
						<button type="button" className="mj__main__direct">CALENDAR</button>
					</Link>

					{/* 오늘 업무 리스트(간단한 한줄 리스트) */}
					<Link to="/work">
						<button type="button" className="mj__main__direct">WORK</button>
					</Link>

					{/* 이슈 & 에피소드 등(슬라이드형 리스트) */}
					<Link to="/todos">
						<button type="button" className="mj__main__direct">ISSUE</button>
					</Link>
				</div>
		</MainContainer>
	);
};

export default Main;

const MainContainer = styled.section`
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

			&__banner {
				width: 100%;
				height: 200px;

				img {

				}
			}

			&__wrapper {
				display: flex;
				flex-direction: column;
				max-width: 100%;
				padding: 24px 20px;
				border-radius: 20px 20px 0 0;
				background: #fff;
			}

			&__direct {
				width: 100%;
				padding: 20px 10px;
				margin-top: 12px;
				border-radius: 10px;
				border: 1px solid ${theme.color.black};
				cursor: pointer;
			}
		}
	}

	.pointer {
		position: absolute;
		left: -30px;
		top: -30px;
		z-index: 10;
		width: 30px;
		height: 30px;
		background-color: #2cb48e;
		border-radius: 50%;
	}
`
const DarkModeButton = styled.button`
  ${theme.CommonButton};
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  min-width: 40px;
  cursor: pointer; 
`