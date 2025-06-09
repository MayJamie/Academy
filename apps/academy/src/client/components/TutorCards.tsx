import { useRef, useEffect, useState } from "react";
import { Box, Typography, IconButton, Card, CardContent, Modal } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { tutors } from "../../../data/data";

import { CONSTANT } from "shared-lib";
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const cardColors = ["#3A4A72", "#6A4E92", "#4F709C", "#875F9A", "#527A9A"];

const TutorsSection = () => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Carousel fixes were made.
  useEffect(() => {
    const interval = setInterval(() => {
      if (isScrolling && containerRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;

        if (Math.floor(scrollLeft + offsetWidth) >= scrollWidth - 1) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollBy({
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
    <Box className={CLASS_SECTION_ANIMATED_BG} component="section" sx={{ py: 3, textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>
        Tutors
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
          {tutors.map((tutor, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                height: 130,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "0.3s",
                backgroundColor: cardColors[index % cardColors.length],
                opacity: 0.9,
                "&:hover": { boxShadow: 6, opacity: 1 },
                cursor: tutor.image ? "pointer" : "default",
              }}
              onClick={() => tutor.image && setSelectedTutor(tutor)}
            >
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
                    {tutor.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff", opacity: 0.85 }}>
                    {tutor.courses.join(", ")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton onClick={() => scroll("right")}>
          <ArrowForward sx={{ fontSize: 40, color: "#344B9C" }} />
        </IconButton>
      </Box>

      {/* Modal for Tutor Info */}
      {selectedTutor && (
        <Modal open onClose={() => setSelectedTutor(null)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 3,
              maxWidth: 700,
              textAlign: "center",
              borderRadius: "12px",
            }}
          >
            <img
              src={selectedTutor.image}
              alt={selectedTutor.name}
              style={{ width: "100%", borderRadius: "8px", cursor: "pointer" }}
              onClick={() => setFullscreenImage(selectedTutor.image)}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {selectedTutor.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
              Courses:
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {selectedTutor.courses.join(", ")}
            </Typography>
          </Box>
        </Modal>
      )}

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
              alt="Fullscreen"
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "12px" }}
            />
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default TutorsSection;
