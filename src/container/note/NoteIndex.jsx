import React, { useEffect, useState } from "react";

/* 라우터 */
// import { useSearchParams } from "react-router-dom";

/* 컴포넌트 */
import NoteList from "../../components/List/NoteList";

/* 스타일 */
import styled from "styled-components";

/* 로컬 저장 */
import { getLocalStorage, setLocalStorage } from "../../util/util";
import CommonHeader from "../../components/Header/CommonHeader";
import theme from "../../util/theme";

function NoteIndex() {
  // let [searchParams] = useSearchParams();
  // const todoIds = searchParams.get("id");
  const [mount, setMount] = useState(false);
  const [todos, setTodos] = useState([]); // 상태관리

  /* useEffect 
    - 컴포넌트 부작용: 데이터 가져오기(비동기적), DOM을 직접 업데이트, 타이머 함수 발생
  */
  useEffect(() => {
    setTodos(getLocalStorage("todo") || []);
    setMount(true);
  }, []); // 빈배열 사용은 첫번째 렌더링에서만 실행될 코드

  useEffect(() => {
    if (mount) {
      setLocalStorage("todo", todos);
    }
  }, [todos, mount]); // 값이 변경될 때마다 실행될 코드

  /* 전체삭제 */
	const handleDeleteAll = () => {
		setTodos([]);
	};

  return (
    <>
      <CommonHeader title = 'Note & Issue'/>
      <NoteIndexSection>
        <h2 className="mj__title__hidden">오늘의 이슈, 메모 등 등록페이지</h2>
        
        <div className="mj__note__top">
					<h3 className="mj__note__title">오늘 있었던 일을 기록해주세요.</h3>
          <button type="button" className="mj__note__button sizeS" onClick={handleDeleteAll}>전체삭제</button>
				</div>
        
        <NoteList todos={todos} setTodos={setTodos} />
      </NoteIndexSection>
    </>
  );
}

const NoteIndexSection = styled.section`
  .mj__title__hidden {
		${theme.hidden};
	}

  padding: 20px;

  .mj {
    &__note {
      &__title {
        font-size: 14px;
      }

      &__top {
        ${theme.flexCenter};
				justify-content: space-between;
      }
    }
  }
`;

export default NoteIndex;