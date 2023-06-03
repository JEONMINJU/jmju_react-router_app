import React from "react";
import Avartar from './Avartar';

export default function Profile({image, name, title, isNew}) {
	return (
		<div className="profile">
			<Avartar image={image} isNew={isNew}/>
			<span>{name}</span>
			<p>{title}</p>
		</div>
	)
}