import React, { useEffect, useState } from "react";
import AddList from '../../components/Add/AddWorkList';
import styled from "styled-components";
import CommonHeader from "../../components/Header/CommonHeader";
import theme from "../../util/theme";
import { getLocalStorage, setLocalStorage } from "../../util/util";
import ListTextType from "../../components/List/ListTextType";
// 모듈 불러오기
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Dockbar from "../../components/Dockbar/Dockbar";

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

	const notify = ()  => toast("업무를 모두 완료하셨어요! 🎉");
	
	return (
		<>
			<CommonHeader title = 'Work List' />
			<WorkIndexSection>
				<h2 className="mj__title__hidden">업무 리스트(오늘 할일) 작성페이지</h2>

				<div className="mj__work__top">
					<h3 className="mj__work__title">오늘의 업무 리스트를 작성하세요.</h3>
					<button type="button" className="mj__work__button sizeS" onClick={handleDeleteAll}>전체삭제</button>
				</div>

				<span className="mj__work__total">할일 : {list.length}개</span>

				<div className="mj__work__control">
					<button type="button" className="mj__work__button sizeS" onClick={allChecked}>전체선택</button>
					<button type="button" className="mj__work__button sizeS" onClick={onCheckedDelete}>선택삭제</button>
				</div>

				{list && <ListTextType notify={notify} list={list} setLists={setLists} />}	
				
				<div>
					<ToastContainer
						position="top-center"
						draggable
						pauseOnHover
						closeOnClick
						limit={1}
					/>
				</div>

				<AddList onAdd={handleAdd} />
			</WorkIndexSection>
			<Dockbar />
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
				font-size: 14px;
			}

			&__total {
				display: block;
				margin-top: 10px;
				font-size: 14px;
			}

			&__control {
				${theme.flexStart};
				gap: 8px;
				margin-top: 20px;
			}

			&__button {
				color: ${theme.color[79]};

				&:hover {
					background: ${theme.bg.f5};
				}
			}
		}
	}
`

export default WorkIndex;