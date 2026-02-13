"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Volver arriba al cargar/refrescar la página
    window.scrollTo(0, 0);
  }, []);

  return null; // No renderiza nada visible
}