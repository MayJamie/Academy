import { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { adverts } from "../../../data/data";

const AdSection = () => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <Box sx={{ py: 2, px: 1, textAlign: "center" }}>
      {adverts.map((ad, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            my: 2,
            cursor: "pointer",
            borderRadius: "12px",
            overflow: "hidden",
            transition: "box-shadow 0.3s",
            boxShadow: 2,
            "&:hover": {
              boxShadow: 5,
            },
          }}
          onClick={() => setSelectedAd(ad)}
        >
          <img
            src={ad.bannerimage}
            alt={ad.title}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </Box>
      ))}

      {/* Modal for full ad details */}
      {selectedAd && (
        <Modal open onClose={() => setSelectedAd(null)}>
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
              src={selectedAd.image}
              alt={selectedAd.title}
              style={{ width: "80%", borderRadius: "8px", cursor: "pointer" }}
              onClick={() => setFullscreenImage(selectedAd.image)}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {selectedAd.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {selectedAd.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <a href={selectedAd.link} target="_blank" rel="noopener noreferrer">
                <Typography
                  sx={{
                    color: "#6A3ECF",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Register Now
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
              alt="Fullscreen Ad"
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "8px" }}
            />
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default AdSection;