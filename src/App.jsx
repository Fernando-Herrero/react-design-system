import { Header } from "./components/Header";

export const App = () => {
    return (
        <div className="h-dvh min-h-screen grid grid-rows-[auto-1fr-auto] text-lg">
            <Header />
            <main></main>
            <footer></footer>
        </div>
    );
};
