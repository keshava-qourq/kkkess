// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Label, Checkbox, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, ChevronRight, Users, FileText, Clock, Edit, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

const hexToRgba = (hex, alpha) => {
  const h = String(hex || '').replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return `rgba(70, 65, 47, ${alpha})`;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
};

const ROLE_SET = ['maker', 'approver', 'treasury/payer', 'administrator'];

const PRIVILEGED = ['approver', 'administrator'];

const APPROVED_PAYEES = [
  'Brightwell Logistics Ltd',
  'Harlow & Finch Print',
  'Orchard Facilities Group',
  'Casper Wu Design Studio',
  'Ravenmoor Energy',
];

const DEPARTMENTS = ['Facilities', 'Marketing', 'Operations', 'IT', 'People'];

const STAFF = [
  { id: 'u-014', email: 'victor.alonso@northgate.internal', roles: ['maker'], mfa_enabled: false, status: 'invited', created_at: '18 Nov 2026' },
  { id: 'u-001', email: 'amelia.hartley@northgate.internal', roles: ['administrator', 'approver'], mfa_enabled: true, status: 'active', created_at: '4 Mar 2024' },
  { id: 'u-002', email: 'tomas.ricci@northgate.internal', roles: ['maker'], mfa_enabled: false, status: 'active', created_at: '18 Jun 2024' },
  { id: 'u-003', email: 'priya.nandra@northgate.internal', roles: ['approver', 'treasury/payer'], mfa_enabled: true, status: 'active', created_at: '2 Jul 2024' },
  { id: 'u-004', email: 'george.okafor@northgate.internal', roles: ['maker', 'approver'], mfa_enabled: true, status: 'active', created_at: '11 Sep 2024' },
  { id: 'u-005', email: 'hannah.beaumont@northgate.internal', roles: ['treasury/payer'], mfa_enabled: false, status: 'active', created_at: '20 Jan 2025' },
  { id: 'u-006', email: 'daniel.svensson@northgate.internal', roles: ['maker'], mfa_enabled: false, status: 'deactivated', created_at: '27 Feb 2024' },
  { id: 'u-007', email: 'ruth.calloway@northgate.internal', roles: ['administrator'], mfa_enabled: true, status: 'active', created_at: '8 Nov 2023' },
  { id: 'u-008', email: 'jonah.whitfield@northgate.internal', roles: ['maker', 'treasury/payer'], mfa_enabled: false, status: 'active', created_at: '16 Mar 2025' },
  { id: 'u-009', email: 'eleni.vasilakis@northgate.internal', roles: ['approver'], mfa_enabled: true, status: 'active', created_at: '29 Apr 2025' },
  { id: 'u-010', email: 'mark.pemberton@northgate.internal', roles: ['maker'], mfa_enabled: false, status: 'deactivated', created_at: '14 Aug 2023' },
  { id: 'u-011', email: 'saoirse.flynn@northgate.internal', roles: ['approver', 'administrator'], mfa_enabled: true, status: 'active', created_at: '3 Jun 2025' },
  { id: 'u-012', email: 'ibrahim.haddad@northgate.internal', roles: ['maker'], mfa_enabled: false, status: 'active', created_at: '22 Aug 2025' },
  { id: 'u-013', email: 'clara.mendoza@northgate.internal', roles: ['treasury/payer', 'approver'], mfa_enabled: true, status: 'active', created_at: '30 Sep 2025' },
];

const RULES = [
  { id: 'r-001', name: 'Second approval over £5,000', condition_type: 'amount_threshold', threshold_amount: 5000, payee: null, department: null, is_active: true, created_by: 'amelia.hartley', created_at: '4 Mar 2024' },
  { id: 'r-002', name: 'Every payment to Brightwell Logistics', condition_type: 'payee', threshold_amount: null, payee: 'Brightwell Logistics Ltd', department: null, is_active: true, created_by: 'ruth.calloway', created_at: '12 Jan 2025' },
  { id: 'r-003', name: 'Facilities spend over £1,000', condition_type: 'department', threshold_amount: 1000, payee: null, department: 'Facilities', is_active: true, created_by: 'amelia.hartley', created_at: '7 Apr 2025' },
  { id: 'r-004', name: 'Marketing retainers over £2,500', condition_type: 'department', threshold_amount: 2500, payee: null, department: 'Marketing', is_active: false, created_by: 'saoirse.flynn', created_at: '19 Sep 2026' },
];

const CONDITION_LABEL = {
  amount_threshold: 'amount threshold',
  payee: 'payee',
  department: 'department',
};

const money = (n) =>
  '£' + Number(n).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Screen() {
  const navigate = useNavigate();
  const INK = brand.primaryColor;
  const ACCENT = brand.accentColor;
  const NEUTRAL = brand.neutralColor;
  const CREAM = brand.backgroundColor;
  const HAIRLINE = hexToRgba(INK, 0.14);
  const PANEL = hexToRgba(INK, 0.05);
  const PANEL_DEEP = hexToRgba(INK, 0.09);
  const SURFACE = 'rgba(255, 255, 255, 0.7)';
  const MOSS = 'rgb(78, 100, 66)';
  const CLAY = 'rgb(158, 76, 48)';

  const FOCUS = 'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const timers = React.useRef([]);
  const after = (ms, fn) => {
    const t = window.setTimeout(fn, ms);
    timers.current.push(t);
  };
  React.useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  const [tab, setTab] = React.useState('users');
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState(STAFF);
  const [rules, setRules] = React.useState(RULES);
  const [banner, setBanner] = React.useState(null);
  const [flashId, setFlashId] = React.useState(null);

  React.useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(t);
  }, []);

  // ---- user dialog ----
  const [userOpen, setUserOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);
  const [form, setForm] = React.useState({ email: '', roles: [], active: true });
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);
  const [confirmOff, setConfirmOff] = React.useState(false);
  const emailRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const addBtnRef = React.useRef(null);

  React.useEffect(() => {
    if (userOpen && emailRef.current) emailRef.current.focus();
  }, [userOpen]);

  const closeUser = () => {
    setUserOpen(false);
    setConfirmOff(false);
    const back = triggerRef.current || addBtnRef.current;
    if (back && back.focus) back.focus();
  };

  const openAdd = (e) => {
    triggerRef.current = e && e.currentTarget;
    setTab('users');
    setEditingId(null);
    setForm({ email: '', roles: [], active: true });
    setErrors({});
    setConfirmOff(false);
    setUserOpen(true);
  };

  const openEdit = (u, e) => {
    triggerRef.current = e && e.currentTarget;
    setEditingId(u.id);
    setForm({ email: u.email, roles: [...u.roles], active: u.status !== 'deactivated' });
    setErrors({});
    setConfirmOff(false);
    setUserOpen(true);
  };

  const toggleRole = (role) =>
    setForm((f) => ({
      ...f,
      roles: f.roles.includes(role) ? f.roles.filter((r) => r !== role) : [...f.roles, role],
    }));

  const submitUser = (e) => {
    e.preventDefault();
    const next = {};
    const email = form.email.trim();
    if (!email) next.email = 'enter a work email address — it is how they sign in.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'that does not look like an email address.';
    else if (users.some((u) => u.email.toLowerCase() === email.toLowerCase() && u.id !== editingId))
      next.email = 'that email already has an account on kkkess.';
    if (form.roles.length === 0) next.roles = 'choose at least one role — an account with none can do nothing.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setSaving(true);
    after(650, () => {
      if (editingId) {
        setUsers((list) =>
          list.map((u) =>
            u.id === editingId
              ? {
                  ...u,
                  email,
                  roles: form.roles,
                  status: form.active ? (u.status === 'deactivated' ? 'active' : u.status) : 'deactivated',
                }
              : u
          )
        );
        setFlashId(editingId);
        setBanner({ tone: 'good', text: `saved ${email} with ${form.roles.length} role${form.roles.length === 1 ? '' : 's'}. the change is in the audit log.` });
      } else {
        const id = 'u-' + String(100 + users.length);
        setUsers((list) => [
          {
            id,
            email,
            roles: form.roles,
            mfa_enabled: false,
            status: form.active ? 'invited' : 'deactivated',
            created_at: '25 Nov 2026',
          },
          ...list,
        ]);
        setFlashId(id);
        setBanner({ tone: 'good', text: `invited ${email}. they set their own password the first time they sign in.` });
      }
      setSaving(false);
      setUserOpen(false);
      setConfirmOff(false);
      after(2600, () => setFlashId(null));
      const back = triggerRef.current || addBtnRef.current;
      if (back && back.focus) back.focus();
    });
  };

  const deactivateNow = () => {
    const target = users.find((u) => u.id === editingId);
    setUsers((list) => list.map((u) => (u.id === editingId ? { ...u, status: 'deactivated' } : u)));
    setFlashId(editingId);
    setBanner({ tone: 'warn', text: `${target ? target.email : 'that account'} is deactivated. any open session stopped working just now.` });
    setUserOpen(false);
    setConfirmOff(false);
    after(2600, () => setFlashId(null));
    const back = triggerRef.current || addBtnRef.current;
    if (back && back.focus) back.focus();
  };

  // ---- rules ----
  const [draftCount, setDraftCount] = React.useState(0);

  const addDraftRule = () => {
    const n = draftCount + 1;
    const id = 'r-' + String(100 + rules.length);
    setDraftCount(n);
    setRules((list) => [
      ...list,
      {
        id,
        name: `Draft rule ${n} — conditions to set`,
        condition_type: 'amount_threshold',
        threshold_amount: null,
        payee: null,
        department: null,
        is_active: false,
        created_by: 'amelia.hartley',
        created_at: '25 Nov 2026',
      },
    ]);
    setFlashId(id);
    setBanner({
      tone: 'warn',
      text: `draft rule ${n} is saved and paused. a paused rule routes nothing — switch it on once its threshold is agreed.`,
    });
    after(2600, () => setFlashId(null));
  };

  const toggleRule = (id) =>
    setRules((list) => list.map((r) => (r.id === id ? { ...r, is_active: !r.is_active } : r)));

  // ---- email provider ----
  const [apiKey, setApiKey] = React.useState('');
  const [sender, setSender] = React.useState('payments@example.internal');
  const [provider, setProvider] = React.useState('unconfigured'); // unconfigured | saving | configured | error
  const [providerMsg, setProviderMsg] = React.useState('');

  const submitProvider = (e) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      setProvider('error');
      setProviderMsg('we still need a sending key. the 3 queued approval emails stay queued until one is saved.');
      return;
    }
    setProvider('saving');
    setProviderMsg('');
    after(750, () => {
      setProvider('configured');
      setProviderMsg(`key accepted. a test email went to ${sender}.`);
    });
  };

  const TABS = [
    { key: 'users', label: 'Users & roles', wf: 'i-1-0-0' },
    { key: 'rules', label: 'Approval rules', wf: 'i-1-0-1' },
    { key: 'email', label: 'Email notifications', wf: 'i-1-0-2' },
  ];

  const onTabKey = (e, idx) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % TABS.length : (idx - 1 + TABS.length) % TABS.length;
    setTab(TABS[nextIdx].key);
    const el = document.getElementById('tab-' + TABS[nextIdx].key);
    if (el) el.focus();
  };

  const archMark = (
    <span aria-hidden="true" className="inline-block h-5 w-3.5 shrink-0" style={{ backgroundColor: ACCENT, borderRadius: '7px 7px 2px 2px' }} />
  );

  const rolePill = (role) => (
    <span
      key={role}
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] leading-none"
      style={{
        backgroundColor: PRIVILEGED.includes(role) ? hexToRgba(ACCENT, 0.2) : PANEL_DEEP,
        color: INK,
      }}
    >
      {role}
    </span>
  );

  const statusPill = (status) => {
    const map = {
      active: { text: 'active', color: MOSS, bg: 'rgba(78, 100, 66, 0.12)', Icon: CheckCircle },
      invited: { text: 'invited', color: INK, bg: hexToRgba(ACCENT, 0.22), Icon: Clock },
      deactivated: { text: 'deactivated', color: CLAY, bg: 'rgba(158, 76, 48, 0.12)', Icon: X },
    };
    const s = map[status] || map.active;
    const Ico = s.Icon;
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium" style={{ backgroundColor: s.bg, color: s.color }}>
        <Ico aria-hidden="true" className="h-3.5 w-3.5" />
        {s.text}
      </span>
    );
  };

  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.85)',
    border: `1px solid ${HAIRLINE}`,
    borderRadius: 9999,
    color: INK,
    outlineColor: ACCENT,
  };

  const primaryBtn = {
    backgroundColor: INK,
    color: CREAM,
    borderRadius: 9999,
    border: '1px solid transparent',
    outlineColor: ACCENT,
  };

  const quietBtn = {
    backgroundColor: 'transparent',
    color: INK,
    borderRadius: 9999,
    border: `1px solid ${HAIRLINE}`,
    outlineColor: ACCENT,
  };

  const panelStyle = {
    backgroundColor: PANEL,
    border: `1px solid ${HAIRLINE}`,
    borderRadius: brand.radius,
  };

  const thStyle = { color: hexToRgba(INK, 0.62), borderBottom: `1px solid ${HAIRLINE}` };
  const thClass = 'px-4 py-3 text-left text-[12px] font-semibold tracking-[0.07em] whitespace-nowrap';
  const tdClass = 'px-4 py-4 align-middle text-sm';

  const activeUsers = users.filter((u) => u.status === 'active').length;
  const pendingMfa = users.filter((u) => u.roles.some((r) => PRIVILEGED.includes(r)) && !u.mfa_enabled).length;

  return (
    <div
      className="w-full"
      style={{ backgroundColor: CREAM, color: INK, fontFamily: brand.fontBody, fontVariantNumeric: 'tabular-nums' }}
    >
      <style>{`
        @keyframes atriumRise { from { opacity: 0; transform: translateY(14px) scale(0.985); } to { opacity: 1; transform: none; } }
        @keyframes atriumFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes atriumRow { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        @keyframes atriumBreathe { 0%,100% { opacity: .45; } 50% { opacity: .85; } }
        .atrium-rise { animation: atriumRise .32s cubic-bezier(.22,.78,.3,1) both; }
        .atrium-fade { animation: atriumFade .25s ease-out both; }
        .atrium-row { animation: atriumRow .4s cubic-bezier(.22,.78,.3,1) both; }
        .atrium-skel { animation: atriumBreathe 1.5s ease-in-out infinite; }
        .atrium-link-underline { text-decoration-thickness: 1px; text-underline-offset: 5px; }
        @media (prefers-reduced-motion: reduce) {
          .atrium-rise, .atrium-fade, .atrium-row, .atrium-skel { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Row 1 — page title */}
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div data-wf="b-0-0">
            <h1
              className="text-[32px] sm:text-[40px] leading-tight italic"
              style={{ fontFamily: brand.fontHeading, fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              Administration
            </h1>
            <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed" style={{ color: hexToRgba(INK, 0.72) }}>
              staff accounts and roles, the rules that send a payment for a second pair of eyes, and the health of
              approval emails.
            </p>
          </div>
          <p className="flex items-center gap-2 text-[13px]" style={{ color: NEUTRAL }}>
            <Clock aria-hidden="true" className="h-4 w-4" />
            showing settings as of 09:42 · signed in as amelia.hartley
          </p>
        </header>

        {/* Row 2 — tabs + primary action */}
        <div className="mt-8 grid grid-cols-12 items-center gap-4">
          <div className="col-span-12 lg:col-span-8" data-wf="b-1-0">
            <div
              role="tablist"
              aria-label="Administration sections"
              className="inline-flex flex-wrap gap-1 p-1"
              style={{ backgroundColor: PANEL, borderRadius: 9999, border: `1px solid ${HAIRLINE}` }}
            >
              {TABS.map((t, i) => {
                const on = tab === t.key;
                return (
                  <button
                    key={t.key}
                    id={'tab-' + t.key}
                    data-wf={t.wf}
                    role="tab"
                    type="button"
                    aria-selected={on}
                    aria-controls={'panel-' + t.key}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setTab(t.key)}
                    onKeyDown={(e) => onTabKey(e, i)}
                    className={`rounded-full px-5 py-2.5 text-sm transition-colors duration-200 ${FOCUS}`}
                    style={{
                      backgroundColor: on ? INK : 'transparent',
                      color: on ? CREAM : hexToRgba(INK, 0.78),
                      fontWeight: on ? 600 : 500,
                      outlineColor: ACCENT,
                      minHeight: 44,
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Button
              ref={addBtnRef}
              data-wf="b-1-1"
              type="button"
              onClick={openAdd}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-px ${FOCUS}`}
              style={primaryBtn}
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Add user
            </Button>
          </div>
        </div>

        {banner && (
          <div
            role="status"
            className="atrium-fade mt-6 flex items-start gap-4 px-5 py-4"
            style={{
              backgroundColor: banner.tone === 'good' ? 'rgba(78, 100, 66, 0.1)' : 'rgba(158, 76, 48, 0.1)',
              border: `1px solid ${banner.tone === 'good' ? 'rgba(78, 100, 66, 0.28)' : 'rgba(158, 76, 48, 0.28)'}`,
              borderRadius: brand.radius,
            }}
          >
            <p className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: banner.tone === 'good' ? MOSS : CLAY }}>
              {banner.tone === 'good' ? (
                <CheckCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              {banner.text}
            </p>
          </div>
        )}

        {/* ---------------- Users & roles ---------------- */}
        {tab === 'users' && (
          <div id="panel-users" role="tabpanel" aria-labelledby="tab-users" tabIndex={-1} className="atrium-fade mt-6">
            <section data-wf="b-2-0" aria-labelledby="staff-heading" className="overflow-hidden" style={panelStyle}>
              <div className="flex flex-wrap items-end justify-between gap-4 px-6 py-6 sm:px-8 sm:py-7">
                <div>
                  <h2 id="staff-heading" className="flex items-center gap-3 text-[22px] italic" style={{ fontFamily: brand.fontHeading, fontWeight: 600 }}>
                    {archMark}
                    Staff accounts ({users.length})
                  </h2>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed" style={{ color: hexToRgba(INK, 0.7) }}>
                    open an account to change its roles or stop its access. {activeUsers} active
                    {pendingMfa > 0 ? ` · ${pendingMfa} privileged account${pendingMfa === 1 ? '' : 's'} still to set up multi-factor sign-in` : ''}.
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table className="w-full border-collapse text-left">
                  <THead>
                    <TR>
                      <TH data-wf="i-2-0-0" scope="col" className={thClass} style={thStyle}>Email</TH>
                      <TH data-wf="i-2-0-1" scope="col" className={thClass} style={thStyle}>Roles</TH>
                      <TH data-wf="i-2-0-2" scope="col" className={thClass} style={thStyle}>MFA enabled</TH>
                      <TH data-wf="i-2-0-3" scope="col" className={thClass} style={thStyle}>Status</TH>
                      <TH data-wf="i-2-0-4" scope="col" className={thClass} style={{ ...thStyle, textAlign: 'right' }}>Created at</TH>
                    </TR>
                  </THead>
                  <TBody>
                    {loading &&
                      [0, 1, 2, 3, 4, 5].map((i) => (
                        <TR key={'sk' + i} style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                          <TD className={tdClass} colSpan={5}>
                            <span className="sr-only">{i === 0 ? 'loading staff accounts' : ''}</span>
                            <span className="atrium-skel block h-4 rounded-full" style={{ backgroundColor: PANEL_DEEP, width: `${90 - i * 7}%` }} />
                          </TD>
                        </TR>
                      ))}
                    {!loading &&
                      users.map((u) => (
                        <TR
                          key={u.id}
                          className={flashId === u.id ? 'atrium-row' : ''}
                          style={{
                            borderBottom: `1px solid ${HAIRLINE}`,
                            backgroundColor: flashId === u.id ? hexToRgba(ACCENT, 0.14) : 'transparent',
                            transition: 'background-color .6s ease',
                            opacity: u.status === 'deactivated' ? 0.72 : 1,
                          }}
                        >
                          <TD className={tdClass}>
                            <button
                              type="button"
                              onClick={(e) => openEdit(u, e)}
                              className={`group inline-flex items-center gap-2 rounded-full py-1 pr-2 text-left text-sm ${FOCUS}`}
                              style={{ color: INK, outlineColor: ACCENT }}
                            >
                              <Avatar name={u.email.split('@')[0].replace('.', ' ')} className="h-7 w-7 shrink-0" />
                              <span className="group-hover:underline atrium-link-underline">{u.email}</span>
                              <ChevronRight aria-hidden="true" className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-70" />
                            </button>
                          </TD>
                          <TD className={tdClass}>
                            <span className="flex flex-wrap gap-1.5">{u.roles.map(rolePill)}</span>
                          </TD>
                          <TD className={tdClass}>
                            {u.mfa_enabled ? (
                              <span className="inline-flex items-center gap-1.5" style={{ color: MOSS }}>
                                <Check aria-hidden="true" className="h-4 w-4" /> enabled
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5" style={{ color: hexToRgba(INK, 0.62) }}>
                                <AlertCircle aria-hidden="true" className="h-4 w-4" />
                                {u.roles.some((r) => PRIVILEGED.includes(r)) ? 'required, not set' : 'not set'}
                              </span>
                            )}
                          </TD>
                          <TD className={tdClass}>{statusPill(u.status)}</TD>
                          <TD className={tdClass} style={{ textAlign: 'right', color: hexToRgba(INK, 0.72) }}>{u.created_at}</TD>
                        </TR>
                      ))}
                  </TBody>
                </Table>
              </div>
              <p className="px-6 py-5 text-[13px] sm:px-8" style={{ color: NEUTRAL }}>
                new accounts start as <em>invited</em> — the password is set at first sign-in, and approvers and
                administrators are walked through multi-factor setup then.
              </p>
            </section>
          </div>
        )}

        {/* ---------------- Rows 4 & 5 — add / edit user dialog and its actions ---------------- */}
        {userOpen && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-10"
            style={{ backgroundColor: hexToRgba(INK, 0.42) }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeUser();
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="user-dialog-title"
              className="atrium-rise relative w-full max-w-xl"
              style={{
                backgroundColor: CREAM,
                borderRadius: '200px 200px 24px 24px',
                boxShadow: '0 24px 60px rgba(70,65,47,0.24)',
                border: `1px solid ${HAIRLINE}`,
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  e.stopPropagation();
                  closeUser();
                }
              }}
            >
              <form onSubmit={submitUser} className="px-7 pb-8 pt-14 sm:px-10">
                {/* Row 4 — add user */}
                <div data-wf="b-3-0">
                  <h2 id="user-dialog-title" className="text-center text-[26px] italic" style={{ fontFamily: brand.fontHeading, fontWeight: 600 }}>
                    {editingId ? 'Edit user' : 'Add user'}
                  </h2>
                  <p className="mx-auto mt-2 max-w-[44ch] text-center text-sm leading-relaxed" style={{ color: hexToRgba(INK, 0.7) }}>
                    {editingId
                      ? 'change the roles this person holds, or stop their access entirely.'
                      : 'an account gets exactly the permissions of the roles you tick, and one person may hold several.'}
                  </p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <Label htmlFor="user-email" className="block text-[13px] font-semibold">Email address</Label>
                      <Input
                        data-wf="i-3-0-0"
                        ref={emailRef}
                        id="user-email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="firstname.lastname@northgate.internal"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'user-email-error' : undefined}
                        className={`mt-2 w-full px-5 py-3 text-sm ${FOCUS}`}
                        style={{ ...inputStyle, borderColor: errors.email ? CLAY : HAIRLINE }}
                      />
                      {errors.email && (
                        <p id="user-email-error" className="atrium-fade mt-2 flex items-center gap-2 text-[13px]" style={{ color: CLAY }}>
                          <AlertCircle aria-hidden="true" className="h-4 w-4" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="user-password" className="block text-[13px] font-semibold">Initial password</Label>
                      <Input
                        data-wf="i-3-0-1"
                        id="user-password"
                        name="initial_password"
                        type="text"
                        readOnly
                        disabled
                        value="<set-at-first-login>"
                        aria-describedby="user-password-help"
                        className="mt-2 w-full px-5 py-3 text-sm"
                        style={{ ...inputStyle, backgroundColor: PANEL_DEEP, color: hexToRgba(INK, 0.66), cursor: 'not-allowed' }}
                      />
                      <p id="user-password-help" className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                        kkkess never sets a password for anyone. the invited user chooses their own, and only its hash is kept.
                      </p>
                    </div>

                    <fieldset data-wf="i-3-0-2" aria-describedby={errors.roles ? 'roles-error' : 'roles-help'}>
                      <legend className="text-[13px] font-semibold">Roles</legend>
                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {ROLE_SET.map((role) => {
                          const on = form.roles.includes(role);
                          return (
                            <div
                              key={role}
                              className="flex items-center gap-3 px-4 py-3 transition-colors duration-200"
                              style={{
                                backgroundColor: on ? hexToRgba(ACCENT, 0.18) : 'rgba(255,255,255,0.7)',
                                border: `1px solid ${on ? hexToRgba(ACCENT, 0.5) : HAIRLINE}`,
                                borderRadius: 9999,
                              }}
                            >
                              <Checkbox
                                id={'role-' + role.replace('/', '-')}
                                name="roles"
                                checked={on}
                                onChange={() => toggleRole(role)}
                                className={FOCUS}
                                style={{ accentColor: INK, outlineColor: ACCENT }}
                              />
                              <Label htmlFor={'role-' + role.replace('/', '-')} className="text-sm">{role}</Label>
                            </div>
                          );
                        })}
                      </div>
                      {errors.roles ? (
                        <p id="roles-error" className="atrium-fade mt-2 flex items-center gap-2 text-[13px]" style={{ color: CLAY }}>
                          <AlertCircle aria-hidden="true" className="h-4 w-4" /> {errors.roles}
                        </p>
                      ) : (
                        <p id="roles-help" className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                          approver and administrator are privileged: those accounts are asked for a second factor at sign-in.
                        </p>
                      )}
                    </fieldset>

                    <div
                      className="flex items-start gap-3 px-5 py-4"
                      style={{ backgroundColor: PANEL, border: `1px solid ${HAIRLINE}`, borderRadius: brand.radius }}
                    >
                      <Checkbox
                        data-wf="i-3-0-3"
                        id="user-active"
                        name="is_active"
                        checked={form.active}
                        onChange={() => setForm((f) => ({ ...f, active: !f.active }))}
                        className={`mt-0.5 ${FOCUS}`}
                        style={{ accentColor: INK, outlineColor: ACCENT }}
                      />
                      <div>
                        <Label htmlFor="user-active" className="text-sm font-semibold">Account active</Label>
                        <p className="mt-1 text-[13px]" style={{ color: hexToRgba(INK, 0.7) }}>
                          untick to hold the account closed without removing its history.
                        </p>
                      </div>
                    </div>
                  </div>

                  {confirmOff && (
                    <div
                      className="atrium-fade mt-6 px-5 py-4"
                      style={{ backgroundColor: 'rgba(158, 76, 48, 0.1)', border: '1px solid rgba(158, 76, 48, 0.32)', borderRadius: brand.radius }}
                    >
                      <p className="text-sm leading-relaxed" style={{ color: CLAY }}>
                        deactivate {form.email}? they are signed out straight away and cannot sign in again until an
                        administrator reactivates the account.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button
                          type="button"
                          onClick={deactivateNow}
                          className={`px-5 py-2.5 text-sm font-semibold ${FOCUS}`}
                          style={{ backgroundColor: CLAY, color: CREAM, borderRadius: 9999, outlineColor: ACCENT }}
                        >
                          Yes, deactivate account
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setConfirmOff(false)}
                          className={`px-5 py-2.5 text-sm font-semibold ${FOCUS}`}
                          style={quietBtn}
                        >
                          Keep account active
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Row 5 — actions */}
                <div className="mt-8 grid grid-cols-12 items-center gap-4">
                  <div className="col-span-12 sm:col-span-4">
                    <Button
                      data-wf="b-4-0"
                      type="submit"
                      disabled={saving}
                      className={`w-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`}
                      style={primaryBtn}
                    >
                      {saving ? 'saving…' : 'Save user and roles'}
                    </Button>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <Button
                      data-wf="b-4-1"
                      type="button"
                      disabled={!editingId || confirmOff}
                      onClick={() => setConfirmOff(true)}
                      aria-describedby="deactivate-note"
                      className={`w-full px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45 ${FOCUS}`}
                      style={{ ...quietBtn, color: CLAY, borderColor: 'rgba(158, 76, 48, 0.4)' }}
                    >
                      Deactivate account
                    </Button>
                  </div>
                  <p data-wf="b-4-2" id="deactivate-note" className="col-span-12 text-[13px] leading-relaxed sm:col-span-4" style={{ color: NEUTRAL }}>
                    Deactivated users cannot sign in and existing sessions stop working.
                    {!editingId ? ' available once the account exists.' : ''}
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ---------------- Approval rules ---------------- */}
        {tab === 'rules' && (
          <div id="panel-rules" role="tabpanel" aria-labelledby="tab-rules" tabIndex={-1} className="atrium-fade mt-6">
            <div className="grid grid-cols-12 gap-6">
              <section data-wf="b-5-0" aria-labelledby="rules-heading" className="col-span-12 overflow-hidden lg:col-span-9" style={panelStyle}>
                <div className="px-6 py-6 sm:px-8 sm:py-7">
                  <h2 id="rules-heading" className="flex items-center gap-3 text-[22px] italic" style={{ fontFamily: brand.fontHeading, fontWeight: 600 }}>
                    {archMark}
                    Approval rules ({rules.length})
                  </h2>
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed" style={{ color: hexToRgba(INK, 0.7) }}>
                    a payment that matches any active rule waits for an approver. anything matching none becomes
                    ready to pay the moment it is created.
                  </p>
                </div>
                {rules.length === 0 ? (
                  <div className="px-6 pb-8 sm:px-8">
                    <Empty
                      title="No approval rules yet"
                      description="with no rules in place every payment skips the checker and becomes ready to pay. add a threshold rule to route high-value payments for a second pair of eyes."
                    />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table className="w-full border-collapse text-left">
                      <THead>
                        <TR>
                          <TH data-wf="i-5-0-0" scope="col" className={thClass} style={thStyle}>Rule name</TH>
                          <TH data-wf="i-5-0-1" scope="col" className={thClass} style={thStyle}>Condition type</TH>
                          <TH data-wf="i-5-0-2" scope="col" className={thClass} style={{ ...thStyle, textAlign: 'right' }}>Threshold amount</TH>
                          <TH data-wf="i-5-0-3" scope="col" className={thClass} style={thStyle}>Payee</TH>
                          <TH data-wf="i-5-0-4" scope="col" className={thClass} style={thStyle}>Department</TH>
                          <TH data-wf="i-5-0-5" scope="col" className={thClass} style={thStyle}>Active</TH>
                        </TR>
                      </THead>
                      <TBody>
                        {rules.map((r) => (
                          <TR
                            key={r.id}
                            className={flashId === r.id ? 'atrium-row' : ''}
                            style={{
                              borderBottom: `1px solid ${HAIRLINE}`,
                              backgroundColor: flashId === r.id ? hexToRgba(ACCENT, 0.14) : 'transparent',
                              transition: 'background-color .6s ease',
                            }}
                          >
                            <TD className={tdClass}>
                              <span className="font-medium">{r.name}</span>
                              <span className="mt-1 block text-[12px]" style={{ color: NEUTRAL }}>
                                set by {r.created_by} · {r.created_at}
                              </span>
                            </TD>
                            <TD className={tdClass} style={{ color: hexToRgba(INK, 0.78) }}>{CONDITION_LABEL[r.condition_type]}</TD>
                            <TD className={tdClass} style={{ textAlign: 'right' }}>
                              {r.threshold_amount ? money(r.threshold_amount) : <span style={{ color: NEUTRAL }}>not set</span>}
                            </TD>
                            <TD className={tdClass} style={{ color: hexToRgba(INK, 0.78) }}>
                              {r.payee || <span style={{ color: NEUTRAL }}>any payee</span>}
                            </TD>
                            <TD className={tdClass} style={{ color: hexToRgba(INK, 0.78) }}>
                              {r.department || <span style={{ color: NEUTRAL }}>any department</span>}
                            </TD>
                            <TD className={tdClass}>
                              <button
                                type="button"
                                aria-pressed={r.is_active}
                                onClick={() => toggleRule(r.id)}
                                className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${FOCUS}`}
                                style={{
                                  backgroundColor: r.is_active ? 'rgba(78, 100, 66, 0.12)' : PANEL_DEEP,
                                  color: r.is_active ? MOSS : hexToRgba(INK, 0.7),
                                  outlineColor: ACCENT,
                                  minHeight: 40,
                                }}
                              >
                                {r.is_active ? <Check aria-hidden="true" className="h-4 w-4" /> : <X aria-hidden="true" className="h-4 w-4" />}
                                <span className="sr-only">{r.name} — </span>
                                {r.is_active ? 'active' : 'paused'}
                              </button>
                            </TD>
                          </TR>
                        ))}
                      </TBody>
                    </Table>
                  </div>
                )}
              </section>

              <div className="col-span-12 lg:col-span-3">
                <div
                  className="flex h-full flex-col justify-between gap-6 p-6"
                  style={{ backgroundColor: SURFACE, border: `1px solid ${HAIRLINE}`, borderRadius: '120px 120px 24px 24px' }}
                >
                  <p className="pt-4 text-center text-sm leading-relaxed" style={{ color: hexToRgba(INK, 0.74) }}>
                    a new rule is saved paused, and rules apply to payments created after they are switched on —
                    nothing already in the queue is re-routed.
                  </p>
                  <Button
                    data-wf="b-5-1"
                    type="button"
                    onClick={addDraftRule}
                    className={`inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-px ${FOCUS}`}
                    style={primaryBtn}
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                    New rule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Email notifications ---------------- */}
        {tab === 'email' && (
          <div id="panel-email" role="tabpanel" aria-labelledby="tab-email" tabIndex={-1} className="atrium-fade mt-6 space-y-6">
            <Card data-wf="b-6-0" style={panelStyle} className="overflow-hidden">
              <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-7">
                <CardTitle className="flex items-center gap-3 text-[22px] italic" style={{ fontFamily: brand.fontHeading, fontWeight: 600 }}>
                  {archMark}
                  Email notifications
                </CardTitle>
                <CardDescription className="mt-2 max-w-[66ch] text-sm leading-relaxed" style={{ color: hexToRgba(INK, 0.7) }}>
                  approvers are emailed as soon as a payment lands in their queue, and makers hear back when theirs is
                  approved or rejected. delivery goes through a transactional email provider.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 sm:px-8">
                <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-[12px] font-semibold tracking-[0.07em]" style={{ color: hexToRgba(INK, 0.6) }}>Approvers on the list</dt>
                    <dd className="mt-1 text-lg">6 accounts</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold tracking-[0.07em]" style={{ color: hexToRgba(INK, 0.6) }}>Queued notifications</dt>
                    <dd className="mt-1 text-lg">{provider === 'configured' ? '0 — sent' : '3 since 24 Nov'}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold tracking-[0.07em]" style={{ color: hexToRgba(INK, 0.6) }}>Last send attempt</dt>
                    <dd className="mt-1 text-lg">{provider === 'configured' ? '25 Nov, 09:44' : '24 Nov, 16:08 — failed'}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <div className="grid grid-cols-12 gap-6">
              <form
                data-wf="b-7-0"
                onSubmit={submitProvider}
                aria-labelledby="provider-heading"
                className="col-span-12 p-6 sm:p-8 lg:col-span-8"
                style={{ backgroundColor: SURFACE, border: `1px solid ${HAIRLINE}`, borderRadius: brand.radius }}
              >
                <h3 id="provider-heading" className="text-[19px] italic" style={{ fontFamily: brand.fontHeading, fontWeight: 600 }}>
                  Transactional email provider
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <Label htmlFor="api-key" className="block text-[13px] font-semibold">Sending API key</Label>
                    <Input
                      data-wf="i-7-0-0"
                      id="api-key"
                      name="api_key"
                      type="text"
                      autoComplete="off"
                      spellCheck={false}
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="<your-email-api-key>"
                      aria-describedby="api-key-help"
                      aria-invalid={provider === 'error'}
                      className={`mt-2 w-full px-5 py-3 text-sm ${FOCUS}`}
                      style={{ ...inputStyle, borderColor: provider === 'error' ? CLAY : HAIRLINE }}
                    />
                    <p id="api-key-help" className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                      paste the key from your provider dashboard. it is stored encrypted and never shown again.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="sender" className="block text-[13px] font-semibold">Sender address</Label>
                    <Input
                      data-wf="i-7-0-1"
                      id="sender"
                      name="sender_address"
                      type="email"
                      value={sender}
                      onChange={(e) => setSender(e.target.value)}
                      aria-describedby="sender-help"
                      className={`mt-2 w-full px-5 py-3 text-sm ${FOCUS}`}
                      style={inputStyle}
                    />
                    <p id="sender-help" className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
                      the domain must be verified with the provider or every send is rejected.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button
                    type="submit"
                    disabled={provider === 'saving'}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`}
                    style={primaryBtn}
                  >
                    {provider === 'saving' ? 'checking the key…' : 'Save provider settings'}
                  </Button>
                  {provider === 'configured' && (
                    <span className="atrium-fade inline-flex items-center gap-2 text-[13px]" style={{ color: MOSS }}>
                      <CheckCircle aria-hidden="true" className="h-4 w-4" /> {providerMsg}
                    </span>
                  )}
                </div>
              </form>

              <aside className="col-span-12 lg:col-span-4">
                <div
                  data-wf="b-7-1"
                  role="status"
                  className="flex h-full flex-col gap-3 p-6 pt-8 text-center"
                  style={{
                    backgroundColor:
                      provider === 'configured' ? 'rgba(78, 100, 66, 0.1)' : hexToRgba(ACCENT, 0.16),
                    border: `1px solid ${provider === 'configured' ? 'rgba(78, 100, 66, 0.3)' : hexToRgba(ACCENT, 0.4)}`,
                    borderRadius: '130px 130px 24px 24px',
                  }}
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: provider === 'configured' ? 'rgba(78, 100, 66, 0.18)' : hexToRgba(INK, 0.1) }}>
                    {provider === 'configured' ? (
                      <CheckCircle aria-hidden="true" className="h-5 w-5" style={{ color: MOSS }} />
                    ) : (
                      <AlertCircle aria-hidden="true" className="h-5 w-5" style={{ color: CLAY }} />
                    )}
                  </span>
                  {provider === 'configured' ? (
                    <p className="text-sm leading-relaxed" style={{ color: MOSS }}>
                      <strong className="font-semibold">Status: sending</strong> — approval emails go out as{' '}
                      {sender}. the 3 queued notifications will be delivered on the next sweep.
                    </p>
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: INK }}>
                      <strong className="font-semibold">Status: no API key configured</strong> — approval emails are
                      not being sent and failures are surfaced here.
                    </p>
                  )}
                  {provider === 'error' && (
                    <p className="atrium-fade text-sm leading-relaxed" style={{ color: CLAY }}>
                      {providerMsg}
                    </p>
                  )}
                  {provider === 'saving' && (
                    <p className="text-sm" style={{ color: hexToRgba(INK, 0.7) }}>checking the key with the provider…</p>
                  )}
                  {provider !== 'configured' && (
                    <p className="mt-auto pt-2 text-[13px]" style={{ color: hexToRgba(INK, 0.65) }}>
                      meanwhile approvers can still find waiting payments on the dashboard.
                    </p>
                  )}
                </div>
              </aside>
            </div>
          </div>
        )}

        {/* Row 9 — audit link */}
        <div className="mt-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <button
              data-wf="b-8-0"
              type="button"
              onClick={() => navigate('audit-log')}
              className={`inline-flex items-center gap-2 rounded-full py-2 text-sm font-semibold underline atrium-link-underline ${FOCUS}`}
              style={{ color: INK, outlineColor: ACCENT }}
            >
              <FileText aria-hidden="true" className="h-4 w-4" />
              View the full record of role and rule changes
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <p className="mt-2 text-[13px]" style={{ color: NEUTRAL }}>
              open to administrators and auditors only — ask amelia.hartley for access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
