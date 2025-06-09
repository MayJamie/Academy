import { Button } from "@mui/material";
import AppLink from "./AppLink";
import type { ComponentProps } from "react";

const ClassroomButton = ({ children = "Classroom Login", ...restProps }: ComponentProps<typeof Button>) => {
    return (
        <Button
            LinkComponent={AppLink}
            href="https://classroom.google.com"
            sx={{
                mt: "16px",
                border: "3px solid #6A0DAD",
                color: "#6A0DAD",
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
                    backgroundColor: "#6A0DAD",
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

export default ClassroomButton;