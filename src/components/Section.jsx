import { Container } from "./Container";

export const Section = ({
    title,
    subtitle,
    text,
    children,
    className = "",
    headerClassName = "",
    pClassName = "",
}) => {
    return (
        <Container
            className={`flex flex-col items-center gap-5 text-center pt-xl mb-xl lg:pt-2xl lg:mb-2-xl ${className}`}
        >
            <div className={`flex flex-col items-center gap-5 ${headerClassName}`}>
                {subtitle && <h5 className="text-blue">{subtitle}</h5>}
                <h2 className="font-bold text-4xl">{title}</h2>
                {text && <p className={pClassName}>{text}</p>}
            </div>
            {children}
        </Container>
    );
};
