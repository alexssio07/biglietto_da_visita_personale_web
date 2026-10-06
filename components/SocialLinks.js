import React from "react";
import { Box, IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaTelegram,
  FaLink,
  FaTwitter,
} from "react-icons/fa";

// Elenco dei social: per aggiungerne uno basta aggiungere una riga.
// `color` è il colore del brand: viene usato sia per l'icona sia per
// l'effetto "luce" quando ci si passa sopra con il cursore.
const socials = [
  { label: "YouTube", href: "https://www.youtube.com/c/Alexssio", color: "#ea4335", Icon: FaYoutube },
  { label: "Instagram", href: "https://instagram.com/alexssio_23", color: "#DD2A7B", Icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com/@alexssio_23", color: "#ffffff", Icon: FaTiktok },
  { label: "Discord", href: "https://discord.com/invite/wJyppMNBUe", color: "#7289da", Icon: FaDiscord },
  { label: "Telegram", href: "https://t.me/alexssio_23", color: "#24A1DE", Icon: FaTelegram },
  { label: "Threads", href: "https://www.threads.com/@alexssio_23", color: "#ffffff", Icon: FaLink },
  { label: "X (Twitter)", href: "https://x.com/alexssio23", color: "#ffffff", Icon: FaTwitter },
];

// Dimensione icone in base alla larghezza dello schermo
const iconSize = { lg: "46px", md: "38px", sm: "32px", xs: "28px" };

const SocialLinks = () => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4, width: "100%" }}>
    {socials.map(({ label, href, color, Icon }) => (
      <IconButton
        key={label}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
          color,
          fontSize: iconSize,
          opacity: 0.85,
          transition: "all 0.25s ease",
          // Effetto hover: l'icona "si illumina" del suo colore (alone + sfondo soft)
          "&:hover": {
            color,
            opacity: 1,
            bgcolor: alpha(color, 0.12),
            transform: "translateY(-3px) scale(1.12)",
            filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 16px ${color})`,
          },
        }}
      >
        <Icon />
      </IconButton>
    ))}
  </Box>
);

export default SocialLinks;
