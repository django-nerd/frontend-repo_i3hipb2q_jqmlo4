import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const data = [
  {
    quote: 'NeuraFlow feels like hiring a Chief of Staff who never sleeps. Our team ships faster with fewer meetings.',
    name: 'Ava Martinez',
    role: 'Head of Ops, NovaLab'
  },
  {
    quote: 'The focus mode + summaries combo changed how I work. It’s the first AI that reduces noise.',
    name: 'Liam Chen',
    role: 'PM, Orbit'
  },
  {
    quote: 'Plugged into Notion and Slack in minutes. Now I start the day with a clean, prioritized plan.',
    name: 'Sophia Patel',
    role: 'Founder, Haze'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Loved by focused teams</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">A few kind words from people finding their flow.</p>

        <div className="mt-10 relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-zinc-800 dark:text-zinc-100"
              >
                “{data[index].quote}”
                <footer className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
                  — {data[index].name}, {data[index].role}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
