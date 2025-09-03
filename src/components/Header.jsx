import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Container";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <header>
            <Container className="flex items-center justify-between relative">
                <div className="w-[65px]">
                    <img className="w-full" src="/src/assets/logo.jpg" alt="page logo" />
                </div>

                <div
                    className={`flex flex-col gap-1 w-[50vw] bg-white p-xs absolute top-0 right-0 transform  transition-transform duration-500 ${
                        showMenu ? "transform translate-x-0" : "translate-x-full"
                    }`}
                >
                    <span className="self-end cursor-pointer" onClick={handleMenuClick}>
                        {" "}
                        ⅹ{" "}
                    </span>
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
                    <div className="flex flex-col items-start">
                        <button>Sign In</button>
                        <button>Sign up Free</button>
                    </div>
                </div>

                <div className="w-6 cursor-pointer" onClick={handleMenuClick}>
                    <img className="w-full" src="/src/assets/hamb-menu.png" alt="hamburguer-menu" />
                </div>
            </Container>
        </header>
    );
};
