import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/80 dark:from-black/40 dark:via-black/20 dark:to-black/80 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y, opacity }} className="py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md"
            >
              Supercharge your flow with
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400"> NeuraFlow</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-zinc-200 max-w-2xl"
            >
              Your AI productivity copilot that summarizes, plans, and automates your busywork—so you can focus on deep work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <a href="#get-started" className="inline-flex items-center rounded-full bg-white/90 text-zinc-900 px-6 py-3 font-medium shadow-lg shadow-indigo-500/20 hover:bg-white">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center rounded-full bg-zinc-900/50 text-white ring-1 ring-white/20 px-6 py-3 hover:bg-zinc-900/60">
                Explore features
              </a>
            </motion.div>

            <div className="mt-6 text-sm text-zinc-300">
              No credit card required • Free forever plan
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
