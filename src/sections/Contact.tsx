import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { LinkedInMark } from '../components/BrandIcons';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gokulanand-m',
    href: profile.linkedin,
    icon: LinkedInMark,
  },
  {
    label: 'Location',
    value: profile.location,
    href: '#contact',
    icon: MapPin,
  },
];

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something useful"
          description="Reach out for project discussions, internship opportunities, collaborations, or AI and web development ideas."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isExternal = item.label === 'LinkedIn';
              const isLocation = item.label === 'Location';

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={isLocation ? (event) => event.preventDefault() : undefined}
                  className="glass-panel flex items-center gap-4 p-5 transition hover:border-cyan-300/30"
                  whileHover={{ x: 6 }}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-300 text-slate-950">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words font-semibold text-white">
                      {item.value}
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </Reveal>

          <Reveal className="glass-panel p-5 sm:p-7" delay={0.1}>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-cyan-300"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-cyan-300"
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-cyan-300"
                />
              </label>

              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-cyan-300"
                />
              </label>

              <motion.button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} aria-hidden="true" />
                Send Message
              </motion.button>

              {sent && (
                <p className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-100">
                  Your email app should open with the message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
