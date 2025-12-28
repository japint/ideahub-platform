'use client';

export default function StagingBadge() {
  // We use the custom variable we set in Vercel Settings
  // Ensure you added NEXT_PUBLIC_IS_STAGING = true in Vercel for 'Preview' only
  const isStaging = process.env.NEXT_PUBLIC_IS_STAGING === 'true';

  // For debugging locally or in Vercel:
  // console.log('Is Staging:', isStaging);

  if (!isStaging) return null;

  return (
    <div className="fixed top-6 left-6 z-[9999] pointer-events-none select-none">
      <div className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-3 border border-amber-400/50">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="tracking-widest uppercase">Staging Environment</span>
      </div>
    </div>
  );
}
