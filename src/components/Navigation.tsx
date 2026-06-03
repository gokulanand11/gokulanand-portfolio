import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navItems, profile } from '../data/portfolio';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);

    navigate(`/#${id}`);
    setIsMenuOpen(false);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5 sm:px-6"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-slate-950/72 px-3 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-4"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={handleNavigate('#home')}
          className="flex min-w-0 items-center gap-3 rounded-lg px-2 py-1"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
            GM
          </span>
          <span className="hidden min-w-0 text-sm font-semibold text-white sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavigate(item.href)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white/10 text-cyan-200'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          onClick={handleNavigate('#contact')}
          className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-lg border border-white/10 bg-slate-950/92 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigate(item.href)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-cyan-300/12 text-cyan-200' : 'text-slate-300 hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
