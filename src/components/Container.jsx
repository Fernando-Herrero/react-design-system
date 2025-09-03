export const Container = ({ children, className = "" }) => {
    return <div className={`max-w-[1140px] mx-auto px-sm sm:px-lg md:px-xl ${className}`}>{children}</div>;
};
