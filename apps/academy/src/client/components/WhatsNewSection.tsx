import { useRef, useState } from "react";
import { Box, Typography, IconButton, Card, CardContent, Modal } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { events } from "../../../data/data";

import { CONSTANT } from "shared-lib";
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const cardColors = ["#5B7DB1", "#A685C6", "#78A1E1", "#C49ED7", "#88C0E0"];

const WhatsNewSection = () => {
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

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
    <Box className={CLASS_SECTION_ANIMATED_BG} component="section" sx={{textAlign: "center", pb: 2}}>
      <Typography variant="h2" gutterBottom fontSize={{ xs: "2.3rem", sm: "2.5rem", md: "3rem" }}>
        What's New
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
          {events.map((event, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                height: "auto",
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "0.3s",
                backgroundColor: cardColors[index % cardColors.length],
                opacity: 0.85,
                "&:hover": { boxShadow: 6, opacity: 1 },
                cursor: "pointer",
              }}
              onClick={() => setSelectedItem(event)}
            >
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff", opacity: 0.85 }}>
                    {event.date} at {event.time}
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

      {/* Modal for Event Details */}
      {selectedItem && (
        <Modal open onClose={() => setSelectedItem(null)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 3,
              maxWidth: 600,
              textAlign: "center",
              borderRadius: "12px",
            }}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{ width: "65%", height: "auto", borderRadius: "8px", cursor: "pointer" }}
              onClick={() => setFullscreenImage(selectedItem.image)}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {selectedItem.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
              Description:
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {selectedItem.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
              Date and Time: {selectedItem.date} at {selectedItem.time}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                <Typography
                  sx={{
                    color: "#6A3ECF",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Access Here
                </Typography>
              </a>
            </Box>
          </Box>
        </Modal>
      )}

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <Modal open onClose={() => setFullscreenImage(null)}>
          <Box
            onClick={() => setFullscreenImage(null)}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              bgcolor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen Preview"
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "8px" }}
            />
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default WhatsNewSection;