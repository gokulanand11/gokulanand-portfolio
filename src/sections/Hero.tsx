import { motion } from 'framer-motion';
import { BrainCircuit, ChevronDown, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { GitHubMark, LinkedInMark } from '../components/BrandIcons';
import { profile } from '../data/portfolio';

const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInMark },
  { label: 'GitHub', href: profile.github, icon: GitHubMark },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 sm:pt-32"
  >
    <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
          <Sparkles size={16} aria-hidden="true" />
          {profile.role}
        </div>

        <h1 className="text-balance text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block">{profile.name}</span>
          <span className="gradient-text block">{profile.heroTitle}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {profile.intro}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="glass-chip inline-flex items-center gap-2 px-3 py-2">
            <BrainCircuit size={16} className="text-emerald-300" aria-hidden="true" />
            {profile.degree}
          </span>
          <span className="glass-chip inline-flex items-center gap-2 px-3 py-2">
            <MapPin size={16} className="text-amber-300" aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <motion.a
            href={profile.resume}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} aria-hidden="true" />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} aria-hidden="true" />
            Contact Me
          </motion.a>
        </div>

        <div className="mt-8 flex items-center gap-3" aria-label="Social links">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const isEmail = social.label === 'Email';

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        className="relative mx-auto w-full max-w-xl"
        aria-hidden="true"
      >
        <div className="tech-frame glass-panel overflow-hidden p-5">
          <div className="grid gap-4">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                className="h-16 w-16 shrink-0 rounded-lg border border-cyan-300/30 object-cover object-top shadow-glow"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Neural Workspace
                </p>
                <p className="mt-1 text-2xl font-bold text-white">ML + Full Stack</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {['Vision', 'Data', 'Apps'].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-6 h-2 rounded-full bg-slate-800">
                    <motion.div
                      className="h-2 rounded-full bg-cyan-300"
                      initial={{ width: 0 }}
                      animate={{ width: `${68 + index * 9}%` }}
                      transition={{ delay: 0.6 + index * 0.12, duration: 0.9 }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">Active track</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 30 }, (_, index) => (
                  <motion.span
                    key={index}
                    className={`h-8 rounded ${
                      index % 5 === 0
                        ? 'bg-amber-300/70'
                        : index % 3 === 0
                          ? 'bg-emerald-300/60'
                          : 'bg-cyan-300/30'
                    }`}
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.04,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <a
      href="#about"
      className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-lg p-2 text-slate-400 transition hover:text-cyan-200 sm:block"
      aria-label="Scroll to About"
    >
      <ChevronDown size={24} />
    </a>
  </section>
);

export default Hero;
