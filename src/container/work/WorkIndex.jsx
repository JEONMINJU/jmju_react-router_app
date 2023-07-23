import React, { useEffect, useState } from "react";
import AddList from '../../components/Add/AddList';
import styled from "styled-components";
import CommonHeader from "../../components/Header/CommonHeader";
import theme from "../../util/theme";
import { getLocalStorage, setLocalStorage } from "../../util/util";

// 업무리스트 페이지
function WorkIndex() {
	const [mount, setMount] = useState(false);
	const [lists, setLists] = useState([]); // 상태관리

	useEffect(() => {
		setLists(getLocalStorage('workList') || []); // 로드시 불러오기
		setMount(true);
	}, []);

	useEffect(() => {
		if (mount) {
			setLocalStorage('workList', lists); // 저장
		}
	}, [lists, mount]);


	const handleAdd = (newList) => {
		console.log(newList, )
		setLists([...lists, newList])
	};

	return (
		<>
			<CommonHeader />
			<WorkIndexSection>
				<h2 className="mj__work__title">오늘의 업무 리스트를 작성하세요.</h2>

				<ul className="mj__work__box">
					{lists.map((item) => (
						<li className="mj__work__list" key={item.id}>
							<form className="mj__work__form">
								<input type="checkbox" className="mj__work__checkbox" />
							</form>
							{item.inputText}
						</li>
					))}
				</ul>

				<AddList onAdd={handleAdd} />
			</WorkIndexSection>
		</>
	)
}

const WorkIndexSection = styled.section`
	padding: 20px;

	.mj {
		&__work {
			&__title {
				font-size: 13px;
			}

			&__box {
				margin: 20px 0;
				border-radius: 10px;
				border: 1px solid ${theme.color.black};
			}

			&__list {
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
		}
	}
`

export default WorkIndex;