import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NeoUI Design System',
    category: 'Web',
    desc: 'A sleek component library with motion-first interactions.',
    demo: '#',
    thumb:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Vision AI Dashboard',
    category: 'AI Projects',
    desc: 'Realtime insights with charts, streaming data, and alerts.',
    demo: '#',
    thumb:
      'https://images.unsplash.com/photo-1551281044-8d8d6df13a6c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    category: 'Design',
    desc: 'Immersive portfolio theme with 3D and parallax.',
    demo: '#',
    thumb:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
];

const categories = ['All', 'Web', 'Design', 'AI Projects'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = projects.filter((p) => (filter === 'All' ? true : p.category === filter));

  return (
    <section id="portfolio" className="relative w-full bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Work</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">A curated selection of recent projects and explorations.</p>
          </div>
          <a
            href="#all-projects"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
          >
            View All Projects
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                filter === c
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white'
                  : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-slate-950/60" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white shadow-cyan-500/20 hover:opacity-95"
                    >
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                    <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                      Details <Info className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
