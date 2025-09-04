import { Button } from "../components/Button";
import { Container } from "../components/Container";

export const FreeTrialSectioon = () => {
    return (
        <Container className="flex flex-col items-center gap-5 text-center pt-xl mb-xl lg:pt-2xl lg:mb-2xl">
            <h2 className="font-bold text-4xl">Create Your First Personalized</h2>
            <p>No credit card required 7 days free trial</p>
            <div className="w-full flex justify-center gap-2.5">
                <Button className="border border-gray-300 text-letter">Get Started</Button>
                <Button className="bg-blue text-white">Request a Demo</Button>
            </div>
        </Container>
    );
};
