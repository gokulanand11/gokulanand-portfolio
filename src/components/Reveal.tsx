import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  delay?: number;
};

const Reveal = ({ children, delay = 0, ...props }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.22 }}
    transition={{ duration: 0.65, ease: 'easeOut', delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Reveal;
