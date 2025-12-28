'use client';

export default function StagingBadge() {
  // 1. Check the Vercel Environment (Preview = Staging)
  // 2. Check the Branch Name (If branch is 'main', it's Staging)
  const isStaging =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'main';

  // If it's production or local dev (without the flag), don't show anything
  if (!isStaging) return null;

  return (
    <div className="fixed top-4 left-4 z-[10000]">
      <div className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg animate-pulse">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>
        STAGING ENVIRONMENT
      </div>
    </div>
  );
}
