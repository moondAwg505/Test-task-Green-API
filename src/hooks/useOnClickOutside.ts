import { useEffect, useRef } from "react";

// Функция для закрытия модалки кликом за передлами её
export function useClickOutside<T extends HTMLElement>(
  onOutsideClick: () => void,
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onOutsideClick]);

  return ref;
}
