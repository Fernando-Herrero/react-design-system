import { Button } from "../components/Button";
import { Container } from "../components/Container";

export const Hero = () => {
    return (
        <Container className="flex flex-col items-center gap-md mt-xl text-center">
            <div className="flex flex-col gap-xs">
                <h1 className="text-4xl font-bold sm:text-5xl">
                    Make Your First <span className="text-blue">Impression</span> Count
                </h1>
                <p className="md:flex flex-col">
                    powerful seal-serve product analytics to help you convert
                    <span>engage and retain more users</span>
                </p>
            </div>
            <div className="flex items-center justify-center w-full gap-xs">
                <Button className="bg-blue text-white w-1/2 py-3 ">Get start</Button>
                <Button className="border border-gray-300 text-letter w-1/2 py-3">Watch demo</Button>
            </div>
        </Container>
    );
};
