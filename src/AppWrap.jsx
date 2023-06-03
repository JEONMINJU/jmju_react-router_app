import React from 'react';

export default function AppWrap() {
	return (
		<div>
			<Navbar>
				<Avartar
					image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
					name='Minju'
					size={200}
				/>
				<p>hellowww</p>
			</Navbar>

			<Navbar>
				재사용 222
			</Navbar>

			<Navbar >
				<div style={{backgroundColor: 'red'}}>
				
				뼈대만 재사용,,,, 내용물은 자유롭게 넣기 
				</div>
			</Navbar>
		</div>
	);
}

function Navbar({children}) {
	return (
		<header style={{ backgroundColor: 'yellow'}}>
			{children}
		</header>
	);
}

function Avartar({image, name, size}) {
	return (
		<div>
			<img
				src={image}
				alt={`${name}`}
				width={size}
				height={size}
				style={{borderRadius: '50%'}}
				/>
		</div>
	);
}