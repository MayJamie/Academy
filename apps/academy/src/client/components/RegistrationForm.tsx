import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Slider,
  RadioGroup,
  Radio,
  Select,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { CONSTANT } from "shared-lib";
import { courses } from "../../../data/data";
import ReceiptUpload from "./ReceiptUpload";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const subjectsList = Array.from(new Set(courses.map((course) => course.title)));

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    guardianName: "",
    relationship: "",
    contact: "",
    guardianEmail: "",
    studentName: "",
    studentEmail: "",
    studentAge: "",
    gender: "",
    level: "",
    classType: "Group Session",
    term: "",
    whatsappConsent: "Yes",
  });

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [currentGrades, setCurrentGrades] = useState<Record<string, number>>({});
  const [desiredGrades, setDesiredGrades] = useState<Record<string, number>>({});
  const [subjectError, setSubjectError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [receiptUploaded, setReceiptUploaded] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value } = e.target;
    if (name === "studentAge") {
      const numeric = value.toString().replace(/[^\d]/g, "");
      setFormData({ ...formData, [name as string]: numeric });
    } else {
      setFormData({ ...formData, [name as string]: value });
    }
  };

  const handleSubjectToggle = (subject: string) => {
    const newSelected = selectedSubjects.includes(subject)
      ? selectedSubjects.filter((s) => s !== subject)
      : [...selectedSubjects, subject];
    setSelectedSubjects(newSelected);
  };

  const handleSliderChange = (
    subject: string,
    value: number,
    type: "current" | "desired"
  ) => {
    if (type === "current") {
      setCurrentGrades({ ...currentGrades, [subject]: value });
    } else {
      setDesiredGrades({ ...desiredGrades, [subject]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedSubjects.length === 0) {
      setSubjectError(true);
      setSnackbarMessage("Please select at least one subject.");
      setSnackbarOpen(true);
      return;
    }

    {/* Mandatory receipt upload check}
    if (!receiptUploaded) {
      setSnackbarMessage("Please upload a receipt.");
      setSnackbarOpen(true);
      return;
    }*/}

    setSubjectError(false);
    setLoading(true);

    const dataToSend = {
      timestamp: new Date().toLocaleString(),
      guardianName: formData.guardianName,
      relationship: formData.relationship,
      contact: formData.contact,
      guardianEmail: formData.guardianEmail,
      studentName: formData.studentName,
      studentEmail: formData.studentEmail,
      studentAge: formData.studentAge,
      gender: formData.gender,
      level: formData.level,
      classType: formData.classType,
      term: formData.term,
      whatsappConsent: formData.whatsappConsent,
      selectedSubjects: selectedSubjects.join(", "),
      currentGrades: selectedSubjects
        .map((sub) => `${currentGrades[sub] ?? 0}%`)
        .join(", "),
      desiredGrades: selectedSubjects
        .map((sub) => `${desiredGrades[sub] ?? 0}%`)
        .join(", "),
    };

    // console.log("Data to Send:", JSON.stringify(dataToSend, null, 2));

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzNI_igsQOPuJsnCmtm2eCqpZkPg3MJCft9TnPPysd0QY3U6BYU2dUtDkui6-wtrIZcxA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      setSnackbarMessage("Registration submitted successfully!");
      window.scroll({ top: 0, behavior: "smooth" });
      setSnackbarOpen(true);

      setFormData({
        guardianName: "",
        relationship: "",
        contact: "",
        guardianEmail: "",
        studentName: "",
        studentEmail: "",
        studentAge: "",
        gender: "",
        level: "",
        classType: "Group Session",
        term: "",
        whatsappConsent: "Yes",
      });
      setSelectedSubjects([]);
      setCurrentGrades({});
      setDesiredGrades({});
      {/* Reset receipt upload state after submission
        setReceiptUploaded(false);*/}
    } catch (err) {
      console.error("Submission error:", err);
      setSnackbarMessage("Oops! Something went wrong. Please try again.");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent/Guardian Name"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "#f9f9f9",
                  "& .MuiInputBase-input": { color: "#000" },
                  "& .MuiInputLabel-root": { color: "#000" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ backgroundColor: "#f9f9f9", color: "#000" }}
                >
                  <MenuItem value="" disabled>
                    <em>Relationship to Student</em>
                  </MenuItem>
                  <MenuItem value="Parent">Parent</MenuItem>
                  <MenuItem value="Guardian">Guardian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Primary Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "#f9f9f9",
                  "& .MuiInputBase-input": { color: "#000" },
                  "& .MuiInputLabel-root": { color: "#000" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent/Guardian Email"
                name="guardianEmail"
                type="email"
                value={formData.guardianEmail}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "#f9f9f9",
                  "& .MuiInputBase-input": { color: "#000" },
                  "& .MuiInputLabel-root": { color: "#000" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name of Student"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "#f9f9f9",
                  "& .MuiInputBase-input": { color: "#000" },
                  "& .MuiInputLabel-root": { color: "#000" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Student Email"
                name="studentEmail"
                type="email"
                value={formData.studentEmail}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: "#f9f9f9",
                  "& .MuiInputBase-input": { color: "#000" },
                  "& .MuiInputLabel-root": { color: "#000" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Student Age"
                name="studentAge"
                type="text"
                value={formData.studentAge}
                onChange={handleChange}
                fullWidth
                required
                inputProps={{ inputMode: "numeric", pattern: "\\d*" }}
                sx={{
                  backgroundColor: "#f9f9f9",
                  "& .MuiInputBase-input": { color: "#000" },
                  "& .MuiInputLabel-root": { color: "#000" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ backgroundColor: "#f9f9f9", color: "#000" }}
                >
                  <MenuItem value="" disabled>
                    <em>Student Gender</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" sx={{ mb: 1, color: "#000" }}>
              What is the student's academic level?
            </Typography>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ backgroundColor: "#f9f9f9", color: "#000" }}
                >
                  <MenuItem value="" disabled>
                    <em style={{ color: "#000" }}>Academic Level</em>
                  </MenuItem>
                  <MenuItem value="Form 4">Form 4</MenuItem>
                  <MenuItem value="Form 5">Form 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box>
            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
              Which subjects are you pursuing with the Academy?
            </Typography>

            {subjectsList.map((subject) => (
              <Box key={subject} sx={{ mb: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => handleSubjectToggle(subject)}
                      sx={{ color: "#000", "&.Mui-checked": { color: "#000" } }}
                    />
                  }
                  label={subject}
                />
                {selectedSubjects.includes(subject) && (
                  <>
                    <Typography variant="body1">Current grade in {subject}:</Typography>
                    <Slider
                      value={currentGrades[subject] ?? 0}
                      onChange={(_, val) =>
                        handleSliderChange(subject, val as number, "current")
                      }
                      step={1}
                      min={0}
                      max={100}
                      sx={{
                        mt: 1,
                        mx: "auto",
                        "& .MuiSlider-rail": { height: "8px" },
                        "& .MuiSlider-thumb": { width: "12px", height: "12px" },
                        "& .MuiSlider-track": { height: "8px" },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "right",
                        mt: 1,
                      }}
                    >
                      {currentGrades[subject] ?? 0}%
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Desired grade in {subject}:
                    </Typography>
                    <Slider
                      value={desiredGrades[subject] ?? 0}
                      onChange={(_, val) =>
                        handleSliderChange(subject, val as number, "desired")
                      }
                      step={1}
                      min={0}
                      max={100}
                      sx={{
                        mt: 1,
                        mx: "auto",
                        "& .MuiSlider-rail": { height: "8px" },
                        "& .MuiSlider-thumb": { width: "12px", height: "12px" },
                        "& .MuiSlider-track": { height: "8px" },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "right",
                        mt: 1,
                      }}
                    >
                      {desiredGrades[subject] ?? 0}%
                    </Typography>
                  </>
                )}
              </Box>
            ))}

            {subjectError && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                Please select at least one subject.
              </Typography>
            )}
          </Box>

         <Box>
            <Typography variant="h6" sx={{ mb: 1, color: "#000" }}>
              Class Type
            </Typography>
            <RadioGroup
              name="classType"
              value={formData.classType}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Group Session" control={<Radio sx={{ color: '#000', '&.Mui-checked': { color: '#000' } }} />} label={<span style={{ color: '#000' }}>Group Session</span>} />
              <FormControlLabel value="1-on-1" control={<Radio sx={{ color: '#000', '&.Mui-checked': { color: '#000' } }} />} label={<span style={{ color: '#000' }}>1-on-1</span>} />
            </RadioGroup>
          </Box>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ mb: 1, color: "#000" }}>
              What term are you registering for?
            </Typography>
            <FormControl fullWidth required>
              <Select
                name="term"
                value={formData.term}
                onChange={handleChange}
                displayEmpty
                sx={{ backgroundColor: "#f9f9f9", color: "#000" }}
              >
                <MenuItem value="" disabled>
                  <em style={{ color: "#000" }}>Select Term</em>
                </MenuItem>
                {/*<MenuItem value="Term 1">Term 1 - April to July 2025</MenuItem>*/}
                <MenuItem value="Term 2">Term 2 - July 14th to August 15th 2025</MenuItem>
                <MenuItem value="Term 3">Term 3 - September to December 2025</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Whatsapp Consent (Deprecated)
          <Box>
            <Typography variant="h6" sx={{ mb: 1, color: "#000" }}>
              Would you like us to use your info for WhatsApp groups?
            </Typography>
            <RadioGroup
              name="whatsappConsent"
              value={formData.whatsappConsent}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Yes" control={<Radio sx={{ color: '#000', '&.Mui-checked': { color: '#000' } }} />} label={<span style={{ color: '#000' }}>Yes</span>} />
              <FormControlLabel value="No" control={<Radio sx={{ color: '#000', '&.Mui-checked': { color: '#000' } }} />} label={<span style={{ color: '#000' }}>No</span>} />
            </RadioGroup>
          </Box>
          */}

          {/* Receipt Upload */}
          <Box>
          <ReceiptUpload
            studentName={formData.studentName}
            guardianName={formData.guardianName}
            setReceiptUploaded={setReceiptUploaded}
            />
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
              "&:disabled": {
                border: "3px solid #b0bec5",
                opacity: 0.6,
                cursor: "not-allowed",
          },
            }}
            disabled={loading /*|| !receiptUploaded*/}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#344B9C" }} /> : "Submit Registration"}
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default RegistrationForm;