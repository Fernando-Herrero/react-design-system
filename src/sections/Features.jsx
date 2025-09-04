import { useEffect, useState } from "react";
import featureIcon from "../assets/features-icon.png";
import { Section } from "../components/Section";

const featuresContent = {
    icon: featureIcon,
    title: "Rich Analytics",
    text: "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
};

const FeaturesGroup = () => (
    <div className="flex flex-col items-center gap-5 px-5">
        <img
            src={featureIcon}
            alt="icono flechita azul hacia la dereahca barra en medio inclinada y flechita azul hacia la izqierda"
        />
        <h3>{featuresContent.title}</h3>
        <p>{featuresContent.text}</p>
    </div>
);

export const Features = () => {
    const [itemsCount, setItemsCount] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            setItemsCount(window.innerWidth >= 1024 ? 6 : 4);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Section
            title="You will never missed a deadline"
            subtitle="Features"
            text="Connect expose and visualize and over 150 Sass tools without engineering method"
            headerClassName="px-5"
            contentClassName="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
            <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: itemsCount }, (_, index) => (
                    <FeaturesGroup key={index} />
                ))}
            </div>
        </Section>

        // <Container className="flex flex-col items-center gap-10 text-center pt-xl mb-xl lg:pt-2xl lg:mb-2xl">
        //     <div className="flex flex-col gap-5 px-5">
        //         <h5 className="text-blue">Features</h5>
        //         <h2 className="font-bold text-4xl ">You will never missed a deadline</h2>
        //         <p>Connect expose and visualize and over 150 Sass tools without engineering method</p>
        //     </div>

        //     <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        //         {Array.from({ length: itemsCount }, (_, index) => (
        //             <FeaturesGroup key={index} />
        //         ))}
        //     </div>
        // </Container>>
    );
};
