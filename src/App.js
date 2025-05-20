import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Paper,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaLinkedin,
  FaTelegram,
  FaAmazon,
  FaPaypal,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path/to/cv.pdf";
    link.download = "Alessio_Chiocchetti_CV.pdf";
    link.click();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #1e3c72, #2a5298)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%" }}
      >
        <Paper
          elevation={10}
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
            borderRadius: 6,
            maxWidth: { xs: "95%", sm: "85%", md: 1000 },
            margin: "0 auto",
            width: "100%",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Sezione Professionale */}
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              color: "#90caf9",
              fontWeight: "bold",
              mb: 4,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Alessio Chiocchetti
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              color: "#bbdefb",
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            }}
          >
            Full stack developer
          </Typography>

          <Box textAlign="center" mt={3} mb={4}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 999,
                px: 4,
                mx: 2,
                background: "linear-gradient(45deg, #1e88e5, #42a5f5)",
                "&:hover": {
                  background: "linear-gradient(45deg, #42a5f5, #1e88e5)",
                },
              }}
              href="https://www.linkedin.com/in/tuo-linkedin" // Modifica con il tuo
              target="_blank"
            >
              Contattami su LinkedIn
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 999,
                px: 4,
                mx: 2,
                color: "#90caf9",
                borderColor: "#90caf9",
                "&:hover": {
                  backgroundColor: "rgba(144,202,249,0.1)",
                },
              }}
              href="/cv.pdf"
              download
            >
              Scarica CV
            </Button>
          </Box>

          <Divider sx={{ borderColor: "#90caf9", my: 4 }} />

          {/* Sezione Social / Hobby */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              color: "#90caf9",
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
            }}
          >
            Alexssio
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              color: "#bbdefb",
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            }}
          >
            Programmatore | Tech lover | Creatore di contenuti
          </Typography>
          <Stack
            spacing={4}
            sx={{
              color: "#e3f2fd",
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
              mt: 5,
            }}
          >
            <Typography>
              🎮 Gestisco una{" "}
              <strong>
                <a
                  href="https://discord.com"
                  target="_blank"
                  style={{ color: "#7289da", textDecoration: "none" }}
                >
                  community Discord
                </a>
              </strong>{" "}
              dove le persone si incontrano per chiacchierare e giocare insieme.
              Ho sviluppato un potente bot in{" "}
              <strong>
                <a
                  href="https://github.com/yourusername/discord-bot"
                  target="_blank"
                  style={{ color: "#7289da", textDecoration: "none" }}
                >
                  Python
                </a>
              </strong>{" "}
              che offre numerose funzionalità per la gestione della community.
            </Typography>
            <Typography>
              🖨️ Stampo e creo oggetti e modelli 3D con la mia stampante{" "}
              <strong>Anycubic Kobra S1</strong>, anche su richiesta privata.
            </Typography>
            <Typography>
              🧠 Mi appassionano la tecnologia, i videogiochi e lo sviluppo
              software.
            </Typography>
            <Typography>
              🎥 Creo video tecnici e tutorial su{" "}
              <strong>
                <a
                  href="https://www.youtube.com/channel/UC2v3a2DioHiFZlTey3kHLSg"
                  target="_blank"
                  style={{ color: "#ff0000", textDecoration: "none" }}
                >
                  YouTube
                </a>
              </strong>
              , concentrandomi su programmazione, stampa 3D e innovazione
              tecnologica.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ mt: 5, flexWrap: "wrap", gap: 3 }}
          >
            <IconButton
              component="a"
              href="https://youtube.com"
              target="_blank"
              sx={{ color: "#ff0000", transform: "scale(1.5)" }}
            >
              <FaYoutube />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "#e1306c", transform: "scale(1.5)" }}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://tiktok.com"
              target="_blank"
              sx={{ color: "#fff", transform: "scale(1.5)" }}
            >
              <FaTiktok />
            </IconButton>
            <IconButton
              component="a"
              href="https://discord.com"
              target="_blank"
              sx={{ color: "#7289da", transform: "scale(1.5)" }}
            >
              <FaDiscord />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "#0e76a8", transform: "scale(1.5)" }}
            >
              <FaLinkedin />
            </IconButton>
            <IconButton
              component="a"
              href="https://t.me/alexssio"
              target="_blank"
              sx={{ color: "#0088cc", transform: "scale(1.5)" }}
            >
              <FaTelegram />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.amazon.it/hz/wishlist/ls/3SJQ7KJ0V3Q6E"
              target="_blank"
              sx={{ color: "#ff9900", transform: "scale(1.5)" }}
            >
              <FaAmazon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
              target="_blank"
              sx={{ color: "#003087", transform: "scale(1.5)" }}
            >
              <FaPaypal />
            </IconButton>
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default App;
