import { MenuCategoryButton, MenuItem } from "../components";
import menu from "../menuItems.json";
import { useEffect, useState, useRef } from "react";

const Menu = () => {
	const categories = Object.keys(menu); // Get categories from menu json
	const [items, setItems] = useState([]); // Menu items that will be displayed
	const [currCategory, setCategory] = useState();

	// Run once to initialize menu
	useEffect(() => handleCategoryBtnClick(categories[0]), []);

	// Update menu items when user switches between categories in the mnu
	const handleCategoryBtnClick = (category) => {
		setCategory(prev => category);
		setItems(prev => menu[category]);
	}

	return (
		<div className="page h-screen z-0">
			<div className="flex justify-center items-center w-min relative">
				<hr className="w-10/12 absolute z-[-1] border-2  border-primary"/>
				{categories.map(category => 
					<MenuCategoryButton
						key={category}
						selected={currCategory === category}
						clk={handleCategoryBtnClick}
						text={category}
					/>
				)}
			</div>
			<div className="w-full flex justify-center items-center flex-col">
				{items.map(item => 
					<MenuItem 
						key={item.Title}
						item={item}	
					/>
				)}
			</div>
		</div>
	)
}

export default Menu;