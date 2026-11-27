import { config } from "@/config";
import { plans } from "@/data/plans";
import { formatRupiah } from "@/lib/format";

/** Placeholder Fase 1. Dirakit penuh di tugas 3.12. */
export default function App() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6">
      <p className="text-sm text-subtle tracking-[0.18em]">✦ {config.brand}</p>
      <h1 className="text-fade mt-4 text-5xl font-semibold tracking-tight">
        {config.tagline}
      </h1>
      <ul className="mt-10 space-y-2 text-muted">
        {plans.map((p) => (
          <li key={p.id}>
            {p.name}: {formatRupiah(p.price)} {p.priceUnit}
          </li>
        ))}
      </ul>
    </main>
  );
}
