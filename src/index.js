import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Reset }from 'styled-reset'

import dayjs from 'dayjs';

// #region dayjs
// import * as dayjs from "dayjs";

// import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
// dayjs.extend(isLeapYear); // 플러그인 등록

// import relativeTime from "dayjs/plugin/relativeTime";
// import "dayjs/locale/ko"; // 한국어 가져오기

// dayjs.extend(relativeTime);
// dayjs.locale("ko");


// import "./styles.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoIndex from './container/todo/TodoIndex';
// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
// import AppProducts from './AppProducts';
// import AppXY from './AppXY';
// import AppMentor from './AppMentor';
// import AppMentors from './AppMentors';
// import AppWrap from './AppWrap';
// import AppCard from './components/AppCard';
// import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/todos",
    element: <TodoIndex />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    {/* <AppProducts /> */}
    {/* <AppXY /> 마우스 따라가기 */}
    {/* <AppMentor /> 중접객체 상태관리 */}
    {/* <AppWrap /> 컴포넌트 재사용 */}
    {/* <AppCard /> */}
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
