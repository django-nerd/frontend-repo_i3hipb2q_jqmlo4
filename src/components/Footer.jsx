export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {year} NeuraFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Terms</a>
            <a href="mailto:hello@neuraflow.ai" className="hover:text-zinc-900 dark:hover:text-zinc-200">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
