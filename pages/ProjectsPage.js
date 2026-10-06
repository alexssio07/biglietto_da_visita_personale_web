import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import LanguageSwitcher from "../components/LanguageSwitcher";

/**
 * Pagina con TUTTI i progetti in versione dettagliata.
 * Viene mostrata da App.js quando l'indirizzo termina con "#/progetti".
 * `onBack` riporta l'utente alla home (sezione Progetti).
 */
const ProjectsPage = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "white",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1a237e, #121212 40%)",
        py: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="md">
        {/* Barra superiore: ritorno alla home + selettore lingua */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 5,
          }}
        >
          <Button
            startIcon={<FaArrowLeft />}
            onClick={onBack}
            sx={{ color: "#90caf9" }}
          >
            {t("projectsPage.back")}
          </Button>
          <LanguageSwitcher />
        </Box>

        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", color: "#90caf9", mb: 1 }}
        >
          {t("projectsPage.title")}
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#e0e0e0", mb: 6, fontSize: "1.1rem" }}
        >
          {t("projectsPage.subtitle")}
        </Typography>

        {/* Un blocco dettagliato per ogni progetto */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {projects.map((project, index) => {
            // Testi presi dalle traduzioni: projects.items.<id>.*
            const base = `projects.items.${project.id}`;
            const features = t(`${base}.features`, { returnObjects: true });

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={t(`${base}.title`)}
                    sx={{ height: { xs: 200, md: 280 }, objectFit: "cover" }}
                  />
                  <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "bold", color: "#00e5ff", mb: 2 }}
                    >
                      {t(`${base}.title`)}
                    </Typography>
                    <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                      {t(`${base}.long`)}
                    </Typography>

                    {/* Funzionalità principali (lista puntata) */}
                    <Typography variant="h6" sx={{ color: "#90caf9", mb: 1 }}>
                      {t("projectsPage.features")}
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0, mb: 3 }}>
                      {Array.isArray(features) &&
                        features.map((feature) => (
                          <Typography component="li" key={feature} sx={{ mb: 0.5 }}>
                            {feature}
                          </Typography>
                        ))}
                    </Box>

                    {/* Tutte le tecnologie usate */}
                    <Typography variant="h6" sx={{ color: "#90caf9", mb: 1 }}>
                      {t("projectsPage.technologies")}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ bgcolor: "rgba(0, 229, 255, 0.1)", color: "white" }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="outlined"
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<FaGithub />}
                      sx={{
                        color: "#00e5ff",
                        borderColor: "#00e5ff",
                        "&:hover": {
                          borderColor: "#00e5ff",
                          bgcolor: "rgba(0, 229, 255, 0.1)",
                        },
                      }}
                    >
                      {t("projectsPage.github")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            startIcon={<FaArrowLeft />}
            onClick={onBack}
            sx={{
              borderRadius: 999,
              px: 4,
              py: 1,
              background: "linear-gradient(45deg, #00e5ff, #2979ff)",
              "&:hover": { background: "linear-gradient(45deg, #2979ff, #00e5ff)" },
            }}
          >
            {t("projectsPage.back")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
