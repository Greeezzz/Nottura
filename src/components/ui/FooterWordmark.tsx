/** Wordmark raksasa di paling bawah Footer dengan radial navy glow lembut. */
export function FooterWordmark() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate overflow-hidden py-8 select-none md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_85%_at_50%_60%,rgb(9_10_51/0.85)_0%,transparent_75%)]" />
      <p
        className="wordmark text-center text-[clamp(56px,15vw,210px)] leading-[0.95]"
        style={{ letterSpacing: "-0.05em" }}
      >
        NOTTURA
      </p>
    </div>
  );
}
