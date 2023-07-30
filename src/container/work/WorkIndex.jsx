import React, { useEffect, useState } from "react";
import AddList from '../../components/Add/AddList';
import styled from "styled-components";
import CommonHeader from "../../components/Header/CommonHeader";
import theme from "../../util/theme";
import { getLocalStorage, setLocalStorage } from "../../util/util";
import { FaTrashAlt } from "react-icons/fa";
import ListTextType from "../../components/List/ListTextType";

// 업무리스트 페이지
function WorkIndex() {
	const [mount, setMount] = useState(false);
	const [list, setLists] = useState([]);

	useEffect(() => {
		setLists(getLocalStorage('workList') || []); // 로드시 불러오기
		setMount(true);
	}, []);

	useEffect(() => {
		if (mount) {
			setLocalStorage('workList', list);
		}
	}, [list, mount]);

	const handleAdd = (list) => setLists((prev)=>prev.concat(list));

	return (
		<>
			<CommonHeader />
			<WorkIndexSection>
				<h2 className="mj__work__title">오늘의 업무 리스트를 작성하세요.</h2>

				{/* 할일 개수 */}
				<span className="mj__work__total">할일 : {list.length}개</span>

				{list && <ListTextType list={list} setLists={setLists} />}	
				
				<AddList onAdd={handleAdd} />
			</WorkIndexSection>
		</>
	)
}

const WorkIndexSection = styled.section`
	.mj__title__hidden {
		${theme.hidden};
	}

	padding: 20px;

	.mj {
		&__work {
			&__title {
				font-size: 13px;
			}

			&__total {
				display: block;
				margin-top: 10px;
				font-size: 12px;
			}

			&__box {
				margin: 20px 0;
				border-radius: 10px;
				border: 1px solid ${theme.color.black};
			}

			&__list {
				position: relative;
				${theme.flexStart};
				padding: 20px 16px;

				&:not(:last-child) {
					border-bottom: 1px solid ${theme.color.ec};
				}
			}

			&__form {

			}

			&__checkbox {
				width: 16px;
				height: 16px;
				border: 1px solid ${theme.color.ec};
				margin: 0 10px 0 0;
			}

			&__delete {
				position: absolute;
				right: 16px;
				cursor: pointer;

				/* reset 고민 */
				background: none;
				border: none;
				padding: 0;
			}
		}
	}
`

export default WorkIndex;