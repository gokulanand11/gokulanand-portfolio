import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const LoadingAnimation = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.45 }}
    className="fixed inset-0 z-[80] grid place-items-center bg-night"
    role="status"
    aria-label="Loading portfolio"
  >
    <div className="relative grid place-items-center">
      <motion.div
        className="absolute h-28 w-28 rounded-lg border border-cyan-300/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute h-20 w-20 rounded-lg border border-emerald-300/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="glass-panel grid h-16 w-16 place-items-center text-cyan-200"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BrainCircuit size={30} />
      </motion.div>
      <span className="sr-only">Loading</span>
    </div>
  </motion.div>
);

export default LoadingAnimation;
