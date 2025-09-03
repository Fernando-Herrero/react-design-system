import { useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";

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
                    className={`flex flex-col gap-2 w-[50vw] bg-white p-xs absolute top-0 right-0 shadow-[0_0_6px_-1px_rgba(0,0,0,0.4)] transform transition-all duration-800 ${
                        showMenu ? "translate-x-0 opacity-100 ease-out" : "translate-x-full opacity-0 ease-in"
                    }`}
                >
                    <span
                        className="flex items-center justify-center p-3 w-4 h-4 self-end cursor-pointer transition duration-500 hover:bg-gray-100 rounded-full"
                        onClick={handleMenuClick}
                    >
                        ⅹ
                    </span>

                    <Navbar />

                    <div className="flex flex-col items-start gap-1">
                        <Button className="border border-gray-300 text-letter"> Sign in</Button>
                        <Button className="bg-blue text-white">Sign up free</Button>
                    </div>
                </div>

                <div
                    className="p-2 rounded-full cursor-pointer transition duration-500 hover:bg-gray-100"
                    onClick={handleMenuClick}
                >
                    <img className="w-6" src="/src/assets/hamb-menu.png" alt="hamburguer-menu" />
                </div>
            </Container>
        </header>
    );
};
