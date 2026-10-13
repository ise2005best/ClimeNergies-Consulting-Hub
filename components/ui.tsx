import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "outline-light" | "outline-dark";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-citron-400 text-forest-950 hover:bg-citron-300 focus-visible:outline-citron-400",
  "outline-light":
    "border border-white/90 text-white hover:bg-white hover:text-forest-950 focus-visible:outline-white",
  "outline-dark":
    "border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white focus-visible:outline-forest-900",
};

const buttonSizes = {
  sm: "h-9 px-5",
  md: "h-11 px-6",
  lg: "h-12 px-8",
};

type ButtonStyle = { variant?: ButtonVariant; size?: keyof typeof buttonSizes; className?: string };

export function buttonClasses({ variant = "primary", size = "md", className = "" }: ButtonStyle = {}) {
  return `inline-flex items-center justify-center gap-2 rounded-[3px] font-ui text-sm font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & ButtonStyle) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-360 px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-asap text-lg font-medium ${tone === "light" ? "text-white/90" : "text-forest-900"}`}
    >
      <StepMark className="h-2 w-4.5 text-citron-500" />
      {children}
    </p>
  );
}

/** The brand's stepped line, used before section labels and the active mobile menu link. */
export function StepMark({ className = "", strokeWidth = 1.75 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 18 8" className={className} aria-hidden="true">
      <path d="M0 1.5h7l2.5 5H18" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Renders each line as its own block so headings break exactly where the design does. */
export function SectionHeading({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag
      className={`mt-4 font-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.12] font-normal tracking-[-0.01em] text-balance text-forest-900 ${className}`}
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`space-y-5 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-ink/85 ${className}`}>
      {children}
    </div>
  );
}

const stats = [
  { value: "25+", label: "Years of sector experience" },
  { value: "6", label: "Integrated focus areas" },
];

export function StatsBadge({ className = "" }: { className?: string }) {
  return (
    <dl
      className={`grid grid-cols-2 divide-x divide-forest-900/15 bg-white py-4 text-forest-900 shadow-[0_10px_30px_-12px_rgba(0,42,32,0.35)] ${className}`}
    >
      {stats.map((stat) => (
        // dt comes first for screen readers; flex-col-reverse shows the number on top.
        <div key={stat.label} className="flex flex-col-reverse justify-end px-5">
          <dt className="mt-1.5 font-ui text-xs font-medium tracking-wide text-forest-600 sm:text-sm">{stat.label}</dt>
          <dd className="font-display text-4xl leading-none font-medium sm:text-5xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
