import type { PracticeArea } from "@/lib/content";

/** The "What We Cover" list of a practice area. */
export function CoverageList({ items, className = "" }: { items: PracticeArea["coverage"]; className?: string }) {
  return (
    <div className={className}>
      <h3 className="font-display text-xl text-forest-900">What We Cover</h3>
      <ul className="mt-6 grid gap-x-12 gap-y-8 lg:grid-cols-2">
        {items.map((item) => (
          <li key={item.title} className="flex gap-3.5">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-citron-500" />
            <div>
              <h4 className="font-display text-[1.05rem] font-medium text-forest-900">{item.title}</h4>
              <p className="mt-2 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-ink/85">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
