import { Button } from "@mui/material";
import AppLink from "./AppLink";
import type { ComponentProps } from "react";

const LoginButton = ({ href, children, ...restProps }: { href: string, children: string } & ComponentProps<typeof Button>) => {
    return (
        <Button
            LinkComponent={AppLink}
            href={href}
            sx={{
                mt: "8px",
                border: "2px solid #6A0DAD",
                color: "#6A0DAD",
                backgroundColor: "transparent",
                borderRadius: "50px",
                padding: "4px 18px",
                fontSize: "1.4rem", 
                fontWeight: 600,
                transition: "0.3s ease-in-out",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                height: "40px",
                "&:hover": {
                    backgroundColor: "#6A0DAD",
                    color: "#FFFFFF",
                },
                "&:active": {
                    opacity: 0.7,
                    transform: "scale(0.98)",
                },
                "@media (max-width:600px)": {
                    padding: "4px 12px",
                    fontSize: "1.2rem",
                    transform: "scale(0.85)", 
                },
                "@media (min-width:600px) and (max-width:960px)": {
                    padding: "4px 16px",
                    fontSize: "1.3rem",
                    transform: "scale(0.95)",
                },
                "@media (min-width:960px)": {
                    padding: "4px 18px",
                    fontSize: "1.4rem",
                    transform: "scale(1)",
                },
            }}
            {...restProps}
        >
            {children}
        </Button>
    );
};

export default LoginButton;