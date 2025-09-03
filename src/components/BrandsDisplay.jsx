export const BrandsDisplay = ({ logos, className }) => {
    return (
        <div className={className}>
            {logos.map(({ name, src }, index) => (
                <img key={`${name}-${index}`} src={src} alt={name} />
            ))}
        </div>
    );
};
