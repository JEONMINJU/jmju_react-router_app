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
          <div className="mj__note__title">
            <h3 className="title__sub">아주 사소한 이벤트라도 기록으로 남겨보세요.</h3>
            <span className="title__desc">
              훗날 어떤 일을 했는지, 어떤 삶을 살아왔는지 돌아볼 수 있는 자료가 되었으면 합니다.
            </span>
          </div>

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
      &__top {
        ${theme.flexCenter};
				justify-content: space-between;
        align-items: flex-start;
      }

      &__title {
        margin-right: 12px;
        font-size: 14px;

        .title {
          &__sub {

          }

          &__desc {
            display: block;
            margin-top: 10px;
            font-size: 10px;
          }
        }
      }

      &__button {
        flex: 0 0 64px;
      }
    }
  }
`;

export default NoteIndex;