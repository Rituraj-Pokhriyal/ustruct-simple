"use client";

import { useState, useEffect, useCallback } from "react";

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER ?? "admin";
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS ?? "UStruct2024";

const ALL_TABS = [
  { key: "services",     label: "Services" },
  { key: "process",      label: "Process" },
  { key: "projects",     label: "Projects" },
  { key: "why-us",       label: "Why Us" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact",      label: "Contact" },
];

/* ─── tiny helpers ─────────────────────────────────────── */
function saveFile(file: string, data: unknown, onDone: (ok: boolean) => void) {
  fetch(`/api/cms/${file}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((r) => onDone(r.ok))
    .catch(() => onDone(false));
}

function loadFile<T>(file: string, cb: (data: T) => void) {
  fetch(`/api/cms/${file}`)
    .then((r) => r.json())
    .then(cb)
    .catch(() => {});
}

/* ─── types ────────────────────────────────────────────── */
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  city: string;
  active: boolean;
}

interface PdfSample {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  group: string;
  file: string;
  preview: string;
  active: boolean;
}

const GROUP_OPTIONS = [
  { value: "structural-frame", label: "Structural Frame" },
  { value: "stairs",           label: "Stairs" },
  { value: "railings",         label: "Railings & Guardrails" },
  { value: "3d-views",          label: "3D Views" },
];

/* ─── styles ────────────────────────────────────────────── */
const s = {
  page:    "min-h-screen bg-[#0A0B0D] text-[#F0F4FF] p-6 font-[Arial,sans-serif]",
  card:    "bg-[#181C24] border border-[#1E2433] rounded-xl p-6 mb-4",
  h2:      "text-xl font-bold mb-4",
  input:   "bg-[#111318] border border-[#1E2433] text-[#F0F4FF] rounded-lg px-3 py-2 text-sm w-full focus:border-[#1E90FF] outline-none",
  btnBlue: "bg-[#1E90FF] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition",
  btnOra:  "bg-[#FF6B1A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition",
  btnRed:  "bg-red-700 text-white px-3 py-1 rounded text-xs font-bold hover:opacity-90 transition",
  btnGray: "bg-[#1E2433] text-[#F0F4FF] px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition",
  label:   "block text-xs text-[#8892A4] mb-1",
  row:     "flex gap-3 items-start mb-3 flex-wrap",
  tag:     "bg-[#0A0B0D] border border-[#1E2433] rounded px-2 py-0.5 text-xs flex items-center gap-1",
};

/* ═══════════════════════════════════════════════════════════
   LOGIN
═══════════════════════════════════════════════════════════ */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err,  setErr]  = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      sessionStorage.setItem("adminAuth", "1");
      onLogin();
    } else {
      setErr("Incorrect username or password.");
    }
  };

  return (
    <div className={`${s.page} flex items-center justify-center`}>
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-2 text-center">UStruct Admin</h1>
        <p className="text-[#8892A4] text-sm text-center mb-8">Content Management Panel</p>
        <div className={s.card}>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className={s.label}>Username</label>
              <input className={s.input} value={user} onChange={e => setUser(e.target.value)} autoComplete="username" />
            </div>
            <div>
              <label className={s.label}>Password</label>
              <input className={s.input} type="password" value={pass} onChange={e => setPass(e.target.value)} autoComplete="current-password" />
            </div>
            {err && <p className="text-red-400 text-sm">{err}</p>}
            <button type="submit" className={`${s.btnBlue} w-full py-3`}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION TAB
═══════════════════════════════════════════════════════════ */
function NavTab() {
  const [visible, setVisible] = useState<string[]>([]);
  const [saving,  setSaving]  = useState(false);
  const [msg,     setMsg]     = useState("");

  useEffect(() => {
    loadFile<{ visibleTabs: string[] }>("site-config", (d) => setVisible(d.visibleTabs ?? []));
  }, []);

  const toggle = (key: string) =>
    setVisible(v => v.includes(key) ? v.filter(k => k !== key) : [...v, key]);

  const save = () => {
    setSaving(true);
    saveFile("site-config", { visibleTabs: visible }, (ok) => {
      setSaving(false);
      setMsg(ok ? "Saved! Site will update in ~2 minutes." : "Error — check GitHub token.");
      setTimeout(() => setMsg(""), 5000);
    });
  };

  return (
    <div>
      <h2 className={s.h2}>Navigation Tabs</h2>
      <div className={s.card}>
        <p className="text-sm text-[#8892A4] mb-4">Toggle which tabs appear in the public navigation bar.</p>
        <div className="space-y-3 mb-6">
          {ALL_TABS.map(t => (
            <label key={t.key} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={visible.includes(t.key)}
                onChange={() => toggle(t.key)}
                className="w-4 h-4 accent-[#1E90FF]"
              />
              <span className="text-base font-bold">{t.label}</span>
            </label>
          ))}
        </div>
        <button onClick={save} disabled={saving} className={s.btnBlue}>
          {saving ? "Saving…" : "Save Navigation"}
        </button>
        {msg && <p className="mt-3 text-sm text-green-400">{msg}</p>}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS TAB
═══════════════════════════════════════════════════════════ */
function TestimonialsTab() {
  const [items,  setItems]  = useState<Testimonial[]>([]);
  const [saving, setSaving] = useState(false);
  const [msg,    setMsg]    = useState("");
  const [adding, setAdding] = useState(false);
  const [newT,   setNewT]   = useState({ quote: "", author: "", company: "", city: "" });

  useEffect(() => { loadFile<Testimonial[]>("testimonials", setItems); }, []);

  const save = (data: Testimonial[]) => {
    setSaving(true);
    saveFile("testimonials", data, (ok) => {
      setSaving(false);
      setMsg(ok ? "Saved! Site will update in ~2 minutes." : "Error — check GitHub token.");
      setTimeout(() => setMsg(""), 5000);
    });
  };

  const toggle = (id: number) => {
    const updated = items.map(t => t.id === id ? { ...t, active: !t.active } : t);
    setItems(updated);
  };

  const remove = (id: number) => setItems(items.filter(t => t.id !== id));

  const update = (id: number, field: keyof Testimonial, val: string) =>
    setItems(items.map(t => t.id === id ? { ...t, [field]: val } : t));

  const add = () => {
    const item: Testimonial = { ...newT, id: Date.now(), active: true };
    setItems([...items, item]);
    setNewT({ quote: "", author: "", company: "", city: "" });
    setAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className={s.h2} style={{ margin: 0 }}>Testimonials</h2>
        <button onClick={() => setAdding(true)} className={s.btnBlue}>+ Add</button>
      </div>

      {adding && (
        <div className={s.card}>
          <h3 className="text-base font-bold mb-3">New Testimonial</h3>
          {(["quote","author","company","city"] as const).map(f => (
            <div key={f} className="mb-3">
              <label className={s.label}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
              {f === "quote"
                ? <textarea rows={3} className={s.input} value={newT[f]} onChange={e => setNewT({...newT, [f]: e.target.value})} />
                : <input className={s.input} value={newT[f]} onChange={e => setNewT({...newT, [f]: e.target.value})} />
              }
            </div>
          ))}
          <div className="flex gap-3">
            <button onClick={add} className={s.btnOra}>Add Testimonial</button>
            <button onClick={() => setAdding(false)} className={s.btnGray}>Cancel</button>
          </div>
        </div>
      )}

      {items.map(t => (
        <div key={t.id} className={s.card} style={{ opacity: t.active ? 1 : 0.5 }}>
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-2 items-center">
              <input type="checkbox" checked={t.active} onChange={() => toggle(t.id)} className="w-4 h-4 accent-[#1E90FF]" />
              <span className="text-xs text-[#8892A4]">{t.active ? "Visible" : "Hidden"}</span>
            </div>
            <button onClick={() => remove(t.id)} className={s.btnRed}>Delete</button>
          </div>
          <div className="mb-2">
            <label className={s.label}>Quote</label>
            <textarea rows={3} className={s.input} value={t.quote} onChange={e => update(t.id, "quote", e.target.value)} />
          </div>
          <div className={s.row}>
            {(["author","company","city"] as const).map(f => (
              <div key={f} className="flex-1 min-w-[140px]">
                <label className={s.label}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
                <input className={s.input} value={t[f]} onChange={e => update(t.id, f, e.target.value)} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-3 mt-2">
        <button onClick={() => save(items)} disabled={saving} className={s.btnBlue}>
          {saving ? "Saving…" : "Save All Testimonials"}
        </button>
      </div>
      {msg && <p className="mt-3 text-sm text-green-400">{msg}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS TAB (controls pdf-samples.json — the live /projects page)
═══════════════════════════════════════════════════════════ */
function PdfTab() {
  const [items,  setItems]  = useState<PdfSample[]>([]);
  const [saving, setSaving] = useState(false);
  const [msg,    setMsg]    = useState("");

  useEffect(() => { loadFile<PdfSample[]>("pdf-samples", setItems); }, []);

  const update = (id: number, field: keyof PdfSample, val: string | boolean) =>
    setItems(items.map(p => p.id === id ? { ...p, [field]: val } : p));

  const save = () => {
    setSaving(true);
    saveFile("pdf-samples", items, (ok) => {
      setSaving(false);
      setMsg(ok ? "Saved! Site will update in ~2 minutes." : "Error — check GitHub token.");
      setTimeout(() => setMsg(""), 5000);
    });
  };

  return (
    <div>
      <h2 className={s.h2}>Projects</h2>
      {items.map(p => (
        <div key={p.id} className={s.card} style={{ opacity: p.active ? 1 : 0.5 }}>
          <div className="flex gap-2 items-center mb-3">
            <input type="checkbox" checked={p.active} onChange={e => update(p.id, "active", e.target.checked)} className="w-4 h-4 accent-[#1E90FF]" />
            <span className="text-xs text-[#8892A4]">{p.active ? "Visible" : "Hidden"}</span>
          </div>
          <div className={s.row}>
            <div className="flex-1 min-w-[160px]">
              <label className={s.label}>Title</label>
              <input className={s.input} value={p.title} onChange={e => update(p.id, "title", e.target.value)} />
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className={s.label}>Subtitle</label>
              <input className={s.input} value={p.subtitle} onChange={e => update(p.id, "subtitle", e.target.value)} />
            </div>
            <div className="w-44">
              <label className={s.label}>Group</label>
              <select className={s.input} value={p.group} onChange={e => update(p.id, "group", e.target.value)}>
                {GROUP_OPTIONS.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
              </select>
            </div>
          </div>
          <div className={s.row}>
            <div className="flex-1 min-w-[200px]">
              <label className={s.label}>PDF File Path</label>
              <input className={s.input} value={p.file} onChange={e => update(p.id, "file", e.target.value)} />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className={s.label}>Preview Image Path</label>
              <input className={s.input} value={p.preview} onChange={e => update(p.id, "preview", e.target.value)} />
            </div>
          </div>
        </div>
      ))}
      <button onClick={save} disabled={saving} className={s.btnBlue}>
        {saving ? "Saving…" : "Save All PDF Samples"}
      </button>
      {msg && <p className="mt-3 text-sm text-green-400">{msg}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════════════════════ */
const DASH_TABS = ["Navigation", "Testimonials", "Projects"] as const;
type DashTab = typeof DASH_TABS[number];

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [active, setActive] = useState<DashTab>("Navigation");

  return (
    <div className={s.page}>
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">UStruct Admin</h1>
            <p className="text-sm text-[#8892A4] mt-0.5">Changes go live in ~2 minutes after saving.</p>
          </div>
          <button onClick={onLogout} className={s.btnGray}>Logout</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {DASH_TABS.map(t => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200"
              style={{
                background: active === t ? "#1E90FF" : "#1E2433",
                color: active === t ? "#fff" : "#F0F4FF",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        {active === "Navigation"   && <NavTab />}
        {active === "Testimonials" && <TestimonialsTab />}
        {active === "Projects"     && <PdfTab />}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════ */
export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthed(sessionStorage.getItem("adminAuth") === "1");
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("adminAuth");
    setAuthed(false);
  }, []);

  if (authed === null) return null; // loading
  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;
  return <Dashboard onLogout={logout} />;
}
