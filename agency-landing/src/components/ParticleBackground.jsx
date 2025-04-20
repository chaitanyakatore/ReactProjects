import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);

    // Animate particles
    controls.start((i) => ({
      x: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      y: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      transition: {
        duration: Math.random() * 10 + 20,
        repeat: Infinity,
        ease: "linear",
      },
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          custom={particle.id}
          animate={controls}
          initial={{ x: particle.x, y: particle.y }}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 