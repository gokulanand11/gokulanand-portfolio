import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-300 via-violet-300 to-amber-300"
      style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
