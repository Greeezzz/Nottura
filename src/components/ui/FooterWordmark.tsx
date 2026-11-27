/** Wordmark raksasa, terpotong separuh oleh batas bawah. Taruh di paling bawah Footer. */
export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="h-[clamp(40px,9vw,130px)] overflow-hidden select-none">
      <p
        className="wordmark text-center text-[clamp(72px,18vw,260px)]"
        style={{ letterSpacing: "-0.05em" }}
      >
        NOTTURA
      </p>
    </div>
  );
}
