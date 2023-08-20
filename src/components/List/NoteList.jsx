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
  // slide custom
  .swiper {
    margin-top: 16px;

    &-wrapper {
      margin-top: 34px;
    }

    &-slide {
      li {
        margin: 10px 10px 20px;
        border-radius: 6px;
        border: 1px solid ${theme.color.black};
      }
    }

    // public 파일 안에 있는 이미지는 서버와 통신이 가능함
    // import 해서 넣을거아니면 src 폴더가 아닌 public 안에!
    &-button-next {
      top: 24px;
      width: 30px;
      height: 30px;

      &:before {
        content: '';
        display: block;
        width: 10px; /* 사이즈 */
        height: 10px; /* 사이즈 */
        border-top: 2px solid ${theme.color.black}; /* 선 두께 */
        border-right: 2px solid ${theme.color.black}; /* 선 두께 */
        transform: rotate(45deg); /* 각도 */
      }

      &:after {
        display: none;
      }
    }

    &-button-prev {
      top: 24px;
      width: 30px;
      height: 30px;
      right: 33px;
      left: auto;

      &:before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-top: 2px solid ${theme.color.black};
        border-right: 2px solid ${theme.color.black};
        transform: rotate(225deg);
      }

      &:after {
        display: none;
      }
    }

    &-pagination {
      bottom: -2px;

      &-bullet {
        background: ${theme.color.da};
        opacity: 1;

        &-active {
          background: ${theme.color.black};
        }
      }
    }
  }
`
// useEffect로 로컬스토리지 todos데이터를 초기셋팅한다
// setTodos로 계속 추가나 수정 삭제를 한다
// useEffect 클린업함수로 setTodos로 추가,수정,삭제한 최신데이터를 localstorage에 새로 저장한다.
