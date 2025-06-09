import { useRef, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Modal,
  Link,
} from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import { articles, videos } from "../../../data/data";
import { CONSTANT } from "shared-lib";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;
const cardColors = ["#3A4A72", "#6A4E92", "#5B7DB1", "#A685C6", "#78A1E1"];

const isGoogleDriveLink = (url) => url.includes("drive.google.com");
const isYouTubeLink = (url) => url.includes("youtube.com/watch") || url.includes("youtu.be");
const getYouTubeEmbedUrl = (url) => {
  const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const ArticlesAndVideosSection = () => {
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

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
    <Box className={CLASS_SECTION_ANIMATED_BG} component="section" sx={{ textAlign: "center" }}>
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
          {/* Articles */}
          {articles.map((article, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "0.3s",
                backgroundColor: cardColors[index % cardColors.length],
                opacity: 0.85,
                "&:hover": { boxShadow: 6, opacity: 1 },
                cursor: "pointer",
              }}
              onClick={() => setSelectedItem({ type: "article", data: article })}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
                  {article.title}
                </Typography>
              </CardContent>
            </Card>
          ))}

          {/* Videos */}
          {videos.map((video, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "0.3s",
                backgroundColor: cardColors[(index + 1) % cardColors.length],
                opacity: 0.85,
                "&:hover": { boxShadow: 6, opacity: 1 },
                cursor: "pointer",
              }}
              onClick={() => setSelectedItem({ type: "video", data: video })}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton onClick={() => scroll("right")}>
          <ArrowForward sx={{ fontSize: 40, color: "#344B9C" }} />
        </IconButton>
      </Box>

      {/* Modal */}
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
              width: "90%",
              textAlign: "center",
              borderRadius: "12px",
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            {selectedItem.type === "video" && selectedItem.data.src && (
              <Box sx={{ mb: 2 }}>
                {isGoogleDriveLink(selectedItem.data.src) || isYouTubeLink(selectedItem.data.src) ? (
                  <iframe
                    src={
                      isYouTubeLink(selectedItem.data.src)
                        ? getYouTubeEmbedUrl(selectedItem.data.src)
                        : selectedItem.data.src
                    }
                    width="100%"
                    height="315"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ borderRadius: "8px", border: "none" }}
                  ></iframe>
                ) : (
                  <video
                    controls
                    autoPlay
                    src={selectedItem.data.src}
                    type={selectedItem.data.type}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </Box>
            )}

            {selectedItem.type === "article" && selectedItem.data.image && (
              <img
                src={selectedItem.data.image}
                alt={selectedItem.data.title}
                style={{ width: "80%", height: "auto", borderRadius: "8px" }}
              />
            )}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {selectedItem.data.title}
            </Typography>

            {selectedItem.type === "article" && (
              <>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                  Description:
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {selectedItem.data.description}
                </Typography>
                {selectedItem.data.link && (
                  <Box sx={{ mt: 2 }}>
                    <Link href={selectedItem.data.link} target="_blank" rel="noopener noreferrer">
                      <Typography
                        sx={{
                          color: "#6A3ECF",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Learn More
                      </Typography>
                    </Link>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default ArticlesAndVideosSection;
