import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./AnimatedWords.css";

const SPAWN_INTERVAL = 1200;
// Duracion de la animación, dos intervalos
const WORD_DURATION = SPAWN_INTERVAL * 2;
const MARGIN = 20;
const COLLISION_GAP = 18;

const WORDS = [
  { text: "REACT", color: "var(--color-accent-blue)", type: "display" },
  { text: "TrailScope", color: "var(--color-accent-yellow)", type: "italic" },
  { text: "JAVASCRIPT", color: "var(--color-accent-red)", type: "mono" },
  { text: "JobTrack", color: "var(--color-accent-blue)", type: "display" },
  { text: "UI", color: "var(--color-accent-yellow)", type: "display" },
  { text: "APIs", color: "var(--color-accent-red)", type: "mono" },
  { text: "Frontend", color: "var(--color-text)", type: "display" },
  { text: "Creative Web", color: "var(--color-accent-blue)", type: "italic" },
  { text: "DevShelf", color: "var(--color-accent-red)", type: "display" },
  { text: "HTML", color: "var(--color-accent-yellow)", type: "mono" },
  { text: "CSS", color: "var(--color-accent-red)", type: "mono" },
  { text: "Tailwind", color: "var(--color-text)", type: "italic" },
  { text: "GITHUB", color: "var(--color-text)", type: "italic" },
  { text: "AI", color: "var(--color-accent-blue)", type: "display" },
  { text: "Node", color: "var(--color-accent-red)", type: "mono" },
  { text: "Vite", color: "var(--color-accent-red)", type: "display" },
  { text: "GIT", color: "var(--color-accent-red)", type: "mono" },
  { text: "Salesforce", color: "var(--color-accent-yellow)", type: "display" },
  { text: "SQL", color: "var(--color-text)", type: "italic" },
  { text: "Release", color: "var(--color-text)", type: "italic" },
];

// Comprueba si el rectángulo candidato invade el espacio de otra palabra

function overlaps(candidate, occupied) {
  return occupied.some((other) => {
    return candidate.x < other.x + other.width + COLLISION_GAP && candidate.x + candidate.width + COLLISION_GAP > other.x && candidate.y < other.y + other.height + COLLISION_GAP && candidate.y + candidate.height + COLLISION_GAP > other.y;
  });
}

// Busca un hueco con intentos aleatorios y después con un barrido ordenado.
// Si no lo encuentra, reduce la tipografía. Devuelve el rectángulo ocupado o null cuando no consigue colocar la palabra.

function positionWord(element, container, occupied) {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Recuperamos el tamaño original de la tipografía.
  element.style.fontSize = "";
  const baseFontSize = parseFloat(getComputedStyle(element).fontSize);

  const maxAllowedWidth = containerWidth - MARGIN * 2;

  // Si la palabra no cabe, probamos tamaños menores.
  const scales = [1, 0.85, 0.7, 0.55, 0.4];

  for (const scale of scales) {
    element.style.fontSize = `${baseFontSize * scale}px`;

    const naturalWidth = element.offsetWidth;

    if (naturalWidth > maxAllowedWidth && maxAllowedWidth > 0) {
      element.style.fontSize = `${(baseFontSize * scale * maxAllowedWidth) / naturalWidth}px`;
    }

    const width = element.offsetWidth;
    const height = element.offsetHeight;

    const maxX = containerWidth - width - MARGIN;
    const maxY = containerHeight - height - MARGIN;

    if (maxX < MARGIN || maxY < MARGIN) continue;

    let position = null;

    // Primero intentamos colocarla aleatoriamente.
    for (let attempt = 0; attempt < 80; attempt++) {
      const candidate = {
        x: MARGIN + Math.random() * (maxX - MARGIN),
        y: MARGIN + Math.random() * (maxY - MARGIN),
        width,
        height,
      };

      if (!overlaps(candidate, occupied)) {
        position = candidate;
        break;
      }
    }

    // Si no encontramos hueco, revisamos posiciones
    // de forma ordenada antes de reducir más la palabra.
    if (!position) {
      for (let y = MARGIN; y <= maxY && !position; y += 12) {
        for (let x = MARGIN; x <= maxX; x += 12) {
          const candidate = { x, y, width, height };

          if (!overlaps(candidate, occupied)) {
            position = candidate;
            break;
          }
        }
      }
    }

    if (position) {
      element.style.left = `${position.x}px`;
      element.style.top = `${position.y}px`;
      element.style.visibility = "visible";

      return position;
    }
  }

  // Nunca mostramos una palabra encima de otra.
  element.style.visibility = "hidden";
  return null;
}

//Componente principal

function AnimatedWords() {
  const containerRef = useRef(null);
  const nextIdRef = useRef(0);
  const positionsRef = useRef(new Map());

  const [activeWords, setActiveWords] = useState([{ id: 0, wordIndex: 0 }]);

  const [layoutVersion, setLayoutVersion] = useState(0);

  // Medimos y colocamos las palabras antes de pintar
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeIds = new Set(activeWords.map((word) => word.id));

    // Eliminamos las posiciones de palabras que ya no existen.
    for (const id of positionsRef.current.keys()) {
      if (!activeIds.has(id)) {
        positionsRef.current.delete(id);
      }
    }

    for (const word of activeWords) {
      // Las palabras ya colocadas conservan su posición.
      if (positionsRef.current.has(word.id)) continue;

      const element = container.querySelector(`[data-word-id="${word.id}"]`);

      if (!element) continue;

      const occupied = Array.from(positionsRef.current.values());

      const position = positionWord(element, container, occupied);

      if (position) {
        positionsRef.current.set(word.id, position);
      }
    }
  }, [activeWords, layoutVersion]);

  // Liberamos los rectángulos de las palabras retiradas para reutilizar su espacio
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let previousWidth = container.clientWidth;
    let previousHeight = container.clientHeight;

    // Si cambia el tamaño del contenedor, descartamos las posiciones anteriores
    const observer = new ResizeObserver(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width === previousWidth && height === previousHeight) {
        return;
      }

      previousWidth = width;
      previousHeight = height;

      positionsRef.current.clear();
      setLayoutVersion((previous) => previous + 1);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Cada intervalo conserva la última palabra y añade la siguiente
  // Así se mantienen como máximo dos palabras activas
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Con movimiento reducido dejamos una palabra estática.
    if (reducedMotion.matches) return;

    const interval = setInterval(() => {
      const nextId = nextIdRef.current + 1;
      nextIdRef.current = nextId;

      setActiveWords((previous) => [
        ...previous.slice(-1),
        {
          id: nextId,
          wordIndex: nextId % WORDS.length,
        },
      ]);
    }, SPAWN_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="animated-words" aria-hidden="true">
      {activeWords.map((word) => {
        const wordData = WORDS[word.wordIndex];

        return (
          <span
            key={word.id}
            data-word-id={word.id}
            className={`animated-words__item animated-words__item--${wordData.type}`}
            style={{
              "--word-color": wordData.color,
              "--word-duration": `${WORD_DURATION}ms`,
            }}
          >
            {wordData.text}
          </span>
        );
      })}
    </div>
  );
}

export default AnimatedWords;
