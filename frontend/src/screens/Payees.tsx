// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Table, THead, TBody, TR, TH, TD, Tabs, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, Check, X, ChevronRight, Clock, Edit, AlertCircle, CheckCircle } = Icons;

const ME = "S. Lang";

const rgba = (hex, a) => {
  const h = String(hex).replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

// name, account_name, sort_code, account_number, created_by, approved_by, created_at
const APPROVED_ROWS = [
  ["Northwind Supplies Ltd", "Northwind Supplies Ltd", "20-00-00", "12344471", "R. Patel", "S. Lang", "12 Oct 2026"],
  ["Brightwater Facilities Ltd", "Brightwater Facilities", "30-96-17", "44820913", "D. Okafor", "M. Whitfield", "04 Sep 2026"],
  ["Harrow & Vine Catering", "Harrow and Vine Ltd", "60-12-44", "77203118", "S. Lang", "J. Crowley", "19 Aug 2026"],
  ["Kestrel Print Works", "Kestrel Print Works Ltd", "04-00-04", "10029384", "R. Patel", "M. Whitfield", "22 Jul 2026"],
  ["Oakfield Grounds Care", "Oakfield Grounds Care", "09-01-28", "55610074", "T. Nakamura", "S. Lang", "03 Nov 2026"],
  ["Pennine Freight Services", "Pennine Freight Ltd", "23-05-80", "31887240", "D. Okafor", "J. Crowley", "28 Jun 2026"],
  ["Lumen Energy (UK)", "Lumen Energy UK Ltd", "40-11-60", "60114237", "E. Hollis", "M. Whitfield", "15 May 2026"],
  ["Saltmarsh Legal LLP", "Saltmarsh Legal LLP", "16-00-29", "20947165", "S. Lang", "J. Crowley", "09 Apr 2026"],
  ["Cobalt IT Partners", "Cobalt IT Partners Ltd", "53-70-11", "88412039", "R. Patel", "S. Lang", "30 Oct 2026"],
  ["Fernway Interiors", "Fernway Interiors Ltd", "20-45-77", "13058824", "T. Nakamura", "M. Whitfield", "11 Mar 2026"],
  ["Marlow Street Property", "Marlow Street Property Co", "30-00-01", "70235519", "E. Hollis", "J. Crowley", "06 Feb 2026"],
  ["Thornbury Security", "Thornbury Security Ltd", "12-24-81", "46701283", "D. Okafor", "S. Lang", "17 Jan 2026"],
  ["Glasshouse Cleaning Co", "Glasshouse Cleaning Co", "60-83-02", "29183740", "R. Patel", "M. Whitfield", "24 Sep 2026"],
  ["Rook & Barrow Design", "Rook and Barrow Ltd", "09-12-55", "51209866", "S. Lang", "J. Crowley", "02 Oct 2026"],
  ["Highfield Occupational Health", "Highfield Occ Health Ltd", "40-27-19", "33678102", "T. Nakamura", "M. Whitfield", "13 Aug 2026"],
  ["Everlyn Stationery", "Everlyn Stationery Ltd", "23-14-70", "90341228", "E. Hollis", "S. Lang", "21 Jul 2026"],
  ["Caulfield Plumbing", "Caulfield Plumbing Ltd", "05-00-33", "17744902", "D. Okafor", "J. Crowley", "08 Jun 2026"],
  ["Ashgrove Nursery Trust", "Ashgrove Nursery Trust", "60-40-05", "24910378", "R. Patel", "M. Whitfield", "29 May 2026"],
  ["Linden Hall Conferencing", "Linden Hall Ltd", "20-70-93", "62385014", "S. Lang", "J. Crowley", "14 Apr 2026"],
  ["Quarrybank Recycling", "Quarrybank Recycling Ltd", "30-65-22", "48120967", "T. Nakamura", "S. Lang", "27 Mar 2026"],
  ["Westmoor Translation", "Westmoor Translation Ltd", "16-58-40", "75602311", "E. Hollis", "M. Whitfield", "05 Mar 2026"],
  ["Pelham Archive Storage", "Pelham Archive Ltd", "09-33-18", "11298457", "D. Okafor", "J. Crowley", "18 Feb 2026"],
  ["Bramble Lane Signage", "Bramble Lane Ltd", "40-05-62", "83017426", "R. Patel", "S. Lang", "07 Jan 2026"],
  ["Cedarworks Joinery", "Cedarworks Joinery Ltd", "53-61-07", "35890142", "S. Lang", "M. Whitfield", "10 Nov 2026"],
  ["Vantage Travel Management", "Vantage Travel Ltd", "23-99-01", "50713368", "T. Nakamura", "J. Crowley", "16 Oct 2026"],
  ["Oriel Audit Services", "Oriel Audit LLP", "20-18-37", "64029915", "E. Hollis", "S. Lang", "23 Sep 2026"],
  ["Keeling Water Supply", "Keeling Water Plc", "60-02-14", "28471503", "D. Okafor", "M. Whitfield", "12 Aug 2026"],
  ["Southgate Couriers", "Southgate Couriers Ltd", "30-80-46", "91336027", "R. Patel", "J. Crowley", "01 Jul 2026"],
  ["Ivyhouse Catering Supplies", "Ivyhouse Ltd", "04-29-11", "72054189", "S. Lang", "M. Whitfield", "20 Jun 2026"],
  ["Fairwind Insurance Brokers", "Fairwind Brokers Ltd", "16-91-05", "39628740", "T. Nakamura", "S. Lang", "09 May 2026"],
  ["Meridian Lab Equipment", "Meridian Lab Ltd", "40-44-28", "15903462", "E. Hollis", "J. Crowley", "25 Apr 2026"],
  ["Tarnbrook Consulting", "Tarnbrook Consulting Ltd", "09-07-90", "86215074", "D. Okafor", "M. Whitfield", "03 Apr 2026"],
  ["Holloway Uniform Co", "Holloway Uniform Co Ltd", "53-12-66", "47380291", "R. Patel", "S. Lang", "15 Mar 2026"],
  ["Appleton Software Ltd", "Appleton Software Ltd", "20-33-81", "68104523", "S. Lang", "J. Crowley", "26 Feb 2026"],
  ["Barrowfield Scaffolding", "Barrowfield Ltd", "23-47-19", "30917645", "T. Nakamura", "M. Whitfield", "11 Feb 2026"],
  ["Dunmore Fire Safety", "Dunmore Fire Safety Ltd", "30-24-57", "59273108", "E. Hollis", "S. Lang", "29 Jan 2026"],
  ["Larkspur Events", "Larkspur Events Ltd", "60-71-33", "14628950", "D. Okafor", "J. Crowley", "19 Nov 2026"],
  ["Netherby Waste Services", "Netherby Waste Ltd", "05-41-27", "76540182", "R. Patel", "M. Whitfield", "06 Nov 2026"],
  ["Clearspring Water Coolers", "Clearspring Ltd", "40-63-02", "22895013", "S. Lang", "J. Crowley", "17 Oct 2026"],
  ["Marchmont Press", "Marchmont Press Ltd", "16-20-74", "48073621", "T. Nakamura", "M. Whitfield", "05 Oct 2026"],
  ["Oldgate Taxis", "Oldgate Taxis Ltd", "09-55-13", "61340298", "E. Hollis", "S. Lang", "24 Sep 2026"],
  ["Greenhollow Landscaping", "Greenhollow Landscaping Ltd", "20-91-06", "37502164", "D. Okafor", "J. Crowley", "13 Sep 2026"],
];

const INITIAL_PAYEES = APPROVED_ROWS.map((r, i) => ({
  id: "pye_" + String(i + 1).padStart(4, "0"),
  name: r[0],
  account_name: r[1],
  sort_code: r[2],
  account_number: r[3],
  status: "approved",
  created_by: r[4],
  approved_by: r[5],
  created_at: r[6],
  pending_change:
    i === 0
      ? {
          id: "pcr_0007",
          new_account_name: "Northwind Supplies Ltd",
          new_sort_code: "30-11-02",
          new_account_number: "98765432",
          requested_by: "R. Patel",
          created_at: "21 Nov 2026",
        }
      : null,
})).concat([
  {
    id: "pye_0043",
    name: "Caldera Print Studio",
    account_name: "Caldera Print Studio Ltd",
    sort_code: "30-11-02",
    account_number: "55018273",
    status: "pending",
    created_by: "D. Okafor",
    approved_by: null,
    created_at: "23 Nov 2026",
    pending_change: null,
  },
  {
    id: "pye_0044",
    name: "Velocity Courier Network",
    account_name: "Velocity Courier Network Ltd",
    sort_code: "12-07-44",
    account_number: "80362915",
    status: "pending",
    created_by: "S. Lang",
    approved_by: null,
    created_at: "24 Nov 2026",
    pending_change: null,
  },
]);

const STATUS_META = {
  approved: { label: "Approved", icon: Check },
  pending: { label: "Pending approval", icon: Clock },
  rejected: { label: "Rejected", icon: X },
};

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const gold = brand.accentColor;
  const cream = brand.backgroundColor;
  const muted = brand.neutralColor;

  const [payees, setPayees] = React.useState(INITIAL_PAYEES);
  const [tab, setTab] = React.useState("approved");
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState("pye_0001");
  const [modal, setModal] = React.useState(null); // {mode:'register'|'change', payeeId}
  const [form, setForm] = React.useState({ name: "", account_name: "", sort_code: "", account_number: "" });
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [working, setWorking] = React.useState("");
  const [notice, setNotice] = React.useState(null);

  const timers = React.useRef([]);
  const firstFieldRef = React.useRef(null);
  const openerRef = React.useRef(null);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  React.useEffect(() => {
    if (modal && firstFieldRef.current) firstFieldRef.current.focus();
  }, [modal]);

  const closeModal = () => {
    setModal(null);
    setErrors({});
    setFormError("");
    setSubmitting(false);
    if (openerRef.current) openerRef.current.focus();
  };

  React.useEffect(() => {
    if (!modal) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  const awaiting = payees.filter((p) => p.status === "pending" || p.pending_change);
  const approvedList = payees.filter((p) => p.status === "approved");
  const pendingTabList = payees.filter(
    (p) => p.status === "pending" || p.status === "rejected" || p.pending_change
  );

  const q = query.trim().toLowerCase();
  const base = tab === "approved" ? approvedList : pendingTabList;
  const rows = base
    .filter((p) => !q || p.name.toLowerCase().includes(q) || p.account_name.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name));

  const selected = payees.find((p) => p.id === selectedId) || null;
  const change = selected ? selected.pending_change : null;
  const requester = change ? change.requested_by : selected && selected.status === "pending" ? selected.created_by : null;
  const hasAwaitingItem = !!(change || (selected && selected.status === "pending"));
  const isMine = requester === ME;
  const canReview = hasAwaitingItem && !isMine;

  const validate = (f, mode) => {
    const e = {};
    if (mode === "register" && !f.name.trim()) e.name = "give the payee a name as it appears on their invoices.";
    if (!f.account_name.trim()) e.account_name = "we need the account name exactly as the bank holds it.";
    if (!/^\d{2}-\d{2}-\d{2}$/.test(f.sort_code.trim())) e.sort_code = "sort code should look like 20-00-00.";
    if (!/^\d{8}$/.test(f.account_number.trim())) e.account_number = "account number should be eight digits.";
    return e;
  };

  const openRegister = (ev) => {
    openerRef.current = ev.currentTarget;
    setForm({ name: "", account_name: "", sort_code: "", account_number: "" });
    setErrors({});
    setFormError("");
    setModal({ mode: "register", payeeId: null });
  };

  const openChange = (ev) => {
    if (!selected) return;
    openerRef.current = ev.currentTarget;
    setForm({
      name: selected.name,
      account_name: selected.account_name,
      sort_code: "",
      account_number: "",
    });
    setErrors({});
    setFormError("");
    setModal({ mode: "change", payeeId: selected.id });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const mode = modal.mode;
    const next = validate(form, mode);
    setErrors(next);
    setFormError("");
    if (Object.keys(next).length) return;

    const clash = payees.find(
      (p) =>
        p.id !== modal.payeeId &&
        p.sort_code === form.sort_code.trim() &&
        p.account_number === form.account_number.trim()
    );
    if (clash) {
      setFormError(
        `those details already sit with ${clash.name}, added by ${clash.created_by}. check with them before the register holds two records for one account.`
      );
      return;
    }

    setSubmitting(true);
    later(() => {
      if (mode === "register") {
        const id = "pye_" + String(payees.length + 1).padStart(4, "0");
        setPayees((prev) =>
          prev.concat([
            {
              id,
              name: form.name.trim(),
              account_name: form.account_name.trim(),
              sort_code: form.sort_code.trim(),
              account_number: form.account_number.trim(),
              status: "pending",
              created_by: ME,
              approved_by: null,
              created_at: "25 Nov 2026",
              pending_change: null,
            },
          ])
        );
        setSelectedId(id);
        setTab("pending");
        setQuery("");
        setNotice({
          tone: "ok",
          text: `${form.name.trim()} is saved as pending. a different authorised user has to approve it before anyone can pay them.`,
        });
      } else {
        const p = payees.find((x) => x.id === modal.payeeId);
        setPayees((prev) =>
          prev.map((x) =>
            x.id === modal.payeeId
              ? {
                  ...x,
                  pending_change: {
                    id: "pcr_" + String(1000 + prev.length).slice(-4),
                    new_account_name: form.account_name.trim(),
                    new_sort_code: form.sort_code.trim(),
                    new_account_number: form.account_number.trim(),
                    requested_by: ME,
                    created_at: "25 Nov 2026",
                  },
                }
              : x
          )
        );
        setNotice({
          tone: "ok",
          text: `your change to ${p ? p.name : "the payee"} is held pending. the approved details stay in place until someone else reviews it.`,
        });
      }
      setSubmitting(false);
      setModal(null);
      if (openerRef.current) openerRef.current.focus();
    }, 650);
  };

  const approveItem = () => {
    if (!selected || !canReview) return;
    setWorking("approve");
    later(() => {
      setPayees((prev) =>
        prev.map((p) => {
          if (p.id !== selected.id) return p;
          if (p.pending_change) {
            return {
              ...p,
              account_name: p.pending_change.new_account_name,
              sort_code: p.pending_change.new_sort_code,
              account_number: p.pending_change.new_account_number,
              approved_by: ME,
              pending_change: null,
            };
          }
          return { ...p, status: "approved", approved_by: ME, created_at: p.created_at };
        })
      );
      setWorking("");
      setNotice({
        tone: "ok",
        text: change
          ? `${selected.name} now pays to sort code ${change.new_sort_code} · account ${change.new_account_number}. recorded against you in the audit log.`
          : `${selected.name} is approved and can be selected on new payments.`,
      });
    }, 550);
  };

  const rejectItem = () => {
    if (!selected || !canReview) return;
    setWorking("reject");
    later(() => {
      setPayees((prev) =>
        prev.map((p) => {
          if (p.id !== selected.id) return p;
          if (p.pending_change) return { ...p, pending_change: null };
          return { ...p, status: "rejected" };
        })
      );
      setWorking("");
      setNotice({
        tone: "warn",
        text: change
          ? `change rejected. ${selected.name} keeps sort code ${selected.sort_code} · account ${selected.account_number}.`
          : `${selected.name} was not added to the register. ${selected.created_by} will see the outcome.`,
      });
    }, 550);
  };

  const pillBtn = "atr-focus inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors";
  const solid = { backgroundColor: ink, color: cream, borderRadius: 999, border: "1px solid transparent" };
  const outline = { backgroundColor: "transparent", color: ink, borderRadius: 999, border: `1px solid ${rgba(ink, 0.22)}` };
  const fieldStyle = {
    backgroundColor: rgba(ink, 0.05),
    border: `1px solid ${rgba(ink, 0.16)}`,
    borderRadius: 999,
    color: ink,
  };

  const Chip = ({ status, small }) => {
    const meta = STATUS_META[status] || STATUS_META.pending;
    const I = meta.icon;
    return (
      <span
        className={`inline-flex items-center gap-1.5 whitespace-nowrap ${small ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"}`}
        style={{
          borderRadius: 999,
          backgroundColor: status === "approved" ? rgba(ink, 0.08) : status === "pending" ? rgba(gold, 0.22) : rgba(muted, 0.26),
          color: ink,
          border: `1px solid ${status === "pending" ? rgba(gold, 0.5) : rgba(ink, 0.12)}`,
        }}
      >
        <I className="h-3.5 w-3.5" aria-hidden="true" />
        {meta.label}
      </span>
    );
  };

  const field = (id, wf, label, value, key, extra) => (
    <div>
      <Label htmlFor={id} className="mb-2 block text-xs tracking-wide" style={{ color: rgba(ink, 0.7) }}>
        {label}
      </Label>
      <Input
        id={id}
        data-wf={wf}
        value={value}
        readOnly={extra && extra.readOnly}
        inputMode={extra && extra.inputMode}
        maxLength={extra && extra.maxLength}
        placeholder={extra && extra.placeholder}
        aria-invalid={errors[key] ? "true" : undefined}
        aria-describedby={errors[key] ? id + "-err" : extra && extra.hint ? id + "-hint" : undefined}
        onChange={(e) => {
          setForm((f) => ({ ...f, [key]: e.target.value }));
          if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
        }}
        className="atr-focus w-full px-5 py-3 text-sm"
        style={{
          ...fieldStyle,
          opacity: extra && extra.readOnly ? 0.75 : 1,
          borderColor: errors[key] ? rgba(ink, 0.55) : rgba(ink, 0.16),
        }}
      />
      {errors[key] ? (
        <p id={id + "-err"} role="alert" className="mt-2 flex items-start gap-1.5 px-2 text-xs" style={{ color: ink }}>
          <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {errors[key]}
        </p>
      ) : extra && extra.hint ? (
        <p id={id + "-hint"} className="mt-2 px-2 text-xs" style={{ color: rgba(ink, 0.6) }}>
          {extra.hint}
        </p>
      ) : null}
    </div>
  );

  return (
    <div
      className="min-h-full w-full"
      style={{
        backgroundColor: cream,
        color: ink,
        fontFamily: brand.fontBody,
        ["--atr-gold"]: gold,
        ["--atr-hover"]: rgba(ink, 0.05),
      }}
    >
      <style>{`
        .atr-focus:focus-visible { outline: 2px solid var(--atr-gold); outline-offset: 3px; }
        .atr-row { transition: background-color .18s ease; }
        .atr-row:hover { background-color: var(--atr-hover); }
        @keyframes atr-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes atr-fade { from { opacity: 0; } to { opacity: 1; } }
        .atr-rise { animation: atr-rise .34s cubic-bezier(.22,.61,.36,1) both; }
        .atr-fade { animation: atr-fade .22s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .atr-rise, .atr-fade { animation: none; } }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div data-wf="b-0-0" className="col-span-12 sm:col-span-8">
            <p className="mb-2 text-xs uppercase tracking-[0.18em]" style={{ color: rgba(ink, 0.6) }}>
              kkkess · money out
            </p>
            <h1 className="text-[34px] leading-tight sm:text-[40px]" style={{ fontFamily: brand.fontHeading, fontStyle: "italic" }}>
              Payee register
            </h1>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed" style={{ color: rgba(ink, 0.75) }}>
              every account the organisation is allowed to pay, and every change still waiting on a second pair of eyes.
            </p>
          </div>
          <div className="col-span-12 flex sm:col-span-4 sm:justify-end">
            <Button data-wf="b-0-1" type="button" onClick={openRegister} className={pillBtn + " w-full sm:w-auto"} style={solid}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Register payee
            </Button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-10 grid grid-cols-12 items-center gap-6">
          <div data-wf="b-1-0" className="col-span-12 sm:col-span-8">
            <Tabs
              active={tab}
              onChange={setTab}
              tabs={[
                { key: "approved", label: <span data-wf="i-1-0-0">Approved payees ({approvedList.length})</span> },
                { key: "pending", label: <span data-wf="i-1-0-1">Pending approval ({awaiting.length})</span> },
              ]}
            />
          </div>
          <div data-wf="b-1-1" className="col-span-12 sm:col-span-4">
            <Label htmlFor="payee-search" className="sr-only">
              Search payee name
            </Label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: rgba(ink, 0.55) }} aria-hidden="true" />
              <Input
                id="payee-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search payee name"
                className="atr-focus w-full py-3 pl-12 pr-5 text-sm"
                style={fieldStyle}
              />
            </div>
          </div>
        </div>

        {notice && (
          <div
            role="status"
            className="atr-rise mt-6 flex items-start gap-3 px-6 py-4"
            style={{
              borderRadius: 24,
              backgroundColor: notice.tone === "ok" ? rgba(gold, 0.16) : rgba(muted, 0.2),
              border: `1px solid ${notice.tone === "ok" ? rgba(gold, 0.45) : rgba(ink, 0.14)}`,
            }}
          >
            {notice.tone === "ok" ? (
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            <p className="flex-1 text-sm leading-relaxed">{notice.text}</p>
          </div>
        )}

        {/* Row 3 */}
        <section
          data-wf="b-2-0"
          className="mt-8 overflow-hidden"
          style={{ borderRadius: 24, backgroundColor: rgba(ink, 0.06) }}
          aria-label="Payees"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 px-6 pb-4 pt-6 sm:px-8">
            <h2 className="text-xl" style={{ fontFamily: brand.fontHeading, fontStyle: "italic" }}>
              Payees
            </h2>
            <p className="text-xs" style={{ color: rgba(ink, 0.65), fontVariantNumeric: "tabular-nums" }}>
              {rows.length} shown · register synced 4 minutes ago
            </p>
          </div>

          {rows.length === 0 ? (
            <div className="px-6 pb-8 sm:px-8">
              {q ? (
                <Empty
                  title={`nothing in the register matches “${query.trim()}”`}
                  description="check the spelling, or register them if this payee is new to us. only approved payees can be paid."
                  action={
                    <Button type="button" onClick={() => setQuery("")} className={pillBtn} style={outline}>
                      Clear search
                    </Button>
                  }
                />
              ) : (
                <Empty
                  title="nothing waiting on a second pair of eyes"
                  description="every new payee and bank-detail change has been reviewed. new requests land here the moment a colleague submits one."
                />
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full text-sm" style={{ fontVariantNumeric: "tabular-nums", borderCollapse: "collapse" }}>
                <THead>
                  <TR style={{ borderBottom: `1px solid ${rgba(ink, 0.16)}` }}>
                    <TH data-wf="i-2-0-0" scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sm:px-8" style={{ color: rgba(ink, 0.65) }}>
                      Name
                    </TH>
                    <TH data-wf="i-2-0-1" scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: rgba(ink, 0.65) }}>
                      Account name
                    </TH>
                    <TH data-wf="i-2-0-2" scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: rgba(ink, 0.65) }}>
                      Sort code
                    </TH>
                    <TH data-wf="i-2-0-3" scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: rgba(ink, 0.65) }}>
                      Account number
                    </TH>
                    <TH data-wf="i-2-0-4" scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: rgba(ink, 0.65) }}>
                      Status
                    </TH>
                    <TH data-wf="i-2-0-5" scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sm:px-8" style={{ color: rgba(ink, 0.65) }}>
                      Added by
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {rows.map((p) => {
                    const on = p.id === selectedId;
                    return (
                      <TR
                        key={p.id}
                        className="atr-row"
                        onClick={() => setSelectedId(p.id)}
                        style={{
                          borderBottom: `1px solid ${rgba(ink, 0.1)}`,
                          backgroundColor: on ? rgba(gold, 0.14) : "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <TD className="px-6 py-4 sm:px-8">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedId(p.id);
                            }}
                            className="atr-focus text-left font-medium underline-offset-4 hover:underline"
                            style={{ color: ink, borderRadius: 8 }}
                            aria-current={on ? "true" : undefined}
                          >
                            {p.name}
                          </button>
                        </TD>
                        <TD className="px-6 py-4" style={{ color: rgba(ink, 0.8) }}>
                          {p.account_name}
                        </TD>
                        <TD className="px-6 py-4" style={{ color: rgba(ink, 0.8) }}>
                          {p.sort_code}
                        </TD>
                        <TD className="whitespace-nowrap px-6 py-4" style={{ color: rgba(ink, 0.8) }}>
                          ••••{p.account_number.slice(-4)}
                        </TD>
                        <TD className="px-6 py-4">
                          <span className="flex flex-wrap items-center gap-2">
                            <Chip status={p.status} small />
                            {p.pending_change && (
                              <span
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px]"
                                style={{ borderRadius: 999, backgroundColor: rgba(gold, 0.22), border: `1px solid ${rgba(gold, 0.5)}`, color: ink }}
                              >
                                <AlertCircle className="h-3 w-3" aria-hidden="true" />
                                Change pending
                              </span>
                            )}
                          </span>
                        </TD>
                        <TD className="whitespace-nowrap px-6 py-4 sm:px-8" style={{ color: rgba(ink, 0.8) }}>
                          {p.created_by}
                          {p.created_by === ME ? " (you)" : ""}
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>
          )}
        </section>

        {/* Rows 4–7: the arched detail panel */}
        {selected ? (
          <section
            data-wf="b-3-0"
            className="atr-rise mt-10 px-6 pb-10 pt-12 sm:px-12"
            style={{
              borderRadius: "160px 160px 24px 24px",
              backgroundColor: rgba(ink, 0.07),
              borderTop: `1px solid ${rgba(gold, 0.55)}`,
            }}
            aria-live="polite"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[26px] leading-tight sm:text-[28px]" style={{ fontFamily: brand.fontHeading, fontStyle: "italic" }}>
                {selected.name}
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <Chip status={selected.status} />
                {selected.pending_change && (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs"
                    style={{ borderRadius: 999, backgroundColor: rgba(gold, 0.22), border: `1px solid ${rgba(gold, 0.5)}`, color: ink }}
                  >
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Change pending
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm" style={{ color: rgba(ink, 0.75), fontVariantNumeric: "tabular-nums" }}>
                added by {selected.created_by}
                {selected.created_by === ME ? " (you)" : ""}
                {selected.approved_by
                  ? `, approved by ${selected.approved_by} ${selected.created_at}`
                  : `, awaiting approval since ${selected.created_at}`}
              </p>
            </div>

            {/* Row 5 */}
            <div
              data-wf="b-4-0"
              className="mx-auto mt-8 max-w-3xl px-6 py-6 sm:px-8"
              style={{ borderRadius: 24, backgroundColor: cream, border: `1px solid ${rgba(ink, 0.12)}` }}
            >
              <h3 className="text-sm font-semibold tracking-wide">
                {selected.status === "approved" ? "Approved details" : "Submitted details — not yet approved"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: rgba(ink, 0.85), fontVariantNumeric: "tabular-nums" }}>
                Account name: {selected.account_name} · Sort code {selected.sort_code} · Account {selected.account_number}.
              </p>
              {change ? (
                <>
                  <div className="my-5" style={{ borderTop: `1px solid ${rgba(gold, 0.5)}` }} />
                  <p className="text-sm leading-relaxed" style={{ fontVariantNumeric: "tabular-nums" }}>
                    <span className="font-semibold">Pending change from {change.requested_by}</span>
                    {change.requested_by === ME ? " (you)" : ""} on {change.created_at}: sort code {change.new_sort_code}, account{" "}
                    {change.new_account_number}.
                  </p>
                </>
              ) : selected.status === "pending" ? (
                <p className="mt-3 text-sm leading-relaxed" style={{ color: rgba(ink, 0.7) }}>
                  these details cannot be used for a payment until someone other than {selected.created_by} approves them.
                </p>
              ) : selected.status === "rejected" ? (
                <p className="mt-3 text-sm leading-relaxed" style={{ color: rgba(ink, 0.7) }}>
                  this registration was rejected. nothing was added to the register and no payment can reference it.
                </p>
              ) : (
                <p className="mt-3 text-sm leading-relaxed" style={{ color: rgba(ink, 0.7) }}>
                  no change is pending on this payee. payments made today will snapshot the details above.
                </p>
              )}
            </div>

            {/* Row 6 */}
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-4">
                <Button
                  data-wf="b-5-0"
                  type="button"
                  onClick={openChange}
                  disabled={selected.status !== "approved" || !!change}
                  className={pillBtn + " w-full"}
                  style={{
                    ...outline,
                    opacity: selected.status !== "approved" || change ? 0.45 : 1,
                    cursor: selected.status !== "approved" || change ? "not-allowed" : "pointer",
                  }}
                >
                  <Edit className="h-4 w-4" aria-hidden="true" />
                  Request bank-detail change
                </Button>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <Button
                  data-wf="b-5-1"
                  type="button"
                  onClick={approveItem}
                  disabled={!canReview || working !== ""}
                  className={pillBtn + " w-full"}
                  style={{ ...solid, opacity: canReview ? 1 : 0.45, cursor: canReview ? "pointer" : "not-allowed" }}
                >
                  {working === "approve" ? (
                    <>
                      <Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Approving…
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Approve change
                    </>
                  )}
                </Button>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <Button
                  data-wf="b-5-2"
                  type="button"
                  onClick={rejectItem}
                  disabled={!canReview || working !== ""}
                  className={pillBtn + " w-full"}
                  style={{ ...outline, opacity: canReview ? 1 : 0.45, cursor: canReview ? "pointer" : "not-allowed" }}
                >
                  {working === "reject" ? (
                    <>
                      <Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Rejecting…
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4" aria-hidden="true" />
                      Reject change
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Row 7 */}
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-12 items-center gap-6">
              <p data-wf="b-6-0" className="col-span-12 text-sm leading-relaxed sm:col-span-8" style={{ color: rgba(ink, 0.75) }}>
                you cannot approve a payee or change you requested yourself. if rejected, the existing approved details stay in place.
                {isMine && hasAwaitingItem
                  ? ` this one is yours — any approver other than you (S. Lang) can clear it; ask M. Whitfield or J. Crowley.`
                  : ""}
              </p>
              <div className="col-span-12 sm:col-span-4 sm:text-right">
                <button
                  data-wf="b-6-1"
                  type="button"
                  onClick={() => navigate("payments")}
                  disabled={selected.status !== "approved"}
                  className="atr-focus inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                  style={{
                    color: ink,
                    textDecorationColor: gold,
                    borderRadius: 999,
                    opacity: selected.status === "approved" ? 1 : 0.45,
                    cursor: selected.status === "approved" ? "pointer" : "not-allowed",
                  }}
                >
                  Create a payment for this payee
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
                {selected.status !== "approved" && (
                  <p className="mt-2 text-xs" style={{ color: rgba(ink, 0.6) }}>
                    only approved payees can be selected on a payment.
                  </p>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section
            className="mt-10 px-6 py-12"
            style={{ borderRadius: "160px 160px 24px 24px", backgroundColor: rgba(ink, 0.07), borderTop: `1px solid ${rgba(gold, 0.55)}` }}
          >
            <Empty
              title="pick a payee to see their approved details"
              description="choose a row above and the account name, sort code and any pending change appear here."
            />
          </section>
        )}

        {/* Rows 8–9: modal */}
        {modal && (
          <div
            className="atr-fade fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8"
            style={{ backgroundColor: rgba(ink, 0.45) }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div
              data-wf="b-7-0"
              role="dialog"
              aria-modal="true"
              aria-labelledby="payee-modal-title"
              className="atr-rise mt-6 w-full max-w-lg px-6 pb-8 pt-10 sm:px-10"
              style={{
                borderRadius: "140px 140px 24px 24px",
                backgroundColor: cream,
                borderTop: `1px solid ${rgba(gold, 0.6)}`,
                boxShadow: `0 24px 60px ${rgba(ink, 0.28)}`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 text-center">
                  <h2 id="payee-modal-title" className="text-2xl" style={{ fontFamily: brand.fontHeading, fontStyle: "italic" }}>
                    {modal.mode === "register" ? "Register payee" : "Request bank-detail change"}
                  </h2>
                  <p className="mt-2 text-sm" style={{ color: rgba(ink, 0.7) }}>
                    {modal.mode === "register"
                      ? "enter the details exactly as they appear on the payee's bank letter."
                      : "the payee's name stays as registered — only the bank details change."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close this dialog"
                  className="atr-focus -mt-2 p-2"
                  style={{ borderRadius: 999, color: ink }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {formError && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 px-5 py-4 text-sm leading-relaxed"
                  style={{ borderRadius: 24, backgroundColor: rgba(muted, 0.22), border: `1px solid ${rgba(ink, 0.25)}` }}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
                <div ref={modal.mode === "register" ? undefined : undefined}>
                  <Label htmlFor="pf-name" className="mb-2 block text-xs tracking-wide" style={{ color: rgba(ink, 0.7) }}>
                    Payee name
                  </Label>
                  <Input
                    id="pf-name"
                    data-wf="i-7-0-0"
                    ref={firstFieldRef}
                    value={form.name}
                    readOnly={modal.mode === "change"}
                    placeholder="Caldera Print Studio"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "pf-name-err" : undefined}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, name: e.target.value }));
                      if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    className="atr-focus w-full px-5 py-3 text-sm"
                    style={{
                      ...fieldStyle,
                      opacity: modal.mode === "change" ? 0.75 : 1,
                      borderColor: errors.name ? rgba(ink, 0.55) : rgba(ink, 0.16),
                    }}
                  />
                  {errors.name && (
                    <p id="pf-name-err" role="alert" className="mt-2 flex items-start gap-1.5 px-2 text-xs">
                      <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {field("pf-acc-name", "i-7-0-1", "Account name", form.account_name, "account_name", {
                  placeholder: "Caldera Print Studio Ltd",
                })}
                {field("pf-sort", "i-7-0-2", "Sort code", form.sort_code, "sort_code", {
                  placeholder: "20-00-00",
                  maxLength: 8,
                  inputMode: "numeric",
                  hint: "six digits, in pairs.",
                })}
                {field("pf-acct", "i-7-0-3", "Account number", form.account_number, "account_number", {
                  placeholder: "12344471",
                  maxLength: 8,
                  inputMode: "numeric",
                })}

                <div className="pt-2" style={{ borderTop: `1px solid ${rgba(ink, 0.12)}` }} />

                <div className="grid grid-cols-12 items-center gap-4">
                  <p data-wf="b-8-0" className="col-span-12 text-sm leading-relaxed sm:col-span-8" style={{ color: rgba(ink, 0.75) }}>
                    {modal.mode === "register"
                      ? "new payees are created pending and cannot be paid until a different authorised user approves them."
                      : "the existing approved details keep paying until a different authorised user approves this change."}
                  </p>
                  <div className="col-span-12 sm:col-span-4">
                    <Button
                      data-wf="b-8-1"
                      type="submit"
                      disabled={submitting}
                      className={pillBtn + " w-full"}
                      style={{ ...solid, opacity: submitting ? 0.65 : 1, cursor: submitting ? "wait" : "pointer" }}
                    >
                      {submitting ? (
                        <>
                          <Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        "Submit for approval"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
