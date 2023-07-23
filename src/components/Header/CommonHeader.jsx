import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";
import theme from "../../util/theme";

export default function CommonHeader() {
  return (
		<CommonHeaderSection>
      {/* 뒤로가기 */}
      <BackLink to="/"><MdArrowBackIos size={24} /></BackLink>
		</CommonHeaderSection>
  );
}

const CommonHeaderSection = styled.section`
	padding: 20px;
	background: transparent;
	border-bottom: 1px solid ${theme.color.ec};
`

const BackLink = styled(Link)`
	color: ${theme.color.black};
`