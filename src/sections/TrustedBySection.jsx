import amazonLogo from "../assets/amazon-logo.png";
import cocaLogo from "../assets/Coca-Cola_logo.png";
import fedexLogo from "../assets/fedex-logo.png";
import ibmLogo from "../assets/IBM_logo.png";
import walmartLogo from "../assets/Walmart_logo.png";
import { BrandsDisplay } from "../components/BrandsDisplay";
import { Container } from "../components/Container";

const brands = {
    mobile: [
        { name: "Logo Coca-Cola", src: cocaLogo },
        { name: "Logo amazon:", src: amazonLogo },
        { name: "Logo FedEx", src: fedexLogo },
    ],
    desktop: [
        { name: "Logo IBM", src: ibmLogo },
        { name: "Logo Coca-Cola", src: cocaLogo },
        { name: "Logo amazon", src: amazonLogo },
        { name: "Logo FedEx", src: fedexLogo },
        { name: "Logo Walmart", src: walmartLogo },
        { name: "Logo Coca-Cola", src: cocaLogo },
        { name: "Logo amazon", src: amazonLogo },
        { name: "Logo Walmart", src: walmartLogo },
        { name: "Logo IBM", src: ibmLogo },
        { name: "Logo FedEx", src: fedexLogo },
    ],
};

export const TrustedBySection = () => {
    return (
        <Container className="flex flex-col gap-md mt-xl mb-xl text-center">
            <p>Already loved and trusted by product team</p>

            {Array.from({ length: 2 }, (_, index) => (
                <BrandsDisplay
                    key={index}
                    className="w-full flex items-center justify-between lg:hidden"
                    logos={brands.mobile}
                />
            ))}

            {/* <BrandsDisplay
                className="w-full flex items-center justify-between lg:hidden"
                logos={brands.mobile}
            /> */}

            <BrandsDisplay
                logos={brands.desktop}
                className="hidden lg:grid lg:grid-cols-5 lg:gap-x-2xl lg:gap-y-xl"
            />
        </Container>
    );
};
