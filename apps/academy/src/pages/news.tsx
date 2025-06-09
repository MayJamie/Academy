import React from "react";
import { Box, Typography, Container } from "@mui/material";
import WhatsNewSection from "@@components/WhatsNewSection";
import ArticlesSection from "@@components/ArticlesSection";
import WebinarsSection from "@@components/WebinarsSection";
import LessonsRegisterSection from '@@components/LessonsRegisterSection';
import { CONSTANT } from "shared-lib";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const NewsPage = () => {
  return (
    <>
      {/* Header Section with background */}
      <Box
        sx={{
          backgroundImage: `url('/images/news.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 3,
        }}
      >
        <Container maxWidth="md">
          <Typography
            gutterBottom
            maxWidth="clamp(5ch, 100%, 20ch)"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
              //color: "white !important",
              mx: "auto",
            }}
            variant="h1"
          >
            News and Events
          </Typography>
          <Typography
            //color="white !important"
            gutterBottom
            sx={{ mx: "auto", maxWidth: "60ch" }}
            variant="body1"
          >
            Stay informed with the latest updates, upcoming events, featured articles, and video highlights.
          </Typography>
        </Container>
      </Box>

      {/* Content Sections */}
      <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ textAlign: "center", py: 3 }}>
        {/* Whats New Section */}
        <Box className={CLASS_SECTION_ANIMATED_BG}>
          <WhatsNewSection />
        </Box>

        {/* Webinars Section */}
        <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ mt: 3 }}>
          <Typography
            variant="h2"
            fontSize={{ xs: "2.3rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
            gutterBottom
          >
            Open Webinars
          </Typography>
          <WebinarsSection />
        </Box>

        {/* Articles Section */}
        <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ mt: 3 }}>
          <Typography
            variant="h2"
            fontSize={{ xs: "2.3rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
            gutterBottom
          >
            Articles and Videos
          </Typography>
          <ArticlesSection />
        </Box>
      </Box>
    </>
  );
};

export default NewsPage;
