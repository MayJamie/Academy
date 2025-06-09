import { useState, useMemo, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  MenuItem,
  Button,
  Modal,
} from "@mui/material";
import { tutors, courses } from "../../data/data";
import { CONSTANT } from "shared-lib";
import LessonsRegisterSection from "@@components/LessonsRegisterSection";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;
const gradientBg =
  "linear-gradient(135deg, rgba(75, 0, 130, 0.8), rgba(0, 0, 139, 0.8), rgba(30, 144, 255, 0.8))";

const MeetTutors = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [modalTutor, setModalTutor] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTutorName, setSelectedTutorName] = useState("");
  const [fullscreenImage, setFullscreenImage] = useState(null);  // Added for fullscreen image functionality

  const toggleTutor = (tutor) => {
    setSelectedTutor(selectedTutor?.name === tutor.name ? null : tutor);
  };

  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const courseMatch = selectedCourse
        ? courses.some(
            (c) => c.tutor === tutor.name && c.title === selectedCourse
          )
        : true;

      const levelMatch = selectedLevel
        ? courses.some(
            (c) => c.tutor === tutor.name && c.level === selectedLevel
          )
        : true;

      const tutorMatch = selectedTutorName
        ? tutor.name === selectedTutorName
        : true;

      return courseMatch && levelMatch && tutorMatch;
    });
  }, [selectedCourse, selectedLevel, selectedTutorName]);

  const allCourses = [...new Set(courses.map((c) => c.title))];
  const allLevels = [...new Set(courses.map((c) => c.level))];

  const getCoursesWithLevels = (tutorName) => {
    return courses
      .filter((c) => c.tutor === tutorName)
      .map((c) => `${c.title} - ${c.level}`);
  };

  const handleClearFilters = () => {
    setSelectedCourse("");
    setSelectedLevel("");
    setSelectedTutorName("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.getElementById("tutor-scroll-container");
      if (container) {
        const { scrollLeft, offsetWidth, scrollWidth } = container;
        if (Math.floor(scrollLeft + offsetWidth) >= scrollWidth - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box component="section">
      <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ py: 6, background: gradientBg }}>
        <Container>
          <Typography
            variant="h1"
            gutterBottom
            color="white!important"
            textAlign="center"
            sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" } }}
          >
            Meet Our Tutors
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5, mt: 3 }}>
            {tutors.map((tutor, i) => {
              const isSelected = selectedTutor?.name === tutor.name;
              return (
                <Chip
                  key={i}
                  label={tutor.name}
                  clickable
                  onClick={() => toggleTutor(tutor)}
                  sx={{
                    backgroundColor: isSelected ? "#fff" : "transparent",
                    color: isSelected ? "black" : "#fff",
                    borderColor: "#fff",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: isSelected ? "#fff" : "rgba(255, 255, 255, 0.1)",
                      color: isSelected ? "grey" : "#fff",
                    },
                  }}
                />
              );
            })}
          </Box>
        </Container>
      </Box>

      {selectedTutor && (
        <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ py: 4 }}>
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={10} md={8} lg={8}>
                <Card sx={{ backgroundColor: "#f9f9f9", borderRadius: 3, boxShadow: 3, p: 2 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom textAlign="center">
                      {selectedTutor.name}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", color: "black" }}>
                      <strong>Subjects:</strong>
                      {"\n" + getCoursesWithLevels(selectedTutor.name).join("\n")}
                    </Typography>
                    {selectedTutor.image && (
                      <Avatar
                        src={selectedTutor.image}
                        alt={selectedTutor.name}
                        sx={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 3,
                          boxShadow: 4,
                          mt: 3,
                          cursor: "pointer",
                        }}
                        onClick={() => setFullscreenImage(selectedTutor.image)}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      <Box className={CLASS_SECTION_ANIMATED_BG} sx={{ py: 3, mb: 3 }}>
        <Container>
          <Typography
            variant="h2"
            fontSize={{ xs: "2.3rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Search Tutors
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 3,
              mb: 3,
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              select
              label="Search Level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              size="small"
              sx={{
                minWidth: 200,
                backgroundColor: "#f9f9f9",
                "& .MuiInputBase-input": { color: "#000" },
                "& .MuiInputLabel-root": { color: "#000" },
              }}
            >
              <MenuItem value="">All Levels</MenuItem>
              {allLevels.map((level, i) => (
                <MenuItem key={i} value={level}>
                  {level}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Search Course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              size="small"
              sx={{
                minWidth: 200,
                backgroundColor: "#f9f9f9",
                "& .MuiInputBase-input": { color: "#000" },
                "& .MuiInputLabel-root": { color: "#000" },
              }}
            >
              <MenuItem value="">All Courses</MenuItem>
              {allCourses.map((course, i) => (
                <MenuItem key={i} value={course}>
                  {course}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Search Tutor"
              value={selectedTutorName}
              onChange={(e) => setSelectedTutorName(e.target.value)}
              size="small"
              sx={{
                minWidth: 200,
                backgroundColor: "#f9f9f9",
                "& .MuiInputBase-input": { color: "#000" },
                "& .MuiInputLabel-root": { color: "#000" },
              }}
            >
              <MenuItem value="">All Tutors</MenuItem>
              {tutors.map((tutor, i) => (
                <MenuItem key={i} value={tutor.name}>
                  {tutor.name}
                </MenuItem>
              ))}
            </TextField>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleClearFilters}
                variant="contained"
                sx={{
                  border: "3px solid #344B9C",
                  color: "#344B9C",
                  backgroundColor: "transparent",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "0.3s ease-in-out",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#344B9C",
                    color: "#FFFFFF",
                  },
                }}
              >
                Clear Filters
              </Button>
            </Box>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            {filteredTutors.map((tutor, index) => {
              const displayCourses = getCoursesWithLevels(tutor.name);
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    onClick={() => setModalTutor(tutor)}
                    sx={{
                      minHeight: 130,
                      textAlign: "center",
                      borderRadius: "16px",
                      boxShadow: 3,
                      backgroundColor: index % 2 === 0 ? "#3A4A72" : "#6A4E92",
                      opacity: 0.85,
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6, opacity: 1 },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ color: "white!important", fontWeight: 600, mb: 2 }}
                      >
                        {tutor.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "white!important", whiteSpace: "pre-line" }}
                      >
                        {displayCourses.join("\n")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Tutor Modal */}
      <Modal
        open={!!modalTutor}
        onClose={() => setModalTutor(null)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 500,
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          {modalTutor && (
            <>
              <Typography variant="h5" gutterBottom>
                {modalTutor.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line", mb: 2 }}
              >
                <strong>Subjects:</strong>
                {"\n" + getCoursesWithLevels(modalTutor.name).join("\n")}
              </Typography>
              {modalTutor.image && (
                <Avatar
                  src={modalTutor.image}
                  alt={modalTutor.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 3,
                    boxShadow: 4,
                    mt: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => setFullscreenImage(modalTutor.image)}
                />
              )}
            </>
          )}
        </Box>
      </Modal>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <Modal open onClose={() => setFullscreenImage(null)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
            }}
            onClick={() => setFullscreenImage(null)}
          >
            <img
              src={fullscreenImage}
              alt="Tutor"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </Box>
        </Modal>
      )}

      <LessonsRegisterSection/>

    </Box>
  );
};

export default MeetTutors;