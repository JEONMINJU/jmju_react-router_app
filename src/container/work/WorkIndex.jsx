import React, { useEffect, useState } from "react";
import AddList from '../../components/Add/AddList';
import styled from "styled-components";
import CommonHeader from "../../components/Header/CommonHeader";
import theme from "../../util/theme";
import { getLocalStorage, setLocalStorage } from "../../util/util";
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

	/* 추가 */
	const handleAdd = (list) => setLists((prev)=>prev.concat(list));

	/* 전체선택 */
	const allChecked = () => {
		setLists((workList) => {
			const isEvery = workList.every((prev) => prev.status === "completed");
			return workList.map((list) => ({
				...list,
				status: isEvery ? "active" : "completed",
			}));
		});
	};
	
	/* 전체삭제 */
	const handleDeleteAll = () => {
		setLists([]);
	};

	/* 선택삭제 */
	const onCheckedDelete = () => {
    setLists((prev) => prev.filter((item) => {
			return item.status !== "completed"
		}));
  };

	return (
		<>
			<CommonHeader title = 'Work List' />
			<WorkIndexSection>
				<div className="mj__work__top">
					<h2 className="mj__work__title">오늘의 업무 리스트를 작성하세요.</h2>
					
					<button type="button" onClick={allChecked}>전체선택</button>
					<button type="button" onClick={handleDeleteAll}>전체삭제</button>
					<button type="button" onClick={onCheckedDelete}>선택삭제</button>
				</div>

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
			&__top {
				${theme.flexCenter};
				justify-content: space-between;
			}

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