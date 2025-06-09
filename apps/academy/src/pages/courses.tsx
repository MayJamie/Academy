import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent,
  TextField
} from "@mui/material";
import { courses } from "../../data/data";
import { CONSTANT } from "shared-lib";
import LessonsRegisterSection from "@@components/LessonsRegisterSection";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const gradientBg =
  "linear-gradient(135deg, rgba(75, 0, 130, 0.8), rgba(0, 0, 139, 0.8), rgba(30, 144, 255, 0.8))";

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [levelFilters, setLevelFilters] = useState({
    form4: true,
    form5: true,
    jointForms4And5: true,
  });
  const [search, setSearch] = useState("");

  const uniqueCourseTitles = [...new Set(courses.map((c) => c.title))];

  const toggleCourse = (title) => {
    setSelectedCourse((prev) => (prev === title ? null : title));
  };

  const toggleLevel = (levelKey) => {
    setLevelFilters((prev) => ({
      ...prev,
      [levelKey]: !prev[levelKey],
    }));
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.tutor.toLowerCase().includes(search.toLowerCase());
      const matchesLevel =
        (levelFilters.form4 && course.level.toLowerCase().includes("form 4")) ||
        (levelFilters.form5 && course.level.toLowerCase().includes("form 5")) ||
        (levelFilters.jointForms4And5 && course.level.toLowerCase().includes("joint forms 4 and 5"));

      return matchesSearch && matchesLevel;
    });
  }, [levelFilters, search]);

  const featuredCourse = useMemo(() => {
    return courses[Math.floor(Math.random() * courses.length)];
  }, []);

  return (
    <Box component="section">
      <Box
        sx={{
          background: gradientBg,
          py: 6,
          textAlign: "center",
          color: "white !important",
        }}
      >
        <Container>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
              // fontWeight: 600,
            }}
          >
            Explore Courses
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
              mt: 3,
            }}
          >
            {uniqueCourseTitles.map((title, i) => (
              <Chip
                key={i}
                label={title}
                clickable
                onClick={() => toggleCourse(title)}
                sx={{
                  backgroundColor: selectedCourse === title ? "#fff" : "transparent",
                  color: selectedCourse === title ? "black" : "#fff",
                  borderColor: "#fff",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: selectedCourse === title ? "#fff" : "rgba(255, 255, 255, 0.1)",
                    color: selectedCourse === title ? "grey" : "#fff",
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {selectedCourse && (
        <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ py: 5 }}>
          <Container>
            <Typography variant="h3" gutterBottom textAlign="center" sx={{ pb: 2 }}>
              {selectedCourse}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {courses
                .filter((c) => c.title === selectedCourse)
                .map((course, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: 3,
                        boxShadow: 3,
                        p: 2,
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6">{course.title}</Typography>
                        <Typography variant="body1">{course.tutor}</Typography>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          color="primary"
                        >
                          {course.level}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Box>
      )}

      <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ py: 3 }}>
        <Container>
          <Typography
            variant="h2"
            fontSize={{ xs: "2.3rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Search Courses
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            label="Search"
            placeholder="Search courses by title or tutor"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mt: 3, mb: 3 }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, flexWrap: "wrap" }}>
            <Typography variant="subtitle1" sx={{ minWidth: 100 }}>
              Choose Level:
            </Typography>
            {[
              { key: "form4", label: "Form 4" },
              { key: "form5", label: "Form 5" },
              { key: "jointForms4And5", label: "Joint Forms 4 and 5" },
            ].map(({ key, label }) => (
              <Chip
                key={key}
                label={label}
                clickable
                onClick={() => toggleLevel(key)}
                sx={{
                  backgroundColor: levelFilters[key] ? "#444" : "#ccc",
                  color: levelFilters[key] ? "#fff" : "#333",
                  fontWeight: 600,
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </Box>

          <Grid container spacing={2}>
            {filteredCourses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    minHeight: 130,
                    textAlign: "center",
                    borderRadius: "16px",
                    boxShadow: 3,
                    backgroundColor:
                      index % 2 === 0 ? "#3A4A72" : "#6A4E92",
                    opacity: 0.85,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, opacity: 1 },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ color: "#fff" }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff", opacity: 0.85 }}
                      >
                        {course.tutor}
                      </Typography>
                    </Box>
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
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ py: 5 }}>
        <Container>
          <Typography
            variant="h2"
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 600, pb: 1 }}
          >
            Featured Course
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  minHeight: 130,
                  textAlign: "center",
                  borderRadius: "16px",
                  boxShadow: 3,
                  backgroundColor: "#6A4E92",
                  opacity: 0.9,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ color: "#fff" }}
                    >
                      {featuredCourse.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", opacity: 0.85 }}
                    >
                      {featuredCourse.tutor}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontWeight: 550,
                      mt: "auto",
                    }}
                  >
                    {featuredCourse.level}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

    <LessonsRegisterSection></LessonsRegisterSection>

    </Box>
  );
};

export default CoursesSection;