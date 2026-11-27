interface AnalyticsWindow extends Window {
  plausible?: (
    event: string,
    options?: { props?: Record<string, string> },
  ) => void;
  umami?: {
    track: (event: string, data?: Record<string, string>) => void;
  };
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, string>,
  ) => void;
}

/** Catat event klik tombol pemesanan ke analytics yang terpasang (Plausible / Umami / GA4). */
export function trackOrderClick(source: string, plan?: string): void {
  const props = { source, plan: plan ?? "general" };
  const w = window as AnalyticsWindow;
  w.plausible?.("order_click", { props });
  w.umami?.track("order_click", props);
  w.gtag?.("event", "order_click", props);
}
