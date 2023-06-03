import React from "react";

export default function Avartar({image, isNew}) {
	return (
		<div className="avartar">
			<figure className="photo">
				<img src={image} alt="avatar" />
				{isNew && <span className="profile__badge">NEW</span>}
			</figure>
		</div>
	)
}