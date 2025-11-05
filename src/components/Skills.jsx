import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', score: 5 },
      { name: 'TypeScript', score: 4 },
      { name: 'Tailwind', score: 5 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', score: 4 },
      { name: 'FastAPI', score: 4 },
      { name: 'MongoDB', score: 4 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', score: 5 },
      { name: 'Figma', score: 4 },
      { name: 'Docker', score: 3 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">A snapshot of the technologies I use to build end-to-end products.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <div className="mt-5 space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                    <ProficiencyDots score={skill.score} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProficiencyDots({ score }) {
  const total = 5;
  return (
    <div className="flex items-center gap-1.5" aria-label={`Proficiency level ${score} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: i * 0.05 }}
          className={`h-2.5 w-2.5 rounded-full ${i < score ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : 'bg-slate-300 dark:bg-white/10'}`}
        />
      ))}
    </div>
  );
}
