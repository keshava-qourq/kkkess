// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, Clock, AlertCircle, CheckCircle } = Icons;

const PRODUCT = "kkkess";
const SCREEN = "Sign in";
const tint = (pct) => `color-mix(in srgb, ${brand.primaryColor} ${pct}%, ${brand.backgroundColor})`;
const muted = `color-mix(in srgb, ${brand.primaryColor} 72%, ${brand.backgroundColor})`;
const alertInk = `color-mix(in srgb, ${brand.accentColor} 55%, ${brand.primaryColor})`;

// staff directory for this prototype — roles decide who is asked for a second factor
const STAFF = [
  { email: "maya.okonjo@kkkess.co", name: "Maya Okonjo", roles: ["maker"] },
  { email: "ruth.ellory@kkkess.co", name: "Ruth Ellory", roles: ["approver", "administrator"] },
  { email: "tom.brathwaite@kkkess.co", name: "Tom Brathwaite", roles: ["treasury"] },
];
const PRIVILEGED = ["approver", "administrator"];

export default function Screen() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");
  const [step, setStep] = React.useState("credentials"); // credentials | mfa
  const [status, setStatus] = React.useState("idle"); // idle | checking | verifying
  const [credError, setCredError] = React.useState("");
  const [codeError, setCodeError] = React.useState("");
  const [person, setPerson] = React.useState(null);
  const timer = React.useRef(null);
  const codeRef = React.useRef(null);

  React.useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const pill = { borderRadius: 999, border: 0, backgroundColor: tint(8), color: brand.primaryColor };
  const checking = status === "checking";
  const verifying = status === "verifying";
  const locked = step !== "mfa";

  const submitCredentials = (e) => {
    e.preventDefault();
    if (checking) return;
    setCredError("");
    setStatus("checking");
    timer.current = setTimeout(() => {
      const found = STAFF.find((s) => s.email === email.trim().toLowerCase());
      if (!found || password.length < 8) {
        setStatus("idle");
        setCredError("Sign-in failed. Check your email and password and try again.");
        return;
      }
      setStatus("idle");
      if (found.roles.some((r) => PRIVILEGED.includes(r))) {
        setPerson(found);
        setStep("mfa");
        timer.current = setTimeout(() => { if (codeRef.current) codeRef.current.focus(); }, 60);
      } else {
        navigate("dashboard");
      }
    }, 700);
  };

  const submitCode = (e) => {
    e.preventDefault();
    if (verifying) return;
    if (!/^\d{6}$/.test(code.trim())) {
      setCodeError("Code incorrect or expired — access denied.");
      return;
    }
    setCodeError("");
    setStatus("verifying");
    timer.current = setTimeout(() => navigate("dashboard"), 700);
  };

  return (
    <div className="flex min-h-screen flex-col" style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}>
      <style>{`
        .at-focus:focus-visible { outline: 2px solid ${alertInk}; outline-offset: 3px; }
        @keyframes atriumRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .at-rise { animation: atriumRise 260ms ease-out both; }
        @keyframes atriumPulse { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
        .at-dot { animation: atriumPulse 1.1s ease-in-out infinite; }
        .at-dot:nth-child(2) { animation-delay: .16s; }
        .at-dot:nth-child(3) { animation-delay: .32s; }
        @media (prefers-reduced-motion: reduce) {
          .at-rise, .at-dot { animation: none !important; }
        }
      `}</style>

      <header className="px-10 py-5" style={{ backgroundColor: tint(10) }}>
        <p className="text-lg italic" style={{ fontFamily: brand.fontHeading }}>{PRODUCT}</p>
      </header>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <main className="w-full max-w-lg px-9 pb-9 pt-16" style={{ backgroundColor: tint(6), borderRadius: "200px 200px 24px 24px" }}>
          <div className="text-center">
            <h1 data-wf="b-0-0" className="text-3xl italic" style={{ fontFamily: brand.fontHeading }}>{SCREEN}</h1>
            <p className="mt-2 text-sm lowercase" style={{ color: muted }}>payments, payees and approvals — staff only</p>
          </div>

          {/* b-1-0 + b-2-0 : credentials */}
          <form data-wf="b-1-0" className="mt-8 text-left" onSubmit={submitCredentials} noValidate>
            <h2 className="pl-4 text-base italic" style={{ fontFamily: brand.fontHeading }}>Staff sign-in</h2>
            <div className="mt-4 space-y-4">
              <div className="space-y-1">
                <label htmlFor="at-email" className="block pl-4 text-xs lowercase" style={{ color: muted }}>Email address</label>
                <input
                  data-wf="i-1-0-0"
                  id="at-email"
                  type="email"
                  name="email"
                  autoComplete="username"
                  inputMode="email"
                  required
                  disabled={!locked}
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setCredError(""); }}
                  aria-describedby="at-email-help"
                  className="at-focus h-12 w-full px-5 text-sm outline-none disabled:opacity-60"
                  style={pill}
                />
                <p id="at-email-help" className="pl-4 text-xs lowercase" style={{ color: muted }}>your @kkkess.co work address</p>
              </div>
              <div className="space-y-1">
                <label htmlFor="at-password" className="block pl-4 text-xs lowercase" style={{ color: muted }}>Password</label>
                <input
                  data-wf="i-1-0-1"
                  id="at-password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  disabled={!locked}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setCredError(""); }}
                  aria-describedby="at-password-help"
                  className="at-focus h-12 w-full px-5 text-sm outline-none disabled:opacity-60"
                  style={pill}
                />
                <p id="at-password-help" className="pl-4 text-xs lowercase" style={{ color: muted }}>at least 8 characters</p>
              </div>

              <button
                data-wf="b-2-0"
                type="submit"
                disabled={checking || !locked}
                aria-busy={checking}
                className="at-focus h-12 w-full text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ borderRadius: 999, backgroundColor: brand.accentColor, color: brand.backgroundColor }}
              >
                {checking ? (
                  <span className="inline-flex items-center gap-2">
                    checking your details
                    <span aria-hidden="true" className="inline-flex gap-1">
                      <span className="at-dot inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brand.backgroundColor }} />
                      <span className="at-dot inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brand.backgroundColor }} />
                      <span className="at-dot inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brand.backgroundColor }} />
                    </span>
                  </span>
                ) : locked ? "Sign in" : "Signed in — step two below"}
              </button>
            </div>
          </form>

          {/* b-3-0 : credentials error */}
          <div data-wf="b-3-0" aria-live="assertive" className="mt-4">
            {credError ? (
              <p
                className="at-rise flex items-start gap-3 px-5 py-3 text-sm"
                style={{ borderRadius: 24, backgroundColor: `color-mix(in srgb, ${brand.accentColor} 18%, ${brand.backgroundColor})`, color: alertInk }}
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{credError}</span>
              </p>
            ) : null}
          </div>

          {/* b-4-0 : second factor */}
          <form data-wf="b-4-0" className="mt-8 px-6 py-6 text-left" onSubmit={submitCode} style={{ borderRadius: 24, backgroundColor: tint(9), opacity: locked ? 0.72 : 1, transition: "opacity 240ms ease-out" }} noValidate>
            <h2 className="text-base italic" style={{ fontFamily: brand.fontHeading }}>
              Two-factor authentication (approvers and administrators)
            </h2>
            {locked ? (
              <p className="mt-1 text-xs lowercase" style={{ color: muted }}>
                step two opens once your email and password check out — only accounts holding approver or administrator rights are asked for it (for example ruth.ellory@kkkess.co)
              </p>
            ) : (
              <p className="at-rise mt-1 flex items-center gap-2 text-xs lowercase" style={{ color: muted }}>
                <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>password verified for {person ? person.name : "this account"} — {person ? person.roles.join(" + ") : "privileged role"}</span>
              </p>
            )}

            <div className="mt-4 space-y-1">
              <label htmlFor="at-code" className="block pl-4 text-xs lowercase" style={{ color: muted }}>
                6-digit code from your authenticator app
              </label>
              <input
                data-wf="i-4-0-0"
                id="at-code"
                ref={codeRef}
                type="text"
                name="one-time-code"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength={6}
                disabled={locked || verifying}
                value={code}
                onChange={(e) => { setCode(e.target.value.replace(/[^0-9]/g, "")); setCodeError(""); }}
                aria-invalid={codeError ? "true" : undefined}
                aria-describedby="at-code-help"
                className="at-focus h-12 w-full px-5 text-lg tracking-[0.5em] outline-none disabled:opacity-60"
                style={{ ...pill, backgroundColor: tint(12), fontVariantNumeric: "tabular-nums" }}
              />
              <p id="at-code-help" className="pl-4 text-xs lowercase" style={{ color: muted }}>
                digits only, no spaces
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:items-center">
              {/* b-5-0 */}
              <button
                data-wf="b-5-0"
                type="submit"
                disabled={locked || verifying}
                aria-busy={verifying}
                className="at-focus h-12 w-full text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ borderRadius: 999, backgroundColor: brand.accentColor, color: brand.backgroundColor }}
              >
                {verifying ? "verifying code…" : "Verify and continue"}
              </button>

              {/* b-5-1 */}
              <div data-wf="b-5-1" aria-live="assertive" className="text-sm">
                {codeError ? (
                  <p className="at-rise flex items-start gap-2" style={{ color: alertInk }}>
                    <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{codeError}</span>
                  </p>
                ) : (
                  <p className="text-xs lowercase" style={{ color: muted }}>
                    your code changes every 30 seconds
                  </p>
                )}
              </div>
            </div>
          </form>

          {/* b-6-0 : session notice */}
          <p
            data-wf="b-6-0"
            className="mt-7 flex items-start gap-3 px-5 py-3 text-xs"
            style={{ borderRadius: 999, backgroundColor: tint(8), color: muted }}
          >
            <Clock className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Your session ended after 30 minutes of inactivity. Please sign in again.</span>
          </p>
        </main>
      </div>
    </div>
  );
}
