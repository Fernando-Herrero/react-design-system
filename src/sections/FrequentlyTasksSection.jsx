import { Container } from "../components/Container";
import { FrequentlyTasks } from "../components/FrequentlyTasks";

export const FrequentlyTasksSection = () => {
    return (
        <Container className="flex flex-col items-center text-center gap-5 pt-xl mb-xl lg:pt-2xl lg:mb-2xl">
            <h2 className="font-bold text-4xl">Frequently asked question</h2>
            <p>Everything you need to know about jahedin</p>
            {Array.from({ length: 4 }, (_, index) => (
                <FrequentlyTasks
                    key={index}
                    title={"Is there a free trial available?"}
                    text={
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam magni, autem, molestias, ut eius velit dignissimos iure incidunt labore inventore commodi dolore eaque accusantium sapiente. Facilis sunt iure molestias."
                    }
                />
            ))}
        </Container>
    );
};
