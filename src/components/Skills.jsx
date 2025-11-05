import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind', level: 85 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'FastAPI', level: 70 },
      { name: 'MongoDB', level: 72 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Docker', level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
        <p className="mt-3 max-w-2xl text-slate-300">A snapshot of the technologies I use to build end-to-end products.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <div className="mt-5 space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
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
