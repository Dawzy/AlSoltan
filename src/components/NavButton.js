const NavButton = ({text, selected}) => {
	return (
		<button className={`
		w-24
		h-8
		${selected ? "text-primary":"text-white"}
		${selected ? "bg-accent":"bg-button"}
		rounded-md
		m-1
		text-center
		align-middle
		leading-loose
		cursor-pointer
		${selected ? "" : "hover:bg-select"}
		duration-100`}>
			{text}
		</button>
	)
}
export default NavButton;