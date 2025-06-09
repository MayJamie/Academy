import { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { CONSTANT } from "shared-lib";

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const Chatbot = () => {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const sessionId = Math.random().toString(36).substr(2, 9);

    const formatResponse = (response) => {
        let formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedResponse = formattedResponse.replace(
            /(\d+\.\s)([^\n]+)/g,
            '<li>$2</li>'
        );
        formattedResponse = formattedResponse.replace(/<li>/g, '<ul><li>')
                                             .replace(/<\/li>/g, '</li></ul>');
        if (formattedResponse.includes('<ul><ul>')) {
            formattedResponse = formattedResponse.replace('<ul><ul>', '<ul>')
                                                 .replace('</ul></ul>', '</ul>');
        }
        return formattedResponse;
    };

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(
                `https://rag-api-g3zo.onrender.com/query?query=${encodeURIComponent(input)}&session_id=${sessionId}`,
                { method: "GET", headers: { "Content-Type": "application/json" } }
            );

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            const formattedResponse = formatResponse(data.generated_response);
            setMessages((prev) => [...prev, { role: "bot", content: formattedResponse }]);
        } catch (error) {
            console.error("Fetch error:", error);
            setMessages((prev) => [...prev, { role: "bot", content: "Error fetching response. Try again." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <Box
            className={CLASS_SECTION_ANIMATED_BG}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "60vh",
                p: 3,
            }}
        >
            <Box sx={{ mb: 3 }}>
                <Typography
                    gutterBottom
                    maxWidth="clamp(5ch, 100%, 20ch)"
                    sx={{
                        fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
                        color: "black.main",
                        mx: "auto",
                    }}
                    variant="h1"
                >
                    MindelvGPT
                </Typography>
                <Typography
                    color="black.main"
                    gutterBottom
                    maxWidth="clamp(10ch, 100%, 60ch)"
                    sx={{ mx: "auto" }}
                    variant="body1"
                >
                    Chat with our AI mentor for guidance on your career journey!
                </Typography>
            </Box>

            <Box
                sx={{
                    maxWidth: 1000,
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        border: "1px solid #ddd",
                        p: 2,
                        minHeight: 400,
                        overflowY: "auto",
                        textAlign: "left",
                        borderRadius: 2,
                        bgcolor: "white",
                        maxHeight: "60vh",
                        flexGrow: 1,
                    }}
                >
                    {messages.map((msg, index) => (
                        <Box
                            key={index}
                            sx={{
                                p: 1,
                                my: 1,
                                borderRadius: 2,
                                bgcolor: msg.role === "user" ? "primary.main" : "grey.300",
                                color: msg.role === "user" ? "white.main" : "black.main",
                                textAlign: msg.role === "user" ? "right" : "left",
                            }}
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: msg.content }}
                            />
                        </Box>
                    ))}
                    {loading && (
                        <Box sx={{ textAlign: "center", mt: 1 }}>
                            <CircularProgress size={24} />
                        </Box>
                    )}
                </Box>

                <TextField
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                    disabled={loading}
                    sx={{
                        borderRadius: "20px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                        },
                        height: "auto",
                        minHeight: "60px",
                    }}
                />
                <Button
                    onClick={sendMessage}
                    disabled={loading}
                    variant="contained"
                    sx={{
                        mt: 2,
                        border: "3px solid #344B9C",
                        color: "#344B9C",
                        backgroundColor: "transparent",
                        borderRadius: "50px",
                        padding: "10px 24px",
                        fontSize: "1.6rem",
                        fontWeight: 600,
                        transition: "0.3s ease-in-out",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#344B9C",
                            color: "#FFFFFF",
                        },
                        "&:active": {
                            opacity: 0.7,
                            transform: "scale(0.98)",
                        },
                        "@media (max-width:600px)": {
                            transform: "scale(0.85)",
                        },
                        "@media (min-width:600px) and (max-width:960px)": {
                            transform: "scale(0.95)",
                        },
                        "@media (min-width:960px)": {
                            transform: "scale(1)",
                        },
                    }}
                >
                    {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Send"}
                </Button>
            </Box>
        </Box>
    );
};

export default Chatbot;