import { DashboardSection } from "./sections/DashboardSection";
import { Features } from "./sections/Features";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { TrustedBySection } from "./sections/TrustedBySection";

export const App = () => {
    return (
        <div className="h-dvh min-h-screen grid grid-rows-[auto_1fr_auto] text-base">
            <Header />
            <main>
                <Hero />
                <DashboardSection />
                <TrustedBySection />
                <Features />
            </main>
            <footer></footer>
        </div>
    );
};
