'use client'; // This is a client component because it lives in the layout

export default function StagingBadge() {
  // We check the system env variable provided by Vercel
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

  // It only shows up if the environment is specifically 'preview' (which is your main branch)
  if (env !== 'preview') return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none select-none">
      <div className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-3 border border-amber-400/50 transition-all">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="tracking-widest uppercase">Staging Environment</span>
      </div>
    </div>
  );
}
