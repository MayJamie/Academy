import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { set } from "husky";

const SUBJECTS = [
  "Biology",
  "Physics",
  "Chemistry",
  "Additional Mathematics",
  "Mathematics",
  "English A",
  "English B",
  "Economics",
  "Principles of Business",
  "Principles of Accounting",
  "Information Technology",
];

const TeacherRegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contactNumber: "",
    subjects: {},
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (subject, level) => {
    const current = formValues.subjects[subject] || { form4: false, form5: false };
    const updated = {
      ...formValues.subjects,
      [subject]: { ...current, [level]: !current[level] },
    };
    setFormValues({ ...formValues, subjects: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const selectedSubjects = {};
  
    Object.entries(formValues.subjects).forEach(([subject, { form4, form5 }]) => {
      if (form4 || form5) {
        selectedSubjects[subject] = {
          form4: !!form4,
          form5: !!form5,
        };
      }
    });
  
    if (Object.keys(selectedSubjects).length === 0) {
      setOpenSnackbar(true);
      return;
    }
  
    setIsSubmitting(true);
  
    const dataToSend = {
      name: formValues.name,
      email: formValues.email,
      contactNumber: formValues.contactNumber,
      subjects: selectedSubjects,
    };

    // Log in console for debugging
    //console.log("Data to Send:", JSON.stringify(dataToSend, null, 2));
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwbkH48RvBx1wOJWvwl-q3G1CGD5O_jqLStldrX5fBDMiNH-7x_7yeROWfyF4hmYw1ccg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
    
      window.scroll({ top: 0, behavior: "smooth" });
      setSubmissionSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
      setOpenSnackbar(false);
    }
    
    setFormValues({
      name: "",
      email: "",
      contactNumber: "",
      subjects: {},
    });

  };  

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setSubmissionSuccess(false);
  };

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
    setErrorMessage("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "white",
        p: 4,
        borderRadius: "16px",
        boxShadow: 2,
      }}
    >
      <TextField
        required
        name="name"
        label="Teacher Name"
        variant="outlined"
        value={formValues.name}
        onChange={handleInputChange}
        fullWidth
        sx={{
          backgroundColor: "#f9f9f9",
          "& .MuiInputBase-input": { color: "#000" },
          "& .MuiInputLabel-root": { color: "#000" },
        }}
      />

      <TextField
        required
        name="email"
        label="Teacher Email"
        type="email"
        variant="outlined"
        value={formValues.email}
        onChange={handleInputChange}
        fullWidth
        sx={{
          backgroundColor: "#f9f9f9",
          "& .MuiInputBase-input": { color: "#000" },
          "& .MuiInputLabel-root": { color: "#000" },
        }}
      />

      <TextField
        required
        name="contactNumber"
        label="Primary Contact Number"
        type="tel"
        variant="outlined"
        value={formValues.contactNumber}
        onChange={handleInputChange}
        fullWidth
        sx={{
          backgroundColor: "#f9f9f9",
          "& .MuiInputBase-input": { color: "#000" },
          "& .MuiInputLabel-root": { color: "#000" },
        }}
      />

      <Box>
        <Typography variant="h6" gutterBottom>
          What subjects do you wish to teach at the Academy? *
        </Typography>
        {SUBJECTS.map((subject) => (
          <Box key={subject} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight={500}>
              {subject}
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.subjects?.[subject]?.form4 || false}
                    onChange={() => handleCheckboxChange(subject, "form4")}
                    sx={{ color: "#000", '&.Mui-checked': { color: "#000" } }}
                  />
                }
                label="Form 4"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.subjects?.[subject]?.form5 || false}
                    onChange={() => handleCheckboxChange(subject, "form5")}
                    sx={{ color: "#000", '&.Mui-checked': { color: "#000" } }}
                  />
                }
                label="Form 5"
              />
            </FormGroup>
          </Box>
        ))}
      </Box>

      <Button
        type="submit"
        sx={{
          border: "3px solid #344B9C",
          color: "#344B9C",
          backgroundColor: "transparent",
          borderRadius: "50px",
          padding: "12px 30px",
          fontSize: "1.6rem",
          fontWeight: 600,
          transition: "0.3s ease-in-out",
          alignSelf: "center",
          textTransform: "none",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          "&:hover": {
            backgroundColor: "#344B9C",
            color: "#FFFFFF",
          },
          "&:active": {
            opacity: 0.7,
            transform: "scale(0.98)",
          },
        }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <CircularProgress size={24} sx={{ color: "#344B9C" }} />
        ) : (
          "Submit Registration"
        )}
      </Button>

      <Snackbar
        open={submissionSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Registration Successful!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
          You must select at least one subject.
        </Alert>
      </Snackbar>

      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseErrorSnackbar}
      >
        <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: "100%" }}>
          {errorMessage || "An error occurred. Please try again later."}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TeacherRegistrationForm;