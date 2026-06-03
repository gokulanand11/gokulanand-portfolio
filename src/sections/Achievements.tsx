import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Presentation, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolio';

const icons = [Code2, Award, Trophy, Presentation];

type CountUpProps = {
  value: number;
  suffix: string;
  start: boolean;
};

const CountUp = ({ value, suffix, start }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let frame = 0;
    const totalFrames = 70;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress === 1) {
        window.clearInterval(timer);
      }
    }, 22);

    return () => window.clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" className="relative scroll-mt-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Measured effort and consistent practice"
          description="Competitive coding practice, certifications, and presentation experience show steady growth across fundamentals and communication."
        />

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = icons[index] ?? Award;

            return (
              <Reveal key={achievement.id} delay={index * 0.08}>
                <motion.article
                  className="glass-panel h-full p-6"
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300 text-slate-950">
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-slate-500">0{achievement.id}</span>
                  </div>
                  <p className="gradient-text text-4xl font-black sm:text-5xl">
                    <CountUp
                      value={achievement.value}
                      suffix={achievement.suffix}
                      start={inView}
                    />
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-white">{achievement.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{achievement.detail}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
