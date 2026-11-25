// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Input, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { ChevronRight, User, FileText, Clock, Filter, Download, AlertCircle, CheckCircle } = Icons;

// ---------------------------------------------------------------------------
// Atrium · Audit log
// ---------------------------------------------------------------------------

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const hexToRgba = (hex, alpha) => {
  const h = String(hex || "#000000").replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
};

const fmtDay = (iso) => {
  const d = iso.slice(0, 10).split("-");
  return String(Number(d[2])).padStart(2, "0") + " " + MONTHS[Number(d[1]) - 1] + " " + d[0];
};
const fmtTime = (iso) => iso.slice(11, 16);

// Immutable, timestamped record of significant actions ----------------------
const ENTRIES = [
  { id: "AL-10284", ts: "2026-11-25T14:32", actor: "Marta Lindqvist", role: "approver", action: "payment.approved", entityType: "payment", entity: "PMT-2026-0418", detail: "approved £18,400.00 to Brightwell Facilities Ltd · rule “over £10,000” matched" },
  { id: "AL-10283", ts: "2026-11-25T14:05", actor: "Tom Okonkwo", role: "maker", action: "payment.created", entityType: "payment", entity: "PMT-2026-0418", detail: "created £18,400.00 to Brightwell Facilities Ltd · routed to pending approval" },
  { id: "AL-10282", ts: "2026-11-25T09:12", actor: "Priya Raman", role: "auditor", action: "auth.signed_in", entityType: "session", entity: "ses_9f4c", detail: "signed in from 10.4.2.19 · second factor accepted" },
  { id: "AL-10281", ts: "2026-11-24T17:48", actor: "Hannah Bright", role: "treasury", action: "payment.paid", entityType: "payment", entity: "PMT-2026-0411", detail: "marked paid £2,150.00 to Ravensworth Print Co · settled in the bank portal at 17:41" },
  { id: "AL-10280", ts: "2026-11-24T16:20", actor: "Daniel Osei", role: "administrator", action: "approval_rule.updated", entityType: "approval_rule", entity: "RULE-004", detail: "threshold raised from £5,000.00 to £10,000.00 · applies to payments created after 24 Nov" },
  { id: "AL-10279", ts: "2026-11-24T11:34", actor: "Clare Ferreira", role: "approver", action: "payee.bank_change_rejected", entityType: "payee_change", entity: "PCR-2026-0037", detail: "rejected new sort code for Northgate Legal LLP · existing approved details unchanged" },
  { id: "AL-10278", ts: "2026-11-24T10:02", actor: "Yusuf Demir", role: "maker", action: "payee.bank_change_requested", entityType: "payee_change", entity: "PCR-2026-0037", detail: "requested change to Northgate Legal LLP account ••••8812 · held pending a second person" },
  { id: "AL-10277", ts: "2026-11-23T15:55", actor: "Marta Lindqvist", role: "approver", action: "payment.rejected", entityType: "payment", entity: "PMT-2026-0409", detail: "rejected £46,900.00 to Castleton Energy · reason given: invoice reference missing" },
  { id: "AL-10276", ts: "2026-11-23T12:41", actor: "Tom Okonkwo", role: "maker", action: "payment.created", entityType: "payment", entity: "PMT-2026-0409", detail: "created £46,900.00 to Castleton Energy · department: facilities" },
  { id: "AL-10275", ts: "2026-11-23T09:03", actor: "Daniel Osei", role: "administrator", action: "user.deactivated", entityType: "user", entity: "USR-0031", detail: "deactivated the account of Sean Whitby · all sessions revoked" },
  { id: "AL-10274", ts: "2026-11-20T16:12", actor: "Hannah Bright", role: "treasury", action: "payment.reconciled", entityType: "payment", entity: "PMT-2026-0398", detail: "recorded reconciled/closed against the statement line of 19 Nov" },
  { id: "AL-10273", ts: "2026-11-20T14:47", actor: "Hannah Bright", role: "treasury", action: "payment.paid", entityType: "payment", entity: "PMT-2026-0401", detail: "marked paid £7,820.50 to Kinvara Software Ltd" },
  { id: "AL-10272", ts: "2026-11-20T11:19", actor: "Clare Ferreira", role: "approver", action: "payment.approved", entityType: "payment", entity: "PMT-2026-0401", detail: "approved £7,820.50 to Kinvara Software Ltd · maker was Yusuf Demir" },
  { id: "AL-10271", ts: "2026-11-19T18:30", actor: "Priya Raman", role: "auditor", action: "audit_log.exported", entityType: "audit_log", entity: "EXP-2026-0014", detail: "exported 1,102 entries covering 01 Oct – 19 Nov 2026" },
  { id: "AL-10270", ts: "2026-11-19T13:08", actor: "Yusuf Demir", role: "maker", action: "payment.created", entityType: "payment", entity: "PMT-2026-0404", detail: "created £640.00 to Harlow Stationers · below every active rule, approved/ready-to-pay" },
  { id: "AL-10269", ts: "2026-11-18T16:52", actor: "Daniel Osei", role: "administrator", action: "payee.approved", entityType: "payee", entity: "PAY-0119", detail: "approved payee Meadowfield Catering Ltd · account ••••4471, sort code 20-45-••" },
  { id: "AL-10268", ts: "2026-11-18T15:21", actor: "Tom Okonkwo", role: "maker", action: "payee.created", entityType: "payee", entity: "PAY-0119", detail: "registered Meadowfield Catering Ltd · pending a second person before it can be paid" },
  { id: "AL-10267", ts: "2026-11-17T08:57", actor: "Marta Lindqvist", role: "approver", action: "auth.signed_in", entityType: "session", entity: "ses_7b21", detail: "signed in from 10.4.2.44 · second factor accepted" },
  { id: "AL-10266", ts: "2026-11-14T17:05", actor: "Clare Ferreira", role: "approver", action: "payment.approved", entityType: "payment", entity: "PMT-2026-0393", detail: "approved £12,000.00 to Arden & Vale Surveyors" },
  { id: "AL-10265", ts: "2026-11-13T10:26", actor: "Daniel Osei", role: "administrator", action: "approval_rule.created", entityType: "approval_rule", entity: "RULE-006", detail: "new rule “facilities department” · every facilities payment requires a checker" },
  { id: "AL-10264", ts: "2026-11-12T09:44", actor: "Hannah Bright", role: "treasury", action: "payment.paid", entityType: "payment", entity: "PMT-2026-0388", detail: "marked paid £1,395.00 to Corrie Lane Workshop" },
  { id: "AL-10263", ts: "2026-11-10T14:12", actor: "Yusuf Demir", role: "maker", action: "payment.edited", entityType: "payment", entity: "PMT-2026-0386", detail: "amended the payment details before approval · amount unchanged at £3,275.00" },
  { id: "AL-10262", ts: "2026-11-07T11:03", actor: "Tom Okonkwo", role: "maker", action: "payment.created", entityType: "payment", entity: "PMT-2026-0381", detail: "created £28,500.00 to Lathom Construction · routed to pending approval" },
  { id: "AL-10261", ts: "2026-11-05T16:38", actor: "Daniel Osei", role: "administrator", action: "user.created", entityType: "user", entity: "USR-0044", detail: "created the account of Noor Haddad · roles assigned: maker" },
  { id: "AL-10260", ts: "2026-11-04T09:15", actor: "Priya Raman", role: "auditor", action: "auth.signed_in", entityType: "session", entity: "ses_3a88", detail: "second factor failed once, then accepted · access granted at 09:15" },
  { id: "AL-10259", ts: "2026-11-03T13:50", actor: "Clare Ferreira", role: "approver", action: "payee.bank_change_approved", entityType: "payee_change", entity: "PCR-2026-0031", detail: "approved new account for Ravensworth Print Co · requested by Tom Okonkwo" }
];

const DEFAULT_FROM = "2026-11-01";
const DEFAULT_TO = "2026-11-25";
const PERIOD_TOTAL = 1284; // entries held for this period in the sealed log

const ACTORS = Array.from(new Set(ENTRIES.map((e) => e.actor))).sort();
const ACTIONS = Array.from(new Set(ENTRIES.map((e) => e.action))).sort();
const ENTITY_TYPES = ["payment", "payee", "payee_change", "approval_rule", "user", "session", "audit_log"];

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const gold = brand.accentColor;
  const cream = brand.backgroundColor;

  const line = hexToRgba(ink, 0.12);
  const tintSoft = hexToRgba(ink, 0.05);
  const tintPanel = hexToRgba(ink, 0.07);
  const muted = hexToRgba(ink, 0.78);

  const [from, setFrom] = React.useState(DEFAULT_FROM);
  const [to, setTo] = React.useState(DEFAULT_TO);
  const [actor, setActor] = React.useState("any");
  const [action, setAction] = React.useState("any");
  const [entityType, setEntityType] = React.useState("any");

  const [entries, setEntries] = React.useState(ENTRIES);
  const [loading, setLoading] = React.useState(true);
  const [exportState, setExportState] = React.useState("idle"); // idle | working | done
  const [exportFile, setExportFile] = React.useState(null);
  const [newId, setNewId] = React.useState(null);

  const rangeInvalid = from && to && from > to;

  // a short read against the sealed log whenever the window changes
  React.useEffect(() => {
    if (rangeInvalid) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 320);
    return () => clearTimeout(t);
  }, [from, to, actor, action, entityType, rangeInvalid]);

  const exportTimer = React.useRef(null);
  React.useEffect(() => () => clearTimeout(exportTimer.current), []);

  const filtered = React.useMemo(() => {
    if (rangeInvalid) return [];
    return entries.filter((e) => {
      const day = e.ts.slice(0, 10);
      if (from && day < from) return false;
      if (to && day > to) return false;
      if (actor !== "any" && e.actor !== actor) return false;
      if (action !== "any" && e.action !== action) return false;
      if (entityType !== "any" && e.entityType !== entityType) return false;
      return true;
    });
  }, [entries, from, to, actor, action, entityType, rangeInvalid]);

  const isDefaultWindow =
    from === DEFAULT_FROM && to === DEFAULT_TO && actor === "any" && action === "any" && entityType === "any";
  const headingCount = isDefaultWindow ? PERIOD_TOTAL : filtered.length;

  const resetWindow = () => {
    setFrom(DEFAULT_FROM);
    setTo(DEFAULT_TO);
    setActor("any");
    setAction("any");
    setEntityType("any");
  };

  const runExport = () => {
    if (rangeInvalid || exportState === "working") return;
    setExportState("working");
    clearTimeout(exportTimer.current);
    exportTimer.current = setTimeout(() => {
      const file = "audit-log_" + from + "_" + to + ".csv";
      const stamped = {
        id: "AL-" + (10285 + Math.floor(Math.random() * 4)),
        ts: "2026-11-25T15:02",
        actor: "Priya Raman",
        role: "auditor",
        action: "audit_log.exported",
        entityType: "audit_log",
        entity: "EXP-2026-0015",
        detail:
          "exported " +
          headingCount.toLocaleString("en-GB") +
          " entries covering " +
          fmtDay(from) +
          " – " +
          fmtDay(to) +
          " · " +
          file
      };
      setEntries((prev) => [stamped, ...prev]);
      setNewId(stamped.id);
      setExportFile({ name: file, count: headingCount });
      setExportState("done");
    }, 900);
  };

  const fieldStyle = {
    backgroundColor: cream,
    color: ink,
    border: "1px solid " + line,
    borderRadius: "9999px",
    fontFamily: brand.fontBody
  };

  const labelCls = "block text-[12px] tracking-[0.08em] uppercase mb-2";
  const labelStyle = { color: muted, fontFamily: brand.fontBody };

  const headCells = [
    { key: "i-2-0-0", label: "Timestamp", cls: "w-[16%]" },
    { key: "i-2-0-1", label: "Actor", cls: "w-[18%]" },
    { key: "i-2-0-2", label: "Action", cls: "w-[17%]" },
    { key: "i-2-0-3", label: "Entity type", cls: "w-[12%]" },
    { key: "i-2-0-4", label: "Entity", cls: "w-[13%]" },
    { key: "i-2-0-5", label: "Detail", cls: "w-[24%]" }
  ];

  return (
    <div
      className="w-full"
      style={{ backgroundColor: cream, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{`
        @keyframes at-rise { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
        @keyframes at-breathe { 0%,100% { opacity: .40; } 50% { opacity: .75; } }
        .at-new { animation: at-rise .5s cubic-bezier(.2,.7,.3,1) both; }
        .at-skel { animation: at-breathe 1.4s ease-in-out infinite; }
        .at-focus:focus-visible { outline: 2px solid ${gold}; outline-offset: 3px; }
        .at-row { transition: background-color .18s ease; }
        .at-row:hover { background-color: ${hexToRgba(ink, 0.04)}; }
        .at-link { transition: color .15s ease, background-color .15s ease; }
        .at-link:hover { background-color: ${hexToRgba(gold, 0.18)}; }
        .at-cta { transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease; }
        .at-cta:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 10px 24px ${hexToRgba(ink, 0.22)}; }
        .at-cta:active:not(:disabled) { transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .at-new, .at-skel { animation: none !important; }
          .at-cta:hover:not(:disabled) { transform: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1180px] px-6 py-12">
        {/* Row 1 ------------------------------------------------------------ */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <header data-wf="b-0-0" className="col-span-12 lg:col-span-8">
            <h1
              className="italic"
              style={{ fontFamily: brand.fontHeading, fontSize: "40px", lineHeight: 1.15, letterSpacing: "-0.01em" }}
            >
              Audit log
            </h1>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.6]" style={{ color: muted }}>
              every significant action, sealed at the moment it happened — payments made, approved, rejected and
              paid, payees changed, rules edited, sign-ins.
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-[12px]" style={{ color: muted }}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ backgroundColor: tintPanel }}
              >
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                read at 15:02 · new entries appear as actions are recorded
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ backgroundColor: tintPanel }}
              >
                <User className="h-3.5 w-3.5" aria-hidden="true" />
                reading as Priya Raman · auditor
              </span>
            </p>
          </header>

          <div className="col-span-12 lg:col-span-4">
            <div
              className="flex flex-col items-center px-7 pb-7 pt-12 text-center"
              style={{
                backgroundColor: tintPanel,
                borderRadius: "160px 160px " + brand.radius + " " + brand.radius,
                minHeight: "232px"
              }}
            >
              <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: muted }}>
                selected period
              </span>
              <p
                className="mt-2 italic tabular-nums"
                style={{ fontFamily: brand.fontHeading, fontSize: "20px", fontVariantNumeric: "tabular-nums" }}
              >
                {fmtDay(from)} – {fmtDay(to)}
              </p>
              <button
                type="button"
                data-wf="b-0-1"
                onClick={runExport}
                disabled={rangeInvalid || exportState === "working" || headingCount === 0}
                aria-live="polite"
                className="at-cta at-focus mt-5 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold disabled:opacity-45 disabled:cursor-not-allowed"
                style={{ backgroundColor: ink, color: cream, border: "1px solid " + hexToRgba(gold, 0.55) }}
              >
                {exportState === "working" ? (
                  <>
                    <span
                      className="at-skel h-2 w-2 rounded-full"
                      style={{ backgroundColor: cream }}
                      aria-hidden="true"
                    />
                    writing the file…
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Export selected period (CSV)
                  </>
                )}
              </button>

              {exportState === "done" && exportFile ? (
                <p
                  className="at-new mt-4 flex items-start gap-2 rounded-[18px] px-3 py-2 text-left text-[12px] leading-[1.5]"
                  style={{ backgroundColor: hexToRgba(gold, 0.18), color: ink }}
                >
                  <CheckCircle className="mt-[1px] h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    saved <span className="font-semibold">{exportFile.name}</span> ·{" "}
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>
                      {exportFile.count.toLocaleString("en-GB")}
                    </span>{" "}
                    entries. the export itself is now the newest line in the log.
                  </span>
                </p>
              ) : (
                <p className="mt-4 text-[12px] leading-[1.5]" style={{ color: muted }}>
                  one row per entry, with actor, action, item and timestamp.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Row 2 ------------------------------------------------------------ */}
        <section
          data-wf="b-1-0"
          aria-label="Filter audit entries"
          className="mt-10 rounded-[28px] px-6 py-6"
          style={{ backgroundColor: tintSoft, border: "1px solid " + line }}
        >
          <div className="mb-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.14em]" style={{ color: muted }}>
            <Filter className="h-4 w-4" aria-hidden="true" />
            narrow the window
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <Label htmlFor="af-from" className={labelCls} style={labelStyle}>
                from
              </Label>
              <Input
                id="af-from"
                data-wf="i-1-0-0"
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="at-focus h-12 w-full px-5 text-[14px] tabular-nums"
                style={fieldStyle}
              />
            </div>
            <div>
              <Label htmlFor="af-to" className={labelCls} style={labelStyle}>
                to
              </Label>
              <Input
                id="af-to"
                data-wf="i-1-0-1"
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="at-focus h-12 w-full px-5 text-[14px] tabular-nums"
                style={fieldStyle}
              />
            </div>
            <div>
              <Label htmlFor="af-actor" className={labelCls} style={labelStyle}>
                actor
              </Label>
              <Select
                id="af-actor"
                data-wf="i-1-0-2"
                value={actor}
                onChange={(e) => setActor(e.target.value)}
                className="at-focus h-12 w-full px-5 text-[14px]"
                style={fieldStyle}
              >
                <option value="any">any</option>
                {ACTORS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="af-action" className={labelCls} style={labelStyle}>
                action
              </Label>
              <Select
                id="af-action"
                data-wf="i-1-0-3"
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="at-focus h-12 w-full px-5 text-[14px]"
                style={fieldStyle}
              >
                <option value="any">any</option>
                {ACTIONS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="af-entity" className={labelCls} style={labelStyle}>
                entity type
              </Label>
              <Select
                id="af-entity"
                data-wf="i-1-0-4"
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
                className="at-focus h-12 w-full px-5 text-[14px]"
                style={fieldStyle}
              >
                <option value="any">any</option>
                {ENTITY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {rangeInvalid ? (
            <div
              role="alert"
              className="at-new mt-5 flex flex-wrap items-center gap-4 rounded-[20px] px-5 py-4"
              style={{ backgroundColor: hexToRgba(ink, 0.08), border: "1px solid " + hexToRgba(ink, 0.2) }}
            >
              <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-[14px] leading-[1.5]" style={{ color: ink }}>
                the window runs backwards — <span className="font-semibold tabular-nums">{fmtDay(from)}</span> falls
                after <span className="font-semibold tabular-nums">{fmtDay(to)}</span>. your dates are kept as you
                typed them.
              </p>
              <button
                type="button"
                onClick={() => {
                  const a = from;
                  setFrom(to);
                  setTo(a);
                }}
                className="at-focus ml-auto inline-flex min-h-[44px] items-center rounded-full px-5 text-[13px] font-semibold"
                style={{ backgroundColor: cream, color: ink, border: "1px solid " + hexToRgba(ink, 0.25) }}
              >
                swap the dates
              </button>
            </div>
          ) : null}
        </section>

        {/* Row 3 ------------------------------------------------------------ */}
        <section
          data-wf="b-2-0"
          className="mt-8 overflow-hidden"
          style={{
            backgroundColor: hexToRgba("#ffffff", 0.55),
            border: "1px solid " + line,
            borderRadius: brand.radius
          }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 px-7 pb-5 pt-7">
            <h2
              className="italic tabular-nums"
              style={{ fontFamily: brand.fontHeading, fontSize: "26px", fontVariantNumeric: "tabular-nums" }}
            >
              Audit entries ({headingCount.toLocaleString("en-GB")})
            </h2>
            <p className="text-[13px]" style={{ color: muted }}>
              {loading
                ? "reading the sealed log…"
                : isDefaultWindow
                ? "showing the " + filtered.length + " most recent in this period"
                : filtered.length === 1
                ? "1 entry matches these filters"
                : filtered.length + " entries match these filters"}
            </p>
          </div>

          <div style={{ borderTop: "1px solid " + line }} />

          <div className="overflow-x-auto">
            <Table
              className="w-full min-w-[920px] tabular-nums"
              style={{ fontVariantNumeric: "tabular-nums", borderCollapse: "collapse" }}
            >
              <THead>
                <TR style={{ backgroundColor: tintSoft }}>
                  {headCells.map((h) => (
                    <TH
                      key={h.key}
                      data-wf={h.key}
                      scope="col"
                      className={
                        h.cls +
                        " px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] align-middle"
                      }
                      style={{ color: muted, borderBottom: "1px solid " + line }}
                    >
                      {h.label}
                    </TH>
                  ))}
                </TR>
              </THead>
              <TBody>
                {loading ? (
                  [0, 1, 2, 3, 4, 5].map((i) => (
                    <TR key={"sk" + i} style={{ borderBottom: "1px solid " + line }}>
                      {headCells.map((h, j) => (
                        <TD key={h.key} className="px-6 py-5">
                          <span
                            className="at-skel block h-3 rounded-full"
                            style={{
                              backgroundColor: hexToRgba(ink, 0.16),
                              width: j === 5 ? "92%" : j === 1 ? "70%" : "56%",
                              animationDelay: i * 90 + "ms"
                            }}
                          />
                        </TD>
                      ))}
                    </TR>
                  ))
                ) : filtered.length === 0 ? (
                  <TR>
                    <TD colSpan={6} className="px-7 py-10">
                      <Empty
                        title={rangeInvalid ? "The window runs backwards" : "Nothing was recorded in this window"}
                        description={
                          rangeInvalid
                            ? "put the dates back in order and the log will read again — nothing has been lost."
                            : "no entry between " +
                              fmtDay(from) +
                              " and " +
                              fmtDay(to) +
                              " matches those filters. widen the dates or set actor, action and entity type back to any."
                        }
                        action={
                          <button
                            type="button"
                            onClick={resetWindow}
                            className="at-focus inline-flex min-h-[44px] items-center rounded-full px-6 text-[14px] font-semibold"
                            style={{ backgroundColor: ink, color: cream }}
                          >
                            back to 01 – 25 Nov 2026
                          </button>
                        }
                      />
                    </TD>
                  </TR>
                ) : (
                  filtered.map((e) => (
                    <TR
                      key={e.id}
                      className={"at-row align-top" + (e.id === newId ? " at-new" : "")}
                      style={{ borderBottom: "1px solid " + line }}
                    >
                      <TD className="px-6 py-5">
                        <span className="flex items-start gap-3">
                          <span
                            className="mt-[6px] h-2.5 w-2.5 shrink-0 rounded-full"
                            style={{ backgroundColor: hexToRgba(ink, 0.9), boxShadow: "0 0 0 1.5px " + gold }}
                            aria-hidden="true"
                          />
                          <span className="block leading-[1.4]">
                            <time dateTime={e.ts} className="block text-[14px] font-semibold tabular-nums">
                              {fmtDay(e.ts)}
                            </time>
                            <span className="block text-[12px] tabular-nums" style={{ color: muted }}>
                              {fmtTime(e.ts)} · {e.id}
                            </span>
                          </span>
                        </span>
                      </TD>
                      <TD className="px-6 py-5">
                        <span className="flex items-center gap-3">
                          <Avatar name={e.actor} className="h-8 w-8 text-[11px]" />
                          <span className="block leading-[1.4]">
                            <span className="block text-[14px] font-semibold">{e.actor}</span>
                            <span className="block text-[12px]" style={{ color: muted }}>
                              {e.role}
                            </span>
                          </span>
                        </span>
                      </TD>
                      <TD className="px-6 py-5">
                        <Badge
                          className="inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold"
                          style={{
                            backgroundColor: hexToRgba(ink, 0.08),
                            color: ink,
                            border: "1px solid " + hexToRgba(ink, 0.14)
                          }}
                        >
                          {e.action}
                        </Badge>
                      </TD>
                      <TD className="px-6 py-5 text-[13px]" style={{ color: muted }}>
                        {e.entityType}
                      </TD>
                      <TD className="px-6 py-5">
                        {e.entityType === "payment" ? (
                          <button
                            type="button"
                            onClick={() => navigate("payments")}
                            className="at-link at-focus inline-flex min-h-[32px] items-center gap-1 rounded-full px-3 py-1 text-[13px] font-semibold tabular-nums underline underline-offset-4"
                            style={{ color: ink, textDecorationColor: hexToRgba(gold, 0.9) }}
                          >
                            {e.entity}
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                            <span className="sr-only">— open in payments</span>
                          </button>
                        ) : (
                          <span className="text-[13px] tabular-nums" style={{ color: muted }}>
                            {e.entity}
                          </span>
                        )}
                      </TD>
                      <TD className="px-6 py-5 text-[13px] leading-[1.55]" style={{ color: muted }}>
                        {e.detail}
                      </TD>
                    </TR>
                  ))
                )}
              </TBody>
            </Table>
          </div>

          {!loading && filtered.length > 0 ? (
            <div
              className="flex flex-wrap items-center justify-between gap-3 px-7 py-5 text-[12px]"
              style={{ color: muted, borderTop: "1px solid " + line }}
            >
              <span>
                oldest shown: <span className="tabular-nums">{fmtDay(filtered[filtered.length - 1].ts)}</span>
              </span>
              <span>entries are written once; this view never edits them.</span>
            </div>
          ) : null}
        </section>

        {/* Row 4 ------------------------------------------------------------ */}
        <p
          data-wf="b-3-0"
          className="mt-8 flex items-start gap-3 rounded-[24px] px-7 py-6 text-[14px] leading-[1.6]"
          style={{ backgroundColor: tintPanel, color: ink, maxWidth: "80ch" }}
        >
          <FileText className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Audit entries are immutable: they cannot be edited or deleted by any user. Viewing and export are
            restricted to administrators and auditors.
          </span>
        </p>
      </div>
    </div>
  );
}
