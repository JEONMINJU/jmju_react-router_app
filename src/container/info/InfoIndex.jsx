import React from "react";
import Dockbar from "../../components/Dockbar/Dockbar";
import CommonHeader from "../../components/Header/CommonHeader";
import styled from "styled-components";
import theme from "../../util/theme";

export default function InfoIndex() {

	return (
		<>
			<CommonHeader title = 'Info' />
			<InfoIndexSection>
				<div className='mj__info__wrapper'>
					<p className='mj__info__desc'>페이지 준비 중 입니다..</p>
				</div>
			</InfoIndexSection>
			<Dockbar />
		</>
	)
}

const InfoIndexSection = styled.section`
	${theme.flexCenter};
	min-height: 400px;
`