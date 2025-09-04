import { Link } from "react-router-dom";
import copyImg from "../assets/copyright.png";
import { Container } from "../components/Container";

const titles = ["Product", "Resource", "Features", "Solution"];
const items = ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"];

export const Footer = () => {
    return (
        <footer className="pt-xl pb-7 lg:pt-2xl lg:pb-10">
            <Container className="flex flex-col gap-10">
                <div className="grid grid-cols-2 justify-items-center gap-10 sm:flex sm:justify-between">
                    {titles.map((title, index) => (
                        <div key={`${title}-${index}`} className="flex flex-col gap-2">
                            <h5 className="font-bold text-xl">{title}</h5>
                            <ul className="flex flex-col">
                                {items.map((item, index) => (
                                    <Link
                                        key={`${item}-${index}`}
                                        className="text-letter cursor-pointer inline"
                                        to="#"
                                    >
                                        <p className="inline">{item}</p>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <span className="flex items-center justify-center gap-2 text-letter text-xs">
                    <img className="w-4" src={copyImg} alt="icon c of copyright" />
                    {new Date().getFullYear()} jahedin LTD. All rights reserved.
                </span>
            </Container>
        </footer>
    );
};
