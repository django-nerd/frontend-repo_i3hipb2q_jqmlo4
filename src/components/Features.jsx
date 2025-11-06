import { CheckCircle2, Sparkles, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished by default',
    desc: 'Thoughtful spacing, crisp typography, and accessible colors out of the box.'
  },
  {
    icon: Shield,
    title: 'Built to scale',
    desc: 'A sensible structure that grows with your product—no rewrites needed.'
  },
  {
    icon: Rocket,
    title: 'Fast by nature',
    desc: 'Vite, React, and Tailwind give you instant feedback and great performance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Why Nothug?</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">A tiny starter that respects your time and your users’ attention.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Ready on day one
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
