export const Button = ({ children, className = " " }) => {
    return (
        <button
            className={`inline-flex justify-center px-6 py-2 rounded-xl cursor-pointer max-w-[159px] min-w-fit md:rounded transition-transform duration-500 hover:-translate-y-0.5 ${className}`}
        >
            {children}
        </button>
    );
};
