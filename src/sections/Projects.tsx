import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GitHubMark } from '../components/BrandIcons';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

const Projects = () => (
  <section id="projects" className="relative scroll-mt-24">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Applied AI, web, and automation work"
        description="A practical collection of learning platforms, vision systems, damage analysis, and weather dashboards built with modern web and AI tools."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <motion.article
              className="group glass-panel h-full overflow-hidden"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading={index > 1 ? 'lazy' : 'eager'}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute right-4 top-4 rounded-lg border border-white/15 bg-slate-950/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
                  Project 0{project.id}
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-slate-500 transition group-hover:text-cyan-300"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GitHubMark className="h-5 w-5" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
