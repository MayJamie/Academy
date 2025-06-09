import { Box, Container, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import RegistrationForm from "@@components/RegistrationForm";
import TeacherRegistrationForm from "@@components/TeacherRegistrationForm";
import { CONSTANT } from "shared-lib";

// Advertisment Section
import AdSection from "@@components/AdSection";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const SignUp = () => {
  const [userType, setUserType] = useState<"student" | "teacher">("student");

  const handleUserTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: "student" | "teacher" | null
  ) => {
    if (newUserType !== null) {
      setUserType(newUserType);
    }
  };

  return (
    <Box
      className={CLASS_SECTION_ANIMATED_BG}
      sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 3 }}
    >
      <Container maxWidth="md">
        <Typography
          gutterBottom
          maxWidth="clamp(5ch, 100%, 20ch)"
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
            color: "black.main",
            mx: "auto",
            textAlign: "center",
          }}
          variant="h1"
        >
          Registration
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#555",
            /*mb: 1,*/
          }}
        >
          Fill out the form below to join the academy!
        </Typography>

        <AdSection />

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            value={userType}
            exclusive
            onChange={handleUserTypeChange}
            aria-label="User Type"
            color="primary"
          >
            <ToggleButton value="student" aria-label="Student">
              Student Enrollment
            </ToggleButton>
            <ToggleButton value="teacher" aria-label="Teacher">
              Teacher Enrollment
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Render appropriate form based on selection */}
        {userType === "student" ? <RegistrationForm /> : <TeacherRegistrationForm />}
      </Container>
    </Box>
  );
};

export default SignUp;