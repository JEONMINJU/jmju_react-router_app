import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Reset }from 'styled-reset'

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
import Main from './container/main/Main';
import CalendarIndex from './container/calendar/CalendarIndex';
import WorkIndex from './container/work/WorkIndex';
import NoteIndex from './container/note/NoteIndex';
import { ThemeProvider } from './context/ThemeContext';
// import AppProducts from './AppProducts';
// import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/calendar",
    element: <CalendarIndex />,
  },
  {
    path: "/work",
    element: <WorkIndex />,
  },
  {
    path: "/note",
    element: <NoteIndex />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Reset />
    {/* <AppProducts /> */}
    {/* <AppWrap /> 컴포넌트 재사용 */}

    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
