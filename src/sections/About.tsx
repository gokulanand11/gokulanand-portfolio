import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Target } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const quickFacts = [
  { label: 'College', value: profile.college, icon: GraduationCap },
  { label: 'Degree', value: profile.degree, icon: BookOpen },
  { label: 'CGPA', value: profile.cgpa, icon: Target },
  { label: 'Location', value: profile.location, icon: MapPin },
];

const About = () => (
  <section id="about" className="relative scroll-mt-24">
    <div className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Curious builder with an AI-first engineering path"
        description="I combine classroom learning with hands-on project work across machine learning, computer vision, and full-stack web development."
      />

      <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="glass-panel tech-frame overflow-hidden p-5">
          <div className="aspect-[4/5] rounded-lg border border-white/10 bg-slate-950/70 p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-cyan-300 px-3 py-2 text-sm font-black text-slate-950">
                  GM
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Photo
                </span>
              </div>

              <div className="grid place-items-center">
                <motion.div
                  className="grid h-44 w-44 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-6xl font-black text-cyan-100 shadow-glow"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
            
                </motion.div>
              </div>

              <div>
                <p className="text-lg font-bold text-white">{profile.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{profile.role}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal className="glass-panel p-6 sm:p-8" delay={0.08}>
            <p className="text-lg leading-8 text-slate-300">{profile.about}</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I enjoy turning ideas into reliable applications, especially where software can
              simplify learning, automate manual work, or interpret visual information.
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2" delay={0.12}>
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.label} className="glass-panel p-5">
                  <Icon size={22} className="text-cyan-300" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-6 text-white">{fact.value}</p>
                </div>
              );
            })}
          </Reveal>

          <Reveal className="glass-panel border-emerald-300/20 p-6" delay={0.16}>
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-300 text-slate-950">
                <Target size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Career Objective</h3>
                <p className="mt-2 leading-7 text-slate-300">{profile.objective}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
