import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import { Github, Linkedin, Instagram, Mail, Sun, Moon } from 'lucide-react';

function Navbar({ theme, toggleTheme }) {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-bold text-slate-900 dark:text-white">
          <span className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">Alex</span>
          <span>.dev</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900 dark:hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white md:text-sm"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  const [theme, setTheme] = useState('system');
  const year = useMemo(() => new Date().getFullYear(), []);

  // Apply theme: 'light' | 'dark' | 'system'
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />

      {/* Contact (inline to keep 4 main components as requested) */}
      <section id="contact" className="relative w-full bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Have a project in mind or just want to say hi? Drop a message and I’ll get back to you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get('name') || '';
                const email = data.get('email') || '';
                const message = data.get('message') || '';
                const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
                window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm text-slate-600 dark:text-slate-300">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-600 dark:text-slate-300">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-600 dark:text-slate-300">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
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

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">I’m active on these platforms:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialLink href="#" icon={Github} label="GitHub" />
                <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={Instagram} label="Instagram" />
                <SocialLink href="#" icon={Mail} label="Email" />
              </div>
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Prefer a quick email? Send a note to
                  <a href="mailto:you@example.com" className="ml-1 bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text font-semibold text-transparent">
                    you@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80 py-8 text-slate-500 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {year} Alex — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-white">Home</a>
            <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white">Work</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm backdrop-blur transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white"
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
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}
