// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Textarea, Label, Select, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, ChevronRight, Filter, AlertCircle, CheckCircle } = Icons;

const INK = brand.primaryColor;        // deep botanical ink — headings, body, primary action
const GOLD = brand.accentColor;        // brass accent — arches, focus, selected state
const NEUTRAL = brand.neutralColor;    // dry sage-grey — microcopy
const CREAM = brand.backgroundColor;   // canvas
const PANEL = "#fffdf5";               // one level up from the canvas
const SAGE = "#5f7355";                // status only: approved / paid
const CLAY = "#a4583c";                // status only: rejected

const hexToRgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const ME = "R. Patel";
const NOW = "25 Nov 2026 14:32";
const THRESHOLD = 5000;

const STATUS = {
  created: { label: "Created", hue: NEUTRAL, note: "entered, awaiting rule routing" },
  pending_approval: { label: "Pending approval", hue: GOLD, note: "waiting on a second person" },
  approved: { label: "Approved / ready to pay", hue: SAGE, note: "ready for treasury to settle" },
  paid: { label: "Paid", hue: "#3f5d44", note: "settled in the bank portal" },
  rejected: { label: "Rejected", hue: CLAY, note: "cannot be paid" },
  reconciled: { label: "Reconciled / closed", hue: INK, note: "matched to the statement" },
};

const FILTERS = [
  { key: "all", label: "All", wf: "i-1-0-0" },
  { key: "created", label: "Created", wf: "i-1-0-1" },
  { key: "pending_approval", label: "Pending approval", wf: "i-1-0-2" },
  { key: "approved", label: "Approved / ready to pay", wf: "i-1-0-3" },
  { key: "paid", label: "Paid", wf: "i-1-0-4" },
  { key: "rejected", label: "Rejected", wf: "i-1-0-5" },
  { key: "reconciled", label: "Reconciled / closed", wf: "i-1-0-6" },
];

const PAYEES = [
  { id: "pe-01", name: "Northwind Supplies Ltd", account_name: "Northwind Supplies Limited", sort_code: "20-00-00", account_number: "4471", status: "approved" },
  { id: "pe-02", name: "Harlow & Finch Legal", account_name: "Harlow and Finch LLP", sort_code: "60-16-23", account_number: "9032", status: "approved" },
  { id: "pe-03", name: "Brightline Facilities", account_name: "Brightline Facilities Services Ltd", sort_code: "20-00-00", account_number: "1180", status: "approved" },
  { id: "pe-04", name: "Mallory Electrical Services", account_name: "Mallory Electrical Svcs Ltd", sort_code: "40-11-58", account_number: "2217", status: "approved" },
  { id: "pe-05", name: "Cedar Park Print Co.", account_name: "Cedar Park Print Company", sort_code: "09-01-27", account_number: "6640", status: "approved" },
  { id: "pe-06", name: "Thameside Couriers", account_name: "Thameside Couriers Ltd", sort_code: "30-96-74", account_number: "8815", status: "approved" },
  { id: "pe-07", name: "Orrell Catering", account_name: "Orrell Catering Ltd", sort_code: "23-05-80", account_number: "3306", status: "approved" },
  { id: "pe-08", name: "Kingsley Grounds Care", account_name: "Kingsley Grounds Care Ltd", sort_code: "20-41-19", account_number: "7724", status: "approved" },
  { id: "pe-09", name: "Vantage IT Resourcing", account_name: "Vantage IT Resourcing Ltd", sort_code: "04-00-75", account_number: "5512", status: "pending" },
  { id: "pe-10", name: "Brook & Mead Architects", account_name: "Brook and Mead Ltd", sort_code: "60-83-71", account_number: "1902", status: "pending" },
];

const SEED_PAYMENTS = [
  { id: "p42", reference: "PAY-1042", payee: "Northwind Supplies Ltd", amount: 12400, status: "pending_approval", created_by: ME, created_at: "24 Nov 2026 09:14", details: "Invoice INV-8891, October maintenance.", sort_code: "20-00-00", account_number: "4471", department: "Facilities" },
  { id: "p41", reference: "PAY-1041", payee: "Harlow & Finch Legal", amount: 8750, status: "pending_approval", created_by: "J. Okonkwo", created_at: "24 Nov 2026 08:02", details: "Invoice HF-2291, Q4 retainer and lease review.", sort_code: "60-16-23", account_number: "9032", department: "Legal" },
  { id: "p40", reference: "PAY-1040", payee: "Mallory Electrical Services", amount: 24980, status: "pending_approval", created_by: "D. Whitcombe", created_at: "23 Nov 2026 17:48", details: "Invoice ME-4410, switchboard replacement at Dock Road.", sort_code: "40-11-58", account_number: "2217", department: "Facilities" },
  { id: "p39", reference: "PAY-1039", payee: "Kingsley Grounds Care", amount: 6120.4, status: "pending_approval", created_by: "S. Adeyemi", created_at: "23 Nov 2026 16:30", details: "Invoice KG-0771, winter grounds contract, first instalment.", sort_code: "20-41-19", account_number: "7724", department: "Estates" },
  { id: "p38", reference: "PAY-1038", payee: "Cedar Park Print Co.", amount: 486, status: "created", created_by: ME, created_at: "25 Nov 2026 08:37", details: "Invoice CP-0912, annual report proofs.", sort_code: "09-01-27", account_number: "6640", department: "Marketing" },
  { id: "p37", reference: "PAY-1037", payee: "Orrell Catering", amount: 1274.3, status: "created", created_by: "M. Castellanos", created_at: "25 Nov 2026 08:05", details: "Invoice OC-3381, board lunch and November staff catering.", sort_code: "23-05-80", account_number: "3306", department: "Operations" },
  { id: "p36", reference: "PAY-1036", payee: "Brightline Facilities", amount: 2310.5, status: "approved", created_by: "M. Castellanos", created_at: "23 Nov 2026 14:21", approved_by: ME, approved_at: "23 Nov 2026 15:02", details: "Invoice BF-7731, November cleaning contract.", sort_code: "20-00-00", account_number: "1180", department: "Facilities" },
  { id: "p35", reference: "PAY-1035", payee: "Thameside Couriers", amount: 945.2, status: "approved", created_by: ME, created_at: "22 Nov 2026 11:46", approved_by: "J. Okonkwo", approved_at: "22 Nov 2026 13:10", details: "Invoice TC-5509, same-day deliveries, week 46.", sort_code: "30-96-74", account_number: "8815", department: "Operations" },
  { id: "p34", reference: "PAY-1034", payee: "Harlow & Finch Legal", amount: 15600, status: "approved", created_by: "D. Whitcombe", created_at: "21 Nov 2026 15:12", approved_by: ME, approved_at: "21 Nov 2026 16:40", details: "Invoice HF-2277, disposal of Fenwick Yard, legal fees.", sort_code: "60-16-23", account_number: "9032", department: "Legal" },
  { id: "p33", reference: "PAY-1033", payee: "Cedar Park Print Co.", amount: 398.75, status: "approved", created_by: "S. Adeyemi", created_at: "21 Nov 2026 10:28", approved_by: "J. Okonkwo", approved_at: "21 Nov 2026 10:55", details: "Invoice CP-0903, donor pack reprint.", sort_code: "09-01-27", account_number: "6640", department: "Marketing" },
  { id: "p32", reference: "PAY-1032", payee: "Northwind Supplies Ltd", amount: 3842.6, status: "paid", created_by: "J. Okonkwo", created_at: "19 Nov 2026 09:02", approved_by: ME, approved_at: "19 Nov 2026 11:15", paid_by: "S. Adeyemi", paid_at: "20 Nov 2026 09:40", details: "Invoice INV-8842, stationery and workshop consumables.", sort_code: "20-00-00", account_number: "4471", department: "Operations" },
  { id: "p31", reference: "PAY-1031", payee: "Brightline Facilities", amount: 2310.5, status: "paid", created_by: "M. Castellanos", created_at: "18 Nov 2026 13:33", approved_by: "D. Whitcombe", approved_at: "18 Nov 2026 14:04", paid_by: "S. Adeyemi", paid_at: "19 Nov 2026 10:12", details: "Invoice BF-7702, October cleaning contract.", sort_code: "20-00-00", account_number: "1180", department: "Facilities" },
  { id: "p30", reference: "PAY-1030", payee: "Thameside Couriers", amount: 1145.2, status: "paid", created_by: ME, created_at: "17 Nov 2026 10:05", approved_by: "J. Okonkwo", approved_at: "17 Nov 2026 12:20", paid_by: "S. Adeyemi", paid_at: "18 Nov 2026 09:18", details: "Invoice TC-5488, archive transfer to Bexley store.", sort_code: "30-96-74", account_number: "8815", department: "Operations" },
  { id: "p29", reference: "PAY-1029", payee: "Mallory Electrical Services", amount: 24980, status: "paid", created_by: "D. Whitcombe", created_at: "14 Nov 2026 16:50", approved_by: ME, approved_at: "16 Nov 2026 09:05", paid_by: "S. Adeyemi", paid_at: "17 Nov 2026 11:02", details: "Invoice ME-4398, switchboard replacement, stage one.", sort_code: "40-11-58", account_number: "2217", department: "Facilities" },
  { id: "p28", reference: "PAY-1028", payee: "Kingsley Grounds Care", amount: 780, status: "paid", created_by: "S. Adeyemi", created_at: "13 Nov 2026 08:44", approved_by: "J. Okonkwo", approved_at: "13 Nov 2026 09:30", paid_by: "S. Adeyemi", paid_at: "14 Nov 2026 08:55", details: "Invoice KG-0744, hedge cutting, Dock Road frontage.", sort_code: "20-41-19", account_number: "7724", department: "Estates" },
  { id: "p27", reference: "PAY-1027", payee: "Mallory Electrical Services", amount: 24980, status: "rejected", created_by: "D. Whitcombe", created_at: "12 Nov 2026 17:21", approved_by: ME, approved_at: "13 Nov 2026 08:10", details: "Invoice ME-4398, duplicate of PAY-1029 — rejected as a double entry.", sort_code: "40-11-58", account_number: "2217", department: "Facilities" },
  { id: "p26", reference: "PAY-1026", payee: "Orrell Catering", amount: 5410, status: "rejected", created_by: "M. Castellanos", created_at: "11 Nov 2026 12:02", approved_by: "D. Whitcombe", approved_at: "11 Nov 2026 15:48", details: "Invoice OC-3302, no purchase order attached — returned to requester.", sort_code: "23-05-80", account_number: "3306", department: "Operations" },
  { id: "p25", reference: "PAY-1025", payee: "Harlow & Finch Legal", amount: 9240, status: "reconciled", created_by: "J. Okonkwo", created_at: "06 Nov 2026 09:55", approved_by: ME, approved_at: "06 Nov 2026 11:11", paid_by: "S. Adeyemi", paid_at: "09 Nov 2026 10:20", details: "Invoice HF-2251, October retainer.", sort_code: "60-16-23", account_number: "9032", department: "Legal" },
  { id: "p24", reference: "PAY-1024", payee: "Northwind Supplies Ltd", amount: 1680.35, status: "reconciled", created_by: ME, created_at: "04 Nov 2026 14:12", approved_by: "D. Whitcombe", approved_at: "04 Nov 2026 16:00", paid_by: "S. Adeyemi", paid_at: "05 Nov 2026 09:30", details: "Invoice INV-8810, PPE restock for the works team.", sort_code: "20-00-00", account_number: "4471", department: "Operations" },
  { id: "p23", reference: "PAY-1023", payee: "Orrell Catering", amount: 640.75, status: "reconciled", created_by: "M. Castellanos", created_at: "02 Nov 2026 10:41", approved_by: "J. Okonkwo", approved_at: "02 Nov 2026 11:30", paid_by: "S. Adeyemi", paid_at: "03 Nov 2026 09:05", details: "Invoice OC-3288, volunteer day refreshments.", sort_code: "23-05-80", account_number: "3306", department: "Operations" },
];

const money = (n) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 }).format(n);

export default function Screen() {
  const navigate = useNavigate();
  const [payments, setPayments] = React.useState(SEED_PAYMENTS);
  const [filter, setFilter] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState("p42");
  const [notice, setNotice] = React.useState(null);        // { tone, text }
  const [pending, setPending] = React.useState(null);      // { id, kind }
  const [confirmReject, setConfirmReject] = React.useState(false);
  const [newRowId, setNewRowId] = React.useState(null);

  const [modalOpen, setModalOpen] = React.useState(false);
  const [form, setForm] = React.useState({ payee_id: "", amount: "", details: "" });
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [createNotice, setCreateNotice] = React.useState(null);

  const openerRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const firstFieldRef = React.useRef(null);

  const selected = payments.find((p) => p.id === selectedId) || null;

  // ---- derived list -------------------------------------------------------
  const visible = payments.filter((p) => {
    const byStatus = filter === "all" || p.status === filter;
    const q = query.trim().toLowerCase();
    const bySearch =
      !q || p.reference.toLowerCase().includes(q) || p.payee.toLowerCase().includes(q);
    return byStatus && bySearch;
  });

  const countFor = (key) => (key === "all" ? payments.length : payments.filter((p) => p.status === key).length);

  // ---- commit detail actions after a short "recording" beat ---------------
  React.useEffect(() => {
    if (!pending) return undefined;
    const t = setTimeout(() => {
      setPayments((prev) =>
        prev.map((p) => {
          if (p.id !== pending.id) return p;
          if (pending.kind === "approve") return { ...p, status: "approved", approved_by: ME, approved_at: NOW };
          if (pending.kind === "reject") return { ...p, status: "rejected", approved_by: ME, approved_at: NOW };
          if (pending.kind === "pay") return { ...p, status: "paid", paid_by: ME, paid_at: NOW };
          if (pending.kind === "reconcile") return { ...p, status: "reconciled" };
          return p;
        })
      );
      const ref = payments.find((p) => p.id === pending.id)?.reference || "";
      const copy = {
        approve: `${ref} approved — it is now ready for treasury to pay. logged to the audit trail at ${NOW}.`,
        reject: `${ref} rejected. it can no longer be paid, and the maker has been emailed.`,
        pay: `${ref} marked as paid by ${ME} at ${NOW}.`,
        reconcile: `${ref} recorded as reconciled and closed.`,
      };
      setNotice({ tone: "success", text: copy[pending.kind] });
      setPending(null);
    }, 650);
    return () => clearTimeout(t);
  }, [pending, payments]);

  // ---- commit new payment -------------------------------------------------
  React.useEffect(() => {
    if (!submitting) return undefined;
    const t = setTimeout(() => {
      const payee = PAYEES.find((p) => p.id === form.payee_id);
      const amount = Number(form.amount);
      const routed = amount >= THRESHOLD;
      const nextNumber = 1043 + payments.filter((p) => p.reference > "PAY-1042").length;
      const created = {
        id: `new-${nextNumber}`,
        reference: `PAY-${nextNumber}`,
        payee: payee.name,
        amount,
        status: routed ? "pending_approval" : "approved",
        created_by: ME,
        created_at: NOW,
        approved_by: routed ? undefined : "approval rule: below £5,000.00",
        approved_at: routed ? undefined : NOW,
        details: form.details.trim(),
        sort_code: payee.sort_code,
        account_number: payee.account_number,
        department: "Operations",
      };
      setPayments((prev) => [created, ...prev]);
      setSelectedId(created.id);
      setNewRowId(created.id);
      setNotice(null);
      setConfirmReject(false);
      setCreateNotice({
        text: routed
          ? `${created.reference} created for ${money(amount)} and routed to a second approver — the £5,000.00 threshold rule applied.`
          : `${created.reference} created for ${money(amount)}. no approval rule matched, so it is approved and ready to pay.`,
      });
      setForm({ payee_id: "", amount: "", details: "" });
      setErrors({});
      setSubmitting(false);
      setModalOpen(false);
      if (openerRef.current) openerRef.current.focus();
    }, 700);
    return () => clearTimeout(t);
  }, [submitting, form, payments]);

  React.useEffect(() => {
    if (modalOpen && firstFieldRef.current) firstFieldRef.current.focus();
  }, [modalOpen]);

  // ---- handlers -----------------------------------------------------------
  const closeModal = () => {
    setModalOpen(false);
    setErrors({});
    if (openerRef.current) openerRef.current.focus();
  };

  const onDialogKeyDown = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeModal();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const nodes = Array.from(
      dialogRef.current.querySelectorAll("button, input, select, textarea, a[href]")
    ).filter((n) => !n.disabled);
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const submitPayment = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.payee_id) next.payee_id = "choose an approved payee from the register.";
    const amount = Number(form.amount);
    if (form.amount.trim() === "") next.amount = "enter an amount in GBP.";
    else if (!Number.isFinite(amount) || amount <= 0) next.amount = "the amount must be greater than 0.00.";
    if (!form.details.trim()) next.details = "add the invoice number or reference so the payment can be traced.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const target = dialogRef.current?.querySelector("[aria-invalid='true']");
      if (target) target.focus();
      return;
    }
    setSubmitting(true);
  };

  const ownPayment = selected && selected.created_by === ME;
  const canApprove = !!selected && selected.status === "pending_approval" && !ownPayment;
  const canReject = !!selected && selected.status === "pending_approval" && !ownPayment;
  const canPay = !!selected && selected.status === "approved";
  const canReconcile = !!selected && selected.status === "paid";

  const refuse = (kind) => {
    if (!selected) return;
    const s = STATUS[selected.status].label.toLowerCase();
    const reasons = {
      approve: ownPayment
        ? `you created ${selected.reference}, so you cannot approve it — a maker can never approve their own payment. ask another approver to review it.`
        : `${selected.reference} is ${s}, so there is nothing to approve.`,
      reject: ownPayment
        ? `you created ${selected.reference}, so a different approver must decide it.`
        : `${selected.reference} is ${s}, so it is no longer awaiting a decision.`,
      pay: `mark as paid is refused while ${selected.reference} is ${s}. only approved instructions can be settled.`,
      reconcile: `${selected.reference} is ${s}. an instruction can only be reconciled once it has been marked paid.`,
    };
    setNotice({ tone: "refused", text: reasons[kind] });
  };

  const act = (kind, allowed) => {
    setConfirmReject(false);
    if (!allowed) {
      refuse(kind);
      return;
    }
    setNotice(null);
    setPending({ id: selected.id, kind });
  };

  // ---- shared styles ------------------------------------------------------
  const focus = "atr-focus";
  const pillBase =
    "inline-flex items-center justify-center gap-2 rounded-full text-[14px] font-semibold transition-colors duration-200 " + focus;
  const primaryStyle = { backgroundColor: INK, color: CREAM, borderRadius: 999 };
  const quietStyle = {
    backgroundColor: "transparent",
    color: INK,
    borderRadius: 999,
    boxShadow: `inset 0 0 0 1px ${hexToRgba(INK, 0.18)}`,
  };
  const fieldStyle = {
    backgroundColor: PANEL,
    color: INK,
    border: "none",
    borderRadius: 999,
    boxShadow: `inset 0 0 0 1px ${hexToRgba(INK, 0.16)}`,
    fontVariantNumeric: "tabular-nums",
  };

  const StatusChip = ({ status, size = "sm" }) => {
    const meta = STATUS[status];
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full ${
          size === "lg" ? "px-4 py-1.5 text-[13px]" : "px-3 py-1 text-[12px]"
        } font-semibold whitespace-nowrap`}
        style={{ backgroundColor: hexToRgba(meta.hue, 0.16), color: INK }}
      >
        <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.hue }} />
        {meta.label}
      </span>
    );
  };

  const actionButtons = [
    { wf: "b-5-0", label: "Approve", kind: "approve", allowed: canApprove, primary: true },
    { wf: "b-5-1", label: "Reject", kind: "reject", allowed: canReject, primary: false },
    { wf: "b-5-2", label: "Mark as paid", kind: "pay", allowed: canPay, primary: false },
    { wf: "b-5-3", label: "Record as reconciled", kind: "reconcile", allowed: canReconcile, primary: false },
  ];

  const helperText = !selected
    ? "open a payment from the list above to approve, reject, mark it paid or close it off."
    : ownPayment && selected.status === "pending_approval"
    ? "You created this payment, so a different approver must approve it. Mark as paid is only available once approved."
    : selected.status === "pending_approval"
    ? "a second person's decision is recorded against your name. Mark as paid is only available once approved."
    : selected.status === "approved"
    ? "approved and waiting on treasury — mark it as paid once it has gone out of the bank portal."
    : selected.status === "paid"
    ? "paid on " + (selected.paid_at || NOW) + " — record it as reconciled when it matches the statement."
    : selected.status === "rejected"
    ? "rejected payments cannot be approved or paid. raise a new instruction if it still needs to go out."
    : selected.status === "created"
    ? "entered this morning and waiting on rule routing. approval and settlement open up once it is routed."
    : "this payment is closed. nothing further is required.";

  return (
    <div style={{ backgroundColor: CREAM, color: INK, fontFamily: brand.fontBody }} className="min-h-full pb-20">
      <style>{`
        .atr-focus:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .atr-row { transition: background-color .2s ease; }
        .atr-row:hover { background-color: ${hexToRgba(GOLD, 0.08)}; }
        @keyframes atr-row-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        @keyframes atr-panel-in { from { opacity: 0; transform: translateY(10px) scale(.99); } to { opacity: 1; transform: none; } }
        @keyframes atr-veil-in { from { opacity: 0; } to { opacity: 1; } }
        .atr-in { animation: atr-row-in .35s ease both; }
        .atr-panel-in { animation: atr-panel-in .32s ease both; }
        .atr-veil-in { animation: atr-veil-in .25s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .atr-in, .atr-panel-in, .atr-veil-in { animation: none !important; }
          .atr-row { transition: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 pt-10">
        {/* Row 1 ---------------------------------------------------------- */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h1
              data-wf="b-0-0"
              className="text-[36px] lg:text-[40px] leading-tight italic"
              style={{ fontFamily: brand.fontHeading, color: INK }}
            >
              Payments
            </h1>
            <p className="mt-2 text-[14px] leading-relaxed" style={{ color: NEUTRAL }}>
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle"
                style={{ backgroundColor: SAGE }}
              />
              every instruction is in GBP, the home currency · synced from the ledger at 14:28 today
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              data-wf="b-0-1"
              ref={openerRef}
              onClick={() => {
                setCreateNotice(null);
                setModalOpen(true);
              }}
              className={`${pillBase} w-full lg:w-auto px-7 py-3.5 text-[15px] hover:opacity-90`}
              style={primaryStyle}
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              New payment
            </Button>
          </div>
        </header>

        {/* Row 2 ---------------------------------------------------------- */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <section data-wf="b-1-0" className="lg:col-span-8" aria-labelledby="filter-heading">
            <h2
              id="filter-heading"
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: NEUTRAL }}
            >
              <Filter aria-hidden="true" className="h-3.5 w-3.5" />
              Filter by status
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const on = filter === f.key;
                return (
                  <li key={f.key}>
                    <button
                      type="button"
                      data-wf={f.wf}
                      aria-pressed={on}
                      onClick={() => setFilter(f.key)}
                      className={`${pillBase} px-4 py-2.5 min-h-[44px]`}
                      style={
                        on
                          ? { backgroundColor: INK, color: CREAM }
                          : { backgroundColor: hexToRgba(INK, 0.06), color: INK }
                      }
                    >
                      {f.label}
                      <span
                        className="text-[12px] font-semibold"
                        style={{
                          fontVariantNumeric: "tabular-nums",
                          color: on ? hexToRgba(CREAM, 0.8) : NEUTRAL,
                        }}
                      >
                        {countFor(f.key)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section data-wf="b-1-1" className="lg:col-span-4">
            <Label
              htmlFor="payment-search"
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: NEUTRAL }}
            >
              <Search aria-hidden="true" className="h-3.5 w-3.5" />
              Search reference or payee
            </Label>
            <Input
              id="payment-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="PAY-1042 or Northwind"
              className={`mt-3 w-full px-5 py-3 text-[15px] min-h-[44px] ${focus}`}
              style={fieldStyle}
            />
          </section>
        </div>

        {/* Row 3 ---------------------------------------------------------- */}
        <section data-wf="b-2-0" className="mt-8" aria-labelledby="table-heading">
          <Card
            className="overflow-hidden"
            style={{
              backgroundColor: PANEL,
              border: "none",
              borderRadius: brand.radius,
              boxShadow: `0 1px 0 ${hexToRgba(INK, 0.1)}, 0 18px 40px -36px ${hexToRgba(INK, 0.5)}`,
            }}
          >
            <CardHeader className="px-6 lg:px-8 pt-7 pb-5 flex flex-wrap items-baseline justify-between gap-3">
              <CardTitle
                id="table-heading"
                className="text-[22px] italic"
                style={{ fontFamily: brand.fontHeading, color: INK, fontVariantNumeric: "tabular-nums" }}
              >
                Payments ({payments.length})
              </CardTitle>
              <CardDescription className="text-[13px]" style={{ color: NEUTRAL, fontVariantNumeric: "tabular-nums" }}>
                showing {visible.length} of {payments.length}
                {filter !== "all" ? ` · ${FILTERS.find((f) => f.key === filter).label.toLowerCase()}` : ""}
              </CardDescription>
            </CardHeader>

            {createNotice && (
              <div
                className="mx-6 lg:mx-8 mb-4 flex items-start gap-3 rounded-[20px] px-5 py-4 atr-in"
                style={{ backgroundColor: hexToRgba(SAGE, 0.14), color: INK }}
                role="status"
              >
                <CheckCircle aria-hidden="true" className="h-4 w-4 mt-0.5 shrink-0" style={{ color: SAGE }} />
                <p className="text-[14px] leading-relaxed">{createNotice.text}</p>
              </div>
            )}

            <CardContent className="px-0 pb-2">
              <div style={{ height: 1, backgroundColor: hexToRgba(INK, 0.12) }} />
              {visible.length === 0 ? (
                <div className="px-6 lg:px-8 py-12">
                  <Empty
                    title="no payments match that view"
                    description={
                      query
                        ? `nothing in ${FILTERS.find((f) => f.key === filter).label.toLowerCase()} matches “${query}”. try a shorter reference, or widen the filter to all.`
                        : `no payments are sitting in ${FILTERS.find((f) => f.key === filter).label.toLowerCase()} right now. that is a good sign — nothing is waiting here.`
                    }
                    action={
                      <Button
                        onClick={() => {
                          setQuery("");
                          setFilter("all");
                        }}
                        className={`${pillBase} px-5 py-2.5 min-h-[44px]`}
                        style={quietStyle}
                      >
                        Show all payments
                      </Button>
                    }
                  />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table className="w-full" style={{ fontVariantNumeric: "tabular-nums" }}>
                    <THead>
                      <TR style={{ backgroundColor: hexToRgba(INK, 0.05) }}>
                        {[
                          ["i-2-0-0", "Reference", "text-left"],
                          ["i-2-0-1", "Payee", "text-left"],
                          ["i-2-0-2", "Amount (GBP)", "text-right"],
                          ["i-2-0-3", "Status", "text-left"],
                          ["i-2-0-4", "Created by", "text-left"],
                          ["i-2-0-5", "Created at", "text-left"],
                        ].map(([wf, label, align]) => (
                          <TH
                            key={wf}
                            data-wf={wf}
                            scope="col"
                            className={`${align} px-5 lg:px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.13em] whitespace-nowrap`}
                            style={{ color: NEUTRAL, border: "none" }}
                          >
                            {label}
                          </TH>
                        ))}
                      </TR>
                    </THead>
                    <TBody>
                      {visible.map((p) => {
                        const on = p.id === selectedId;
                        return (
                          <TR
                            key={p.id}
                            className={`atr-row ${p.id === newRowId ? "atr-in" : ""}`}
                            style={{
                              backgroundColor: on ? hexToRgba(GOLD, 0.13) : "transparent",
                              boxShadow: `inset 0 -1px 0 ${hexToRgba(INK, 0.1)}${
                                on ? `, inset 3px 0 0 ${GOLD}` : ""
                              }`,
                            }}
                          >
                            <TD className="px-5 lg:px-6 py-4 align-middle" style={{ border: "none" }}>
                              <button
                                type="button"
                                aria-current={on ? "true" : undefined}
                                onClick={() => {
                                  setSelectedId(p.id);
                                  setNotice(null);
                                  setConfirmReject(false);
                                }}
                                className={`${focus} rounded-full px-1 text-[15px] font-semibold underline-offset-4 hover:underline`}
                                style={{ color: INK, fontVariantNumeric: "tabular-nums" }}
                              >
                                {p.reference}
                                <span className="sr-only">
                                  {on ? " — open in the review panel below" : " — open in the review panel"}
                                </span>
                              </button>
                            </TD>
                            <TD className="px-5 lg:px-6 py-4 text-[15px] align-middle" style={{ border: "none" }}>
                              {p.payee}
                            </TD>
                            <TD
                              className="px-5 lg:px-6 py-4 text-right text-[15px] font-semibold align-middle whitespace-nowrap"
                              style={{ border: "none" }}
                            >
                              {money(p.amount)}
                            </TD>
                            <TD className="px-5 lg:px-6 py-4 align-middle" style={{ border: "none" }}>
                              <StatusChip status={p.status} />
                            </TD>
                            <TD className="px-5 lg:px-6 py-4 text-[14px] align-middle whitespace-nowrap" style={{ border: "none" }}>
                              {p.created_by}
                              {p.created_by === ME && (
                                <span className="ml-2 text-[12px]" style={{ color: NEUTRAL }}>
                                  (you)
                                </span>
                              )}
                            </TD>
                            <TD
                              className="px-5 lg:px-6 py-4 text-[14px] align-middle whitespace-nowrap"
                              style={{ border: "none", color: NEUTRAL }}
                            >
                              {p.created_at}
                            </TD>
                          </TR>
                        );
                      })}
                    </TBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Rows 4-7: arch-topped review panel ----------------------------- */}
        <section className="mt-10" aria-labelledby="review-heading">
          <Card
            data-wf="b-3-0"
            className="overflow-hidden atr-panel-in"
            style={{
              backgroundColor: hexToRgba(INK, 0.06),
              border: "none",
              borderRadius: "260px 260px 24px 24px",
              boxShadow: `0 20px 50px -44px ${hexToRgba(INK, 0.7)}`,
            }}
          >
            <CardHeader className="px-6 lg:px-16 pt-14 pb-6 text-center">
              {selected ? (
                <>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: NEUTRAL }}>
                    under review
                  </p>
                  <CardTitle
                    id="review-heading"
                    className="mt-3 text-[26px] lg:text-[30px] italic leading-snug"
                    style={{ fontFamily: brand.fontHeading, color: INK, fontVariantNumeric: "tabular-nums" }}
                  >
                    {selected.reference} · {selected.payee} · {money(selected.amount)}
                  </CardTitle>
                  <div className="mt-4 flex justify-center">
                    <StatusChip status={selected.status} size="lg" />
                  </div>
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-7 h-px w-28"
                    style={{ backgroundColor: hexToRgba(GOLD, 0.6) }}
                  />
                </>
              ) : (
                <CardTitle id="review-heading" className="text-[24px] italic" style={{ fontFamily: brand.fontHeading }}>
                  No payment open
                </CardTitle>
              )}
            </CardHeader>

            <CardContent className="px-6 lg:px-16 pb-12">
              {!selected ? (
                <Empty
                  title="nothing open for review"
                  description="choose a reference in the list above and its details, bank snapshot and available actions appear here."
                />
              ) : (
                <>
                  {/* Row 5 */}
                  <p
                    data-wf="b-4-0"
                    className="mx-auto max-w-[68ch] text-center text-[16px] leading-[1.65]"
                    style={{ color: INK }}
                  >
                    Details: {selected.details} Pays sort code {selected.sort_code}, account ending{" "}
                    {selected.account_number}. Created by {selected.created_by}, {selected.created_at}.
                    {selected.approved_at && (
                      <>
                        {" "}
                        Approved by {selected.approved_by}, {selected.approved_at}.
                      </>
                    )}
                    {selected.paid_at && (
                      <>
                        {" "}
                        Paid by {selected.paid_by}, {selected.paid_at}.
                      </>
                    )}
                  </p>

                  {notice && (
                    <div
                      role="status"
                      className="mx-auto mt-7 flex max-w-[68ch] items-start gap-3 rounded-[20px] px-5 py-4 atr-in"
                      style={{
                        backgroundColor:
                          notice.tone === "success" ? hexToRgba(SAGE, 0.16) : hexToRgba(CLAY, 0.14),
                        color: INK,
                      }}
                    >
                      {notice.tone === "success" ? (
                        <CheckCircle aria-hidden="true" className="h-4 w-4 mt-0.5 shrink-0" style={{ color: SAGE }} />
                      ) : (
                        <AlertCircle aria-hidden="true" className="h-4 w-4 mt-0.5 shrink-0" style={{ color: CLAY }} />
                      )}
                      <p className="text-[14px] leading-relaxed">
                        <span className="sr-only">
                          {notice.tone === "success" ? "Done: " : "Action refused: "}
                        </span>
                        {notice.text}
                      </p>
                    </div>
                  )}

                  {confirmReject && (
                    <div
                      className="mx-auto mt-7 max-w-[68ch] rounded-[20px] px-5 py-5 atr-in"
                      style={{ backgroundColor: hexToRgba(CLAY, 0.1) }}
                    >
                      <h3 className="text-[16px] font-semibold" style={{ color: INK }}>
                        Reject {selected.reference}?
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed" style={{ color: INK }}>
                        a rejected payment can never be paid, and {selected.created_by} is emailed the outcome. this
                        cannot be undone.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button
                          onClick={() => act("reject", canReject)}
                          className={`${pillBase} px-5 py-2.5 min-h-[44px]`}
                          style={{ backgroundColor: CLAY, color: "#fff8f2", borderRadius: 999 }}
                        >
                          Yes, reject it
                        </Button>
                        <Button
                          onClick={() => setConfirmReject(false)}
                          className={`${pillBase} px-5 py-2.5 min-h-[44px]`}
                          style={quietStyle}
                        >
                          Keep it pending
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Row 6 */}
                  <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {actionButtons.map((a) => {
                      const busy = pending && pending.kind === a.kind;
                      return (
                        <Button
                          key={a.wf}
                          data-wf={a.wf}
                          onClick={() =>
                            a.kind === "reject" && canReject ? setConfirmReject(true) : act(a.kind, a.allowed)
                          }
                          disabled={!!pending}
                          aria-describedby="review-helper"
                          className={`${pillBase} w-full px-5 py-3.5 min-h-[48px] ${
                            pending ? "cursor-wait" : "hover:opacity-90"
                          }`}
                          style={
                            a.primary && a.allowed
                              ? primaryStyle
                              : {
                                  ...quietStyle,
                                  backgroundColor: a.allowed ? hexToRgba(PANEL, 1) : "transparent",
                                  opacity: a.allowed ? 1 : 0.55,
                                }
                          }
                        >
                          {busy ? "recording…" : a.label}
                          {!a.allowed && <span className="sr-only"> (not available for this status)</span>}
                        </Button>
                      );
                    })}
                  </div>

                  {/* Row 7 */}
                  <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    <p
                      data-wf="b-6-0"
                      id="review-helper"
                      className="lg:col-span-8 text-[14px] leading-relaxed"
                      style={{ color: NEUTRAL }}
                    >
                      {helperText}
                    </p>
                    <div className="lg:col-span-4 lg:text-right">
                      <button
                        type="button"
                        data-wf="b-6-1"
                        onClick={() => navigate("payees")}
                        className={`${focus} inline-flex items-center gap-2 rounded-full px-2 py-2 text-[14px] font-semibold underline underline-offset-4`}
                        style={{ color: INK }}
                      >
                        Register a new payee
                        <ChevronRight aria-hidden="true" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Rows 8-9: new payment modal --------------------------------------- */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-10 atr-veil-in"
          style={{ backgroundColor: hexToRgba(INK, 0.45) }}
        >
          <div
            data-wf="b-7-0"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-payment-title"
            onKeyDown={onDialogKeyDown}
            className="w-full max-w-xl atr-panel-in"
            style={{
              backgroundColor: PANEL,
              borderRadius: "220px 220px 24px 24px",
              boxShadow: `0 40px 80px -40px ${hexToRgba(INK, 0.8)}`,
            }}
          >
            <form onSubmit={submitPayment} noValidate>
              <div className="px-7 lg:px-12 pt-12 text-center">
                <h2
                  id="new-payment-title"
                  className="text-[28px] italic"
                  style={{ fontFamily: brand.fontHeading, color: INK }}
                >
                  New payment
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: NEUTRAL }}>
                  payments of {money(THRESHOLD)} or more are routed to a second approver.
                </p>
                <div aria-hidden="true" className="mx-auto mt-6 h-px w-24" style={{ backgroundColor: hexToRgba(GOLD, 0.6) }} />
              </div>

              <div className="px-7 lg:px-12 pt-8 space-y-6">
                <div>
                  <Label htmlFor="np-payee" className="text-[13px] font-semibold" style={{ color: INK }}>
                    Payee (approved payees only)
                  </Label>
                  <Select
                    id="np-payee"
                    ref={firstFieldRef}
                    value={form.payee_id}
                    aria-invalid={errors.payee_id ? "true" : undefined}
                    aria-describedby={errors.payee_id ? "np-payee-err" : "np-payee-hint"}
                    onChange={(e) => setForm({ ...form, payee_id: e.target.value })}
                    className={`mt-2 w-full px-5 py-3 text-[15px] min-h-[48px] ${focus}`}
                    style={fieldStyle}
                  >
                    <option value="">choose a payee…</option>
                    {PAYEES.filter((p) => p.status === "approved").map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.sort_code} · ending {p.account_number}
                      </option>
                    ))}
                  </Select>
                  <p id="np-payee-hint" className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                    2 payees are still awaiting approval in the register and cannot be paid yet.
                  </p>
                  {errors.payee_id && (
                    <p id="np-payee-err" className="mt-2 flex items-center gap-2 text-[13px] font-semibold" style={{ color: CLAY }}>
                      <AlertCircle aria-hidden="true" className="h-4 w-4" />
                      {errors.payee_id}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="np-amount" className="text-[13px] font-semibold" style={{ color: INK }}>
                    Amount in GBP (home currency)
                  </Label>
                  <Input
                    id="np-amount"
                    type="text"
                    inputMode="decimal"
                    value={form.amount}
                    placeholder="0.00"
                    aria-invalid={errors.amount ? "true" : undefined}
                    aria-describedby={errors.amount ? "np-amount-err" : "np-amount-hint"}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className={`mt-2 w-full px-5 py-3 text-[15px] min-h-[48px] ${focus}`}
                    style={fieldStyle}
                  />
                  <p id="np-amount-hint" className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                    GBP only — this organisation pays in a single home currency.
                  </p>
                  {errors.amount && (
                    <p id="np-amount-err" className="mt-2 flex items-center gap-2 text-[13px] font-semibold" style={{ color: CLAY }}>
                      <AlertCircle aria-hidden="true" className="h-4 w-4" />
                      {errors.amount}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="np-details" className="text-[13px] font-semibold" style={{ color: INK }}>
                    Payment details / reference
                  </Label>
                  <Textarea
                    id="np-details"
                    rows={3}
                    value={form.details}
                    placeholder="Invoice INV-8903, November maintenance"
                    aria-invalid={errors.details ? "true" : undefined}
                    aria-describedby={errors.details ? "np-details-err" : undefined}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className={`mt-2 w-full px-5 py-3 text-[15px] ${focus}`}
                    style={{ ...fieldStyle, borderRadius: 24 }}
                  />
                  {errors.details && (
                    <p id="np-details-err" className="mt-2 flex items-center gap-2 text-[13px] font-semibold" style={{ color: CLAY }}>
                      <AlertCircle aria-hidden="true" className="h-4 w-4" />
                      {errors.details}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-7 lg:px-12 pt-8">
                <div style={{ height: 1, backgroundColor: hexToRgba(INK, 0.12) }} />
              </div>

              <div className="px-7 lg:px-12 py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <p data-wf="b-8-0" className="lg:col-span-8 text-[14px] leading-relaxed" style={{ color: NEUTRAL }}>
                  Amount must be greater than 0.00 and payment details are required.
                </p>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                  <Button
                    data-wf="b-8-1"
                    type="submit"
                    disabled={submitting}
                    className={`${pillBase} w-full px-6 py-3.5 min-h-[48px] ${submitting ? "cursor-wait" : "hover:opacity-90"}`}
                    style={{ ...primaryStyle, opacity: submitting ? 0.75 : 1 }}
                  >
                    {submitting ? "creating…" : "Create payment"}
                  </Button>
                  <Button
                    type="button"
                    onClick={closeModal}
                    className={`${pillBase} w-full px-6 py-3 min-h-[44px]`}
                    style={quietStyle}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
