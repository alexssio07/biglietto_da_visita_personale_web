// =============================================================================
// DATI DEI PROGETTI
// -----------------------------------------------------------------------------
// Qui restano solo i dati "tecnici" (immagine, tecnologie, link).
// I testi (titolo, descrizione, funzionalità) sono nei file di traduzione
// `src/locales/<lingua>/translation.json` sotto la chiave `projects.items.<id>`,
// così il sito resta bilingue (IT/EN).
//
// Per aggiungere un progetto:
//   1. aggiungi un oggetto a `projects` con un `id` univoco;
//   2. aggiungi i testi in `projects.items.<id>` in entrambi i file di traduzione.
// =============================================================================
import portfolioImage from "../assets/anteprima_sito_web.png";

export const projects = [
  {
    id: "ervongola",
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
    id: "portfolio",
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
];

// Progetti 3D di esempio (segnaposto) - al momento NON ancora mostrati nel sito.
// Sostituiscili con i tuoi modelli reali quando la sezione sarà pronta.
export const projects3D = [
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

// Immagini segnaposto per la galleria 3D (il codice della galleria in App.js
// è attualmente commentato).
export const galleryImages = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: n,
  title: `Progetto ${n}`,
  image: "https://via.placeholder.com/600x400",
  description: `Descrizione breve del progetto ${n}`,
}));
