import { useEffect, useState } from "react";
import img1 from "../assets/recuitring-img-1.png";
import img2 from "../assets/recuitring-img-2.png";
import { Container } from "../components/Container";

const imageData = [
    { src: img1, alt: "Two guys looking at graphic layout" },
    { src: img2, alt: "Two guys making a deal with desktop layout and contract" },
];

export const RecuitringSection = () => {
    const [showText, setShowText] = useState(
        "Move faster on a recruiting platform that automated and manual tasks like approvals"
    );

    useEffect(() => {
        const handleText = () => {
            setShowText(
                window.innerWidth >= 1024
                    ? "Move faster on a recruting platform that automated and manual tasks like scheduling interviews and getting approvals"
                    : "Move faster on a recruiting platform that automated and manual tasks like approvals"
            );
        };

        handleText();
        window.addEventListener("resize", handleText);

        return () => window.removeEventListener("resize", handleText);
    }, []);

    return (
        <Container className="pt-xl mb-xl md:grid md:grid-cols-2 gap-2 lg:pt-2xl lg:mb-2xl">
            {Array.from({ length: 4 }, (_, index) => {
                const isImg1 = index % 2 === 0;
                const swapOrder = index === 1 || index === 2;
                const isLastCard = index === 2;

                return (
                    <div
                        key={index}
                        className={`flex flex-col items-center gap-5 ${isLastCard ? "md:order-4" : ""}`}
                    >
                        <div
                            className={`flex flex-col items-center gap-3 text-center md:text-left md:items-start ${
                                swapOrder ? "md:order-2" : ""
                            }`}
                        >
                            <h5 className="font-bold max-w-44 md:max-w-[412px] lg:text-lg">
                                Make the best hire in half the time
                            </h5>
                            <p className="max-w-[450px]">{showText}</p>
                        </div>

                        <div className={`flex ${swapOrder ? "md:order-1" : ""}`}>
                            <img
                                className="transition-transform duration-300 hover:scale-105"
                                src={isImg1 ? imageData[0].src : imageData[1].src}
                                alt={isImg1 ? imageData[0].alt : imageData[1].alt}
                            />
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};
