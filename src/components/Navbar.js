import logo from "../assets/logo.png";
import { NavButton } from ".";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = ({pagesInfo}) => {
	const location = useLocation();
	return (
		<div className="from-primary to-secondary bg-gradient-to-r flex w-full h-16 fixed top-0 overflow-hidden items-center justify-between py-2 z-10">
			<Link to={"/"} className="flex items-center h-full w-auto p-0 m-2">
				<img alt="Logo: Chef hat with mustache under it" className="h-full m-2" src={logo} />
				<h1 className="text-2xl" >AL SOLTAN</h1>
			</Link>
				
			<div className="flex justify-center items-center h-full w-auto p-0 z-10 relative m-2">
				<hr className="w-10/12 absolute z-[-1] border-2  border-button"/>
				{pagesInfo.map(btnData => 
				<Link key={btnData.name} to={btnData.path} >
					<NavButton key={btnData.name} selected={location.pathname === btnData.path} text={btnData.name} />
				</Link>
				)}
			</div>
		</div>
	)
}

export default Navbar;