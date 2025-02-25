import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const useKonamiCode = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isKonamiCode, setIsKonamiCode] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const newSequence = [...sequence, event.key];

      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }

      setSequence(newSequence);

      const isMatch = newSequence.join(",") === KONAMI_CODE.join(",");
      if (isMatch) {
        setIsKonamiCode((prev) => !prev);
        setSequence([]);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [sequence]);

  return isKonamiCode;
};
