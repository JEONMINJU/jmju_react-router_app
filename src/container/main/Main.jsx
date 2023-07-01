import React from "react";
import { Link } from "react-router-dom";

function Main() {
	return (
		<>
			<div>main</div>

			<Link to="/todos">
				<button type="button">todo 작성페이지 이동</button>
			</Link>
		</>
	);
};

export default Main;


