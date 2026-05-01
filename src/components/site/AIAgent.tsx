import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, RotateCcw, Phone } from "lucide-react";

// ─── Avatar (base64) ──────────────────────────────────────────────────────────

const AVATAR_B64 = "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";
const AVATAR_SRC = `data:image/jpeg;base64,${AVATAR_B64}`;

// ─── Types ────────────────────────────────────────────────────────────────────

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  chips?: string[];
  time?: string;
};

// ─── Storage Keys ─────────────────────────────────────────────────────────────

const CHAT_KEY  = "rk_chat_v1";
const HIST_KEY  = "rk_hist_v1";

// ─── Utilities ────────────────────────────────────────────────────────────────

const uid       = () => `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
const getTimeStr = () => new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
const getTimeMeta = () => {
  const h = new Date().getHours();
  if (h < 12) return { greeting: "Good morning" };
  if (h < 17) return { greeting: "Good afternoon" };
  return { greeting: "Good evening" };
};

const DEFAULT_CHIPS = ["About Rahul", "Programs", "Mindset Coaching", "Book Free Session"];

// ─── System Prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are Priya, a warm human assistant from Rahul Kapoor's personal team. You speak directly on WhatsApp — never say "I'll guide you through Rahul's work" or anything that sounds like a tour guide or AI bot.

TONE: Exactly like a real WhatsApp message from a caring team member. Short. Warm. Natural. Use emojis naturally — like 😊 🙌 💫 ✨ 🔥 💡 🙏 👏 — one or two per message. One idea per message. Never robotic.

NEVER SAY:
- "I'll guide you through..."
- "How can I assist you today?"
- "As an AI..."
- Multiple questions at once
- Long paragraphs
- Bullet points in chat

ABOUT RAHUL KAPOOR:
- India's leading mindset coach, motivational speaker & author — based in Bangalore
- 25+ years of experience, 4,00,000+ attendees transformed, 2,500+ programs, 15+ countries
- Known as a "live wire" on stage — electric, authentic, high energy
- Featured in: The Week, Khaleej Times, Times of India, The Hindu, Deccan Herald
- Guest faculty at IIM Bangalore since 2009
- Books: "Workwise - Lessons in Excellence for Young Professionals" and "Dad & I - Inspiring Stories for Teens"
- Awards: Outstanding Young Persons of India Award 2010 (JCI), Young Achievers Award 2016
- Worked with President APJ Abdul Kalam, hosted Royal Challengers Bangalore in IPL seasons 3, 4, 5
- Clients: Accenture, Adobe, Amazon, Cisco, Dell, Google, HP, HDFC, Microsoft, Philips, Samsung, Volvo and more

HIS APPROACH — "Inside Out":
Blends science, psychology and spirituality to address subconscious blocks. Helps people unlock potential to live with purpose, positivity and real results.

PROGRAMS:
MOTIVATIONAL TALKS: The Unstoppable Mindset, Ignite Your Inner Potential, GO ALL IN, Level 10 Game
TRANSFORMATION MASTERCLASSES: Transformation In Action, Vision & Values Project, Effective Decision Making, Work Life Happiness
TEAM BUILDING: One Team - One Dream, Game On Excellence
MINDSET COACHING: Personal Mindset Coaching, Family Mindset Coaching (Free 30-min discovery session available)
YOUTH PROGRAMS: Goal Setting, The Super Student
PUBLIC EVENTS: Charan Sparsh (7000+ people), IYIP at iyip.in, Family First

PERSONAL STORY:
Failed pre-university twice, now has 14 diplomas and is a post-grad. Lost his father to cancer; dealt with depression, anxiety, phobias — transformed all of it. Runs 3 companies and manages 2 charitable trusts.

CONTACT: +91 70220 10145

LEAD CAPTURE FLOW — do naturally when someone shows interest:
Step 1: "May I know your name? 😊"
Step 2: "And where are you based?"
Step 3: "What's the best WhatsApp number to reach you on?"
Step 4: "What's been on your mind — what are you hoping to change? 💡"
Step 5: "Got it 🙏 I'll make sure someone from our team connects with you soon."

RULES:
- ONE short message at a time — like real WhatsApp
- Sound human, not scripted
- If asked pricing: "That depends on the format — let me have someone from our team share details with you directly 😊"
- If asked if you are AI: "I'm Priya from Rahul's team — happy to help! 😊"`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AIAgent() {
  const [visible, setVisible]       = useState(false);
  const [open, setOpen]             = useState(false);
  const [input, setInput]           = useState("");
  const [typing, setTyping]         = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [apiHistory, setApiHistory] = useState<{ role: string; content: string }[]>([]);

  const timeMeta = useMemo(() => getTimeMeta(), []);

  const initialMessage = useMemo<Message>(() => ({
    id: "init",
    sender: "bot",
    text: `${timeMeta.greeting} 👋 I'm Priya from Rahul Kapoor's team. Tell me what's on your mind — I'm here to help!`,
    chips: DEFAULT_CHIPS,
    time: getTimeStr(),
  }), [timeMeta]);

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const endRef   = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Restore from localStorage ──────────────────────────────────────────────

  useEffect(() => {
    try {
      const msgs = localStorage.getItem(CHAT_KEY);
      const hist = localStorage.getItem(HIST_KEY);
      if (msgs) {
        const parsed = JSON.parse(msgs) as Message[];
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed);
      }
      if (hist) {
        const parsedHist = JSON.parse(hist);
        if (Array.isArray(parsedHist)) setApiHistory(parsedHist);
      }
    } catch { /* ignore */ }
  }, []);

  // ── Persist ────────────────────────────────────────────────────────────────

  useEffect(() => {
    try { localStorage.setItem(CHAT_KEY, JSON.stringify(messages)); } catch { /* ignore */ }
  }, [messages]);

  useEffect(() => {
    try { localStorage.setItem(HIST_KEY, JSON.stringify(apiHistory)); } catch { /* ignore */ }
  }, [apiHistory]);

  // ── Visibility: show after 3s always ──────────────────────────────────────

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // ── Auto-scroll ────────────────────────────────────────────────────────────

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  // ── Focus on open ──────────────────────────────────────────────────────────

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 350);
      setUnreadCount(0);
    }
  }, [open]);

  // ── Unread badge ───────────────────────────────────────────────────────────

  useEffect(() => {
    if (!open && messages.length > 1) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.sender === "bot") setUnreadCount(c => Math.min(c + 1, 9));
    }
  }, [messages, open]);

  // ── Add bot message ────────────────────────────────────────────────────────

  const addBot = useCallback((text: string, chips?: string[]) => {
    setMessages(prev => [
      ...prev,
      { id: `b-${uid()}`, sender: "bot", text, chips, time: getTimeStr() },
    ]);
  }, []);

  // ── Anthropic API Call ─────────────────────────────────────────────────────

  const getBotReply = useCallback(async (
    userText: string,
    history: { role: string; content: string }[]
  ): Promise<string> => {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [...history, { role: "user", content: userText }],
        }),
      });
      const data = await res.json();
      return data.content?.[0]?.text ?? "Let me check on that and get back to you 🙏";
    } catch {
      return "Sorry, having a little trouble right now. Please try again! 🙏";
    }
  }, []);

  // ── Send message ───────────────────────────────────────────────────────────

  const sendMessage = useCallback(async (rawText: string) => {
    const text = rawText.trim();
    if (!text || typing) return;

    const userMsg: Message = { id: `u-${uid()}`, sender: "user", text, time: getTimeStr() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const newHistory = [...apiHistory, { role: "user", content: text }];

    const replyText = await getBotReply(text, apiHistory);
    const updatedHistory = [...newHistory, { role: "assistant", content: replyText }];
    setApiHistory(updatedHistory);

    // Natural typing delay
    const delay = Math.min(700 + replyText.length * 13, 2200);
    setTimeout(() => {
      addBot(replyText, DEFAULT_CHIPS);
      setTyping(false);
    }, delay);
  }, [typing, apiHistory, getBotReply, addBot]);

  // ── Reset ──────────────────────────────────────────────────────────────────

  const reset = useCallback(() => {
    setMessages([initialMessage]);
    setApiHistory([]);
    setUnreadCount(0);
    try {
      localStorage.removeItem(CHAT_KEY);
      localStorage.removeItem(HIST_KEY);
    } catch { /* ignore */ }
  }, [initialMessage]);

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @keyframes arcignDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes arcignPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 6px rgba(37, 211, 102, 0); }
        }
        .rk-scroll::-webkit-scrollbar { width: 0; }
        .rk-chips-bar::-webkit-scrollbar { height: 0; }
        .rk-msg-bubble { word-break: break-word; }
        .rk-chat-bg {
          background-color: #ece5dd;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5b8ad' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .rk-chip-btn {
          background: #fff;
          border: 1.5px solid #d1d5db;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          color: #075e54;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.07);
          line-height: 1;
        }
        .rk-chip-btn:hover {
          background: #075e54;
          color: #fff;
          border-color: #075e54;
        }
        .rk-bottom-chip {
          flex-shrink: 0;
          white-space: nowrap;
          background: #fff;
          border: 1px solid #d1d5db;
          border-radius: 16px;
          padding: 6px 14px;
          font-size: 11.5px;
          color: #333;
          cursor: pointer;
          transition: all 0.15s;
          font-weight: 500;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .rk-bottom-chip:hover {
          background: #075e54;
          color: #fff;
          border-color: #075e54;
        }
        .rk-action-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          transition: all 0.18s;
          text-decoration: none;
        }
        .rk-action-btn:hover {
          background: rgba(255,255,255,0.16);
          color: #fff;
        }
        .rk-send-btn {
          background: #25a560;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          flex-shrink: 0;
          border: none;
          cursor: pointer;
        }
        .rk-send-btn:hover { background: #1e9452; }
        .rk-send-btn:disabled { background: #b2dfcb; cursor: not-allowed; }
      `}</style>

      <AnimatePresence>
        {visible && (
          <>
            {/* ── Launcher pill ── */}
            {!open && (
              <motion.button
                key="launcher"
                type="button"
                onClick={() => setOpen(true)}
                initial={{ opacity: 0, y: 24, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.88 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Chat with Rahul's team"
                style={{
                  position: "fixed",
                  bottom: 24,
                  right: 24,
                  zIndex: 70,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: 60,
                  padding: "10px 20px 10px 10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  cursor: "pointer",
                }}
              >
                {/* Avatar + online dot */}
                <span style={{ position: "relative", flexShrink: 0 }}>
                  <span style={{ display: "block", width: 44, height: 44, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.8)" }}>
                    <img src={AVATAR_SRC} alt="Suyash Patel" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </span>
                  <span style={{
                    position: "absolute", bottom: 1, right: 1,
                    width: 13, height: 13, background: "#25d366",
                    borderRadius: "50%", border: "2px solid #fff",
                    animation: "arcignPulse 2s ease-in-out infinite",
                  }} />
                </span>

                {/* Text */}
                <span style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(0,0,0,0.45)", textTransform: "uppercase", lineHeight: 1, marginBottom: 3 }}>
                    Rahul Kapoor's Team
                  </span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: "#111", lineHeight: 1.2 }}>
                    Suyash Patel · Online
                  </span>
                </span>

                {/* Unread badge */}
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    style={{
                      position: "absolute", top: -4, right: -4,
                      background: "#ef4444", color: "#fff",
                      borderRadius: "50%", width: 18, height: 18,
                      fontSize: 10, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "2px solid #fff",
                    }}
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </motion.button>
            )}

            {/* ── Chat Panel ── */}
            {open && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 32, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.93 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "fixed",
                  bottom: 24,
                  right: 24,
                  zIndex: 80,
                  width: "min(400px, calc(100vw - 20px))",
                  maxHeight: "min(680px, calc(100svh - 32px))",
                  borderRadius: 18,
                  boxShadow: "0 24px 80px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >

                {/* ── Header ── */}
                <div style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #222 100%)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexShrink: 0,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  {/* Back chevron */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.55)", padding: 4, display: "flex", alignItems: "center", borderRadius: 6 }}
                    aria-label="Close"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Avatar */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.15)" }}>
                      <img src={AVATAR_SRC} alt="Suyash Patel" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    {!typing && (
                      <span style={{
                        position: "absolute", bottom: 0, right: 0,
                        width: 11, height: 11, background: "#25d366",
                        borderRadius: "50%", border: "2px solid #1a1a1a",
                      }} />
                    )}
                  </div>

                  {/* Name + status */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                      Suyash Patel
                    </div>
                    <div style={{ fontSize: 11.5, marginTop: 2, lineHeight: 1, color: typing ? "#a8f0d8" : "#25d366", fontStyle: typing ? "italic" : "normal", transition: "all 0.3s" }}>
                      {typing ? "✍️ typing..." : "Online · Rahul Kapoor's Team"}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <a href="tel:+917022010145" className="rk-action-btn" aria-label="Call" title="Call us">
                      <Phone size={14} />
                    </a>
                    <button type="button" onClick={reset} className="rk-action-btn" aria-label="Reset chat" title="Clear chat">
                      <RotateCcw size={13} />
                    </button>
                    <button type="button" onClick={() => setOpen(false)} className="rk-action-btn" aria-label="Close chat">
                      <X size={14} />
                    </button>
                  </div>
                </div>

                {/* ── Messages Area ── */}
                <div className="rk-scroll rk-chat-bg" style={{ flex: 1, overflowY: "auto", overscrollBehavior: "contain", padding: "16px 12px 8px" }}>

                  {/* Date chip */}
                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <span style={{
                      background: "rgba(255,255,255,0.72)",
                      backdropFilter: "blur(8px)",
                      borderRadius: 6, padding: "3px 10px",
                      fontSize: 11, color: "#5a5a5a", fontWeight: 500,
                      boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                    }}>
                      {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {messages.map((msg, i) => {
                      const isBot = msg.sender === "bot";
                      const prevMsg = messages[i - 1];
                      const showAvatar = isBot && (!prevMsg || prevMsg.sender !== "bot");

                      return (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.25, delay: i === 0 ? 0 : 0.04 }}
                        >
                          <div
                            className="rk-msg-bubble"
                            style={{
                              display: "flex",
                              flexDirection: isBot ? "row" : "row-reverse",
                              alignItems: "flex-end",
                              gap: 6,
                              marginBottom: 1,
                            }}
                          >
                            {/* Avatar for bot messages */}
                            {isBot ? (
                              <div style={{ width: 28, flexShrink: 0 }}>
                                {showAvatar && (
                                  <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", border: "1.5px solid rgba(0,0,0,0.08)" }}>
                                    <img src={AVATAR_SRC} alt="Suyash Patel" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                  </div>
                                )}
                              </div>
                            ) : <div style={{ width: 0 }} />}

                            {/* Bubble */}
                            <div style={{
                              maxWidth: "78%",
                              background: isBot ? "#ffffff" : "#dcf8c6",
                              borderRadius: isBot
                                ? (showAvatar ? "0px 14px 14px 14px" : "14px 14px 14px 4px")
                                : "14px 14px 4px 14px",
                              padding: "9px 13px 7px",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.10)",
                            }}>
                              {/* Bot name label on first bubble in a sequence */}
                              {isBot && showAvatar && (
                                <div style={{ fontSize: 11, fontWeight: 700, color: "#075e54", marginBottom: 3, letterSpacing: "0.01em" }}>
                                  Priya · Rahul Kapoor's Team
                                </div>
                              )}

                              <p style={{ fontSize: 13.5, lineHeight: 1.58, color: "#1a1a1a", margin: 0 }}>
                                {msg.text}
                              </p>

                              {/* Timestamp + ticks */}
                              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4, gap: 4, alignItems: "center" }}>
                                <span style={{ fontSize: 10.5, color: "#9aa3af" }}>{msg.time ?? ""}</span>
                                {!isBot && (
                                  <svg width="16" height="10" viewBox="0 0 16 11" fill="none">
                                    <path d="M1 6L5 10L15 1" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 6L9 10L15 5" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Inline chips */}
                          {isBot && msg.chips && msg.chips.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15, duration: 0.24 }}
                              style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 8, marginLeft: 34, marginBottom: 6 }}
                            >
                              {msg.chips.map(chip => (
                                <button
                                  key={chip}
                                  type="button"
                                  className="rk-chip-btn"
                                  onClick={() => void sendMessage(chip)}
                                >
                                  {chip}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}

                    {/* Typing indicator */}
                    <AnimatePresence>
                      {typing && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: "flex", alignItems: "flex-end", gap: 6, marginTop: 2 }}
                        >
                          <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1.5px solid rgba(0,0,0,0.08)" }}>
                            <img src={AVATAR_SRC} alt="Suyash" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                          <div style={{
                            background: "#fff", borderRadius: "0px 14px 14px 14px",
                            padding: "11px 16px", display: "flex", gap: 5,
                            alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.10)",
                          }}>
                            {[0, 1, 2].map(i => (
                              <span key={i} style={{
                                width: 7, height: 7, borderRadius: "50%",
                                background: "#a0a0a0", display: "block",
                                animation: `arcignDot 1.3s ease-in-out ${i * 0.2}s infinite`,
                              }} />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div ref={endRef} />
                  </div>
                </div>

                {/* ── Persistent bottom chips bar ── */}
                <div style={{ background: "#f0f0f0", borderTop: "1px solid #e0e0e0", padding: "8px 12px 6px", flexShrink: 0 }}>
                  <div className="rk-chips-bar" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 2 }}>
                    {["About Rahul", "Programs", "Mindset Coaching", "Book Free Session"].map(chip => (
                      <button
                        key={chip}
                        type="button"
                        className="rk-bottom-chip"
                        onClick={() => void sendMessage(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Input bar ── */}
                <div style={{ background: "#f0f0f0", padding: "8px 10px 12px", flexShrink: 0, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    flex: 1, display: "flex", alignItems: "center",
                    padding: "6px 16px",
                    background: "#fff",
                    borderRadius: 24,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  }}>
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          void sendMessage(input);
                        }
                      }}
                      placeholder="Message"
                      autoComplete="off"
                      disabled={typing}
                      style={{
                        flex: 1, background: "none", border: "none", outline: "none",
                        fontSize: 14, color: "#1a1a1a", height: 38,
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => void sendMessage(input)}
                    disabled={!input.trim() || typing}
                    className="rk-send-btn"
                    aria-label="Send message"
                  >
                    <Send size={15} color="#fff" />
                  </button>
                </div>

              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
