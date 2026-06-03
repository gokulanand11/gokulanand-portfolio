import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  driftX: number;
  driftY: number;
  color: string;
};

const palette = ['bg-cyan-300/35', 'bg-emerald-300/30', 'bg-violet-300/30', 'bg-amber-300/25'];

const BackgroundParticles = () => {
  const prefersReducedMotion = useReducedMotion();
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        x: (index * 29) % 100,
        y: (index * 47) % 100,
        size: 2 + (index % 4),
        duration: 12 + (index % 9),
        driftX: ((index % 7) - 3) * 16,
        driftY: ((index % 5) - 2) * 18,
        color: palette[index % palette.length],
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:96px_96px]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35 }
              : {
                  x: [0, particle.driftX, 0],
                  y: [0, particle.driftY, 0],
                  opacity: [0.08, 0.8, 0.08],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
