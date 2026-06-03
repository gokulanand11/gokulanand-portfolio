import { motion } from 'framer-motion';
import { Award, BadgeCheck, CalendarDays } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

const Certifications = () => (
  <section id="certifications" className="relative scroll-mt-24">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Structured learning milestones"
        description="Courses and credentials that support programming fundamentals, foundational learning, and design-centered thinking."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((certification, index) => (
          <Reveal key={certification.id} delay={index * 0.08}>
            <motion.article className="glass-panel h-full p-6" whileHover={{ y: -6 }}>
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-violet-300 text-slate-950">
                  <Award size={23} aria-hidden="true" />
                </div>
                <BadgeCheck size={22} className="text-emerald-300" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold leading-7 text-white">{certification.title}</h3>
              <p className="mt-3 text-sm font-semibold text-cyan-200">{certification.provider}</p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                <CalendarDays size={16} aria-hidden="true" />
                {certification.year}
              </p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
