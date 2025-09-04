import { Container } from "../components/Container";

export const DashboardSection = () => {
    return (
        <Container className="pt-xl md:mb-xl">
            <img
                className="w-full transition-transform duration-500 hover:scale-110"
                src="/src/assets/grafic.png"
                alt="Layaout about the Dashboard of Albert"
            />
        </Container>
    );
};
