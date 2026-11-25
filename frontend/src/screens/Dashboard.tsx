// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, Clock, CheckCircle } = Icons;

const hexToRgba = (hex, alpha) => {
  const h = String(hex || "#000000").replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const STATUS_CARDS = [
  {
    id: "i-1-0-0",
    label: "Pending approval",
    value: 7,
    hint: "waiting on a second pair of eyes",
    icon: "Clock",
  },
  {
    id: "i-1-0-1",
    label: "Approved / ready to pay",
    value: 4,
    hint: "treasury can settle these",
    icon: "CheckCircle",
  },
  {
    id: "i-1-0-2",
    label: "Paid (last 30 days)",
    value: 23,
    hint: "marked paid in the bank portal",
    icon: "Check",
  },
  {
    id: "i-1-0-3",
    label: "Rejected",
    value: 2,
    hint: "returned to the maker",
    icon: "X",
  },
];

const AWAITING = [
  {
    id: "i-2-0-0",
    ref: "PAY-1042",
    payee: "Northwind Supplies Ltd",
    amount: "£12,400.00",
    maker: "R. Patel",
    date: "24 Nov 2026",
    details: "Q4 warehouse consumables — inv NW-8841",
    rule: "amount at or above £10,000",
  },
  {
    id: "i-2-0-1",
    ref: "PAY-1039",
    payee: "Ardent Facilities",
    amount: "£8,750.00",
    maker: "J. Okafor",
    date: "23 Nov 2026",
    details: "November cleaning contract",
    rule: "facilities department rule",
  },
  {
    id: "i-2-0-2",
    ref: "PAY-1036",
    payee: "Calder Print Co",
    amount: "£5,120.50",
    maker: "M. Reyes",
    date: "22 Nov 2026",
    details: "Annual report print run",
    rule: "amount at or above £5,000",
  },
];

const PENDING_PAYEES = ["Brightwater Cleaning", "Hale & Sons Joinery", "Orrin Energy"];

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const paper = brand.backgroundColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;

  const line = hexToRgba(ink, 0.13);
  const tintSoft = hexToRgba(ink, 0.05);
  const tintPanel = hexToRgba(ink, 0.08);
  const bodyFont = brand.fontBody;
  const headFont = brand.fontHeading;

  const [phase, setPhase] = React.useState("loading"); // loading | ready | error
  const [syncedAt, setSyncedAt] = React.useState("09:12");
  const [stale, setStale] = React.useState(true);
  const [queue] = React.useState(AWAITING);

  const runs = React.useRef(0);

  // Simulated fetch of GET /dashboard — first load lands slightly stale,
  // a manual refresh drops the connection once, the retry recovers.
  React.useEffect(() => {
    if (phase !== "loading") return undefined;
    const first = runs.current === 0;
    const t = setTimeout(() => {
      runs.current += 1;
      if (runs.current === 2) {
        setPhase("error");
      } else {
        setPhase("ready");
        if (!first) {
          setSyncedAt("11:04");
          setStale(false);
        }
      }
    }, first ? 520 : 780);
    return () => clearTimeout(t);
  }, [phase]);

  const css = `
    @keyframes atr-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes atr-breathe { 0%, 100% { opacity: .45; } 50% { opacity: .18; } }
    @keyframes atr-fade { from { opacity: 0; } to { opacity: 1; } }
    .atr-rise { animation: atr-rise .34s cubic-bezier(.22,.8,.3,1) both; }
    .atr-fade { animation: atr-fade .3s ease-out both; }
    .atr-skel { animation: atr-breathe 1.5s ease-in-out infinite; }
    .atr-focus:focus-visible { outline: 2px solid ${accent}; outline-offset: 3px; }
    .atr-card { transition: background-color .22s ease, transform .22s ease; }
    .atr-card:hover { background-color: ${hexToRgba(ink, 0.11)}; transform: translateY(-2px); }
    .atr-row { transition: background-color .2s ease; }
    .atr-row:hover { background-color: ${hexToRgba(ink, 0.06)}; }
    .atr-row:hover .atr-chev { transform: translateX(3px); }
    .atr-chev { transition: transform .2s ease; }
    .atr-quiet { transition: background-color .2s ease, color .2s ease; }
    .atr-quiet:hover { background-color: ${hexToRgba(ink, 0.07)}; }
    @media (prefers-reduced-motion: reduce) {
      .atr-rise, .atr-fade, .atr-skel { animation: none !important; }
      .atr-card, .atr-row, .atr-chev, .atr-quiet { transition: none !important; transform: none !important; }
    }
  `;

  const Arch = ({ children, size = 44 }) => (
    <span
      aria-hidden="true"
      className="inline-flex items-end justify-center"
      style={{
        width: size,
        height: size * 1.18,
        borderRadius: `${size}px ${size}px 8px 8px`,
        backgroundColor: hexToRgba(accent, 0.22),
        color: ink,
        paddingBottom: 8,
      }}
    >
      {children}
    </span>
  );

  const statusIcon = (name) => {
    const Cmp = Icons[name];
    return <Cmp aria-hidden="true" className="h-5 w-5" style={{ color: ink }} />;
  };

  return (
    <div
      className="min-h-full w-full"
      style={{ backgroundColor: paper, color: ink, fontFamily: bodyFont }}
    >
      <style>{css}</style>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        {/* Row 1 — title + sign out */}
        <div className="grid grid-cols-12 items-start gap-6">
          <div data-wf="b-0-0" className="col-span-12 md:col-span-9">
            <p
              className="text-xs uppercase tracking-[0.18em]"
              style={{ color: muted, letterSpacing: "0.18em" }}
            >
              kkkess · payments desk
            </p>
            <h1
              className="mt-3 text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: headFont, fontStyle: "italic", color: ink }}
            >
              Dashboard
            </h1>
            <p className="mt-3 max-w-[62ch] text-base" style={{ color: hexToRgba(ink, 0.72) }}>
              wednesday, 25 november 2026 — signed in as Dana Whitlock, approver &amp; treasury.
              three payments are waiting on your second signature.
            </p>
          </div>

          <div className="col-span-12 flex flex-col items-start gap-2 md:col-span-3 md:items-end">
            <Button
              data-wf="b-0-1"
              type="button"
              onClick={() => navigate("sign-in")}
              className="atr-focus inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold atr-quiet"
              style={{
                backgroundColor: "transparent",
                color: ink,
                border: `1px solid ${hexToRgba(ink, 0.3)}`,
                borderRadius: 999,
              }}
            >
              <Icons.ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Sign out
            </Button>
            <p className="text-xs md:text-right" style={{ color: muted }}>
              session ends automatically at 17:40 if you go idle
            </p>
          </div>
        </div>

        <div className="mt-8" style={{ height: 1, backgroundColor: line }} />

        {/* Row 2 — payments by status */}
        <section data-wf="b-1-0" aria-labelledby="status-heading" className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                id="status-heading"
                className="text-2xl"
                style={{ fontFamily: headFont, fontStyle: "italic" }}
              >
                Payments by status
              </h2>
              <p className="mt-1 text-sm" style={{ color: muted }}>
                every instruction recorded this cycle, grouped by where it sits in its lifecycle
              </p>
            </div>
            <Button
              type="button"
              onClick={() => navigate("payments")}
              className="atr-focus atr-quiet inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{ backgroundColor: "transparent", color: ink, borderRadius: 999 }}
            >
              Open filtered list
              <Icons.ChevronRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>

          <ul className="mt-6 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {STATUS_CARDS.map((card, i) => (
              <li key={card.id} className="atr-rise" style={{ animationDelay: `${i * 60}ms` }}>
                <button
                  data-wf={card.id}
                  type="button"
                  onClick={() => navigate("payments")}
                  aria-label={`${card.label}: ${card.value} payments. Open the payment list filtered to ${card.label.toLowerCase()}.`}
                  className="atr-card atr-focus flex h-full w-full flex-col items-center gap-3 px-5 pb-6 pt-7 text-center"
                  style={{
                    backgroundColor: tintSoft,
                    border: `1px solid ${line}`,
                    borderRadius: "120px 120px 24px 24px",
                    color: ink,
                  }}
                >
                  <Arch size={40}>{statusIcon(card.icon)}</Arch>
                  <span
                    className="text-4xl font-semibold"
                    style={{ fontVariantNumeric: "tabular-nums", fontFamily: headFont }}
                  >
                    {card.value}
                  </span>
                  <span className="text-sm font-semibold leading-snug">{card.label}</span>
                  <span className="text-xs leading-relaxed" style={{ color: muted }}>
                    {card.hint}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Row 3 — awaiting your approval (focal block) */}
        <section
          data-wf="b-2-0"
          aria-labelledby="awaiting-heading"
          className="mt-12 overflow-hidden"
          style={{
            backgroundColor: tintPanel,
            border: `1px solid ${line}`,
            borderRadius: `${brand.radius}px`,
          }}
        >
          <div
            className="flex flex-wrap items-start justify-between gap-4 px-6 py-6 sm:px-8"
            style={{ borderBottom: `1px solid ${line}` }}
          >
            <div className="flex items-start gap-4">
              <Arch size={44}>
                <Icons.Users aria-hidden="true" className="h-5 w-5" style={{ color: ink }} />
              </Arch>
              <div>
                <h2
                  id="awaiting-heading"
                  className="text-3xl leading-snug"
                  style={{ fontFamily: headFont, fontStyle: "italic" }}
                >
                  Awaiting your approval ({queue.length})
                </h2>
                <p className="mt-1 max-w-[60ch] text-sm" style={{ color: hexToRgba(ink, 0.7) }}>
                  you did not raise any of these, so you may sign them off. open one in payments to
                  approve or reject it.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {phase === "ready" && stale ? (
                <span
                  className="atr-fade inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
                  style={{ backgroundColor: hexToRgba(ink, 0.07), color: hexToRgba(ink, 0.78) }}
                >
                  <Icons.Clock aria-hidden="true" className="h-3.5 w-3.5" />
                  figures from {syncedAt} — a few minutes old
                </span>
              ) : null}
              {phase === "ready" && !stale ? (
                <span
                  className="atr-fade inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
                  style={{ backgroundColor: hexToRgba(ink, 0.07), color: hexToRgba(ink, 0.78) }}
                >
                  <Icons.CheckCircle aria-hidden="true" className="h-3.5 w-3.5" />
                  up to date as of {syncedAt}
                </span>
              ) : null}
              <Button
                type="button"
                onClick={() => setPhase("loading")}
                disabled={phase === "loading"}
                className="atr-focus atr-quiet inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold disabled:opacity-50"
                style={{ backgroundColor: "transparent", color: ink, borderRadius: 999 }}
              >
                <Icons.Download aria-hidden="true" className="h-4 w-4" />
                {phase === "loading" ? "checking…" : "Refresh"}
              </Button>
            </div>
          </div>

          {phase === "loading" ? (
            <div className="px-6 py-4 sm:px-8" aria-live="polite">
              <p className="sr-only">Checking the approval queue.</p>
              {[0, 1, 2].map((n) => (
                <div
                  key={n}
                  className="flex items-center justify-between gap-6 py-5"
                  style={{ borderTop: n === 0 ? "none" : `1px solid ${line}` }}
                >
                  <div className="flex-1 space-y-2">
                    <div
                      className="atr-skel h-4 rounded-full"
                      style={{ backgroundColor: hexToRgba(ink, 0.18), width: "38%" }}
                    />
                    <div
                      className="atr-skel h-3 rounded-full"
                      style={{ backgroundColor: hexToRgba(ink, 0.12), width: "56%", animationDelay: "120ms" }}
                    />
                  </div>
                  <div
                    className="atr-skel h-5 w-28 rounded-full"
                    style={{ backgroundColor: hexToRgba(ink, 0.16), animationDelay: "240ms" }}
                  />
                </div>
              ))}
              <p className="pb-2 pt-1 text-sm" style={{ color: muted }}>
                gathering the queue from the payments service…
              </p>
            </div>
          ) : null}

          {phase === "error" ? (
            <div className="atr-fade px-6 py-8 sm:px-8" role="alert">
              <div className="flex items-start gap-4">
                <Icons.AlertCircle
                  aria-hidden="true"
                  className="mt-0.5 h-6 w-6 shrink-0"
                  style={{ color: ink }}
                />
                <div>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: headFont }}>
                    We couldn&rsquo;t reach the payments service
                  </h3>
                  <p className="mt-2 max-w-[64ch] text-sm" style={{ color: hexToRgba(ink, 0.75) }}>
                    the request timed out on its way to the approval queue. nothing has changed and
                    nobody has been signed out — the three payments last confirmed at {syncedAt} are
                    still waiting for you.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setPhase("loading")}
                    className="atr-focus mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                    style={{ backgroundColor: ink, color: paper, borderRadius: 999 }}
                  >
                    <Icons.ArrowRight aria-hidden="true" className="h-4 w-4" />
                    Try again
                  </Button>
                </div>
              </div>
            </div>
          ) : null}

          {phase === "ready" && queue.length === 0 ? (
            <div className="px-6 py-10 sm:px-8">
              <Empty
                title="nothing is waiting on you"
                description="every payment that met an approval rule has been signed off. new ones will land here and in your inbox the moment a maker submits them."
                action={
                  <Button
                    type="button"
                    onClick={() => navigate("payments")}
                    className="atr-focus inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                    style={{ backgroundColor: ink, color: paper, borderRadius: 999 }}
                  >
                    Go to payments
                  </Button>
                }
              />
            </div>
          ) : null}

          {phase === "ready" && queue.length > 0 ? (
            <ul className="list-none p-0">
              {queue.map((item, i) => (
                <li
                  key={item.id}
                  className="atr-rise"
                  style={{
                    animationDelay: `${i * 70}ms`,
                    borderTop: i === 0 ? "none" : `1px solid ${line}`,
                  }}
                >
                  <button
                    data-wf={item.id}
                    type="button"
                    onClick={() => navigate("payments")}
                    aria-label={`${item.ref}, ${item.payee}, ${item.amount}, created by ${item.maker} on ${item.date}. Open in payments to approve or reject.`}
                    className="atr-row atr-focus grid w-full grid-cols-12 items-center gap-4 px-6 py-5 text-left sm:px-8"
                    style={{ backgroundColor: "transparent", color: ink }}
                  >
                    <span className="col-span-12 sm:col-span-7">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span
                          className="text-sm font-semibold"
                          style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "0.04em" }}
                        >
                          {item.ref}
                        </span>
                        <span aria-hidden="true" style={{ color: hexToRgba(ink, 0.35) }}>
                          ·
                        </span>
                        <span className="text-base font-semibold">{item.payee}</span>
                        <Badge
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                          style={{
                            backgroundColor: hexToRgba(accent, 0.24),
                            color: ink,
                            border: "none",
                            borderRadius: 999,
                          }}
                        >
                          pending approval
                        </Badge>
                      </span>
                      <span className="mt-1.5 block text-sm" style={{ color: hexToRgba(ink, 0.7) }}>
                        {item.details}
                      </span>
                      <span className="mt-1 block text-xs" style={{ color: muted }}>
                        created by {item.maker}, {item.date} · routed by {item.rule}
                      </span>
                    </span>
                    <span className="col-span-10 sm:col-span-4 sm:text-right">
                      <span
                        className="block text-xl font-semibold"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {item.amount}
                      </span>
                      <span className="block text-xs" style={{ color: muted }}>
                        GBP · home currency
                      </span>
                    </span>
                    <span className="col-span-2 flex justify-end sm:col-span-1">
                      <Icons.ChevronRight
                        aria-hidden="true"
                        className="atr-chev h-5 w-5"
                        style={{ color: hexToRgba(ink, 0.55) }}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        {/* Row 4 — two summary cards */}
        <div className="mt-8 grid grid-cols-12 gap-4">
          <Card
            data-wf="b-3-0"
            className="col-span-12 md:col-span-6"
            style={{
              backgroundColor: tintSoft,
              border: `1px solid ${line}`,
              borderRadius: `${brand.radius}px`,
              boxShadow: "none",
            }}
          >
            <CardHeader className="pb-2">
              <CardTitle
                className="text-xl"
                style={{ fontFamily: headFont, fontStyle: "italic", color: ink }}
              >
                <h2 className="text-xl" style={{ fontFamily: headFont, fontStyle: "italic" }}>
                  Payees pending approval — 3
                </h2>
              </CardTitle>
              <CardDescription style={{ color: hexToRgba(ink, 0.7) }}>
                new bank details held in the register until a second person checks them
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2 p-0">
                {PENDING_PAYEES.map((name) => (
                  <li key={name} className="flex items-center gap-2 text-sm">
                    <Icons.Clock
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                      style={{ color: hexToRgba(ink, 0.6) }}
                    />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs" style={{ color: muted }}>
                oldest has been waiting since 21 nov
              </p>
            </CardContent>
          </Card>

          <Card
            data-wf="b-3-1"
            className="col-span-12 md:col-span-6"
            style={{
              backgroundColor: tintSoft,
              border: `1px solid ${line}`,
              borderRadius: `${brand.radius}px`,
              boxShadow: "none",
            }}
          >
            <CardHeader className="pb-2">
              <CardTitle
                className="text-xl"
                style={{ fontFamily: headFont, fontStyle: "italic", color: ink }}
              >
                <h2 className="text-xl" style={{ fontFamily: headFont, fontStyle: "italic" }}>
                  Reconciled / closed this month — 18
                </h2>
              </CardTitle>
              <CardDescription style={{ color: hexToRgba(ink, 0.7) }}>
                matched against the november statement and closed off
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p
                className="text-5xl font-semibold leading-none"
                style={{ fontFamily: headFont, fontVariantNumeric: "tabular-nums" }}
              >
                £146,920.75
              </p>
              <p className="mt-3 text-sm" style={{ color: hexToRgba(ink, 0.7) }}>
                settled and closed between 1 and 25 november
              </p>
              <p className="mt-4 text-xs" style={{ color: muted }}>
                5 paid payments are still open awaiting reconciliation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
