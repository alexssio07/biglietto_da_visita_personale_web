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
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaLink,
  FaTwitter,
  FaDiscord,
  FaFlagUsa,
  FaFlag,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";
import profileImage from "./assets/Immagine_profilo.jpg";
import portfolioImage from "./assets/anteprima_sito_web.png";
import cv from "./assets/CV.pdf";
import { useTranslation } from "react-i18next";

// Professionalità che cambiano
const professions = [
  "Full Stack Developer",
  "Back-end Developer",
  "Front-end Developer",
  "Videogame Developer",
  "3D Printing Creator",
  "Content Creator",
  "Discord Community Manager",
];

// Progetti di esempio - sostituisci con i tuoi
const projects = [
  {
    id: 1,
    title: "Er Vongola Bot",
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
    title: "Sito web Personale",
    description:
      "Un portfolio personale sviluppato con React e Material UI per mostrare i miei progetti e competenze.",
    image: portfolioImage,
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

// Progetti 3D - sostituisci con i tuoi modelli 3D reali
const projects3D = [
  {
    id: 1,
    title: "Supporto per Smartphone",
    description:
      "Un supporto ergonomico per smartphone stampato in 3D, progettato per mantenere il telefono ad un'angolazione ottimale durante le videochiamate o mentre si guardano video.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["PLA", "Anycubic Kobra S1", "Fusion 360"],
    link: "#",
  },
  {
    id: 2,
    title: "Organizzatore Scrivania",
    description:
      "Sistema modulare di organizzazione per scrivania con scomparti per penne, matite e altri accessori da ufficio. Personalizzabile in base alle esigenze specifiche.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["PETG", "Anycubic Kobra S1", "Blender"],
    link: "#",
  },
  {
    id: 3,
    title: "Vaso Geometrico",
    description:
      "Vaso decorativo con pattern geometrico complesso, impossibile da realizzare con metodi tradizionali. Perfetto per piante grasse e piccoli arbusti.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["PLA", "Anycubic Kobra S1", "Tinkercad"],
    link: "#",
  },
];

// Aggiungi questo array di immagini dopo gli altri array di progetti
const galleryImages = [
  {
    id: 1,
    title: "Progetto 1",
    image: "https://via.placeholder.com/600x400",
    description: "Descrizione breve del progetto 1",
  },
  {
    id: 2,
    title: "Progetto 2",
    image: "https://via.placeholder.com/600x400",
    description: "Descrizione breve del progetto 2",
  },
  {
    id: 3,
    title: "Progetto 3",
    image: "https://via.placeholder.com/600x400",
    description: "Descrizione breve del progetto 3",
  },
  {
    id: 4,
    title: "Progetto 4",
    image: "https://via.placeholder.com/600x400",
    description: "Descrizione breve del progetto 4",
  },
  {
    id: 5,
    title: "Progetto 5",
    image: "https://via.placeholder.com/600x400",
    description: "Descrizione breve del progetto 5",
  },
  {
    id: 6,
    title: "Progetto 6",
    image: "https://via.placeholder.com/600x400",
    description: "Descrizione breve del progetto 6",
  },
];

function App() {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [professionIndex, setProfessionIndex] = useState(0);

  const { t, i18n } = useTranslation();

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
      } else if (scrollPosition < windowHeight * 3.5) {
        setActiveSection("projects3d");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione personalizzata per l'effetto di digitazione
  const useTypewriter = (text, speed = 800) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);

    return displayText;
  };

  // Nuovo componente per l'effetto di digitazione - si può utilizzare come <Typewriter text="Testo da digitare" speed={100} /> */}
  const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
    return <>{displayText}</>;
  };
  // Riferimento per lo scroller della galleria
  const galleryScrollRef = React.useRef(null);
  // Funzione per scorrere alla sezione
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
  };
  // Funzione per scorrere la galleria a sinistra
  const scrollGalleryLeft = () => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  // Funzione per scorrere la galleria a destra
  const scrollGalleryRight = () => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ bgcolor: "#121212", color: "white", minHeight: "100vh" }}>
      {/* Menu di navigazione */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: { xs: "rgba(18, 18, 18, 0.9)", sm: "transparent" },
          boxShadow: "none",
          backdropFilter: { xs: "blur(10px)", sm: "none" },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            py: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#90caf9" }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              onClick={() => i18n.changeLanguage("en")}
              sx={{ color: i18n.language === "en" ? "#90caf9" : "white" }}
              aria-label="English"
            >
              <FaFlagUsa />
              EN
            </IconButton>
            <IconButton
              onClick={() => i18n.changeLanguage("it")}
              sx={{ color: i18n.language === "it" ? "#90caf9" : "white" }}
              aria-label="Italian"
            >
              <FaFlag />
              IT
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2, md: 3 },
              flexWrap: { xs: "nowrap", sm: "nowrap" },
              justifyContent: "space-between",
            }}
          >
            <Button
              color={activeSection === "home" ? "primary" : "inherit"}
              onClick={() => scrollToSection("home")}
              sx={{ fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
            >
              {t("menu.home")}
            </Button>
            <Button
              color={activeSection === "about" ? "primary" : "inherit"}
              onClick={() => scrollToSection("about")}
              sx={{ fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
            >
              {t("menu.about")}
            </Button>
            <Button
              color={activeSection === "projects" ? "primary" : "inherit"}
              onClick={() => scrollToSection("projects")}
              sx={{ fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
            >
              {t("menu.projects")}
            </Button>
            <Button
              color={activeSection === "projects3d" ? "primary" : "inherit"}
              onClick={() => scrollToSection("projects3d")}
              sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
            >
              {t("menu.projects3d")}
            </Button>
            <Button
              color={activeSection === "contact" ? "primary" : "inherit"}
              onClick={() => scrollToSection("contact")}
              sx={{ fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
            >
              {t("menu.contact")}
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
            width: { lg: "100%", md: "100%", sm: "100%", xs: "auto" },
            maxWidth: "100%",
            height: "100%",
            px: { xs: 4, sm: 1, md: 3, lg: 6 },
            mt: { xs: 15, sm: 2, md: 3, lg: 4 },
            py: { xs: 4, sm: 1, md: 3, lg: 3 },
            mx: { lg: "auto" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap", lg: "nowrap" },
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              px: { lg: 8 },
              mt: { lg: 6 },
              width: "100%",
            }}
          >
            <Grid item lg={12} xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#90caf9", mb: 2, height: "40px" }}
                >
                  <Typewriter text={t("home.text_typing")} speed={160} />
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    fontSize: {
                      lg: "60px",
                      md: "52px",
                      sm: "45px",
                      xs: "38px",
                    },
                  }}
                >
                  Alessio Chiocchetti
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      mr: 1,
                      fontSize: {
                        lg: "39px",
                        md: "30px",
                        sm: "23px",
                        xs: "20px",
                      },
                    }}
                  >
                    {t("home.description")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#00e5ff",
                      fontWeight: "bold",
                      minWidth: "100px",
                      fontSize: {
                        lg: "39px",
                        md: "30px",
                        sm: "23px",
                        xs: "22px",
                      },
                    }}
                  >
                    {professions[professionIndex]}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, maxWidth: "600px", fontSize: "larger" }}
                >
                  {t("home.header")}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 4, width: "100%" }}>
                  <IconButton
                    component="a"
                    href="https://www.youtube.com/c/Alexssio"
                    target="_blank"
                    sx={{
                      color: "#ea4335",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
                  >
                    <FaYoutube />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://instagram.com/alexssio_23"
                    target="_blank"
                    sx={{
                      color: "#DD2A7B",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
                  >
                    <FaInstagram />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://tiktok.com/@alexssio_23"
                    sx={{
                      color: "white",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
                  >
                    <FaTiktok />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://discord.com/invite/wJyppMNBUe"
                    sx={{
                      color: "#7289da",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
                  >
                    <FaDiscord />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://t.me/alexssio_23"
                    sx={{
                      color: "#24A1DE",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
                  >
                    <FaTelegram />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.threads.com/@alexssio_23"
                    sx={{
                      color: "white",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
                  >
                    <FaLink />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://x.com/alexssio23"
                    sx={{
                      color: "white",
                      fontSize: {
                        lg: "46px",
                        md: "38px",
                        sm: "32px",
                        xs: "28px",
                      },
                    }}
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
                  {t("home.detail_text_button")}
                </Button>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "block", md: "block" } }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="profile_image"
                sx={{
                  width: "100%",
                  maxWidth: "1080px",
                  height: "auto", // 9:16 aspect ratio based on width
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
          // backgroundImage:
          //   "url(/src/assets/Wallpaper_portfolio_stilizzato.png)",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Container sx={{ mt: { lg: 6, md: 3, xs: 1 } }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                textAlign: "center",
                color: "#90caf9",
              }}
            >
              {t("about.title")}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 2, color: "#00e5ff" }}>
                  {t("about.subtitle")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    textAlign: "justify",
                    fontSize: {
                      xs: "16px", // For extra-small screens
                      sm: "17.5px", // For small screens
                      md: "18px", // For medium screens / tablets
                      lg: "20px", // For large screens
                      xl: "21px", // For extra-large screens
                    },
                    px: "4px",
                  }}
                >
                  {t("about.description.part_1")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: "17px", // For extra-small screens
                      sm: "17.5px", // For small screens
                      md: "18px", // For medium screens / tablets
                      lg: "20px", // For large screens
                      xl: "21px", // For extra-large screens
                    },
                    textAlign: "justify",
                  }}
                >
                  {t("about.description.part_2")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: "17px", // For extra-small screens
                      sm: "17.5px", // For small screens
                      md: "18px", // For medium screens / tablets
                      lg: "20px", // For large screens
                      xl: "21px", // For extra-large screens
                    },
                    textAlign: "justify",
                  }}
                >
                  {t("about.description.part_3")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: "17px", // For extra-small screens
                      sm: "17.5px", // For small screens
                      md: "18px", // For medium screens / tablets
                      lg: "20px", // For large screens
                      xl: "21px", // For extra-large screens
                    },
                    textAlign: "justify",
                  }}
                >
                  {t("about.description.part_4")}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 2, color: "#00e5ff" }}>
                  {t("about.subtitle2")}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
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
                    "Docker",
                    "Unity 3D",
                    "Unreal Engine",
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
                  sx={{
                    fontSize: {
                      xs: "17px", // For extra-small screens
                      sm: "17.5px", // For small screens
                      md: "18px", // For medium screens / tablets
                      lg: "20px", // For large screens
                      xl: "21px", // For extra-large screens
                    },
                    textAlign: "justify",
                  }}
                >
                  {t("about.description2")}
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
        <Container sx={{ mt: { lg: 6, md: 3, xs: 1 } }}>
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
              {t("projects.title")}
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
                      <Typography
                        variant="body1"
                        sx={{ mb: 2, color: "white" }}
                      >
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

      {/* Nuova Sezione Progetti 3D */}
      <Box
        id="projects3d"
        sx={{
          minHeight: "100vh",
          py: 10,
          background: "linear-gradient(to bottom, #121212, #1a237e)",
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
              {t("projects3d.title")}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                textAlign: "center",
                color: "#e0e0e0",
                maxWidth: "800px",
                mx: "auto",
                fontSize: {
                  xs: "17px", // For extra-small screens
                  sm: "17.5px", // For small screens
                  md: "21px", // For medium screens / tablets
                  lg: "22px", // For large screens
                  xl: "23px", // For extra-large screens
                },
              }}
            >
              {t("projects3d.description")}
            </Typography>
            {/* Galleria orizzontale scrollabile */}
            <Typography
              variant="h5"
              sx={{
                color: "#00e5ff",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              Lavori in corso... Galleria di immagini in arrivo!
            </Typography>
            {/* <Box sx={{ position: "relative", width: "100%", mt: 3, mb: 4 }}>
              <IconButton
                onClick={scrollGalleryLeft}
                sx={{
                  position: "absolute",
                  left: { xs: -16, sm: -20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  bgcolor: "rgba(0, 229, 255, 0.2)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(0, 229, 255, 0.4)",
                  },
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                }}
              >
                <FaChevronLeft size={24} />
              </IconButton>

              <Box
                ref={galleryScrollRef}
                sx={{
                  width: "100%",
                  overflowX: "auto",
                  display: "flex",
                  pb: 2,
                  scrollBehavior: "smooth",
                  "&::-webkit-scrollbar": {
                    height: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 229, 255, 0.5)",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 229, 255, 0.7)",
                    },
                  },
                }}
              >
                <Box sx={{ display: "flex", gap: 3, px: 2 }}>
                  {galleryImages.map((item) => (
                    <Box
                      key={item.id}
                      component={motion.div}
                      whileHover={{ y: -10, scale: 1.03 }}
                      sx={{
                        position: "relative",
                        minWidth: { xs: "280px", sm: "350px", md: "400px" },
                        height: { xs: "200px", sm: "250px", md: "300px" },
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        border: "2px solid rgba(0, 229, 255, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 2,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                          color: "white",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <IconButton
                onClick={scrollGalleryRight}
                sx={{
                  position: "absolute",
                  right: { xs: -16, sm: -20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  bgcolor: "rgba(0, 229, 255, 0.2)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(0, 229, 255, 0.4)",
                  },
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                }}
              >
                <FaChevronRight size={24} />
              </IconButton>
            </Box> */}
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
          background: "linear-gradient(to bottom, #1a237e, #1e3c72)",
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
              {t("contact.title")}
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
                    {t("contact.description")}
                  </Typography>

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
                      {t("contact.contact_by_email_button")}
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
                      {t("contact.contact_by_linkedin_button")}
                    </Button>

                    <Button
                      variant="outlined"
                      href={cv}
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
                      {t("contact.view_cv_button")}
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
