export const BrandsDisplay = ({ logos, className }) => {
    return (
        <div className={className}>
            {logos.map(({ name, src }, index) => (
                <img
                    className="transition-transform duration-300 hover:scale-105 sm:w-30"
                    key={`${name}-${index}`}
                    src={src}
                    alt={name}
                />
            ))}
        </div>
    );
};
