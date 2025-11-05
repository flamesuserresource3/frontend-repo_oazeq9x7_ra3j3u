import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);
  const translateBg = useTransform(mouseX, [0, 1], ['translate3d(-10px, 0, 0)', 'translate3d(10px, 0, 0)']);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };
    el.addEventListener('mousemove', onMouseMove);
    return () => el.removeEventListener('mousemove', onMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Soft gradient orbs for depth */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ transform: translateBg }}
      >
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </motion.div>

      {/* Content + 3D */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-28 lg:py-32">
        <motion.div
          className="relative z-10"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs text-cyan-100/80">Interactive Portfolio</span>
          </div>
          <AnimatedTitle />
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            I craft delightful web experiences with cutting-edge tech, smooth motion, and a sprinkle of playful 3D.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              About Me
            </a>
          </div>
        </motion.div>

        <div className="relative h-[420px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl pointer-events-none" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedTitle() {
  const text = "Hi, I'm Alex — a Creative Web Engineer";
  const characters = text.split('');
  return (
    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
      <span className="sr-only">{text}</span>
      <AnimatePresence>
        <div aria-hidden className="flex flex-wrap">
          {characters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * i, duration: 0.4 }}
              className="mr-[0.02em] inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </div>
      </AnimatePresence>
    </h1>
  );
}
