import { Button } from "@mui/material";
import AppLink from "./AppLink";
import type { ComponentProps } from "react";

const RegisterButton = ({ children = "Register Here", ...restProps }: ComponentProps<typeof Button>) => {
    return (
        <Button
            LinkComponent={AppLink}
            // href="https://docs.google.com/forms/d/e/1FAIpQLScjmEkrwn2Ff6OGjoBerl39COZLSlWP_p5UI-wFs0Uca_uDiA/viewform"
            href="/register"
            sx={{
                mt: "16px",
                border: "3px solid #344B9C", 
                color: "#344B9C",
                backgroundColor: "transparent",
                borderRadius: "50px",
                padding: "10px 24px",  
                fontSize: "1.6rem",  
                fontWeight: 600,
                transition: "0.3s ease-in-out",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                "&:hover": {
                    backgroundColor: "#344B9C",
                    color: "#FFFFFF",
                },
                "&:active": {
                    opacity: 0.7,
                    transform: "scale(0.98)",
                },

                // Scalability
                "@media (max-width:600px)": { // Mobile View
                    transform: "scale(0.85)", 
                },
                "@media (min-width:600px) and (max-width:960px)": { // Tablet View
                    transform: "scale(0.95)", 
                },
                "@media (min-width:960px)": { // Desktop View
                    transform: "scale(1)", 
                },
            }}
            {...restProps}
        >
            {children}
        </Button>
    );
};

export default RegisterButton;