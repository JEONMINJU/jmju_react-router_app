import styled, { css } from "styled-components";

// 포인트 컬러
const point = {
  
}

const color = {
  black:'#111',
  red:'#ff5500',
  111: '#111111',
  ec: '#ececec,'
}

// 배경 컬러
const bg = {
  f8:'#f8f8f8',
  f5: '#f5f5f5',
}

// const palette = {
//   black:"#262626",
//   red:"#ff5500"
// }

const flexCenter = css`
display: flex;
justify-content: center;
align-items: center;
`

const CommonButton = css`
  min-width: 80px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

const theme = {
  flexCenter,
  CommonButton,
  color
}


export default theme