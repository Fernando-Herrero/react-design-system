import { useState } from "react";

export const FrequentlyTasks = ({ title, text }) => {
    const [showText, setShowText] = useState(false);

    const handleShowText = () => {
        setShowText((prev) => !prev);
    };

    // SI TUVIESE TEXTOS DE DISTINTO TAMAÑO COMO TENDRIA QUE HACER YA QUE FIT NO SE PUEDE ANIAMR
    return (
        <div className="w-full max-w-[550px]">
            <div
                className={`flex items-center justify-between bg-gray-100 p-4 ${
                    showText ? "rounded-br-none rounded-bl-none rounded-tr rounded-tl" : "rounded"
                }`}
            >
                <h5 className="text-black">{title}</h5>
                <span
                    onClick={handleShowText}
                    className={`cursor-pointer transition-transform duration-500 ${
                        showText ? "rotate-90" : "rotate-0"
                    }`}
                >
                    ＞
                </span>
            </div>
            <div
                className={`overflow-hidden text-left bg-gray-50 transition-all duration-500 tranasform ${
                    showText ? "opacity-100 max-h-60 p-4" : "opacity-0 max-h-0 p-0"
                }`}
            >
                <p>{text}</p>
            </div>
        </div>
    );
};
