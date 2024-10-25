/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const GlowingStarsBackgroundCard = ({ className, children }) => {
  const [mouseEnter, setMouseEnter] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseEnter((prev) => !prev); // Mengubah nilai mouseEnter
    }, 4000); // Setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat unmount
  }, []);
  return (
    <div
      className={cn(
        'bg-[#111] p-4  w-full h-screen rounded-xl border border-[#eaeaea]',
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({ className, children }) => {
  return (
    <p className={cn('text-base text-white max-w-[16rem]', className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({ className, children }) => {
  return (
    <h2 className={cn('font-bold text-2xl text-[#eaeaea]', className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ mouseEnter }) => {
  const stars = 216;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState([]);

  const highlightedStars = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 40 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen p-1 w-full"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.4, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? '#fff' : '#666',
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      className={cn('bg-[#666] h-[1px] w-[1px] rounded-full relative z-20')}
    ></motion.div>
  );
};

const Glow = ({ delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
    />
  );
};
