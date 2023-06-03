import React from "react";

export default function AppCard() {
	return (
		<>
			<Card>
				<p>Card1111</p>
			</Card>


			<Card>
				<p>Card2222</p>
			</Card>
		</>
	)
}

function Card({ children }) {
	return (
		<div style={{backgroundColor: 'black',
		color:'white',
		minWidth: '200px',
		minHeight: '300px',
		borderRadius: '10px',
		textAlign: 'center',
		lineHeight: '300px',
		}}>
			{children}
		</div>
	)
}