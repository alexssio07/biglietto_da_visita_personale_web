import { useState, useEffect } from "react";

/**
 * Hook che restituisce il testo "digitato" lettera per lettera.
 * @param {string} text  testo completo da scrivere
 * @param {number} speed millisecondi tra una lettera e la successiva
 */
export const useTypewriter = (text, speed = 800) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Ricomincia da capo ogni volta che cambia il testo (es. cambio lingua)
    setDisplayText("");
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        // Uso l'indice invece di accodare al valore precedente: evita lettere
        // duplicate o mancanti con React.StrictMode (che esegue gli effetti 2 volte).
        i++;
        setDisplayText(text.slice(0, i));
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Pulizia: ferma il timer quando il componente si smonta
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

/**
 * Componente per l'effetto di digitazione.
 * Uso: <Typewriter text="Testo da digitare" speed={100} />
 *
 * NOTA: è definito FUORI da App. Se fosse dentro, verrebbe ricreato a ogni
 * render (es. ogni 3 secondi al cambio professione) e l'animazione ripartirebbe
 * continuamente da zero.
 */
const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);
  return <>{displayText}</>;
};

export default Typewriter;
