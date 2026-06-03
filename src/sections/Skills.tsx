import { motion } from 'framer-motion';
import { Code2, Cpu, Users, Wrench } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolio';

const iconMap = {
  'Programming Languages': Code2,
  'Frameworks & Technologies': Cpu,
  Tools: Wrench,
  'Soft Skills': Users,
};

const accentMap = {
  cyan: 'from-cyan-300/20 text-cyan-200 ring-cyan-300/25',
  violet: 'from-violet-300/20 text-violet-200 ring-violet-300/25',
  emerald: 'from-emerald-300/20 text-emerald-200 ring-emerald-300/25',
  amber: 'from-amber-300/20 text-amber-200 ring-amber-300/25',
};

const Skills = () => (
  <section id="skills" className="relative scroll-mt-24">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technical stack and problem-solving toolkit"
        description="A balanced mix of programming foundations, web technologies, AI/ML practice, design tools, and professional habits."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = iconMap[category.title as keyof typeof iconMap];
          const accent = accentMap[category.accent as keyof typeof accentMap];

          return (
            <Reveal key={category.title} delay={categoryIndex * 0.08} className="h-full">
              <motion.article
                className="glass-panel flex h-full flex-col p-5 transition hover:border-white/25"
                whileHover={{ y: -6 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${accent}`}>
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
