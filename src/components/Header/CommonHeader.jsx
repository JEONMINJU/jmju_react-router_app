import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";
import theme from "../../util/theme";

export default function CommonHeader(props) {
  return (
		<CommonHeaderSection>
      <BackLink to="/"><MdArrowBackIos size={24} /></BackLink>
			<span className="mj__header__title">{props.title}</span>
		</CommonHeaderSection>
  );
}

const CommonHeaderSection = styled.section`
	position: relative;
	padding: 20px;
	background: transparent;
	border-bottom: 1px solid ${theme.color.ec};
	text-align: center;

	.mj {
		&__header {
			&__title {
				font-size: 18px;
				text-align: center;
			}
		}
	}
`

const BackLink = styled(Link)`
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
	color: ${theme.color.black};
`