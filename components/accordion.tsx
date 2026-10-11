"use client";

import { useId, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type Item = { title: string; description: string };

export function Accordion({ items, className = "" }: { items: Item[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className={`border-t border-forest-900/20 ${className}`}>
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${id}-button-${i}`;
        const panelId = `${id}-panel-${i}`;
        return (
          <div key={item.title} className="border-b border-forest-900/20">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-[1.05rem] text-forest-900 transition-colors hover:text-forest-700"
              >
                <span className={open ? "font-medium" : ""}>{item.title}</span>
                {open ? (
                  <LuMinus className="size-5 shrink-0" aria-hidden />
                ) : (
                  <LuPlus className="size-5 shrink-0" aria-hidden />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-ink/85">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
