import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolio';

const EducationSection = () => (
  <section id="education" className="relative scroll-mt-24">
    <div className="section-shell max-w-6xl">
      <SectionHeading
        eyebrow="Education"
        title="Academic timeline"
        description="A clear path from school foundations to current undergraduate work in Artificial Intelligence and Machine Learning."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-emerald-300 to-amber-300 md:left-1/2" />

        <div className="space-y-8">
          {education.map((item, index) => {
            const Icon = index === 0 ? GraduationCap : School;
            const isEven = index % 2 === 0;

            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${isEven ? '' : 'md:[&>article]:col-start-2'}`}>
                  <motion.div
                    className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-lg bg-cyan-300 text-slate-950 md:left-1/2 md:-translate-x-1/2"
                    whileHover={{ scale: 1.08 }}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </motion.div>

                  <article className="glass-panel ml-12 p-6 md:ml-0">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                        {item.period}
                      </span>
                      <span className="rounded-lg bg-emerald-300/10 px-3 py-2 text-xs font-bold text-emerald-200">
                        {item.score}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.degree}</p>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
