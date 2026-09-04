"use client";

import { useState } from "react";

const modules = [
  {
    icon: "🎓",
    title: "College Survival",
    description: "Attendance, assignments, exam — ellam oru scene.",
    href: "/college",
  },
  {
    icon: "🚨",
    title: "Procrastination Police",
    description: "Productivity avoid cheyyunnundo? Nammal nokkum.",
    href: "/procrastination",
  },
  {
    icon: "💸",
    title: "Money Roast",
    description: "Cash evide poyi enn kandupidikku.",
    href: "/money",
  },
  {
    icon: "🤖",
    title: "AI Survival Advisor",
    description: "AI advice aanu. Vishwaasikkano? Ninte ishtam.",
    href: "/ai",
  },
  {
    icon: "💀",
    title: "Relationship Translator",
    description: '"K" message decode cheyyu, risk ariyu.',
    href: "/translator",
  },
  {
    icon: "⚖️",
    title: "Roommate Court",
    description: "Roommate-ine ethire full serious justice.",
    href: "/court",
  },
  {
  icon: "🧠",
  title: "Decision Engine",
  description: "Ninte questionable decision OS-ine vittu kodukku.",
  href: "/decisions",
},
];


export default function Dashboard() {
  const [energy, setEnergy] = useState(67);

  return (
    <main className="dashboard-page">
      <div className="dashboard-bg" />

      {/* TOP BAR */}
      <header className="dashboard-header">
        <a href="/" className="dashboard-logo">
          <div className="dashboard-logo-mark">SO</div>

          <div>
            <strong>SURVIVAL OS™</strong>
            <span>STUDENT CONTROL ROOM</span>
          </div>
        </a>

        <div className="system-status">
          <span />
          SYSTEM OK MACHANE
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="dashboard-content">

        {/* WELCOME */}
        <div className="dashboard-intro">
          <div>
            <p className="dashboard-eyebrow">
              SURVIVAL MODE // DASHBOARD
            </p>

            <h1>
              GOOD MORNING,
              <br />
              <span>MACHANE.</span>
            </h1>

            <p className="dashboard-description">
              Your academic situation has been analyzed.
              <br />
              The results are... concerning.
            </p>
          </div>

          <div className="survival-score">
            <span>SURVIVAL SCORE</span>

            <strong>{energy}</strong>

            <small>/100</small>

            <div className="score-bar">
              <div style={{ width: `${energy}%` }} />
            </div>

            <p>
              {energy >= 70
                ? "ORUVIDHAM OK"
                : "FULL EMERGENCY"}
            </p>
          </div>
        </div>

        {/* ALERT */}
        <div className="dashboard-alert">
          <div className="alert-icon">⚠</div>

          <div>
            <strong>SERIOUS WARNING</strong>
            <p>
              Responsibilities nalla style-il avoid cheythu.
              Ithrem consistency-kk oru award venam.
            </p>
          </div>

          <span className="alert-code">
            STATUS: KURACH SCENE UNDU
          </span>
        </div>

        {/* STATS */}
        <div className="dashboard-section-title">
          <span>01</span>
          <h2>LIVE SCENE</h2>
          <small>REALITY CHECK</small>
        </div>

        <div className="dashboard-stats">

          <div className="dashboard-stat">
            <span>🎓</span>
            <small>ATTENDANCE</small>
            <strong>74%</strong>
            <div className="mini-bar">
              <div style={{ width: "74%" }} />
            </div>
          </div>

          <div className="dashboard-stat">
            <span>📚</span>
            <small>ASSIGNMENTS</small>
            <strong>3</strong>
            <p>LATE AAYI</p>
          </div>

          <div className="dashboard-stat">
            <span>💸</span>
            <small>MONEY LEFT</small>
            <strong>₹1,240</strong>
            <p>DANGER ZONE</p>
          </div>

          <div className="dashboard-stat">
            <span>⚡</span>
            <small>PRODUCTIVITY</small>
            <strong>63%</strong>
            <div className="mini-bar">
              <div style={{ width: "63%" }} />
            </div>
          </div>

        </div>

        {/* ENERGY CONTROL */}
        <div className="energy-panel">
          <div>
            <span className="panel-label">
              ⚡ PERSONAL ENERGY METER
            </span>

            <h2>
              Innu ethra alive feel cheyyunnu?
            </h2>

            <p>
              Ninte current energy set cheyyu.
              Baaki system judge cheyyum, sorry.
            </p>
          </div>

          <div className="energy-control">
            <strong>{energy}%</strong>

            <input
              type="range"
              min="0"
              max="100"
              value={energy}
              onChange={(event) =>
                setEnergy(Number(event.target.value))
              }
            />
          </div>
        </div>

        {/* MODULES */}
        <div className="dashboard-section-title">
          <span>02</span>
          <h2>SURVIVAL MODULES</h2>
          <small>TOOL SELECT CHEYYU</small>
        </div>

        <div className="dashboard-modules">
          {modules.map((module) => (
            <a
              href={module.href}
              className="dashboard-module"
              key={module.title}
            >
              <div className="module-icon">
                {module.icon}
              </div>

              <div className="module-info">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>

              <span className="module-arrow">↗</span>
            </a>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          <span>
            SURVIVAL OS™
          </span>

          <span>
            SYSTEM HEALTH: KURE SCENE UNDU
          </span>

          <a href="/">
            ← MAIN PAGE-ILEKKU POKAM
          </a>
        </footer>

      </section>

      <style jsx>{`
        .dashboard-page {
          min-height: 100vh;
          background: #070708;
          color: #f4f4f0;
          position: relative;
          overflow: hidden;
        }

        .dashboard-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
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

        .dashboard-header {
          height: 76px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6vw;
          position: relative;
          z-index: 2;
        }

        .dashboard-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: white;
        }

        .dashboard-logo-mark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid #b7ff00;
          color: #b7ff00;
          font-weight: 900;
          font-size: 12px;
        }

        .dashboard-logo strong {
          display: block;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .dashboard-logo span {
          display: block;
          margin-top: 3px;
          font-size: 8px;
          opacity: 0.45;
          letter-spacing: 2px;
        }

        .system-status {
          font-size: 9px;
          letter-spacing: 2px;
          opacity: 0.7;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .system-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b7ff00;
          box-shadow: 0 0 12px #b7ff00;
        }

        .dashboard-content {
          width: min(1200px, 88%);
          margin: auto;
          padding: 80px 0 40px;
          position: relative;
          z-index: 1;
        }

        .dashboard-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 50px;
        }

        .dashboard-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          color: #b7ff00;
          margin-bottom: 20px;
        }

        .dashboard-intro h1 {
          font-size: clamp(45px, 7vw, 90px);
          line-height: 0.88;
          letter-spacing: -4px;
          margin: 0;
          font-weight: 900;
        }

        .dashboard-intro h1 span {
          color: transparent;
          -webkit-text-stroke: 1px #b7ff00;
        }

        .dashboard-description {
          margin-top: 25px;
          color: #777;
          line-height: 1.7;
          font-size: 13px;
        }

        .survival-score {
          width: 220px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.025);
        }

        .survival-score span {
          font-size: 9px;
          letter-spacing: 2px;
          color: #888;
        }

        .survival-score strong {
          font-size: 70px;
          line-height: 1;
          display: inline-block;
          margin-top: 12px;
          color: #b7ff00;
        }

        .survival-score small {
          color: #555;
        }

        .score-bar,
        .mini-bar {
          height: 3px;
          background: #222;
          margin-top: 15px;
          overflow: hidden;
        }

        .score-bar div,
        .mini-bar div {
          height: 100%;
          background: #b7ff00;
        }

        .survival-score p {
          font-size: 8px;
          letter-spacing: 2px;
          color: #888;
        }

        .dashboard-alert {
          border: 1px solid rgba(255,60,60,0.3);
          background: rgba(255,40,40,0.04);
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 70px;
        }

        .alert-icon {
          font-size: 25px;
          color: #ff4d4d;
        }

        .dashboard-alert strong {
          font-size: 11px;
          letter-spacing: 2px;
          color: #ff4d4d;
        }

        .dashboard-alert p {
          margin: 5px 0 0;
          color: #777;
          font-size: 12px;
        }

        .alert-code {
          margin-left: auto;
          font-size: 8px;
          letter-spacing: 2px;
          color: #ff4d4d;
        }

        .dashboard-section-title {
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 15px;
          margin-bottom: 20px;
        }

        .dashboard-section-title span {
          color: #b7ff00;
          font-size: 10px;
        }

        .dashboard-section-title h2 {
          font-size: 11px;
          letter-spacing: 2px;
          margin: 0;
        }

        .dashboard-section-title small {
          margin-left: auto;
          color: #555;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .dashboard-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 60px;
        }

        .dashboard-stat {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 25px;
          background: rgba(255,255,255,0.025);
        }

        .dashboard-stat > span {
          font-size: 22px;
        }

        .dashboard-stat small {
          display: block;
          margin-top: 20px;
          color: #666;
          letter-spacing: 2px;
          font-size: 8px;
        }

        .dashboard-stat strong {
          display: block;
          font-size: 32px;
          margin-top: 7px;
        }

        .dashboard-stat p {
          font-size: 8px;
          letter-spacing: 1px;
          color: #ff4d4d;
        }

        .energy-panel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 30px;
          border: 1px solid rgba(183,255,0,0.2);
          background: rgba(183,255,0,0.025);
          margin-bottom: 70px;
        }

        .panel-label {
          font-size: 9px;
          letter-spacing: 2px;
          color: #b7ff00;
        }

        .energy-panel h2 {
          margin: 12px 0 5px;
          font-size: 24px;
        }

        .energy-panel p {
          color: #666;
          font-size: 11px;
        }

        .energy-control {
          min-width: 300px;
          text-align: right;
        }

        .energy-control strong {
          display: block;
          font-size: 45px;
          color: #b7ff00;
          margin-bottom: 10px;
        }

        .energy-control input {
          width: 100%;
          accent-color: #b7ff00;
        }

        .dashboard-modules {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 80px;
        }

        .dashboard-module {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
          color: white;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .dashboard-module:hover {
          border-color: #b7ff00;
          transform: translateY(-3px);
          background: rgba(183,255,0,0.04);
        }

        .module-icon {
          font-size: 30px;
        }

        .module-info {
          flex: 1;
        }

        .module-info h3 {
          margin: 0 0 6px;
          font-size: 14px;
        }

        .module-info p {
          margin: 0;
          color: #666;
          font-size: 10px;
        }

        .module-arrow {
          font-size: 20px;
          color: #b7ff00;
        }

        .dashboard-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #444;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .dashboard-footer a {
          color: #777;
          text-decoration: none;
        }

        @media (max-width: 800px) {
          .dashboard-intro {
            flex-direction: column;
            align-items: flex-start;
          }

          .survival-score {
            width: 100%;
            box-sizing: border-box;
          }

          .dashboard-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .energy-panel {
            flex-direction: column;
            align-items: flex-start;
          }

          .energy-control {
            width: 100%;
            min-width: 0;
            text-align: left;
          }

          .dashboard-modules {
            grid-template-columns: 1fr;
          }

          .dashboard-footer {
            flex-direction: column;
          }

          .alert-code {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
