const CartItem = ({item, count, removeButtonClk}) => {

	return (
		<div className="w-full bg-white bg-opacity-50 rounded-3xl m-2 flex items-center relative">
			<img className="object-cover w-28 h-28 m-2 rounded-full" src={`${process.env.PUBLIC_URL}/images/${item.Image}`} />
			
			<div className="flex flex-row h-full justify-between items-center grow mx-4">
				<h1 className="text-black text-5xl h-min">{item.Title}</h1>

				<div className="flex flex-col items-end mr-3">
					<span className="bottom-4 text-xl">{`$${item.Price}`}</span>
					<span className="bottom-4 text-lg">{`x${count}`}</span>
					<hr className={`w-full border-black border-2 rounded-full ${count > 1 ? "" : "hidden"}`} />
					<span className={`bottom-4 text-lg ${count > 1 ? "" : "hidden"}`}>{`$${ (item.Price * count).toFixed(2)}`}</span>
				</div>
			</div>

			<button onClick={() => removeButtonClk(item.Title)} className="text-red-700 right-0 mr-10 text-4xl">X</button>
		</div>
	)
}

export default CartItem;