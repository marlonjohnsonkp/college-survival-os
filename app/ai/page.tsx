"use client";

import { useState } from "react";

const quickProblems = [
  "I have an exam tomorrow and haven't studied.",
  "I have no money left this month.",
  "My attendance is dangerously low.",
  "I have 5 assignments due this week.",
];

export default function AIPage() {
  const [problem, setProblem] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

 async function generateAdvice() {
  if (!problem.trim()) return;

  setLoading(true);
  setAnswer("");

  setTimeout(() => {
    const text = problem.toLowerCase();

    let offlineAdvice =
      "🧠 OFFLINE SURVIVAL INTELLIGENCE ACTIVATED.\n\n" +
      "• Stop overthinking.\n" +
      "• Break the problem into one small action.\n" +
      "• Do that action for 20 minutes.\n" +
      "• Then reassess the situation.\n\n" +
      "SURVIVAL VERDICT: You are not doomed. You are simply underprepared.";

    if (
      text.includes("exam") ||
      text.includes("study") ||
      text.includes("test")
    ) {
      offlineAdvice =
        "🚨 EXAM EMERGENCY PROTOCOL ACTIVATED.\n\n" +
        "• Stop trying to study everything.\n" +
        "• Find the 3–5 highest-value topics.\n" +
        "• Use active recall instead of just reading.\n" +
        "• Practice previous questions.\n" +
        "• Sleep enough to actually remember what you studied.\n\n" +
        "SURVIVAL VERDICT: You are late. You are NOT finished.";
    } else if (
      text.includes("assignment") ||
      text.includes("project") ||
      text.includes("deadline")
    ) {
      offlineAdvice =
        "📚 DEADLINE SURVIVAL PROTOCOL ACTIVATED.\n\n" +
        "• Stop planning endlessly.\n" +
        "• Open the assignment NOW.\n" +
        "• Finish the easiest section first.\n" +
        "• Put your phone away.\n" +
        "• Submit something good before chasing perfection.\n\n" +
        "SURVIVAL VERDICT: A submitted assignment beats a perfect imaginary one.";
    } else if (
      text.includes("money") ||
      text.includes("broke") ||
      text.includes("budget")
    ) {
      offlineAdvice =
        "💸 FINANCIAL SURVIVAL PROTOCOL ACTIVATED.\n\n" +
        "• Stop unnecessary spending for 7 days.\n" +
        "• Check your last 10 purchases.\n" +
        "• Separate needs from 'I deserve this.'\n" +
        "• Set a daily spending limit.\n\n" +
        "SURVIVAL VERDICT: Your wallet has filed a formal complaint.";
    } else if (
      text.includes("relationship") ||
      text.includes("girlfriend") ||
      text.includes("boyfriend") ||
      text.includes("love")
    ) {
      offlineAdvice =
        "💀 RELATIONSHIP SURVIVAL PROTOCOL ACTIVATED.\n\n" +
        "• Do not send 17 messages in a row.\n" +
        "• Ask what is actually wrong.\n" +
        "• Listen before defending yourself.\n" +
        "• Don't argue while angry.\n\n" +
        "SURVIVAL VERDICT: Communication recommended. Panic rejected.";
    }

    setAnswer(offlineAdvice);
    setLoading(false);
  }, 900);
}

  return (
    <main className="ai-page">
      <div className="ai-grid" />

      <header className="ai-header">
        <a href="/dashboard" className="ai-logo">
          <div className="logo-box">CS</div>

          <div>
            <strong>COLLEGE SURVIVAL OS™</strong>
            <span>ARTIFICIAL SURVIVAL INTELLIGENCE</span>
          </div>
        </a>

        <div className="online">
          <span />
          AI CORE ONLINE
        </div>
      </header>

      <section className="ai-content">
        <div className="hero">
          <div>
            <p className="eyebrow">
              MODULE 04 // ARTIFICIAL SURVIVAL INTELLIGENCE
            </p>

            <h1>
              AI SURVIVAL
              <br />
              <span>ADVISOR.</span>
            </h1>

            <p className="subtitle">
              Describe your college crisis. The system will produce
              unnecessarily confident advice.
            </p>
          </div>

          <div className="ai-core">
            <div className="core-circle">
              AI
            </div>

            <span>CORE STATUS</span>
            <strong>THINKING</strong>
          </div>
        </div>

        <section className="section">
          <div className="section-title">
            <span>01</span>
            <h2>DESCRIBE YOUR CRISIS</h2>
            <small>AI INPUT</small>
          </div>

          <div className="advisor-box">
            <textarea
              value={problem}
              onChange={(event) => setProblem(event.target.value)}
              placeholder="Example: I have an exam tomorrow, three assignments, no motivation and I haven't started anything..."
            />

            <div className="quick-actions">
              {quickProblems.map((item) => (
                <button
                  key={item}
                  onClick={() => setProblem(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="analyze-button"
              onClick={generateAdvice}
              disabled={loading}
            >
              {loading
                ? "⚡ ANALYZING YOUR TERRIBLE DECISIONS..."
                : "🤖 ANALYZE MY LIFE"}
            </button>
          </div>
        </section>

        {loading && (
          <section className="thinking">
            <div className="thinking-line">
              <span />
              <span />
              <span />
            </div>

            <p>
              AI CORE IS PROCESSING YOUR QUESTIONABLE LIFE CHOICES...
            </p>
          </section>
        )}

        {answer && !loading && (
          <section className="answer">
            <div className="answer-top">
              <span>AI RESPONSE // CASE #{answer.length}</span>
              <span>CONFIDENCE: UNNECESSARILY HIGH</span>
            </div>

            <div className="answer-body">
              <div className="robot">🤖</div>

              <div>
                <span className="answer-label">
                  SURVIVAL RECOMMENDATION
                </span>

                <h2>{answer}</h2>

                <p>
                  This advice was generated using advanced
                  survival mathematics, common sense and absolutely
                  no understanding of your actual circumstances.
                </p>
              </div>
            </div>

            <div className="answer-footer">
              <span>THREAT LEVEL: MANAGEABLE</span>
              <span>GOOD LUCK, SOLDIER.</span>
            </div>
          </section>
        )}

        <section className="section">
          <div className="section-title">
            <span>02</span>
            <h2>AI OPERATING PRINCIPLES</h2>
            <small>HIGHLY ADVANCED</small>
          </div>

          <div className="principles">
            <article>
              <strong>01</strong>
              <h3>STOP PANICKING</h3>
              <p>
                Panic consumes energy that could be used for
                actually solving the problem.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>DO ONE THING</h3>
              <p>
                Your brain cannot complete seventeen tasks
                simultaneously. We checked.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>START NOW</h3>
              <p>
                Tomorrow is not a productivity strategy.
              </p>
            </article>
          </div>
        </section>

        <section className="disclaimer">
          <span>⚠ SYSTEM DISCLAIMER</span>

          <p>
            The College Survival AI may occasionally provide useful
            advice. This is considered a software malfunction.
          </p>
        </section>

        <footer className="ai-footer">
          <span>COLLEGE SURVIVAL OS™</span>

          <a href="/dashboard">← DASHBOARD</a>

          <a href="/college">COLLEGE SURVIVAL</a>

          <a href="/">MAIN SYSTEM</a>
        </footer>
      </section>

      <style jsx>{`
        .ai-page {
          min-height: 100vh;
          background: #070708;
          color: #f5f5ef;
          position: relative;
          overflow: hidden;
        }

        .ai-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.45;
          background:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .ai-header {
          height: 76px;
          padding: 0 6vw;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .ai-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .logo-box {
          width: 38px;
          height: 38px;
          border: 1px solid #a855f7;
          color: #a855f7;
          display: grid;
          place-items: center;
          font-size: 11px;
          font-weight: 900;
        }

        .ai-logo strong {
          display: block;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .ai-logo span {
          display: block;
          margin-top: 3px;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .online {
          font-size: 9px;
          letter-spacing: 2px;
          color: #888;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .online span {
          width: 7px;
          height: 7px;
          background: #a855f7;
          border-radius: 50%;
          box-shadow: 0 0 14px #a855f7;
        }

        .ai-content {
          width: min(1200px, 88%);
          margin: auto;
          padding: 80px 0 50px;
          position: relative;
          z-index: 1;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 80px;
        }

        .eyebrow {
          color: #a855f7;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        h1 {
          margin: 0;
          font-size: clamp(50px, 8vw, 100px);
          line-height: 0.83;
          letter-spacing: -5px;
          font-weight: 900;
        }

        h1 span {
          color: transparent;
          -webkit-text-stroke: 1px #a855f7;
        }

        .subtitle {
          max-width: 600px;
          color: #666;
          font-size: 13px;
          line-height: 1.7;
          margin-top: 28px;
        }

        .ai-core {
          width: 210px;
          padding: 25px;
          border: 1px solid rgba(168,85,247,0.3);
          background: rgba(168,85,247,0.035);
          text-align: center;
        }

        .core-circle {
          width: 75px;
          height: 75px;
          margin: auto;
          border: 1px solid #a855f7;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #a855f7;
          font-weight: 900;
          box-shadow: 0 0 30px rgba(168,85,247,0.15);
        }

        .ai-core span {
          display: block;
          margin-top: 15px;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .ai-core strong {
          display: block;
          margin-top: 6px;
          color: #a855f7;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .section {
          margin-bottom: 70px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 15px;
          margin-bottom: 20px;
        }

        .section-title > span {
          color: #a855f7;
          font-size: 10px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .section-title small {
          margin-left: auto;
          color: #555;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .advisor-box {
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
        }

        textarea {
          width: 100%;
          min-height: 150px;
          box-sizing: border-box;
          resize: vertical;
          background: #101011;
          border: 1px solid #222;
          color: white;
          padding: 20px;
          outline: none;
          font-family: inherit;
          font-size: 12px;
          line-height: 1.7;
        }

        textarea:focus {
          border-color: #a855f7;
        }

        .quick-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin: 15px 0;
        }

        .quick-actions button {
          background: transparent;
          border: 1px solid #292929;
          color: #777;
          padding: 9px 12px;
          cursor: pointer;
          font-size: 8px;
        }

        .quick-actions button:hover {
          border-color: #a855f7;
          color: #a855f7;
        }

        .analyze-button {
          width: 100%;
          padding: 17px;
          border: none;
          background: #a855f7;
          color: #08070a;
          font-weight: 900;
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .analyze-button:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .thinking {
          border: 1px solid rgba(168,85,247,0.25);
          padding: 35px;
          text-align: center;
          margin-bottom: 70px;
        }

        .thinking-line {
          display: flex;
          justify-content: center;
          gap: 7px;
        }

        .thinking-line span {
          width: 8px;
          height: 8px;
          background: #a855f7;
          border-radius: 50%;
          animation: pulse 1s infinite alternate;
        }

        .thinking-line span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .thinking-line span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes pulse {
          from {
            opacity: 0.2;
            transform: translateY(0);
          }

          to {
            opacity: 1;
            transform: translateY(-5px);
          }
        }

        .thinking p {
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
          margin-bottom: 0;
        }

        .answer {
          border: 1px solid rgba(168,85,247,0.4);
          background: rgba(168,85,247,0.035);
          padding: 30px;
          margin-bottom: 70px;
        }

        .answer-top,
        .answer-footer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #666;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .answer-body {
          display: flex;
          gap: 25px;
          padding: 35px 0;
        }

        .robot {
          font-size: 35px;
        }

        .answer-label {
          color: #a855f7;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .answer h2 {
          max-width: 850px;
          font-size: 22px;
          line-height: 1.4;
          margin: 10px 0;
        }

        .answer p {
          color: #666;
          font-size: 10px;
          line-height: 1.7;
        }

        .answer-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          color: #a855f7;
        }

        .principles {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .principles article {
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
        }

        .principles strong {
          color: #a855f7;
          font-size: 9px;
        }

        .principles h3 {
          font-size: 13px;
          margin: 15px 0 8px;
        }

        .principles p {
          color: #666;
          font-size: 10px;
          line-height: 1.6;
          margin: 0;
        }

        .disclaimer {
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 70px;
        }

        .disclaimer span {
          color: #a855f7;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .disclaimer p {
          color: #555;
          font-size: 10px;
          line-height: 1.6;
        }

        .ai-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #444;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .ai-footer a {
          color: #777;
          text-decoration: none;
        }

        .ai-footer a:hover {
          color: #a855f7;
        }

        @media (max-width: 800px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .ai-core {
            width: 100%;
            box-sizing: border-box;
          }

          .principles {
            grid-template-columns: 1fr;
          }

          .answer-body {
            flex-direction: column;
          }

          .ai-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}