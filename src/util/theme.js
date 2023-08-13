import styled, { css } from "styled-components";

// #region 숨김처리
const hidden = css `
	font-size: 0;
`
// #endregion

// #region 컬러
// const palette = {
const point = {
  
}

const color = {
  white: '#fff',
  f7: '#f7f7f7',
  ec: '#ececec',
  da: '#dadada',
  c1: '#c1c1c1',
  af: '#afafaf',
  79: '#797979',
  black: '#111',
}

// 배경 컬러
const bg = {
  f8:'#f8f8f8',
  f5: '#f5f5f5',
}
// #endregion

// #region 말줄임
// 말줄임 1줄
const line1 = css`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

// 말줄임 2줄
const line2 = css`
-webkit-box-orient: vertical;
display: block;
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-all;
-webkit-line-clamp: 2;
`

// 말줄임 10줄
const line10 = css`
-webkit-box-orient: vertical;
display: block;
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-all;
-webkit-line-clamp: 10;
`
// #endregion

// #region 정렬(flex)
const flexStart = css`
display: flex;
justify-content: flex-start;
align-items: flex-start;
`

const flexCenter = css`
display: flex;
justify-content: center;
align-items: center;
`

const flexbetween = css`
display: flex;
justify-content: space-between;
align-items: center;
`

const flexAround = css`
display: flex;
justify-content: space-around;
align-items: center;
`

const flexColumn = css`
display: flex;
flex-direction: column;
`
// #endregion

// #region img
const imgFitCover = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
// #endregion

// #region 공통 버튼
const CommonButton = css`
  min-width: 80px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  /* border: 1px solid ${color.black}; */
  display: flex;
  justify-content: center;
  align-items: center;
`
// #endregion

const theme = {
  hidden,

  flexStart,
  flexCenter,
  flexbetween,
  flexAround,
  flexColumn,

  imgFitCover,

  line1,
  line2,
  line10,
  
  color,
  bg,

  CommonButton,
}

export default theme;