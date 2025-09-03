import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

export const App = () => {
    return (
        <div className="h-dvh min-h-screen grid grid-rows-[auto_1fr_auto] text-base">
            <Header />
            <main>
                <Hero />
            </main>
            <footer></footer>
        </div>
    );
};
