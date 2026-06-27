import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityTarget: number;
  hue: number;
}

const COLORS = ['#C9A96E', '#d0ac6f', '#e8d4a8'];

export default function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (atBottom = false): Particle => ({
      x: Math.random() * width,
      y: atBottom ? height + Math.random() * 50 : Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      speedY: -(Math.random() * 0.5 + 0.15),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      opacityTarget: Math.random() * 0.5 + 0.15,
      hue: Math.floor(Math.random() * COLORS.length),
    });

    const init = () => {
      resize();
      const count = Math.min(60, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => createParticle(false));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;

        // drift opacity toward target, then flip
        p.opacity += (p.opacityTarget - p.opacity) * 0.02;
        if (Math.abs(p.opacity - p.opacityTarget) < 0.02) {
          p.opacityTarget = Math.random() * 0.5 + 0.1;
        }

        // recycle when off the top
        if (p.y < -10) {
          Object.assign(p, createParticle(true));
        }
        // wrap horizontally
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = COLORS[p.hue];
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => init();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
