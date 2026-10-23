import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import loaderImg from "@/assets/loader.jpg";

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
        className="absolute inset-0 bg-[oklch(0.62_0.15_150)] opacity-65"
        style={{ clipPath: "polygon(0 35%, 45% 0, 52% 0, 0 65%)" }}
      />
      <div
        className="absolute inset-0 bg-[oklch(0.62_0.15_150)] opacity-65"
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
          <img src="/images/emblem.png" alt="Emblem of India" />
         
        </div>
        {/* <div className="flex min-w-0 items-center gap-2 sm:gap-5 [&>img]:mix-blend-multiply [&>img]:h-14 sm:[&>img]:h-16 md:[&>img]:h-20 [&>img]:w-auto">
        </div> */}

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
function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);

    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-card">
      <div className="relative h-27 w-27">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-stone-200" />
        <img src={loaderImg} alt="Loading" className="absolute inset-2 h-23 w-23 rounded-full object-cover" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <Loader />
      {/* Our navbar component from above */}
      <Header />
      <main className="min-h-screen bg-muted px-3 py-12">
        <div className="mx-auto max-w-md rounded-md bg-card p-6 shadow-[0_-6px_12px_-4px_oklch(0_0_0/0.35),0_4px_10px_oklch(0_0_0/0.1)]">
          <table className="w-full border-collapse text-[15px] text-foreground">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? "bg-muted/1" : "bg-card"}>
                  <td className="w-[40%] border border-border px-2.5 py-2.5 align-top">{k}</td>
                  
                  <td className="border border-border px-2.5 py-2.5 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
        <Footer />
      
    </>
  );
}

const footerLogos: [string, string, boolean][] = [
  ["f-datagov", "data.gov.in", false],
  ["f-indiagov", "india.gov.in", true],
  ["f-pmindia", "PM India", true],
  ["f-makeinindia", "Make in India", true],
  ["f-digitalindia", "Digital India", true],
  ["f-mygov", "MyGov", true],
  ["f-iyc", "International Year of Cooperatives 2025", true],
];
const links1 = ["Website Policy", "Mobile App Privacy Policy", "Terms & Conditions", "Accessibility Statement", "Web Information Manager"];
const links2 = ["Feedback", "Sitemap", "Contact Us", "Vacancies", "Product & Services", "Pricing", "Cancellation Policy", "Grievance Management Policy"];

function LinkRow({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-y-1 text-[15px] sm:text-[17px]">
      {items.map((l, i) => (
        <li key={l} className={`px-3 ${i < items.length - 1 ? "border-r-2 border-[oklch(1_0_0)]" : ""}`}>
          <a href="#" className="hover:underline">{l}</a>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const stamp = now
    ? now.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true })
    : "";
  return (
    <footer
      className="px-2 py-14 text-center text-[oklch(1_0_0)] sm:px-6"
      style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.11 170), oklch(0.42 0.1 250))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {footerLogos.map(([f, alt, boxed]) => (
          <img
            key={f}
            src={`/images/${f}.png`}
            alt={alt}
            className={`h-[45px] w-auto ${boxed ? "" : "mix-blend-screen"}`}
          />
        ))}
      </div>
      <div className="mt-12 space-y-8">
        <LinkRow items={links1} />
        <div>
          <LinkRow items={links2} />
          <p className="mt-3 text-[17px]">Last Updated: 30-01-2024 12:16:17</p>
        </div>
      </div>
      <p className="mt-4 text-[17px]">
        Website Developed &amp; Maintained by Office of the Registrar General &amp; Census Commissioner of India
      </p>
      <p className="mt-5 text-[17px]">Ministry of Home Affairs</p>
      <p className="mt-6 text-[17px]">
        © {now ? now.getFullYear() : 2026} -The Registrar General &amp; Census Commissioner of India -{" "}
        <svg className="inline h-4 w-4 align-[-2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>{" "}
        {stamp}
      </p>
    </footer>
  );
}
