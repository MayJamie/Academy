import { Box, Typography, TextField, Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { CONSTANT } from "shared-lib";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        address: "",
        contact: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        await fetch("https://formspree.io/f/mgvazagb", {
            method: "POST",
            body: formDataToSend,
            headers: { Accept: "application/json" },
        });
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", company: "", email: "", address: "", contact: "", message: "" });
    };

    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh", p: 3 }}>
            <Container maxWidth="md">
                <Typography gutterBottom
                        maxWidth="clamp(5ch, 100%, 20ch)"
                        textAlign="center"
                        sx={{
                            fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
                            mx: "auto",
                        }}
                        variant="h1">
                    Contact Us
                </Typography>
                <Typography sx={{ mb: 3, textAlign: "center" }}>
                    Have questions? Reach out to us!
                </Typography>
                
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <Image src="/images/contact.png" alt="Contact Us" width={400} height={400} style={{ width: "90%", height: "auto" }} />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField placeholder="First Name*" variant="outlined" name="firstName" value={formData.firstName} onChange={handleChange} required fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField placeholder="Last Name*" variant="outlined" name="lastName" value={formData.lastName} onChange={handleChange} required fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField placeholder="Email*" variant="outlined" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField placeholder="Company" variant="outlined" name="company" value={formData.company} onChange={handleChange} fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField placeholder="Address" variant="outlined" name="address" value={formData.address} onChange={handleChange} fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField placeholder="Contact*" variant="outlined" name="contact" value={formData.contact} onChange={handleChange} required fullWidth />
                                </Grid>
                            </Grid>
                            <TextField placeholder="Message description*" variant="outlined" name="message" multiline rows={4} value={formData.message} onChange={handleChange} required fullWidth />
                            
                            {/* "Send Message" button */}
                            <Button
                                type="submit"
                                sx={{
                                    mt: "16px",
                                    border: "3px solid #344B9C",
                                    color: "#344B9C",
                                    backgroundColor: "transparent",
                                    borderRadius: "50px",
                                    padding: "12px 30px", 
                                    fontSize: "1.6rem", 
                                    fontWeight: 600,
                                    transition: "0.3s ease-in-out",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textTransform: "none",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                                    "&:hover": {
                                        backgroundColor: "#344B9C",
                                        color: "#FFFFFF",
                                        boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.2)",
                                    },
                                    "&:active": {
                                        opacity: 0.7,
                                        transform: "scale(0.98)",
                                        boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
                                    },
                                    // Scalability
                                    "@media (max-width:600px)": {
                                        transform: "scale(0.85)",
                                        fontSize: "1.4rem", 
                                    },
                                    "@media (min-width:600px) and (max-width:960px)": {
                                        transform: "scale(0.95)",
                                        fontSize: "1.5rem", 
                                    },
                                    "@media (min-width:960px)": {
                                        transform: "scale(1)", 
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactUs;