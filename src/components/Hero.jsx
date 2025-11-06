import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              Meet Nothug
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500"> your calm space on the busy web</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-zinc-600 dark:text-zinc-300"
            >
              A minimal, beautiful starter that feels like a hug for your users. Built with React, Tailwind, and thoughtful little details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#get-started" className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">Start Exploring</a>
              <a href="#features" className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800">Learn More</a>
            </motion.div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> Loved by minimalist builders
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-pink-100 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 p-4">
              <div className="h-full w-full rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur flex items-center justify-center">
                <div className="text-center">
                  <p className="text-7xl">🤗</p>
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Gentle vibes, zero noise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
