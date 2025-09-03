import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="flex flex-col items-start text-letter">
            <NavLink className="flex items-center justify-between w-full">
                <p>Home</p> <span className="-mb-1">﹥</span>
            </NavLink>
            <NavLink className="flex items-center justify-between w-full">
                <p>Products</p> <span className="-mb-1">﹥</span>
            </NavLink>
            <NavLink className="flex items-center justify-between w-full">
                <p>Features</p>
                <span className="-mb-1">﹥</span>
            </NavLink>
            <NavLink className="flex items-center justify-between w-full">
                <p>Pricing</p> <span className="-mb-1">﹥</span>
            </NavLink>
        </nav>
    );
};
