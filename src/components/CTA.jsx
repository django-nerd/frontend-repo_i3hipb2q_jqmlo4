export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 50%, white 0, transparent 40%)' }} />
          <div className="relative p-10 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Find your flow in minutes</h3>
              <p className="mt-3 text-white/90">Start free. Upgrade when you’re ready. NeuraFlow grows with your team.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-zinc-900 hover:bg-zinc-100">Create your account</a>
                <a href="#features" className="inline-flex items-center rounded-full bg-white/10 px-5 py-3 text-white ring-1 ring-inset ring-white/40 hover:bg-white/20">See Features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
