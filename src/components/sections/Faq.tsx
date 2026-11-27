import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { EditorialBackdrop } from "@/components/ui/EditorialBackdrop";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const reduce = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative isolate overflow-hidden py-20 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_45%_at_20%_50%,rgb(9_10_51/0.65)_0%,transparent_70%)]"
      />
      <EditorialBackdrop variant="section" index="04" label="FAQ" />
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="FAQ"
            lines={["Pertanyaan yang", "sering ditanyain."]}
          />
        </Reveal>

        <div className="mt-14 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <Reveal key={item.id} delay={Math.min(index * 0.04, 0.24)}>
                <GlassCard className="overflow-hidden">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-fg transition-colors hover:text-white md:px-7"
                    >
                      <span>{item.q}</span>
                      <Plus
                        size={18}
                        aria-hidden="true"
                        className={cn(
                          "shrink-0 text-muted transition-transform duration-300",
                          isOpen && "rotate-45 text-fg",
                        )}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-6 py-5 text-[15px] leading-[1.65] text-muted md:px-7">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
