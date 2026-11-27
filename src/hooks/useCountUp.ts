import { useEffect, useState } from "react";

/**
 * Menghitung naik dari 0 ke `target` saat `active` = true.
 * Langsung menampilkan `target` bila pengguna memilih reduced motion.
 */
export function useCountUp(target: number, active = true, duration = 1200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
