import { useMemo } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-bold text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Alex</span>
          <span className="text-white">.dev</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white md:text-sm"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />

      {/* Contact (inline to keep 4 main components as requested) */}
      <section id="contact" className="relative w-full bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Have a project in mind or just want to say hi? Drop a message and I’ll get back to you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get('name');
                const email = data.get('email');
                const message = data.get('message');
                const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
                window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Message</label>
                  <textarea
                    required
                    name="message"
                    rows="5"
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="mt-2 text-slate-300">I’m active on these platforms:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialLink href="#" icon={Github} label="GitHub" />
                <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={Instagram} label="Instagram" />
                <SocialLink href="#" icon={Mail} label="Email" />
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">
                  Prefer a quick email? Send a note to
                  <a href="mailto:you@example.com" className="ml-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text font-semibold text-transparent">
                    you@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {year} Alex — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/10"
        aria-label="Scroll to top"
      >
        ↑
      </a>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}
