import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { useState } from "react";
import { CartContext } from "./CartContext.js";

import {Menu, Order, About} from "./pages";

function App() {
	const [cart, setCart] = useState([]);

	const pagesInfo = [
		{
			path: "/",
			name: "MENU",
			component: <Menu />
		},
		{
			path: "/order",
			name: "ORDER",
			component: <Order />
		},
		{
			path: "/about",
			name: "ABOUT",
			component: <About />
		}
	];

	return (
		<CartContext.Provider value={ {cart, setCart} }>
			<Navbar pagesInfo={pagesInfo} />
			<Routes>
				{pagesInfo.map(pageInfo => 
					<Route key={pageInfo.name} path={pageInfo.path} element={pageInfo.component} />
				)}
			</Routes>
		</CartContext.Provider>
	);
}

export default App;
