export const Container = ({ children, className = "" }) => {
    return <div className={`max-w-[1140px] mx-auto px-sm ${className}`}>{children}</div>;
};
