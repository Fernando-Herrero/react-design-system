export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontSize: {
                // TEXT SIZES (para contenido)
                xs: ["12px", "18px"],
                sm: ["14px", "20px"],
                base: ["16px", "24px"],
                lg: ["18px", "28px"],
                xl: ["20px", "30px"],

                // DISPLAY SIZES (para títulos/headings)
                "display-xs": ["24px", "32px"],
                "display-sm": ["30px", "36px"],
                "display-md": [
                    "36px",
                    {
                        lineHeight: "44px",
                        letterSpacing: "-0.02em",
                    },
                ],
                "display-lg": [
                    "48px",
                    {
                        lineHeight: "60px",
                        letterSpacing: "-0.02em",
                    },
                ],
                "display-xl": [
                    "60px",
                    {
                        lineHeight: "72px",
                        letterSpacing: "-0.02em",
                    },
                ],
                "display-2xl": [
                    "72px",
                    {
                        lineHeight: "88px",
                        letterSpacing: "-0.02em",
                    },
                ],
            },
        },
    },
    plugins: [],
};
