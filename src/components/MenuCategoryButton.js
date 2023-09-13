const MenuCategoryButton = ({text, clk, selected}) => {

	return (
		<button 
			onClick={() => clk(text)} 
			className={`
			w-24
			h-8
			${selected ? "text-primary":"text-white"}
			${selected ? "bg-accent":"bg-primary"}
			rounded-md
			m-1
			text-center
			align-middle
			leading-loose
			duration-100
			${selected ? "" : "hover:bg-secondary"}
			`}
			>

			{text}
		</button>
	)
}
export default MenuCategoryButton;