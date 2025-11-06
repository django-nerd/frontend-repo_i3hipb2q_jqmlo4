import { motion } from 'framer-motion';
import { Sparkles, Workflow, Shield, Timer } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Smart Summaries',
    desc: 'Turn long docs, meetings, and threads into crisp action items.'
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    desc: 'Trigger multi-step automations across your tools with natural language.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'End-to-end encryption and on-device processing where it matters.'
  },
  {
    icon: Timer,
    title: 'Focus Mode',
    desc: 'Timebox, block distractions, and let NeuraFlow guard your deep work.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5 } })
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Features that feel like magic</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Everything you need to move from chaos to clarity—beautifully packaged.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
