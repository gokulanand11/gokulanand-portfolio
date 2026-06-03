import { Mail } from 'lucide-react';
import { GitHubMark, LinkedInMark } from '../components/BrandIcons';
import { profile } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div>
          <p className="font-semibold text-white">
            Copyright {year} {profile.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Built with React + TypeScript + Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3" aria-label="Footer social links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="GitHub"
          >
            <GitHubMark className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="LinkedIn"
          >
            <LinkedInMark className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="Email"
          >
            <Mail size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
