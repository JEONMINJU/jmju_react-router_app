import React, { useEffect, useState } from "react";
export default function Products() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);
	const [checked, setChecked] = useState(false);// 기본 값 false;
	const handleChange = () => {
		setChecked(prev => !prev);
	}

	// 처음에만 실행되도록 > useEffet(무한루프에 빠지지 않도록)
	useEffect(() => {
		// fetch는 비동기
		fetch(`data/${checked ? 'sale_' : ''}products.json`)
		.then(res => res.json())
		.then(data => {
			console.log("dd", setProducts(data))
			setProducts(data)
		});
		// 위 콜백함수가 없어질때 호출(unmount시점)
		return () => {
			console.log("토글로 컴포넌트 없어질때 청소오오")
		}
	}, [checked]);
		
	return (
	<>
	<input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
	<label htmlFor="checkbox">Show only hot sale</label>
		<ul>
			{products.map((product) => (
			<li key={product.id}>
				<div>
					<span>{product.name}</span>
					<span>{product.price}</span>
				</div>
			</li>
			))}
		</ul>

		<button type="button" onClick={() => setCount((prev) => prev  + 1)}>{count}</button>
	</>
	)
}