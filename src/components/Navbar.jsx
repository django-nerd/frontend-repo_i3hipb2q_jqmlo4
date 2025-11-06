import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Nothug</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Features</a>
            <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">About</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">Get Started</a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 rounded-lg border border-zinc-200 dark:border-zinc-800 p-2 bg-white dark:bg-zinc-900">
              <a href="#features" className="block rounded-md px-3 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800">Features</a>
              <a href="#about" className="block rounded-md px-3 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800">About</a>
              <a href="#contact" className="block rounded-md px-3 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800">Contact</a>
              <a href="#get-started" className="block rounded-md px-3 py-2 font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
