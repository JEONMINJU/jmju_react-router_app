import React from "react";

/* 컴포넌트 */
import AddNoteList from "../Add/AddNoteList";
import Note from "../Note/Note";

/* 스타일 */
import styled from "styled-components";
import theme from "../../util/theme";

/* 슬라이드 */
import { Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Dockbar from "../Dockbar/Dockbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function NoteList({ todos, setTodos }) {
  const handleAdd = (todo) => setTodos((prev) => [...prev, todo]); // 기존의 todos 배열에 todo 추가
  // const handleAdd = (todo) => setTodos((prev)=>prev.concat(todo));

  return (
    <>
      <Container>
        <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        >
        {todos.map((item) => (
          <SwiperSlide>
            <Note key={item} todo={item} setTodos={setTodos} />
          </SwiperSlide>
        ))}
        </Swiper>

        {todos.length < 1 &&
        <div className="mj__empty">
          <p className="mj__empty__text">등록된 리스트가 없습니다.</p>
        </div>
        }

        {/* 입력 인풋 */}
        <AddNoteList onAdd={handleAdd} />
      </Container>
      <Dockbar/>
    </>
  );
}

const Container = styled.section`
  padding: 20px;
  .swiper-slide {
    li {
      margin: 30px;
      border-radius: 6px;
      border: 1px solid ${theme.color.black};
    }
  }

  .swiper-pagination {
    bottom: -3px;
  }
`
// useEffect로 로컬스토리지 todos데이터를 초기셋팅한다
// setTodos로 계속 추가나 수정 삭제를 한다
// useEffect 클린업함수로 setTodos로 추가,수정,삭제한 최신데이터를 localstorage에 새로 저장한다.
