import React from "react";
import { Box, IconButton } from "@mui/material";
import { FaFlagUsa, FaFlag } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Pulsanti per cambiare lingua (EN / IT). La lingua attiva è evidenziata.
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
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
  );
};

export default LanguageSwitcher;
