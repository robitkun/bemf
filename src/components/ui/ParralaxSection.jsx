import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function ParallaxSection() {
  const { scrollY } = useScroll();
  const yRange = useSpring(useTransform(scrollY, [0, 500], [0, 100]), {
    stiffness: 500,
    damping: 50,
  });
  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div className="absolute top-0 left-0 w-full h-full bg-blue-500 flex items-center justify-center">
        <motion.h1 className="text-white text-4xl" style={{ y: yRange }}>
          {' '}
          Layer 1
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default ParallaxSection;
