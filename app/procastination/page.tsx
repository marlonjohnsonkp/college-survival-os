"use client";

import { useEffect, useState } from "react";

const activities = [
  "Scrolling Instagram",
  "Watching YouTube",
  "Checking WhatsApp",
  "Staring at the ceiling",
  "Reorganizing my desktop",
  "Thinking about starting",
  "Actually studying",
];

export default function ProcrastinationPage() {
  const [activity, setActivity] = useState("");
  const [minutes, setMinutes] = useState(30);
  const [investigated, setInvestigated] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!investigated) return;

    const timer = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [investigated]);

  const score = Math.min(
    100,
    Math.round((minutes / 120) * 100)
  );

  const verdict =
    score >= 80
      ? "ABSOLUTE CINEMA. You have achieved legendary levels of procrastination."
      : score >= 50
      ? "SEVERE CASE. Your assignment is getting older while you are getting distracted."
      : score >= 25
      ? "CONCERNING. Productivity has left the building."
      : "SUSPICIOUSLY PRODUCTIVE. We are monitoring you.";

  function investigate() {
    if (!activity) return;
    setInvestigated(true);
    setSeconds(0);
  }

  function reset() {
    setActivity("");
    setMinutes(30);
    setInvestigated(false);
    setSeconds(0);
  }

  return (
    <main className="police-page">
      <div className="police-grid" />

      <header className="police-header">
        <a href="/dashboard" className="police-logo">
          <div className="logo-box">CS</div>

          <div>
            <strong>COLLEGE SURVIVAL OS™</strong>
            <span>PROCRASTINATION ENFORCEMENT UNIT</span>
          </div>
        </a>

        <div className="system-status">
          <span />
          SURVEILLANCE ACTIVE
        </div>
      </header>

      <section className="police-content">
        <div className="hero">
          <div>
            <p className="eyebrow">
              MODULE 03 // PRODUCTIVITY ENFORCEMENT
            </p>

            <h1>
              PROCRASTINATION
              <br />
              <span>POLICE.</span>
            </h1>

            <p className="subtitle">
              We know what you&apos;re doing instead of studying.
              And frankly, we are disappointed.
            </p>
          </div>

          <div className="wanted">
            <span>WANTED</span>
            <strong>YOUR PRODUCTIVITY</strong>
            <small>LAST SEEN: 3 HOURS AGO</small>
          </div>
        </div>

        {/* INVESTIGATION */}

        <section className="section">
          <div className="section-title">
            <span>01</span>
            <h2>PRODUCTIVITY INTERROGATION</h2>
            <small>ANSWER HONESTLY</small>
          </div>

          <div className="interrogation">
            <label>
              WHAT ARE YOU CURRENTLY DOING?
            </label>

            <select
              value={activity}
              onChange={(event) =>
                setActivity(event.target.value)
              }
            >
              <option value="">
                Select your crime...
              </option>

              {activities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label>
              HOW MANY MINUTES HAVE YOU WASTED?
            </label>

            <div className="minute-control">
              <input
                type="range"
                min="1"
                max="120"
                value={minutes}
                onChange={(event) =>
                  setMinutes(Number(event.target.value))
                }
              />

              <strong>{minutes} MIN</strong>
            </div>

            <button onClick={investigate}>
              🚨 INVESTIGATE MYSELF
            </button>
          </div>
        </section>

        {/* RESULTS */}

        {investigated && (
          <section className="investigation-result">
            <div className="result-header">
              <span>CASE FILE #000{score}</span>
              <span>LIVE INVESTIGATION</span>
            </div>

            <div className="result-main">
              <div className="score">
                <small>PROCRASTINATION SCORE</small>

                <strong>{score}</strong>

                <span>/100</span>
              </div>

              <div className="result-info">
                <span>PRIMARY OFFENCE</span>

                <h2>{activity}</h2>

                <p>
                  Current session: {seconds} seconds.
                  <br />
                  Estimated time wasted: {minutes} minutes.
                </p>
              </div>
            </div>

            <div className="verdict">
              <span>SYSTEM VERDICT</span>
              <h2>{verdict}</h2>
            </div>

            <button className="reset" onClick={reset}>
              CLOSE CASE
            </button>
          </section>
        )}

        {/* CRIMES */}

        <section className="section">
          <div className="section-title">
            <span>02</span>
            <h2>KNOWN PRODUCTIVITY CRIMES</h2>
            <small>HIGHLY SCIENTIFIC</small>
          </div>

          <div className="crime-grid">
            <article>
              <span>01</span>
              <strong>“I'll start in 5 minutes.”</strong>
              <p>
                47 minutes later: still negotiating with yourself.
              </p>
            </article>

            <article>
              <span>02</span>
              <strong>“Just one reel.”</strong>
              <p>
                The reel has now become a documentary series.
              </p>
            </article>

            <article>
              <span>03</span>
              <strong>“I'll study at night.”</strong>
              <p>
                Night arrives. Suddenly sleep is extremely important.
              </p>
            </article>

            <article>
              <span>04</span>
              <strong>“Tomorrow for sure.”</strong>
              <p>
                Tomorrow has filed a restraining order.
              </p>
            </article>
          </div>
        </section>

        {/* PUNISHMENT */}

        <section className="punishment">
          <div className="punishment-icon">⚠</div>

          <div>
            <span>RECOMMENDED PUNISHMENT</span>

            <h2>
              CLOSE YOUR PHONE.
              <br />
              OPEN YOUR NOTES.
            </h2>

            <p>
              Failure to comply may result in another 45 minutes
              of scrolling followed by intense regret.
            </p>
          </div>
        </section>

        <footer className="police-footer">
          <span>COLLEGE SURVIVAL OS™</span>

          <a href="/dashboard">← DASHBOARD</a>

          <a href="/college">COLLEGE SURVIVAL</a>

          <a href="/">MAIN SYSTEM</a>
        </footer>
      </section>

      <style jsx>{`
        .police-page {
          min-height: 100vh;
          background: #070708;
          color: #f5f5ef;
          position: relative;
          overflow: hidden;
        }

        .police-grid {
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

        .police-header {
          height: 76px;
          padding: 0 6vw;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .police-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .logo-box {
          width: 38px;
          height: 38px;
          border: 1px solid #ff4040;
          color: #ff4040;
          display: grid;
          place-items: center;
          font-size: 11px;
          font-weight: 900;
        }

        .police-logo strong {
          display: block;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .police-logo span {
          display: block;
          margin-top: 3px;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .system-status {
          font-size: 9px;
          letter-spacing: 2px;
          color: #888;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .system-status span {
          width: 7px;
          height: 7px;
          background: #ff4040;
          border-radius: 50%;
          box-shadow: 0 0 12px #ff4040;
        }

        .police-content {
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
          color: #ff4040;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        h1 {
          margin: 0;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 0.83;
          letter-spacing: -5px;
          font-weight: 900;
        }

        h1 span {
          color: transparent;
          -webkit-text-stroke: 1px #ff4040;
        }

        .subtitle {
          max-width: 600px;
          color: #666;
          font-size: 13px;
          line-height: 1.7;
          margin-top: 28px;
        }

        .wanted {
          min-width: 220px;
          padding: 25px;
          border: 1px solid rgba(255,64,64,0.3);
          background: rgba(255,64,64,0.035);
        }

        .wanted span {
          color: #ff4040;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .wanted strong {
          display: block;
          margin: 12px 0;
          font-size: 17px;
        }

        .wanted small {
          color: #666;
          font-size: 7px;
          letter-spacing: 1px;
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

        .section-title span {
          color: #ff4040;
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

        .interrogation {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
          padding: 35px;
        }

        .interrogation label {
          display: block;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .interrogation select {
          width: 100%;
          box-sizing: border-box;
          background: #101011;
          border: 1px solid #222;
          color: white;
          padding: 16px;
          outline: none;
          margin-bottom: 30px;
        }

        .interrogation select:focus {
          border-color: #ff4040;
        }

        .minute-control {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 30px;
        }

        .minute-control input {
          flex: 1;
          accent-color: #ff4040;
        }

        .minute-control strong {
          color: #ff4040;
          min-width: 75px;
        }

        .interrogation button {
          background: #ff4040;
          color: #070708;
          border: none;
          padding: 16px 25px;
          font-weight: 900;
          cursor: pointer;
          letter-spacing: 1px;
          font-size: 9px;
        }

        .investigation-result {
          border: 1px solid rgba(255,64,64,0.4);
          background: rgba(255,64,64,0.035);
          padding: 30px;
          margin-bottom: 70px;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .result-main {
          display: flex;
          align-items: center;
          gap: 50px;
          padding: 35px 0;
        }

        .score {
          min-width: 200px;
        }

        .score small {
          display: block;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .score strong {
          color: #ff4040;
          font-size: 90px;
          line-height: 1;
        }

        .score > span {
          color: #555;
        }

        .result-info span,
        .verdict span {
          color: #ff4040;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .result-info h2 {
          margin: 10px 0;
          font-size: 25px;
        }

        .result-info p {
          color: #666;
          font-size: 11px;
          line-height: 1.7;
        }

        .verdict {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 25px;
        }

        .verdict h2 {
          font-size: 22px;
          line-height: 1.3;
        }

        .reset {
          margin-top: 15px;
          background: transparent;
          border: 1px solid #444;
          color: #888;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .reset:hover {
          color: #ff4040;
          border-color: #ff4040;
        }

        .crime-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .crime-grid article {
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
        }

        .crime-grid article > span {
          color: #ff4040;
          font-size: 9px;
        }

        .crime-grid strong {
          display: block;
          margin: 12px 0 8px;
          font-size: 13px;
        }

        .crime-grid p {
          color: #666;
          font-size: 10px;
          line-height: 1.6;
          margin: 0;
        }

        .punishment {
          display: flex;
          gap: 25px;
          padding: 35px;
          border: 1px solid rgba(255,64,64,0.3);
          background: rgba(255,64,64,0.035);
          margin-bottom: 70px;
        }

        .punishment-icon {
          color: #ff4040;
          font-size: 35px;
        }

        .punishment span {
          color: #ff4040;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .punishment h2 {
          margin: 10px 0;
          font-size: 25px;
        }

        .punishment p {
          color: #666;
          font-size: 10px;
          line-height: 1.7;
        }

        .police-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #444;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .police-footer a {
          color: #777;
          text-decoration: none;
        }

        .police-footer a:hover {
          color: #ff4040;
        }

        @media (max-width: 800px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .wanted {
            width: 100%;
            box-sizing: border-box;
          }

          .result-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
          }

          .crime-grid {
            grid-template-columns: 1fr;
          }

          .police-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}