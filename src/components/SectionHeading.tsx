import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

const SectionHeading = ({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) => (
  <Reveal
    className={`mx-auto mb-12 max-w-3xl ${
      align === 'center' ? 'text-center' : 'text-left'
    }`}
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
    <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
  </Reveal>
);

export default SectionHeading;
