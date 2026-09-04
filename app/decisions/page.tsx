"use client";

import { useState } from "react";

const decisions = [
  {
    keywords: ["study", "exam", "test", "learn", "revision"],
    question: "Should I study or do literally anything else?",
    yes: "STUDY.",
    reason: "Your future self has filed an official complaint.",
    action: "Open your notes. Set a 25-minute timer. Begin.",
  },
  {
    keywords: ["sleep", "tired", "bed", "nap"],
    question: "Should I sleep?",
    yes: "YES. SLEEP.",
    reason: "Your brain is currently running on approximately 3% battery.",
    action: "Put the phone down and go to bed.",
  },
  {
    keywords: ["text", "message", "reply", "girl", "boy", "her", "him"],
    question: "Should I send that message?",
    yes: "WAIT.",
    reason: "You are emotionally compromised. The OS refuses to approve this transmission.",
    action: "Wait 20 minutes. Read the message again. Then decide.",
  },
  {
    keywords: ["class", "college", "lecture", "attendance", "skip"],
    question: "Should I skip class?",
    yes: "CHECK ATTENDANCE FIRST.",
    reason: "Academic consequences have entered the chat.",
    action: "If attendance is safe, proceed. Otherwise: CLASS.",
  },
  {
    keywords: ["food", "eat", "restaurant", "pizza", "burger", "swiggy"],
    question: "Should I order food?",
    yes: "CALCULATE THE DAMAGE.",
    reason: "Your stomach says yes. Your bank account is preparing a lawsuit.",
    action: "Check today's spending before ordering.",
  },
];

export default function DecisionEngine() {
  const [problem, setProblem] = useState("");
  const [seriousness, setSeriousness] = useState(50);
  const [decision, setDecision] = useState<typeof decisions[number] | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  function makeDecision() {
    if (!problem.trim()) return;

    setLoading(true);
    setDecision(null);

    setTimeout(() => {
      const text = problem.toLowerCase();

    const found = decisions.find((item) =>
  item.keywords.some((keyword) => text.includes(keyword))
);

if (found) {
  setDecision(found);
} else {
  setDecision({
    keywords: [],
    question: "Should I do this?",
    yes: seriousness > 70 ? "PROBABLY NOT." : "GO FOR IT.",
    reason:
      seriousness > 70
        ? "The situation has exceeded the OS's recommended stupidity threshold."
        : "You have survived worse decisions.",
    action:
      seriousness > 70
        ? "Think about it for 10 minutes before doing anything irreversible."
        : "Proceed carefully. Future You has been notified.",
  });
}
      setLoading(false);
    }, 1200);
  }

  function reset() {
    setProblem("");
    setSeriousness(50);
    setDecision(null);
    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #24194a 0%, #080611 45%, #020204 100%)",
        color: "#f5f3ff",
        padding: "28px 18px 70px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "45px",
          }}
        >
          <div>
            <div
              style={{
                color: "#b98cff",
                fontSize: "11px",
                letterSpacing: "3px",
                fontWeight: "800",
              }}
            >
              COLLEGE SURVIVAL OS™ / DECISION DEPARTMENT
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 8vw, 76px)",
                lineHeight: "0.9",
                letterSpacing: "-4px",
                margin: "14px 0",
              }}
            >
              DECISION
              <br />
              <span style={{ color: "#b98cff" }}>ENGINE 🧠</span>
            </h1>

            <p
              style={{
                color: "#9d98ae",
                maxWidth: "600px",
                lineHeight: "1.7",
                fontSize: "15px",
              }}
            >
              Give the OS your problem. Receive a completely unnecessary
              analysis before making an extremely normal decision.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #493675",
              background: "#100c1d",
              borderRadius: "10px",
              padding: "12px 16px",
              color: "#8d83a5",
              fontSize: "11px",
              letterSpacing: "1px",
            }}
          >
            SYSTEM:{" "}
            <strong style={{ color: "#b98cff" }}>OVERTHINKING</strong>
          </div>
        </header>

        {/* INPUT CARD */}
        <section
          style={{
            background:
              "linear-gradient(145deg, rgba(24,18,43,0.96), rgba(8,7,14,0.96))",
            border: "1px solid #39285a",
            borderRadius: "18px",
            padding: "clamp(22px, 5vw, 40px)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              color: "#807595",
              fontSize: "10px",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            INPUT YOUR DILEMMA
          </div>

          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Example: Should I skip class and sleep?"
            rows={5}
            style={{
              width: "100%",
              boxSizing: "border-box",
              resize: "vertical",
              background: "#05040a",
              border: "1px solid #3a2b59",
              borderRadius: "12px",
              padding: "18px",
              color: "#fff",
              outline: "none",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          />

          {/* QUICK DECISIONS */}
          <div style={{ marginTop: "22px" }}>
            <div
              style={{
                color: "#807595",
                fontSize: "10px",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              QUICK DILEMMAS
            </div>

            <div
              style={{
                display: "flex",
                gap: "9px",
                flexWrap: "wrap",
              }}
            >
              {[
                "Should I study?",
                "Should I sleep?",
                "Should I skip class?",
                "Should I order food?",
                "Should I text her?",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setProblem(item)}
                  style={{
                    border: "1px solid #392b55",
                    background: "#0c0915",
                    color: "#aaa2bb",
                    borderRadius: "8px",
                    padding: "9px 12px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* SERIOUSNESS */}
          <div style={{ marginTop: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  color: "#807595",
                  fontSize: "10px",
                  letterSpacing: "2px",
                }}
              >
                DECISION SERIOUSNESS
              </span>

              <strong
                style={{
                  color: "#b98cff",
                  fontSize: "13px",
                }}
              >
                {seriousness}%
              </strong>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={seriousness}
              onChange={(e) => setSeriousness(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "#b98cff",
                cursor: "pointer",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#625a72",
                fontSize: "10px",
                marginTop: "7px",
              }}
            >
              <span>NOT THAT DEEP</span>
              <span>LIFE ALTERING</span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={makeDecision}
            disabled={!problem.trim() || loading}
            style={{
              width: "100%",
              marginTop: "30px",
              padding: "18px",
              borderRadius: "11px",
              border: "1px solid #b98cff",
              background:
                !problem.trim() || loading ? "#211a30" : "#b98cff",
              color: !problem.trim() || loading ? "#655b75" : "#100817",
              fontWeight: "900",
              letterSpacing: "2px",
              cursor: !problem.trim() || loading ? "not-allowed" : "pointer",
              fontSize: "13px",
            }}
          >
            {loading ? "ANALYZING YOUR LIFE..." : "MAKE THE DECISION →"}
          </button>
        </section>

        {/* RESULT */}
        {decision && (
          <section
            style={{
              marginTop: "25px",
              background: "#07050d",
              border: "1px solid #493675",
              borderRadius: "18px",
              padding: "clamp(22px, 5vw, 40px)",
            }}
          >
            <div
              style={{
                color: "#b98cff",
                fontSize: "10px",
                letterSpacing: "3px",
                fontWeight: "800",
              }}
            >
              DECISION ENGINE OUTPUT
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "25px",
                borderRadius: "13px",
                background:
                  "linear-gradient(135deg, rgba(185,140,255,0.1), rgba(185,140,255,0.02))",
                border: "1px solid rgba(185,140,255,0.25)",
              }}
            >
              <div
                style={{
                  color: "#746a84",
                  fontSize: "10px",
                  letterSpacing: "2px",
                }}
              >
                QUESTION
              </div>

              <h2
                style={{
                  fontSize: "clamp(22px, 4vw, 34px)",
                  margin: "9px 0 25px",
                }}
              >
                {decision.question}
              </h2>

              <div
                style={{
                  fontSize: "clamp(38px, 8vw, 64px)",
                  fontWeight: "900",
                  color: "#b98cff",
                  letterSpacing: "-3px",
                }}
              >
                {decision.yes}
              </div>

              <p
                style={{
                  color: "#c1bacd",
                  lineHeight: "1.7",
                  marginTop: "18px",
                }}
              >
                {decision.reason}
              </p>

              <div
                style={{
                  marginTop: "20px",
                  padding: "17px",
                  borderLeft: "3px solid #b98cff",
                  background: "#0d0916",
                  color: "#ddd6e8",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#b98cff" }}>RECOMMENDED ACTION:</strong>
                <br />
                {decision.action}
              </div>
            </div>

            <button
              onClick={reset}
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "14px",
                borderRadius: "9px",
                border: "1px solid #32263f",
                background: "#0c0912",
                color: "#9c92aa",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              RESET DECISION ENGINE
            </button>
          </section>
        )}

        {/* DISCLAIMER */}
        <div
          style={{
            marginTop: "28px",
            textAlign: "center",
            color: "#51495c",
            fontSize: "10px",
            lineHeight: "1.7",
          }}
        >
          ⚠️ DECISION ENGINE™ IS NOT A SUBSTITUTE FOR COMMON SENSE.
          <br />
          Unfortunately, neither is college.
        </div>

        {/* NAVIGATION */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <a
            href="/dashboard"
            style={{
              textDecoration: "none",
              padding: "13px 20px",
              borderRadius: "9px",
              border: "1px solid #30263f",
              background: "#0b0811",
              color: "#aaa1b5",
              fontSize: "12px",
            }}
          >
            ← DASHBOARD
          </a>

          <a
            href="/"
            style={{
              textDecoration: "none",
              padding: "13px 20px",
              borderRadius: "9px",
              border: "1px solid #30263f",
              background: "#0b0811",
              color: "#aaa1b5",
              fontSize: "12px",
            }}
          >
            MAIN OS
          </a>
        </div>

        <footer
          style={{
            textAlign: "center",
            marginTop: "45px",
            color: "#39323f",
            fontSize: "10px",
            letterSpacing: "2px",
          }}
        >
          DECISION ENGINE™ — BECAUSE GOOGLE WASN'T OVERKILL ENOUGH
        </footer>
      </div>
    </main>
  );
}