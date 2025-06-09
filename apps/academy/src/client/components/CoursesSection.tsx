import { useRef, useEffect, useState } from "react";
import { Box, Typography, IconButton, Card, CardContent } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { CONSTANT } from "shared-lib";
import { courses } from "../../../data/data";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const CoursesSection = () => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isScrolling && containerRef.current) {
        const container = containerRef.current;

        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isScrolling]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className={CLASS_SECTION_ANIMATED_BG} component="section" sx={{ py: 3 }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Courses
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={() => scroll("left")}>
          <ArrowBack sx={{ fontSize: 40, color: "#344B9C" }} />
        </IconButton>
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            maxWidth: "80vw",
            p: 1,
          }}
        >
          {courses.map((course, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                height: 130,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "0.3s",
                backgroundColor: index % 2 === 0 ? "#3A4A72" : "#6A4E92",
                opacity: 0.85,
                "&:hover": { boxShadow: 6, opacity: 1 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff", opacity: 0.85 }}>
                    {course.tutor}
                  </Typography>
                </Box>
                {course.level && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontWeight: 550,
                      mt: "auto",
                    }}
                  >
                    {course.level}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton onClick={() => scroll("right")}>
          <ArrowForward sx={{ fontSize: 40, color: "#344B9C" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CoursesSection;
