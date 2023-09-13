import { useContext } from "react";
import { CartContext } from "../CartContext";
import { CartItem } from "../components";

const Order = () => {
	const { cart, setCart } = useContext(CartContext);

	const removeItemFromCart = (itemName) => {
		cart.find(i => i.item.Title === itemName).count--;

		setCart(prev => prev.filter(i => i.count > 0));
	}

	const totalCost = () => {
		let total = 0;
		cart.forEach(i => total += i.item.Price * i.count);
		return total;
	}

	const totalItems = () => {
		let total = 0;
		cart.forEach(i => total += i.count);
		return total;
	}

	const clearCart = () => setCart(prev => []);

	const orderCart = () => console.log("ORDERED");

	return (
		<div className="page h-screen z-0 flex-row gap-4" >
			<div className="flex flex-col h-full w-full">
				{cart.map(i => <CartItem removeButtonClk={removeItemFromCart} count={i.count} item={i.item} />)}
			</div>
			<div className="w-1/3 h-full text-primary rounded-lg bg-white flex flex-col sticky">
				<div className="w-full flex flex-col justify-evenly text-4xl p-2">
					<span>TOTAL: {`$${totalCost().toFixed(2)}`}</span>
					<span>ITEMS: {totalItems()}</span>
					<hr className="w-full border-primary rounded-lg border-4" />
				</div>
				<div className="w-full flex flex-col justify-evenly text-4xl p-2">
					<button onClick={clearCart} className="bg-red-800 rounded-xl p-2 hover:bg-red-500">CLEAR</button>
					<button onClick={orderCart} className="bg-green-600 rounded-xl p-2 hover:bg-green-400">ORDER</button>
				</div>
			</div>
		</div>
	)
}

export default Order