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
        <header className="border-b border-gray-100 h-fit">
            <Container className="flex items-center justify-between relative py-2">
                <div className="w-[65px] sm:w-28">
                    <img className="w-full" src="/src/assets/logo.jpg" alt="page logo" />
                </div>

                <div className="hidden lg:flex">
                    <Navbar />
                </div>

                <div className="hidden lg:flex lg:gap-sm">
                    <Button className="border border-gray-300 text-letter w-full"> Sign in</Button>
                    <Button className="bg-blue text-white w-full">Sign up free</Button>
                </div>

                <div
                    className={`flex flex-col gap-2 w-[50vw] bg-white p-xs absolute top-0 right-0 shadow-[0_0_6px_-1px_rgba(0,0,0,0.4)] transform transition-all duration-800 ${
                        showMenu ? "translate-x-0 opacity-100 ease-out" : "translate-x-full opacity-0 ease-in"
                    } lg:hidden`}
                >
                    <span
                        className="flex items-center justify-center p-3 w-4 h-4 self-end cursor-pointer transition duration-500 hover:bg-gray-100 rounded-full lg:hidden"
                        onClick={handleMenuClick}
                    >
                        ⅹ
                    </span>

                    <Navbar />

                    <div className="flex flex-col items-start gap-1 lg:hidden">
                        <Button className="border border-gray-300 text-letter w-full"> Sign in</Button>
                        <Button className="bg-blue text-white w-full">Sign up free</Button>
                    </div>
                </div>

                <div
                    className="p-2 rounded-full cursor-pointer transition duration-500 hover:bg-gray-100 md:hidden"
                    onClick={handleMenuClick}
                >
                    <img className="w-6" src="/src/assets/hamb-menu.png" alt="hamburguer-menu" />
                </div>
            </Container>
        </header>
    );
};
