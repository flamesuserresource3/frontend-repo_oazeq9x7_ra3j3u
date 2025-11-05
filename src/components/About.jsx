import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { User, Code, Cpu, Rocket } from 'lucide-react';

export default function About() {
  const items = [
    { icon: User, label: 'Human-centered' },
    { icon: Code, label: 'Clean code' },
    { icon: Cpu, label: 'Performance' },
    { icon: Rocket, label: 'Ship fast' },
  ];

  return (
    <section id="about" className="relative w-full bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              I’m a creative developer focused on building polished, delightful experiences. I blend modern design,
              smooth motion, and robust engineering to turn ideas into products people love.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {items.map(({ icon: Icon, label }, i) => (
                <InteractiveCard key={label} i={i}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30">
                    <Icon className="h-5 w-5 text-slate-900 dark:text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}</span>
                </InteractiveCard>
              ))}
            </div>
          </div>

          {/* Portrait (coming soon) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-xl dark:border-white/10 dark:from-white/5 dark:to-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait coming soon"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent dark:from-slate-950/50" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur dark:bg-white/10 dark:text-white"
            >
              My portrait — coming soon
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InteractiveCard({ children, i }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.08 * i, duration: 0.5 }}
      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm backdrop-blur hover:shadow-md dark:border-white/10 dark:bg-white/5"
    >
      {children}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
      />
    </motion.div>
  );
}
