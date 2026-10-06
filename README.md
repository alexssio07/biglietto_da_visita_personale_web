# Biglietto da visita personale (Portfolio)

Sito web personale di **Alessio Chiocchetti**: un portfolio bilingue (italiano/inglese) per presentare chi sono, le mie competenze, i miei progetti e i miei contatti.

## Anteprima delle sezioni

| Sezione | Contenuto |
| --- | --- |
| **Home** | Presentazione, professioni animate, icone social, foto profilo |
| **Chi sono** | La mia storia e le mie competenze |
| **Progetti** | Lista compatta dei progetti; ogni elemento porta al repository GitHub |
| **Tutti i progetti** | Pagina dedicata (`#/progetti`) con i progetti in dettaglio |
| **Progetti 3D** | Sezione sui modelli stampati in 3D (galleria in arrivo) |
| **Contatti** | Email, LinkedIn e download del CV |

## Come è stato realizzato

Il sito è una **Single Page Application** scritta in **JavaScript** con **React**, creata a partire da [Create React App](https://github.com/facebook/create-react-app).

| Tecnologia | Utilizzo |
| --- | --- |
| [React 18](https://react.dev/) | Interfaccia a componenti |
| [Material UI (MUI) v7](https://mui.com/) | Componenti grafici e stili (`sx`) |
| [Framer Motion](https://www.framer.com/motion/) | Animazioni di ingresso e hover |
| [react-i18next](https://react.i18next.com/) / i18next | Traduzioni italiano/inglese |
| [react-icons](https://react-icons.github.io/react-icons/) | Icone (social, frecce, ecc.) |
| HTML + CSS | Struttura base (`public/index.html`) e stili globali |
| [Vercel](https://vercel.com/) | Pubblicazione online |

## Struttura del progetto

```text
├── public/                  # index.html, favicon, manifest
├── src/
│   ├── App.js               # Pagina principale (home, chi sono, progetti, 3D, contatti)
│   ├── index.js             # Punto di ingresso dell'app
│   ├── i18n.js              # Configurazione delle lingue (default: italiano)
│   ├── assets/              # Immagini e CV in PDF
│   ├── components/
│   │   ├── SocialLinks.js       # Icone social con effetto luce al passaggio del mouse
│   │   ├── LanguageSwitcher.js  # Pulsanti EN / IT
│   │   └── Typewriter.js        # Effetto "scrittura a macchina"
│   ├── data/
│   │   └── projects.js          # Dati dei progetti (immagine, tecnologie, link)
│   ├── pages/
│   │   └── ProjectsPage.js      # Pagina con tutti i progetti in dettaglio
│   └── locales/
│       ├── it/translation.json  # Testi in italiano
│       └── en/translation.json  # Testi in inglese
├── vercel.json              # Comando di build per Vercel
└── package.json
```

## Requisiti

- [Node.js](https://nodejs.org/) (versione LTS consigliata)
- npm (incluso con Node.js)

## Avvio in locale

```bash
# 1. Installa le dipendenze
npm install --legacy-peer-deps

# 2. Avvia il sito in modalità sviluppo
npm start
```

Lo script `start` usa la porta **3001** (`set PORT=3001`, sintassi per Windows): apri [http://localhost:3001](http://localhost:3001). Il sito si aggiorna da solo a ogni modifica.

## Comandi disponibili

| Comando | Cosa fa |
| --- | --- |
| `npm start` | Avvia il server di sviluppo |
| `npm run build` | Crea la versione ottimizzata per la produzione nella cartella `build/` |
| `npm test` | Esegue i test |

## Come modificare i contenuti

- **Testi** (presentazione, "Chi sono", descrizioni dei progetti): modifica i file in `src/locales/it/` e `src/locales/en/`. Ricordati di aggiornare entrambe le lingue.
- **Aggiungere un progetto**: aggiungi un oggetto in `src/data/projects.js` (con un `id` univoco, immagine, tecnologie e link GitHub) e inserisci titolo, descrizione breve (`short`), descrizione lunga (`long`) e funzionalità (`features`) sotto `projects.items.<id>` nei due file di traduzione. Comparirà sia nella lista della home sia nella pagina "Tutti i progetti".
- **Social**: l'elenco è in `src/components/SocialLinks.js`; ogni voce ha il proprio colore, usato anche per l'effetto luce all'hover.
- **Competenze e professioni animate**: array `skills` e `professions` all'inizio di `src/App.js`.
- **CV**: sostituisci il file `src/assets/CV.pdf`.

## Navigazione e pagina "Tutti i progetti"

Il sito non usa un router esterno: la pagina con i progetti dettagliati è una vista interna raggiungibile con l'indirizzo `/#/progetti`. Questo permette di funzionare su qualsiasi hosting statico (Vercel compreso) senza regole di rewrite.

## Pubblicazione

Il sito è pensato per essere pubblicato su **Vercel**. Il comando di build è definito in `vercel.json`:

```json
{ "buildCommand": "npm install --legacy-peer-deps && npm run build" }
```

## Link

- GitHub: [alexssio07](https://github.com/alexssio07)
- LinkedIn: [Alessio Chiocchetti](https://linkedin.com/in/alessio-chiocchetti-283777b7)
