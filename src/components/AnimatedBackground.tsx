
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { actualTheme } = useTheme();

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        if (newX > window.innerWidth) newX = 0;
        if (newX < 0) newX = window.innerWidth;
        if (newY > window.innerHeight) newY = 0;
        if (newY < 0) newY = window.innerHeight;
        
        return {
          ...particle,
          x: newX,
          y: newY,
        };
      }));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const isDark = actualTheme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="animate-pulse">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke={isDark ? "#ffffff" : "#000000"}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            isDark ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.id * 0.1,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90'
          : 'bg-gradient-to-br from-slate-50/90 via-white/80 to-slate-100/90'
      }`} />
    </div>
  );
}
