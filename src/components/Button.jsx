export const Button = ({ children, className = " " }) => {
    return (
        <button
            className={`inline-flex px-6 py-2 rounded cursor-pointer transition-transform duration-500 hover:-translate-y-0.5 ${className}`}
        >
            {children}
        </button>
    );
};
