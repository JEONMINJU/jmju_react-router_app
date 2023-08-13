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

  return (
    <NoteContainer className="mj__app__container">
      <CommonHeader title = 'Note & Issue'/>
      <NoteList todos={todos} setTodos={setTodos} />
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  
`;

export default NoteIndex;