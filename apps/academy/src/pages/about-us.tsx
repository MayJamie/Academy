import { Box, Typography, Container } from "@mui/material";
import { CONSTANT } from "shared-lib";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const AboutUs = () => {
    return (
        <>
            {/* About Us Section */}
            <Box
                sx={{
                    backgroundImage: `url('/images/background/about.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    py: 3,
                    color: "white !important",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        gutterBottom
                        maxWidth="clamp(5ch, 100%, 20ch)"
                        sx={{
                            fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
                            color: "white !important",
                            mx: "auto",
                            // fontWeight: 600,
                        }}
                        variant="h1"
                    >
                        About Us
                    </Typography>
                    <Typography
                        color="white !important"
                        gutterBottom
                        sx={{ mx: "auto", maxWidth: "60ch"}}
                        variant="body1"
                    >
                        I'deffect Academy is dedicated to fostering a positive influence in the education sphere.
                        Our institution provides a tailored environment that caters to the unique requirements of each learner. By leveraging committed educators and innovative teaching methodologies and technologies, we aim to revolutionize the educational journey, empowering individuals to achieve their academic objectives, while finding fulfillment in the process.
                    </Typography>
                </Container>
            </Box>

            {/* Career Section */}
            <Box
                className={CLASS_SECTION_ANIMATED_BG}
                sx={{
                    py: 3,
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        gutterBottom
                        maxWidth="clamp(5ch, 100%, 20ch)"
                        sx={{
                            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                            color: "black.main",
                            mx: "auto",
                            textAlign: "center",
                        }}
                        variant="h1"
                    >
                        Careers
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box
                            sx={{
                                flex: 1,
                                mr: 3,
                                borderRadius: 2,
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="/images/careers.jpg"
                                alt="Careers"
                                style={{ width: "100%", height: "50%", aspectRatio: "3 / 2", objectFit: "cover",  borderRadius: "8px"}}
                            />
                        </Box>
                        <Box sx={{ flex: 2 }}>
                            <Typography
                                gutterBottom
                                sx={{
                                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                                    fontWeight: 400,
                                }}
                                variant="h2"
                            >
                                Open Job Positions
                            </Typography>
                            {/* Job listing section */}
                            <Box 
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    borderRadius: 2,
                                    p: 2,
                                    boxShadow: 3,
                                }}
                            >
                                {/* Job Position Content */}
                                <Typography variant="body1" sx={{ color: "black.main", mx: "auto", maxWidth: "60ch", fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },}}>
                                    There are no open job positions available at this time.
                                </Typography>
                                {/* Add when content is available */}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default AboutUs;