"use client";

import { useState } from "react";

const translations: Record<string, string> = {
  k: "Dangerously short response. They have thoughts. You probably should not ask what they are.",
  fine: "This is NOT fine. Repeat: this is absolutely not fine.",
  okay: "The situation has entered the suspiciously calm zone.",
  nothing: "Something happened. You are currently not cleared to know about it.",
  whatever: "You have been given freedom. This freedom is a trap.",
  dowhatever: "Congratulations. You have selected the hardest difficulty.",
  hmm: "They are processing your last message. Pray for the best.",
  who: "You have entered DEFCON 1. Explain yourself immediately.",
  love: "Positive signal detected. Continue carefully. Do not ruin it.",
  missyou: "Critical emotional vulnerability detected. Recommended response: 'I miss you too.'",
};

const quickMessages = [
  { label: '"K"', value: "k" },
  { label: '"Fine"', value: "fine" },
  { label: '"Okay"', value: "okay" },
  { label: '"Nothing"', value: "nothing" },
  { label: '"Whatever"', value: "whatever" },
  { label: '"Do whatever you want"', value: "dowhatever" },
  { label: '"Hmm"', value: "hmm" },
  { label: '"Who is she?"', value: "who" },
  { label: '"Love you"', value: "love" },
  { label: '"I miss you"', value: "missyou" },
];

function normalizeMessage(message: string) {
  return message
    .toLowerCase()
    .trim()
    .replace(/[.!?,]/g, "");
}

function translate(message: string) {
  const normalized = normalizeMessage(message);

  if (translations[normalized]) {
    return translations[normalized];
  }

  if (
    normalized.includes("fine") ||
    normalized.includes("good")
  ) {
    return "The word looks positive. The energy is not. Proceed with extreme caution.";
  }

  if (
    normalized.includes("love") ||
    normalized.includes("miss")
  ) {
    return "Emotional signal detected. This one appears safe. Do not overthink it.";
  }

  if (
    normalized.includes("busy") ||
    normalized.includes("later")
  ) {
    return "Translation: not now. Respect the cooldown period and do not send 17 follow-up messages.";
  }

  if (
    normalized.includes("why") ||
    normalized.includes("what")
  ) {
    return "A question has been detected. Unfortunately, the Relationship OS has also detected that you may not like the answer.";
  }

  if (
    normalized.includes("sorry") ||
    normalized.includes("apolog")
  ) {
    return "Apology detected. Recommended action: stop explaining and let the apology breathe.";
  }

  return "Ambiguous emotional transmission detected. Meaning unavailable. Confidence: 37%. You are on your own.";
}

function getRisk(message: string) {
  const normalized = normalizeMessage(message);

  if (
    normalized.includes("who") ||
    normalized.includes("whatever") ||
    normalized.includes("do whatever") ||
    normalized === "fine"
  ) {
    return {
      level: "CRITICAL",
      percentage: 94,
      className: "critical",
    };
  }

  if (
    normalized === "k" ||
    normalized === "okay" ||
    normalized === "nothing" ||
    normalized === "hmm"
  ) {
    return {
      level: "HIGH",
      percentage: 76,
      className: "high",
    };
  }

  if (
    normalized.includes("love") ||
    normalized.includes("miss")
  ) {
    return {
      level: "SAFE",
      percentage: 12,
      className: "safe",
    };
  }

  return {
    level: "UNKNOWN",
    percentage: 51,
    className: "unknown",
  };
}

export default function RelationshipTranslator() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [risk, setRisk] = useState<{
    level: string;
    percentage: number;
    className: string;
  } | null>(null);

  function runTranslation(value = message) {
    if (!value.trim()) return;

    setMessage(value);
    setResult(translate(value));
    setRisk(getRisk(value));
  }

  return (
    <main className="translator-page">
      <div className="translator-grid" />

      <header className="translator-nav">
        <a href="/" className="back-button">
          ← BACK TO OS
        </a>

        <div className="translator-brand">
          RELATIONSHIP TRANSLATOR <span>v1.0</span>
        </div>

        <div className="live-status">
          <i />
          EMOTIONAL SYSTEM ONLINE
        </div>
      </header>

      <section className="translator-hero">
        <div className="eyebrow">
          MODULE 06 // HUMAN EMOTION DECODER
        </div>

        <h1>
          WHAT THEY
          <br />
          <span>REALLY MEANT.</span>
        </h1>

        <p>
          Enter a suspicious message. The system will translate it into
          something you can actually understand.
        </p>
      </section>

      <section className="translator-console">
        <div className="console-header">
          <div>
            <span className="console-number">01</span>
            MESSAGE INPUT
          </div>

          <span className="console-code">
            RELATIONSHIP_PROTOCOL.exe
          </span>
        </div>

        <div className="input-area">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder='Try: "fine"'
            maxLength={180}
          />

          <div className="input-footer">
            <span>{message.length}/180</span>

            <button
              onClick={() => runTranslation()}
              disabled={!message.trim()}
            >
              TRANSLATE →
            </button>
          </div>
        </div>

        <div className="quick-section">
          <div className="quick-title">
            COMMON TRANSMISSIONS
          </div>

          <div className="quick-buttons">
            {quickMessages.map((item) => (
              <button
                key={item.value}
                onClick={() => runTranslation(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {result && risk && (
        <section className="result-section">
          <div className="result-card">
            <div className="result-header">
              <span>TRANSLATION COMPLETE</span>
              <span>✓ DECODED</span>
            </div>

            <div className="result-message">
              <span>ORIGINAL TRANSMISSION</span>
              <strong>&quot;{message}&quot;</strong>
            </div>

            <div className="translation">
              <span>ACTUAL MEANING</span>
              <p>{result}</p>
            </div>

            <div className="result-footer">
              <div>
                <span>EMOTIONAL RISK</span>

                <strong className={risk.className}>
                  {risk.level}
                </strong>
              </div>

              <div className="risk-meter">
                <div>
                  <span />
                </div>

                <small>{risk.percentage}% CHAOS</small>
              </div>
            </div>
          </div>

          <div className="advice-card">
            <span>⚠ SYSTEM RECOMMENDATION</span>

            <p>
              Do not respond immediately. Close the keyboard. Drink water.
              Think about your life choices.
            </p>

            <button
              onClick={() => {
                setMessage("");
                setResult("");
                setRisk(null);
              }}
            >
              RESET EMOTIONAL DAMAGE
            </button>
          </div>
        </section>
      )}

      {!result && (
        <section className="empty-state">
          <div className="empty-icon">?</div>

          <div>
            <span>WAITING FOR TRANSMISSION</span>
            <p>
              The system is ready to overanalyze something completely
              normal.
            </p>
          </div>
        </section>
      )}

      <footer className="translator-footer">
        <span>COLLEGE SURVIVAL OS™</span>
        <span>
          DISCLAIMER: THIS MACHINE IS 100% UNQUALIFIED.
        </span>
      </footer>

      <style jsx>{`
        .translator-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 10%,
              rgba(255, 130, 200, 0.08),
              transparent 28%
            ),
            #07080a;
          color: #f5f7f2;
          padding-bottom: 80px;
        }

        .translator-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.35;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );
          background-size: 44px 44px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 85%
          );
        }

        .translator-nav {
          position: relative;
          z-index: 2;
          width: min(1200px, calc(100% - 40px));
          margin: auto;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          font-family: "DM Mono", monospace;
          font-size: 9px;
        }

        .back-button {
          color: #858b97;
          transition: color 0.2s ease;
        }

        .back-button:hover {
          color: #b8ff4d;
        }

        .translator-brand {
          letter-spacing: 0.08em;
        }

        .translator-brand span {
          color: #ff82c8;
        }

        .live-status {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #858b97;
        }

        .live-status i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #52e6a5;
          box-shadow: 0 0 12px #52e6a5;
        }

        .translator-hero {
          position: relative;
          z-index: 1;
          width: min(900px, calc(100% - 40px));
          margin: auto;
          padding: 110px 0 60px;
          text-align: center;
        }

        .eyebrow {
          color: #ff82c8;
          font-family: "DM Mono", monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .translator-hero h1 {
          margin-top: 22px;
          font-size: clamp(54px, 8vw, 100px);
          line-height: 0.88;
          letter-spacing: -0.07em;
        }

        .translator-hero h1 span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(245, 247, 242, 0.6);
        }

        .translator-hero p {
          max-width: 530px;
          margin: 28px auto 0;
          color: #858b97;
          font-size: 15px;
          line-height: 1.7;
        }

        .translator-console {
          position: relative;
          z-index: 1;
          width: min(900px, calc(100% - 40px));
          margin: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(13, 15, 19, 0.85);
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
        }

        .console-header {
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #858b97;
          font-family: "DM Mono", monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
        }

        .console-number {
          margin-right: 12px;
          color: #ff82c8;
        }

        .console-code {
          color: #555b67;
        }

        .input-area {
          padding: 25px;
        }

        textarea {
          width: 100%;
          min-height: 150px;
          resize: vertical;
          border: 1px solid rgba(255, 255, 255, 0.1);
          outline: none;
          padding: 20px;
          background: #090a0d;
          color: #f5f7f2;
          font-family: "DM Mono", monospace;
          font-size: 13px;
          line-height: 1.6;
        }

        textarea:focus {
          border-color: rgba(255, 130, 200, 0.55);
          box-shadow: 0 0 30px rgba(255, 130, 200, 0.05);
        }

        textarea::placeholder {
          color: #3f444d;
        }

        .input-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          color: #555b67;
          font-family: "DM Mono", monospace;
          font-size: 8px;
        }

        .input-footer button {
          border: 0;
          padding: 13px 20px;
          background: #b8ff4d;
          color: #080a08;
          font-family: "DM Mono", monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .input-footer button:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .quick-section {
          padding: 20px 25px 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .quick-title {
          margin-bottom: 13px;
          color: #555b67;
          font-family: "DM Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
        }

        .quick-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .quick-buttons button {
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 9px 11px;
          background: #101218;
          color: #858b97;
          font-family: "DM Mono", monospace;
          font-size: 8px;
          transition: all 0.2s ease;
        }

        .quick-buttons button:hover {
          border-color: rgba(255, 130, 200, 0.4);
          color: #ff82c8;
          transform: translateY(-1px);
        }

        .result-section {
          position: relative;
          z-index: 1;
          width: min(900px, calc(100% - 40px));
          margin: 25px auto 0;
          display: grid;
          grid-template-columns: 1fr 270px;
          gap: 12px;
        }

        .result-card,
        .advice-card {
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: #0d0f13;
        }

        .result-header {
          padding: 14px 18px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #52e6a5;
          font-family: "DM Mono", monospace;
          font-size: 8px;
        }

        .result-message,
        .translation {
          padding: 25px;
        }

        .result-message {
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .result-message span,
        .translation span,
        .result-footer span {
          display: block;
          margin-bottom: 10px;
          color: #555b67;
          font-family: "DM Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.08em;
        }

        .result-message strong {
          color: #858b97;
          font-family: "DM Mono", monospace;
          font-size: 13px;
        }

        .translation p {
          color: #f5f7f2;
          font-size: 20px;
          line-height: 1.5;
          letter-spacing: -0.02em;
        }

        .result-footer {
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: end;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .result-footer strong {
          font-family: "DM Mono", monospace;
          font-size: 15px;
        }

        .critical {
          color: #ff5874;
        }

        .high {
          color: #ffd166;
        }

        .safe {
          color: #52e6a5;
        }

        .unknown {
          color: #9b7cff;
        }

        .risk-meter {
          width: 180px;
        }

        .risk-meter > div {
          height: 5px;
          overflow: hidden;
          background: #252932;
        }

        .risk-meter span {
          display: block;
          width: ${risk?.percentage ?? 0}%;
          height: 100%;
          background: #ff82c8;
        }

        .risk-meter small {
          display: block;
          margin-top: 7px;
          color: #555b67;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          text-align: right;
        }

        .advice-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
        }

        .advice-card > span {
          color: #ffd166;
          font-family: "DM Mono", monospace;
          font-size: 8px;
          line-height: 1.5;
        }

        .advice-card p {
          margin-top: 20px;
          color: #858b97;
          font-size: 12px;
          line-height: 1.7;
        }

        .advice-card button {
          margin-top: auto;
          padding: 11px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: #858b97;
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        .advice-card button:hover {
          border-color: #ff82c8;
          color: #ff82c8;
        }

        .empty-state {
          position: relative;
          z-index: 1;
          width: min(900px, calc(100% - 40px));
          margin: 25px auto 0;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          color: #555b67;
        }

        .empty-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 130, 200, 0.25);
          color: #ff82c8;
          font-family: "DM Mono", monospace;
          font-size: 18px;
        }

        .empty-state span {
          color: #858b97;
          font-family: "DM Mono", monospace;
          font-size: 8px;
        }

        .empty-state p {
          margin-top: 6px;
          font-size: 11px;
        }

        .translator-footer {
          position: relative;
          z-index: 1;
          width: min(1200px, calc(100% - 40px));
          margin: 70px auto 0;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          color: #555b67;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.08em;
        }

        @media (max-width: 750px) {
          .translator-brand {
            display: none;
          }

          .translator-nav {
            min-height: 65px;
          }

          .translator-hero {
            padding-top: 75px;
          }

          .result-section {
            grid-template-columns: 1fr;
          }

          .risk-meter {
            width: 120px;
          }

          .translator-footer {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (max-width: 500px) {
          .translator-hero h1 {
            font-size: 52px;
          }

          .input-area {
            padding: 15px;
          }

          .quick-section {
            padding: 15px;
          }

          .result-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 25px;
          }

          .risk-meter {
            width: 100%;
          }

          .empty-state {
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}