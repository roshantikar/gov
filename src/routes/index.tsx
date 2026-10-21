import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Death Registration Record" },
      { name: "description", content: "Mobile-first registration record card practice page." },
      { property: "og:title", content: "Death Registration Record" },
      {
        property: "og:description",
        content: "Mobile-first registration record card practice page.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const rows: [string, string][] = [
  ["Registration Number", "14"],
  ["NAME", "NARMADABAI VINAYAK SHELKE"],
  ["GENDER", "FEMALE"],
  ["DOD", "14-12-2025"],
  ["Name Of Mother", "NA"],
  ["Name Of Father", "NA"],
  ["Place of Death", "KAJEGAON,/ काजेगाव, "],
  ["Registration Date", "28-12-2025"],
  ["Registration Unit Name", "GRAM PANCHAYAT, KAJEGAON"],
  
  ["Registration Unit Code", "03187"],
];

/* ---------------- HEADER / NAVBAR ----------------
   Layout idea: one horizontal row.
   Left side  -> 3 logos (RGI, Azadi ka Amrit Mahotsav, Emblem)
   Right side -> hamburger menu
*/
function Header() {
  return (
    // <header>: white bar, sticky to the top, soft shadow below it
    // "relative overflow-hidden" lets us draw the decorative stripes inside
    <header className="sticky top-0 z-10 overflow-hidden bg-card shadow-md">
      {/* Thin orange line at the very top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[oklch(0.75_0.17_55)]" />

      {/* Green diagonal bands. clip-path: polygon(x y, ...) cuts a div into any shape.
          Left band: thick on the left edge, slopes up and ends at the top around 45% width.
          Right band: starts at top ~60% width and slopes down to the right edge. */}
      <div
        className="absolute inset-0 bg-[oklch(0.62_0.15_150)]"
        style={{ clipPath: "polygon(0 35%, 45% 0, 52% 0, 0 65%)" }}
      />
      <div
        className="absolute inset-0 bg-[oklch(0.62_0.15_150)]"
        style={{ clipPath: "polygon(60% 0, 68% 0, 100% 30%, 100% 55%)" }}
      />

      {/* Main row. max-w-6xl + mx-auto = on desktop the content stays centered
          and does not stretch edge to edge. sm:/md: = bigger sizes on larger screens */}
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-6 md:py-3">
        {/* LEFT GROUP: logos. mix-blend-multiply hides their white background */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-5 [&>img]:mix-blend-multiply [&>img]:h-14 sm:[&>img]:h-16 md:[&>img]:h-20 [&>img]:w-auto">
          {/* h-12 fixes the height; w-auto keeps the image proportions */}
          <img src="/images/rgi.png" alt="Registrar General India" />
          <img src="/images/azadi.png" alt="Azadi ka Amrit Mahotsav" />
          <img src="/images/emblem.png" alt="Satyamev Jayate" />
        </div>

        {/* Menu action */}
        <div className="flex shrink-0 items-center">
          {/* Hamburger menu: three horizontal lines */}
          <button aria-label="Menu" className="p-1">
            <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ---------------- PAGE ----------------
   Header on top, then the record card below it.
*/
function Index() {
  return (
    <>
      {/* Our navbar component from above */}
      <Header />
      <main className="min-h-screen bg-muted px-3 py-12">
        <div className="mx-auto max-w-md rounded-md bg-card p-6 shadow-[0_-6px_12px_-4px_oklch(0_0_0/0.35),0_4px_10px_oklch(0_0_0/0.1)]">
          <table className="w-full border-collapse text-[15px] text-foreground">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? "bg-muted/60" : "bg-card"}>
                  <td className="w-[45%] border border-border px-2.5 py-2.5 align-top">{k}</td>
                  <td className="border border-border px-2.5 py-2.5 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
