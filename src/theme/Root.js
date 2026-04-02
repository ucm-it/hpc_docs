import React, { useState, useRef, useEffect } from "react";

const API_URL = "https://amirayuyue-hpc-docs-chatbot.hf.space/chat";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap');

  .hpc-fab {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 9999;
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: linear-gradient(135deg, #0f62fe 0%, #0043ce 100%);
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 24px rgba(15,98,254,0.45), 0 1px 4px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
    font-family: 'Inter', sans-serif;
  }
  .hpc-fab:hover {
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 8px 32px rgba(15,98,254,0.55), 0 2px 8px rgba(0,0,0,0.2);
  }
  .hpc-fab:active { transform: scale(0.96); }
  .hpc-fab svg { width: 26px; height: 26px; }

  .hpc-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #42be65;
    border: 2px solid white;
    animation: hpc-pulse 2s infinite;
  }
  @keyframes hpc-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.15); }
  }

  .hpc-window {
    position: fixed;
    bottom: 96px;
    right: 28px;
    z-index: 9998;
    width: 380px;
    max-height: 580px;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    border: 1px solid rgba(0,0,0,0.08);
    transform-origin: bottom right;
    animation: hpc-open 0.25s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes hpc-open {
    from { opacity: 0; transform: scale(0.85) translateY(12px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .hpc-header {
    background: linear-gradient(135deg, #0f62fe 0%, #0043ce 100%);
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
  .hpc-header-icon {
    width: 36px; height: 36px;
    border-radius: 10px;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .hpc-header-text { flex: 1; min-width: 0; }
  .hpc-header-title { color: white; font-weight: 600; font-size: 14px; letter-spacing: -0.01em; margin: 0; }
  .hpc-header-sub { color: rgba(255,255,255,0.72); font-size: 11px; margin: 2px 0 0; font-family: 'JetBrains Mono', monospace; }
  .hpc-close-btn {
    background: rgba(255,255,255,0.15); border: none; border-radius: 8px;
    width: 28px; height: 28px; cursor: pointer; color: white;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.15s; flex-shrink: 0;
  }
  .hpc-close-btn:hover { background: rgba(255,255,255,0.25); }

  .hpc-messages {
    flex: 1; overflow-y: auto; padding: 16px;
    display: flex; flex-direction: column; gap: 12px;
    background: #f8f9fb; min-height: 0;
  }
  .hpc-messages::-webkit-scrollbar { width: 4px; }
  .hpc-messages::-webkit-scrollbar-track { background: transparent; }
  .hpc-messages::-webkit-scrollbar-thumb { background: #d0d5dd; border-radius: 4px; }

  .hpc-bubble {
    max-width: 88%; padding: 10px 14px; border-radius: 14px;
    font-size: 13.5px; line-height: 1.55;
    animation: hpc-fadein 0.2s ease;
  }
  @keyframes hpc-fadein {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hpc-bubble-user {
    background: linear-gradient(135deg, #0f62fe, #0043ce);
    color: white; align-self: flex-end; border-bottom-right-radius: 4px;
  }
  .hpc-bubble-bot {
    background: white; color: #1a1a2e; align-self: flex-start;
    border-bottom-left-radius: 4px; box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }
  .hpc-bubble-bot code {
    background: #f0f4ff; color: #0043ce; padding: 1px 5px;
    border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 12px;
  }
  .hpc-bubble-bot pre {
    background: #1a1a2e; color: #a8b4d8; padding: 10px 12px;
    border-radius: 8px; overflow-x: auto; font-family: 'JetBrains Mono', monospace;
    font-size: 12px; margin: 6px 0 0; line-height: 1.5;
  }
  .hpc-bubble-bot pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
  .hpc-table { border-collapse: collapse; width: 100%; font-size: 12px; margin: 8px 0; display: block; overflow-x: auto; }
  .hpc-table th, .hpc-table td { border: 1px solid #e5e7eb; padding: 4px 8px; text-align: left; white-space: nowrap; }
  .hpc-table th { background: #f0f4ff; color: #0043ce; font-weight: 600; }
  .hpc-table tr:nth-child(even) td { background: #f8f9fb; }

  .hpc-cursor {
    display: inline-block; width: 2px; height: 14px;
    background: #0f62fe; margin-left: 2px; vertical-align: middle;
    animation: hpc-blink 0.7s infinite;
  }
  @keyframes hpc-blink {
    0%, 100% { opacity: 1; } 50% { opacity: 0; }
  }

  .hpc-sources { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 4px; }
  .hpc-source-tag {
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    background: #f0f4ff; color: #0043ce; padding: 2px 7px;
    border-radius: 4px; border: 1px solid #c7d7ff;
  }

  .hpc-welcome { text-align: center; padding: 8px 0 4px; }
  .hpc-welcome-icon { font-size: 32px; margin-bottom: 8px; }
  .hpc-welcome-title { font-weight: 600; font-size: 14px; color: #1a1a2e; margin: 0 0 4px; }
  .hpc-welcome-sub { font-size: 12px; color: #6b7280; margin: 0 0 10px; }
  .hpc-disclaimer {
    font-size: 11px; color: #92400e; background: #fffbeb;
    border: 1px solid #fcd34d; border-radius: 8px;
    padding: 6px 10px; margin: 0 0 12px; text-align: left; line-height: 1.4;
  }
  .hpc-suggestions { display: flex; flex-direction: column; gap: 6px; }
  .hpc-suggestion {
    background: white; border: 1px solid #e5e7eb; border-radius: 10px;
    padding: 8px 12px; font-size: 12.5px; color: #374151; cursor: pointer;
    text-align: left; transition: border-color 0.15s, background 0.15s;
    font-family: 'Inter', sans-serif;
  }
  .hpc-suggestion:hover { border-color: #0f62fe; background: #f0f4ff; color: #0043ce; }

  .hpc-typing { display: flex; gap: 4px; align-items: center; padding: 4px 2px; }
  .hpc-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #9ca3af;
    animation: hpc-bounce 1.2s infinite;
  }
  .hpc-dot:nth-child(2) { animation-delay: 0.2s; }
  .hpc-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes hpc-bounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
    40% { transform: translateY(-5px); opacity: 1; }
  }

  .hpc-input-row {
    display: flex; align-items: flex-end; gap: 8px;
    padding: 12px 14px; background: white;
    border-top: 1px solid #f0f0f5; flex-shrink: 0;
  }
  .hpc-input {
    flex: 1; border: 1.5px solid #e5e7eb; border-radius: 12px;
    padding: 9px 13px; font-size: 13.5px; font-family: 'Inter', sans-serif;
    resize: none; outline: none; min-height: 38px; max-height: 100px;
    line-height: 1.45; color: #1a1a2e; background: #f8f9fb;
    transition: border-color 0.15s, background 0.15s;
  }
  .hpc-input:focus { border-color: #0f62fe; background: white; }
  .hpc-input::placeholder { color: #9ca3af; }
  .hpc-send-btn {
    width: 38px; height: 38px; border-radius: 11px;
    background: linear-gradient(135deg, #0f62fe, #0043ce);
    border: none; cursor: pointer; display: flex; align-items: center;
    justify-content: center; flex-shrink: 0;
    transition: opacity 0.15s, transform 0.15s;
  }
  .hpc-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .hpc-send-btn:not(:disabled):hover { transform: scale(1.08); }
  .hpc-send-btn svg { width: 17px; height: 17px; }

  .hpc-footer {
    padding: 6px 14px 8px; text-align: center; font-size: 10.5px;
    color: #9ca3af; background: white;
    font-family: 'JetBrains Mono', monospace; flex-shrink: 0;
  }

  @media (max-width: 480px) {
    .hpc-window { right: 12px; left: 12px; width: auto; bottom: 88px; }
    .hpc-fab { right: 16px; bottom: 20px; }
  }
`;

function isTableRow(line) {
  return /^\s*\|.+\|\s*$/.test(line);
}

function isSepRow(line) {
  return /^\s*\|[\s|:\-]+\|\s*$/.test(line) &&
    line.replace(/[|\s]/g, '').replace(/[:\-]/g, '') === '';
}

function renderTable(lines, key) {
  // Parse all pipe-rows, skip separator rows for body
  const allRows = lines
    .filter(l => isTableRow(l))
    .map(l => ({ sep: isSepRow(l), cells: l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim()) }));
  const sepIdx = allRows.findIndex(r => r.sep);
  if (sepIdx === -1) {
    // No separator found — render as plain text
    return <span key={key}>{lines.join('\n')}</span>;
  }
  const header = sepIdx > 0 ? allRows[sepIdx - 1].cells : null;
  const body = allRows.slice(sepIdx + 1).filter(r => !r.sep).map(r => r.cells);
  return (
    <table key={key} className="hpc-table">
      {header && <thead><tr>{header.map((c, j) => <th key={j}>{inlineRender(c)}</th>)}</tr></thead>}
      <tbody>{body.map((row, i) => <tr key={i}>{row.map((c, j) => <td key={j}>{inlineRender(c)}</td>)}</tr>)}</tbody>
    </table>
  );
}

function renderText(text, isStreaming) {
  if (isStreaming) {
    return [<span key="text">{text}</span>, <span key="cursor" className="hpc-cursor" />];
  }
  const parts = [];
  let k = 0;
  // Split on fenced code blocks first
  const segments = text.split(/(```(?:\w*)\n?[\s\S]*?```)/g);
  for (const seg of segments) {
    const codeMatch = seg.match(/^```(\w*)\n?([\s\S]*?)```$/);
    if (codeMatch) {
      parts.push(<pre key={k++}><code>{codeMatch[2].trim()}</code></pre>);
      continue;
    }
    const lines = seg.split('\n');
    let i = 0;
    let textLines = [];
    while (i < lines.length) {
      // Lookahead: a table block is any run of pipe-rows (including blank lines
      // between header and separator that the LLM sometimes emits)
      if (isTableRow(lines[i]) || (lines[i].trim() === '' && i + 1 < lines.length && isTableRow(lines[i + 1]))) {
        if (textLines.length) {
          const t = textLines.join('\n');
          if (t.trim()) { parts.push(...renderBlocks(t, k)); k += 100; }
          textLines = [];
        }
        const tableLines = [];
        while (i < lines.length) {
          if (isTableRow(lines[i])) {
            tableLines.push(lines[i++]);
          } else if (lines[i].trim() === '' && i + 1 < lines.length && isTableRow(lines[i + 1])) {
            i++; // skip blank line inside a table block
          } else {
            break;
          }
        }
        if (tableLines.length) parts.push(renderTable(tableLines, k++));
      } else {
        textLines.push(lines[i++]);
      }
    }
    if (textLines.length) {
      const t = textLines.join('\n');
      if (t.trim()) { parts.push(...renderBlocks(t, k)); k += 100; }
    }
  }
  return parts;
}

function inlineRender(text) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

function renderBlocks(text, startKey) {
  const lines = text.split('\n');
  const out = [];
  let k = startKey;
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Headings
    const hMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (hMatch) {
      const level = hMatch[1].length;
      const Tag = `h${Math.min(level + 2, 6)}`; // h3->h5 so it fits chat bubble
      out.push(<Tag key={k++} style={{margin:'6px 0 2px', fontSize: level <= 2 ? '13px' : '12px'}}>{inlineRender(hMatch[2])}</Tag>);
      i++; continue;
    }
    // Bullet lists — collect consecutive bullet lines
    if (/^\s*[\*\-]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[\*\-]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[\*\-]\s+/, ''));
        i++;
      }
      out.push(<ul key={k++} style={{margin:'4px 0', paddingLeft:'18px'}}>{items.map((it, j) => <li key={j}>{inlineRender(it)}</li>)}</ul>);
      continue;
    }
    // Normal text
    if (line.trim()) out.push(<span key={k++}>{inlineRender(line)}{' '}</span>);
    else if (out.length) out.push(<br key={k++} />);
    i++;
  }
  return out;
}

const SUGGESTIONS = [
  "How do I submit a SLURM job?",
  "How do I check my storage quota?",
  "How do I run a GPU job?",
  "How do I transfer files to the cluster?",
];

export default function Root({ children }) {
  const [open, setOpen]           = useState(false);
  const [messages, setMessages]   = useState([]);
  const [input, setInput]         = useState("");
  const [loading, setLoading]     = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || loading) return;
    setInput("");
    setLoading(true);

    const history = messages.slice(-6).map(m => ({ role: m.role, content: m.content }));
    setMessages(prev => [...prev,
      { role: "user", content: q },
      { role: "assistant", content: "", sources: [], streaming: true }
    ]);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, history }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const reader  = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let sources = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.token) {
              setMessages(prev => {
                const updated = [...prev];
                const last = { ...updated[updated.length - 1] };
                last.content += data.token;
                updated[updated.length - 1] = last;
                return updated;
              });
            }
            if (data.done) sources = data.sources || [];
            if (data.error) throw new Error(data.error);
          } catch {}
        }
      }

      // Finalize — remove cursor, add sources
      setMessages(prev => {
        const updated = [...prev];
        const last = { ...updated[updated.length - 1] };
        last.streaming = false;
        last.sources = sources;
        updated[updated.length - 1] = last;
        return updated;
      });

    } catch (err) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant", content: `⚠️ ${err.message}`, sources: [], streaming: false,
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {children}
      <style>{styles}</style>

      <button className="hpc-fab" onClick={() => setOpen(o => !o)} aria-label="Open HPC Assistant">
        <span className="hpc-badge" />
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <line x1="9" y1="10" x2="15" y2="10" strokeWidth="2"/>
            <line x1="9" y1="13" x2="13" y2="13" strokeWidth="2"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="hpc-window" role="dialog" aria-label="HPC Assistant">
          <div className="hpc-header">
            <div className="hpc-header-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div className="hpc-header-text">
              <p className="hpc-header-title">HPC Assistant</p>
              <p className="hpc-header-sub">UC Merced · RAG · 122 doc chunks</p>
            </div>
            <button className="hpc-close-btn" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="hpc-messages">
            {messages.length === 0 && (
              <div className="hpc-welcome">
                <div className="hpc-welcome-icon">🖥️</div>
                <p className="hpc-welcome-title">How can I help you?</p>
                <p className="hpc-welcome-sub">Ask anything about the UC Merced HPC cluster</p>
                <p className="hpc-disclaimer">
                  ⚠️ Please only ask questions related to UC Merced HPC systems and documentation. Questions outside this scope will not be answered.
                </p>
                <div className="hpc-suggestions">
                  {SUGGESTIONS.map(s => (
                    <button key={s} className="hpc-suggestion" onClick={() => send(s)}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`hpc-bubble ${m.role === "user" ? "hpc-bubble-user" : "hpc-bubble-bot"}`}>
                {m.role === "assistant" && m.content === "" && m.streaming ? (
                  <div className="hpc-typing">
                    <div className="hpc-dot"/><div className="hpc-dot"/><div className="hpc-dot"/>
                  </div>
                ) : (
                  renderText(m.content, m.streaming)
                )}
                {!m.streaming && m.sources?.length > 0 && (
                  <div className="hpc-sources">
                    {m.sources.map(s => <span key={s} className="hpc-source-tag">📄 {s}</span>)}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="hpc-input-row">
            <textarea
              ref={inputRef}
              className="hpc-input"
              placeholder="Ask about SLURM, storage, GPUs…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              rows={1}
              disabled={loading}
            />
            <button
              className="hpc-send-btn"
              onClick={() => send()}
              disabled={!input.trim() || loading}
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

          <div className="hpc-footer">powered by RAG · step-3.5-flash · hf.space</div>
        </div>
      )}
    </>
  );
}