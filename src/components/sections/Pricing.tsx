import { Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildOrderUrl } from "@/config";
import { plans } from "@/data/plans";
import { trackOrderClick } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { formatRupiah } from "@/lib/format";

export function Pricing() {
  return (
    <section id="paket" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Paket"
            lines={["Pilih paket yang", "paling pas buat kamu."]}
            subtext="Semua paket lewat Google Family Sharing dan memakai akun Google pribadi kamu."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, index) => {
            const isSolid = Boolean(plan.highlighted);
            // Mobile & Tablet: Shared tampil pertama; Desktop: urutan asli (Squad, Shared, Private)
            const orderClass = isSolid
              ? "order-first lg:order-none lg:-my-4"
              : undefined;

            return (
              <Reveal key={plan.id} delay={index * 0.08} className={orderClass}>
                <GlassCard
                  as="article"
                  variant={isSolid ? "solid" : "glass"}
                  className={cn(
                    "flex h-full flex-col justify-between p-7 md:p-8",
                    isSolid && "lg:py-10",
                  )}
                >
                  <div>
                    <p
                      className={cn(
                        "text-xs font-medium uppercase tracking-[0.12em]",
                        isSolid ? "text-bg/60" : "text-subtle",
                      )}
                    >
                      {plan.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                      {plan.name}
                    </h3>

                    <div className="mt-6 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                      <span className="text-[40px] font-semibold leading-none tracking-[-0.04em] sm:text-[44px] xl:text-[52px]">
                        {formatRupiah(plan.price)}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          isSolid ? "text-bg/65" : "text-muted",
                        )}
                      >
                        {plan.priceUnit}
                      </span>
                    </div>

                    {plan.priceNote && (
                      <p
                        className={cn(
                          "mt-2 text-xs",
                          isSolid ? "text-bg/60" : "text-subtle",
                        )}
                      >
                        {plan.priceNote}
                      </p>
                    )}

                    {plan.warning && (
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-bg">
                        <AlertCircle size={14} aria-hidden="true" className="shrink-0" />
                        <span>{plan.warning}</span>
                      </div>
                    )}

                    <ul
                      className={cn(
                        "mt-6 space-y-3 border-t pt-6 text-sm",
                        isSolid ? "border-bg/12 text-bg/80" : "border-line text-muted",
                      )}
                    >
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check
                            size={16}
                            aria-hidden="true"
                            className={cn(
                              "mt-0.5 shrink-0",
                              isSolid ? "text-bg" : "text-fg",
                            )}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      href={buildOrderUrl(plan.name)}
                      variant="primary"
                      icon
                      onClick={() => trackOrderClick("pricing", plan.id)}
                      className={cn(
                        "w-full",
                        isSolid &&
                          "bg-bg bg-none text-fg animate-none hover:bg-bg/90 hover:shadow-[0_0_24px_rgb(18_18_18/0.25)]",
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted">
            Harga dapat berubah sewaktu-waktu. Konfirmasi ke admin sebelum transaksi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
