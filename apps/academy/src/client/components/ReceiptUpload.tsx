import React, { useState, useRef } from "react";
import { Typography, Button, Snackbar, Alert } from "@mui/material";

interface ReceiptUploadProps {
  studentName: string;
  guardianName: string;
  setReceiptUploaded: React.Dispatch<React.SetStateAction<boolean>>; // Accept setReceiptUploaded as a prop
}

const ReceiptUpload: React.FC<ReceiptUploadProps> = ({ studentName, guardianName, setReceiptUploaded }) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Added ref to reset input

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "info",
  });

  const showSnackbar = (message: string, severity: "success" | "error" | "info") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file || !guardianName.trim() || !studentName.trim()) {
      showSnackbar("Please fill in all fields and select a file.", "error");
      return;
    }

    showSnackbar("Uploading...", "info");

    try {
      const reader = new FileReader();

      reader.onload = async () => {
        const base64 = (reader.result as string).split(",")[1];
        const cleanedGuardian = guardianName.trim().replace(/\s+/g, "");
        const cleanedStudent = studentName.trim().replace(/\s+/g, "");
        const finalName = `${cleanedGuardian}_${cleanedStudent}_Receipt`;

        const formData = new FormData();
        formData.append("file", base64);
        formData.append("name", finalName);
        formData.append("mimeType", file.type);

        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbwT2DhlLC8EScxViKnpLfVP6mLNTaMOauRXlQqVRB0MtW0ShMAr6nOILkI1DMQ3AElJ/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        if (data.success) {
          showSnackbar("Upload complete!", "success");
          setReceiptUploaded(true);
          setFile(null); // Clear state
          if (fileInputRef.current) fileInputRef.current.value = ""; // Clear actual input
        } else {
          showSnackbar(`Upload failed: ${data.error}`, "error");
          console.error("Upload error:", data.error);
        }
      };

      reader.onerror = () => {
        showSnackbar("Failed to read the file.", "error");
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Upload error:", error);
      showSnackbar("An unexpected error occurred.", "error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
        Upload Payment Receipt (Optional)
      </Typography>
      <Typography variant="body" sx={{ marginBottom: "0.5rem", color: "grey" }}>
        You can upload your receipt now or later.
      </Typography>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{
          padding: "10px 20px",
          fontSize: "1.5rem",
          borderRadius: "50px",
          border: "3px solid grey",
          color: "black",
          backgroundColor: "transparent",
          marginBottom: "1rem",
          transition: "0.3s ease-in-out",
          cursor: "pointer",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
        }}
        accept="image/*,application/pdf"
      />

      <Button
        onClick={handleUpload}
        variant="contained"
        sx={{
          border: "3px solid #344B9C",
          color: "#344B9C",
          backgroundColor: "transparent",
          borderRadius: "50px",
          padding: "10px 20px",
          fontSize: "1.5rem",
          fontWeight: 600,
          transition: "0.3s ease-in-out",
          alignSelf: "center",
          textTransform: "none",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          marginLeft: "1rem",

          "&:hover": {
            backgroundColor: "#344B9C",
            color: "#FFFFFF",
          },
          "&:disabled": {
            border: "3px solid #b0bec5",
            opacity: 0.6,
            cursor: "not-allowed",
          },
          "&:active": {
            opacity: 0.7,
            transform: "scale(0.98)",
          },
        }}
        disabled={!file}
      >
        Upload
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ReceiptUpload;