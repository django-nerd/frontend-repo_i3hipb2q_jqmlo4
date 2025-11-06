import { motion } from 'framer-motion';

const steps = [
  {
    step: '1',
    title: 'Connect your tools',
    desc: 'Plug into Slack, Notion, Gmail and more in seconds—no code required.'
  },
  {
    step: '2',
    title: 'Describe your goal',
    desc: 'Tell NeuraFlow what you want. It drafts a plan and confirms before acting.'
  },
  {
    step: '3',
    title: 'Review and ship',
    desc: 'Approve, edit, or run automations. Your flow gets faster every time.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">How it works</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Three steps to a calmer, more focused day.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6"
            >
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Step {s.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
