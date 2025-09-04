import { DashboardSection } from "./sections/DashboardSection";
import { Features } from "./sections/Features";
import { FreeTrialSectioon } from "./sections/FreeTrialSection";
import { FrequentlyTasksSection } from "./sections/FrequentlyTasksSection";
import { GrowSection } from "./sections/GrowSection";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { RecuitringSection } from "./sections/RecruitingSection";
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
                <FreeTrialSectioon />
                <RecuitringSection />
                <GrowSection />
                <FrequentlyTasksSection />
            </main>
            <footer></footer>
        </div>
    );
};
