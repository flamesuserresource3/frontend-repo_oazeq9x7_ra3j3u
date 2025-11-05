import { motion } from 'framer-motion';
import { User, Code, Cpu, Rocket } from 'lucide-react';

export default function About() {
  const items = [
    { icon: User, label: 'Human-centered' },
    { icon: Code, label: 'Clean code' },
    { icon: Cpu, label: 'Performance' },
    { icon: Rocket, label: 'Ship fast' },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            I’m a creative developer focused on building polished, delightful experiences. I blend modern design,
            smooth motion, and robust engineering to turn ideas into products people love.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-100">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
