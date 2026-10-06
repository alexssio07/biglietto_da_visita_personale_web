import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
} from "@mui/material";
import {
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./App.css";
import profileImage from "./assets/Immagine_profilo.jpg";
import cv from "./assets/CV.pdf";
import { projects } from "./data/projects";
import Typewriter from "./components/Typewriter";
import SocialLinks from "./components/SocialLinks";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ProjectsPage from "./pages/ProjectsPage";

// Professioni che si alternano accanto a "E sono un..." nella home
const professions = [
  "Full Stack Developer",
  "Back-end Developer",
  "Front-end Developer",
  "Videogame Developer",
  "3D Printing Creator",
  "Content Creator",
  "Discord Community Manager",
];

// Competenze mostrate come "chip" nella sezione "Chi sono"
const skills = [
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
  "Unity 3D",
  "Unreal Engine",
  ".Net Framework",
  "3D Printing",
  "Content Creation",
  "Video Maker",
];

// Stile condiviso dai paragrafi della sezione "Chi sono"
// (la dimensione del testo cresce con la larghezza dello schermo)
const aboutTextSx = {
  mb: 2,
  textAlign: "justify",
  fontSize: {
    xs: "16px", // smartphone
    sm: "17.5px", // smartphone grandi
    md: "18px", // tablet
    lg: "20px", // desktop
    xl: "21px", // schermi molto grandi
  },
};

// Numero massimo di tecnologie mostrate nella lista compatta dei progetti (home)
const MAX_TECH_IN_LIST = 3;

// "Pagina" con tutti i progetti: è una vista dentro la stessa app, raggiungibile
// con l'indirizzo "#/progetti". Così non serve installare un router e funziona
// senza configurazione anche su Vercel.
const PROJECTS_ROUTE = "#/progetti";
const isProjectsRoute = () => window.location.hash.startsWith(PROJECTS_ROUTE);

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [professionIndex, setProfessionIndex] = useState(0);
  // true = mostra la pagina "Tutti i progetti" al posto della home
  const [showProjectsPage, setShowProjectsPage] = useState(isProjectsRoute);
  // Serve a sapere se stiamo tornando dalla pagina progetti alla home
  const cameFromProjectsPage = useRef(false);

  const { t } = useTranslation();

  // Effetto per cambiare professione ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Ascolta i cambi dell'indirizzo (#/progetti <-> home), anche con i
  // pulsanti avanti/indietro del browser
  useEffect(() => {
    const onHashChange = () => setShowProjectsPage(isProjectsRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Quando si cambia "pagina": in alto per la pagina progetti,
  // oppure di nuovo alla sezione Progetti quando si torna in home
  useEffect(() => {
    if (showProjectsPage) {
      cameFromProjectsPage.current = true;
      window.scrollTo(0, 0);
    } else if (cameFromProjectsPage.current) {
      cameFromProjectsPage.current = false;
      // Aspetta che la home sia stata disegnata, poi scorre alla sezione
      requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView();
      });
    }
  }, [showProjectsPage]);

  // Effetto per rilevare lo scroll e cambiare sezione attiva nel menu
  // (ogni sezione occupa circa una schermata)
  useEffect(() => {
    if (showProjectsPage) return; // la home non è visibile: niente da fare

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
  }, [showProjectsPage]);

  // Riferimento per lo scroller della galleria (usato dal codice commentato più sotto)
  // eslint-disable-next-line no-unused-vars
  const galleryScrollRef = useRef(null);

  // Funzione per scorrere dolcemente fino a una sezione
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
  };

  // Torna dalla pagina "Tutti i progetti" alla home (svuota l'hash dell'indirizzo)
  const goBackHome = () => {
    window.location.hash = "";
  };

  // Funzioni per scorrere la galleria a sinistra/destra (usate dal codice commentato)
  // eslint-disable-next-line no-unused-vars
  const scrollGalleryLeft = () => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  // eslint-disable-next-line no-unused-vars
  const scrollGalleryRight = () => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Pagina dedicata con tutti i progetti in dettaglio
  if (showProjectsPage) {
    return <ProjectsPage onBack={goBackHome} />;
  }

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

          {/* Selettore lingua */}
          <LanguageSwitcher />

          {/* Voci del menu: ognuna scorre alla propria sezione */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2, md: 3 },
              flexWrap: "nowrap",
              justifyContent: "space-between",
            }}
          >
            {[
              ["home", "menu.home"],
              ["about", "menu.about"],
              ["projects", "menu.projects"],
              ["projects3d", "menu.projects3d"],
              ["contact", "menu.contact"],
            ].map(([section, labelKey]) => (
              <Button
                key={section}
                color={activeSection === section ? "primary" : "inherit"}
                onClick={() => scrollToSection(section)}
                sx={{
                  fontSize: {
                    xs: section === "projects3d" ? "0.6rem" : "0.7rem",
                    sm: "0.875rem",
                  },
                }}
              >
                {t(labelKey)}
              </Button>
            ))}
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
          {/*
            Layout a due colonne: testo a sinistra, foto a destra.
            Con MUI v7 la larghezza delle colonne si indica con `size`
            (le vecchie props `item`, `xs`, `md` non funzionano più e facevano
            finire la foto sotto al testo). Su smartphone le colonne si impilano.
          */}
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
            {/* Colonna sinistra: testi, social e pulsante */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                {/* "E sono un" + professione che cambia (va a capo se manca spazio) */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    columnGap: 1.5,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
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

                {/* Icone social (con effetto luce al passaggio del mouse) */}
                <SocialLinks />

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

            {/* Colonna destra: foto profilo, centrata in verticale rispetto al testo */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="profile_image"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "420px", md: "560px" },
                  // Su desktop limita l'altezza così la foto non supera il blocco di testo
                  maxHeight: { md: "70vh" },
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "16px",
                  // Ritaglio a parallelogramma
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                  border: "4px solid #00e5ff",
                  boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sezione About (Chi sono) */}
      <Box
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 1,
          background: "linear-gradient(to bottom, #121212, #1a237e)",
          // Sfondo con immagine (disattivato):
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
              {/* Colonna sinistra: la mia storia */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" sx={{ mb: 2, color: "#00e5ff" }}>
                  {t("about.subtitle")}
                </Typography>
                {["part_1", "part_2", "part_3", "part_4"].map((part) => (
                  <Typography key={part} variant="body1" sx={aboutTextSx}>
                    {t(`about.description.${part}`)}
                  </Typography>
                ))}
              </Grid>

              {/* Colonna destra: competenze */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" sx={{ mb: 2, color: "#00e5ff" }}>
                  {t("about.subtitle2")}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                  {skills.map((skill) => (
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
                <Typography variant="body1" sx={{ ...aboutTextSx, mb: 0 }}>
                  {t("about.description2")}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Sezione Projects: lista compatta + pulsante verso la pagina completa */}
      <Box
        id="projects"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 10,
          background: "linear-gradient(to bottom, #1a237e, #121212)",
        }}
      >
        <Container maxWidth="md" sx={{ mt: { lg: 6, md: 3, xs: 1 } }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 5,
                textAlign: "center",
                color: "#90caf9",
              }}
            >
              {t("projects.title")}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {projects.map((project) => {
                // Testi presi dalle traduzioni: projects.items.<id>.*
                const base = `projects.items.${project.id}`;
                const visibleTech = project.technologies.slice(
                  0,
                  MAX_TECH_IN_LIST
                );
                const hiddenTechCount =
                  project.technologies.length - visibleTech.length;

                return (
                  <Card
                    key={project.id}
                    component={motion.div}
                    whileHover={{ scale: 1.01 }}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "white",
                      overflow: "hidden",
                    }}
                  >
                    {/*
                      Tutta la card è un link: un clic apre il repository GitHub
                      (stessa azione del vecchio pulsante "Vedi su GitHub").
                    */}
                    <CardActionArea
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t(`${base}.title`)} - ${t(
                        "projects.open_github"
                      )}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 2,
                        p: 1.5,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={t(`${base}.title`)}
                        sx={{
                          width: { xs: 56, sm: 72 },
                          height: { xs: 56, sm: 72 },
                          borderRadius: 2,
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <CardContent sx={{ flex: 1, minWidth: 0, p: "0 !important" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", color: "#00e5ff", lineHeight: 1.3 }}
                        >
                          {t(`${base}.title`)}
                        </Typography>
                        {/* Descrizione breve: massimo 2 righe */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#e0e0e0",
                            mb: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {t(`${base}.short`)}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                          {visibleTech.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                bgcolor: "rgba(0, 229, 255, 0.1)",
                                color: "white",
                                height: 22,
                                fontSize: "0.7rem",
                              }}
                            />
                          ))}
                          {hiddenTechCount > 0 && (
                            <Chip
                              label={`+${hiddenTechCount}`}
                              size="small"
                              sx={{
                                bgcolor: "transparent",
                                color: "#90caf9",
                                height: 22,
                                fontSize: "0.7rem",
                              }}
                            />
                          )}
                        </Box>
                      </CardContent>
                      {/* Icona che indica che il clic apre un link esterno */}
                      <Box sx={{ color: "#00e5ff", pr: 1, display: "flex" }}>
                        <FaExternalLinkAlt />
                      </Box>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Box>

            {/* Pulsante finale: porta alla pagina con tutti i progetti in dettaglio */}
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Button
                variant="contained"
                component="a"
                href={PROJECTS_ROUTE}
                endIcon={<FaArrowRight />}
                sx={{
                  borderRadius: 999,
                  px: 4,
                  py: 1,
                  background: "linear-gradient(45deg, #00e5ff, #2979ff)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #2979ff, #00e5ff)",
                  },
                }}
              >
                {t("projects.see_all")}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Sezione Progetti 3D */}
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
                  xs: "17px", // smartphone
                  sm: "17.5px", // smartphone grandi
                  md: "21px", // tablet
                  lg: "22px", // desktop
                  xl: "23px", // schermi molto grandi
                },
              }}
            >
              {t("projects3d.description")}
            </Typography>
            {/* Segnaposto in attesa della galleria */}
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
              {t("projects3d.coming_soon")}
            </Typography>
            {/*
              Galleria orizzontale scrollabile (disattivata, in lavorazione).
              Per riattivarla: decommenta il blocco, importa `galleryImages` da
              "./data/projects" e le icone FaChevronLeft / FaChevronRight da "react-icons/fa".
            */}
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
              <Grid size={{ xs: 12, md: 8, lg: 6 }}>
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
                    {/* Contatto via email */}
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

                    {/* Profilo LinkedIn */}
                    <Button
                      variant="contained"
                      startIcon={<FaLinkedin />}
                      href="https://linkedin.com/in/alessio-chiocchetti-283777b7"
                      target="_blank"
                      rel="noopener noreferrer"
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

                    {/* Curriculum in PDF (file in src/assets/CV.pdf) */}
                    <Button
                      variant="outlined"
                      href={cv}
                      target="_blank"
                      rel="noopener noreferrer"
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
