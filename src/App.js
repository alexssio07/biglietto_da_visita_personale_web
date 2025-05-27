import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  TextField,
  Paper,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaLink,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";
import profileImage from "./assets/Immagine_profilo.jpg";

// Professionalità che cambiano
const professions = [
  "Full Stack Developer",
  "Python Programmer",
  "3D Printing Creator",
  "Content Creator",
  "Discord Community Manager",
];

// Progetti di esempio - sostituisci con i tuoi
const projects = [
  {
    id: 1,
    title: "Discord Bot",
    description:
      "Un bot Discord personalizzato sviluppato in Python con funzionalità avanzate per la gestione della community.",
    image:
      "https://github.com/alexssio07/ervongola-bot-discord/raw/main/immagine_profilo.jpg",
    technologies: [
      "Python 3.10.2",
      "Discord.py",
      "dotenv",
      "ollama",
      "json",
      "streamlit",
      "nest_asyncio",
      "logging",
      "yt-dlp",
      "asyncio",
      "gTTS",
      "SmartScraperGraph",
    ],
    link: "https://github.com/alexssio07/ervongola-bot-discord",
  },
  {
    id: 2,
    title: "Portfolio Personale",
    description:
      "Un portfolio personale sviluppato con React e Material UI per mostrare i miei progetti e competenze.",
    image: "./assets/anteprima_sito_web.png",
    technologies: [
      "React",
      "Material UI",
      "JavaScript",
      "react-icons",
      "CSS",
      "HTML",
    ],
    link: "https://github.com/alexssio07/biglietto_da_visita_personale_web",
  },
  // {
  //   id: 3,
  //   title: "Modelli 3D",
  //   description:
  //     "Una collezione di modelli 3D progettati e stampati con la mia Anycubic Kobra S1.",
  //   image: "https://via.placeholder.com/300x200",
  //   technologies: ["Blender", "Fusion 360", "3D Printing"],
  //   link: "https://github.com/yourusername/3d-models",
  // },
];

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeSection, setActiveSection] = useState("home");
  const [professionIndex, setProfessionIndex] = useState(0);

  // Effetto per cambiare professione ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Effetto per rilevare lo scroll e cambiare sezione attiva
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection("home");
      } else if (scrollPosition < windowHeight * 1.5) {
        setActiveSection("about");
      } else if (scrollPosition < windowHeight * 2.5) {
        setActiveSection("projects");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per scorrere alla sezione
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
  };

  return (
    <Box sx={{ bgcolor: "#121212", color: "white", minHeight: "100vh" }}>
      {/* Menu di navigazione */}
      <AppBar
        position="fixed"
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#90caf9" }}
          >
            Portfolio
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              color={activeSection === "home" ? "primary" : "inherit"}
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <Button
              color={activeSection === "about" ? "primary" : "inherit"}
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              color={activeSection === "projects" ? "primary" : "inherit"}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
            <Button
              color={activeSection === "contact" ? "primary" : "inherit"}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sezione Home */}
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          maxWidth: "100vw",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(to right, #121212 60%, #1e3c72 100%)",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "90%",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item lg={12} xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h6" sx={{ color: "#90caf9", mb: 2 }}>
                  Ciao, sono
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
                  Alessio Chiocchetti
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Typography variant="h4" sx={{ mr: 1 }}>
                    E sono un
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#00e5ff",
                      fontWeight: "bold",
                      minWidth: "500px",
                    }}
                  >
                    {professions[professionIndex]}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, maxWidth: "600px", fontSize: "larger" }}
                >
                  A volte sono un frontend e a volte sono un backend
                  developer... Mi appassionano la tecnologia, i videogiochi e la
                  stampa 3D e tantissime altre cose. Creo contenuti tecnici e
                  gestisco una community (server) Discord.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                  <IconButton
                    component="a"
                    href="https://www.youtube.com/c/Alexssio"
                    target="_blank"
                    sx={{ color: "#ea4335" }}
                  >
                    <FaYoutube />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://instagram.com/alexssio_23"
                    target="_blank"
                    sx={{ color: "#DD2A7B" }}
                  >
                    <FaInstagram />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://tiktok.com/@alexssio_23"
                    sx={{ color: "white" }}
                  >
                    <FaTiktok />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://discord.com/invite/wJyppMNBUe"
                    sx={{ color: "#7289da" }}
                  >
                    <FaDiscord />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://t.me/alexssio_23"
                    sx={{ color: "#24A1DE" }}
                  >
                    <FaTelegram />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.threads.com/@alexssio_23"
                    sx={{ color: "white" }}
                  >
                    <FaLink />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://x.com/alexssio23"
                    sx={{ color: "white" }}
                  >
                    <FaTwitter />
                  </IconButton>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: 999,
                    px: 4,
                    py: 1,
                    background: "linear-gradient(45deg, #00e5ff, #2979ff)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #2979ff, #00e5ff)",
                    },
                  }}
                  onClick={() => scrollToSection("about")}
                >
                  Dettagli
                </Button>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="profile_image"
                sx={{
                  width: "100%",
                  maxWidth: "1080px",
                  height: "800px", // 9:16 aspect ratio based on width
                  objectFit: "cover",
                  borderRadius: "16px",
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                  border: "4px solid #00e5ff",
                  boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sezione About */}
      <Box
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 1,
          background: "linear-gradient(to bottom, #121212, #1a237e)",
          // backgroundImage: "url(/src/assets/WallpaperSite1.png)",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 6,
                textAlign: "center",
                color: "#90caf9",
              }}
            >
              Chi Sono
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 3, color: "#00e5ff" }}>
                  La Mia Storia
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: "22px", textAlign: "justify" }}
                >
                  Come sviluppatore full stack, mi dedico alla creazione di
                  applicazioni web e mobile innovative e scalabili. La mia
                  passione per la tecnologia ha radici profonde: tutto è
                  iniziato quando, a soli 4 anni, incontrai il mio primo
                  computer. Quella curiosità infantile di esplorare ogni tasto
                  della tastiera si è trasformata in una vera vocazione
                  professionale, guidandomi verso una carriera nel mondo
                  dell'informatico programmatore.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: "22px", textAlign: "justify" }}
                >
                  Mi appassiona particolarmente costruire progetti da zero: che
                  siano bot, programmi, software, siti web o videogiochi, amo
                  partire dalle fondamenta e sviluppare soluzioni personalizzate
                  per esigenze specifiche. Questa passione per costruire e
                  creare si estende ben oltre l'informatica: sono un entusiasta
                  della stampa 3D e mi diverto a progettare e realizzare modelli
                  personalizzati con la mia stampante Anycubic Kobra S1 Combo.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: "22px", textAlign: "justify" }}
                >
                  Un esempio concreto della mia passione per la creazione è il
                  sistema integrato che ho sviluppato per la mia community:
                  unisce Discord e Telegram attraverso bot personalizzati,
                  offrendo un'esperienza interattiva unica con sintesi vocale e
                  notifiche automatiche tra le piattaforme. Il bot Discord è in
                  esecuzione 24/7 sul mio Raspberry Pi 4, dove ho installato
                  CasaOS, un sistema operativo che mi permette di gestire
                  container Docker per ospitare diverse applicazioni, incluso il
                  bot stesso. Nel mio tempo libero, oltre a mantenere attivi i
                  miei progetti su GitHub, gestisco una piccola e simpatica
                  community Discord.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: "22px", textAlign: "justify" }}
                >
                  Sono costantemente ispirato da nuove idee per progetti
                  innovativi, anche se non sempre riesco a portarli tutti a
                  termine. Uno dei miei più grandi sogni è pubblicare un
                  prodotto tutto mio, in particolare un videogioco per il quale
                  ho già sviluppato una dettagliata documentazione di design.
                  Purtroppo, data la complessità del progetto e i limiti di
                  tempo, non sono ancora riuscito a realizzarlo completamente,
                  ma resta uno dei miei obiettivi principali.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 3, color: "#00e5ff" }}>
                  Le Mie Competenze
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                  {[
                    "React",
                    "Node.js",
                    "Python",
                    "JavaScript",
                    "HTML/CSS",
                    "Material UI",
                    "MongoDB",
                    "SQL",
                    "MS SQL",
                    "Git",
                    "Docker",
                    "C#",
                    ".Net Core",
                    ".Net Framework",
                    "3D Printing",
                    "Content Creation",
                    "Video Maker",
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: "rgba(0, 229, 255, 0.1)",
                        color: "white",
                        mb: 1,
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", textAlign: "justify" }}
                >
                  Sono sempre alla ricerca di nuove tecnologie da imparare e
                  nuovi progetti stimolanti su cui lavorare. La mia filosofia è
                  che l'apprendimento continuo sia la chiave per rimanere
                  rilevanti in un campo in rapida evoluzione come quello
                  tecnologico.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Sezione Projects */}
      <Box
        id="projects"
        sx={{
          minHeight: "100vh",
          py: 10,
          background: "linear-gradient(to bottom, #1a237e, #121212)",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 6,
                textAlign: "center",
                color: "#90caf9",
              }}
            >
              I Miei Progetti
            </Typography>

            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} key={project.id}>
                  <Card
                    component={motion.div}
                    whileHover={{ scale: 1.02 }}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: "100%", md: 300 },
                        height: { xs: 200, md: "auto" },
                      }}
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flex: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", mb: 1, color: "#00e5ff" }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: "rgba(0, 229, 255, 0.1)",
                              color: "white",
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant="outlined"
                        component="a"
                        href={project.link}
                        target="_blank"
                        sx={{
                          color: "#00e5ff",
                          borderColor: "#00e5ff",
                          "&:hover": {
                            borderColor: "#00e5ff",
                            bgcolor: "rgba(0, 229, 255, 0.1)",
                          },
                        }}
                      >
                        Vedi su GitHub
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Sezione Contact */}
      <Box
        id="contact"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 10,
          background: "linear-gradient(to bottom, #121212, #1e3c72)",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 6,
                textAlign: "center",
                color: "#90caf9",
              }}
            >
              Contattami
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={8} lg={6}>
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, color: "#00e5ff", textAlign: "center" }}
                  >
                    Hai un progetto in mente?
                  </Typography>

                  <Box sx={{ mb: 4, textAlign: "center", color: "white" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Email: alessio.chiocchetti@gmail.com
                    </Typography>
                    <Typography variant="body1">
                      LinkedIn: linkedin.com/in/alessio-chiocchetti
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<FaEnvelope />}
                      href="mailto:alessio.chiocchetti@gmail.com"
                      sx={{
                        py: 1.5,
                        background: "linear-gradient(45deg, #00e5ff, #2979ff)",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #2979ff, #00e5ff)",
                        },
                      }}
                    >
                      Contattami via Email
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={<FaLinkedin />}
                      href="https://linkedin.com/in/alessio-chiocchetti-283777b7"
                      target="_blank"
                      sx={{
                        py: 1.5,
                        bgcolor: "#0e76a8",
                        "&:hover": {
                          bgcolor: "#0a5a7f",
                        },
                      }}
                    >
                      Contattami su LinkedIn
                    </Button>

                    <Button
                      variant="outlined"
                      href="/cv.pdf"
                      target="_blank"
                      sx={{
                        py: 1.5,
                        color: "#90caf9",
                        borderColor: "#90caf9",
                        "&:hover": {
                          borderColor: "#90caf9",
                          bgcolor: "rgba(144, 202, 249, 0.1)",
                        },
                      }}
                    >
                      Visualizza CV
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
