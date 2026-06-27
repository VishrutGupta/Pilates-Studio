import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export function useTilt<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    VanillaTilt.init(el, {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      scale: 1.02,
      perspective: 1200,
      gyroscope: false,
    });

    return () => {
      (el as unknown as { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
    };
  }, [enabled]);

  return ref;
}
