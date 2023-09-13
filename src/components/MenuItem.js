import { useContext } from "react";
import { CartContext } from "../CartContext.js";

const MenuItem = ({item}) => {
	const { setCart } = useContext(CartContext);

	const handleClick = () => setCart(prev => {
		// Check if the item is already in the cart
		const itemInCart = prev.find(i => i.item.Title === item.Title);
		if (itemInCart) {
			// If it is, add increment the count
			itemInCart.count++;
			return prev;
		} else {
			// Else, add a new object with the item, and the count being 1
			return [...prev, { item: item, count: 1}];
		}

	});

	return (
		<div className="flex items-center w-2/3">
			<img className="rounded-lg 	object-cover w-64 h-64 m-2" src={`${process.env.PUBLIC_URL}/images/${item.Image}`} />
			<div className="flex flex-col items-start text-start w-2/3 h-64">
				<h1 className="text-2xl text-black">{item.Title}</h1>
				<hr className="w-full z-[-1] border-2 mb-3 border-secondary"/>

				<span className="mb-2 text-black">{item.Desc}</span>
				<button onClick={handleClick} className="rounded-md bg-primary hover:bg-select text-white px-2 mt-auto">
					Add To Order | {item.Price}
				</button>
			</div>
		</div>
	)
}
export default MenuItem;