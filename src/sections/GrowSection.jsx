import growImg from "../assets/grow-section-img.png";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export const GrowSection = () => {
    return (
        <Section
            title="Let’s grow together"
            text="Explore out full hiring platform with 15 days free trial no credit card.Post jobs get candidates and manage applicants all in one"
            pClassName="max-w-[400px]"
        >
            <div className="w-full">
                <Button className="bg-blue text-white self-center">Try it for free</Button>
                <img
                    className="w-full max-h-[600px]"
                    src={growImg}
                    alt="draw of a girl in her desktop taking a letter from a pigeon"
                />
            </div>
        </Section>

        // <Container className="flex flex-col items-center text-center pt-xl mb-xl lg:pt-2xl lg:mb-2xl">
        //     <div className="flex flex-col gap-6">
        //         <h2 className="font-bold text-4xl">Let’s grow together</h2>
        //         <p className="max-w-[400px]">
        //             Explore out full hiring platform with 15 days free trial no credit card.Post jobs get
        //             candidates and manage applicants all in one
        //         </p>
        //     </div>
        //     <div className="w-full">
        //         <Button className="bg-blue text-white self-center">Try it for free</Button>
        //         <img
        //             className="w-full max-h-[600px]"
        //             src={growImg}
        //             alt="draw of a girl in her desktop taking a letter from a pigeon"
        //         />
        //     </div>
        // </Container>
    );
};
