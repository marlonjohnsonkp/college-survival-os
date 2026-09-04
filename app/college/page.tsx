"use client";

import { useMemo, useState } from "react";

type Assignment = {
  id: number;
  title: string;
  subject: string;
  days: number;
};

export default function CollegePage() {
  const [attendance, setAttendance] = useState(74);
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "DBMS Record",
      subject: "Database",
      days: 1,
    },
    {
      id: 2,
      title: "Web Development Project",
      subject: "Web Tech",
      days: 3,
    },
    {
      id: 3,
      title: "Operating Systems Assignment",
      subject: "OS",
      days: 5,
    },
  ]);

  const [newAssignment, setNewAssignment] = useState("");

  const attendanceStatus = useMemo(() => {
    if (attendance < 60) return "ACADEMIC DISASTER";
    if (attendance < 75) return "DANGER ZONE";
    if (attendance < 85) return "BARELY SAFE";
    return "ACADEMIC WEAPON";
  }, [attendance]);

  function addAssignment() {
    if (!newAssignment.trim()) return;

    setAssignments((current) => [
      ...current,
      {
        id: Date.now(),
        title: newAssignment.trim(),
        subject: "Unknown Subject",
        days: 7,
      },
    ]);

    setNewAssignment("");
  }

  function completeAssignment(id: number) {
    setAssignments((current) =>
      current.filter((assignment) => assignment.id !== id)
    );
  }

  return (
    <main className="college-page">
      <div className="college-grid" />

      <header className="college-header">
        <a href="/dashboard" className="college-logo">
          <div className="logo-box">CS</div>

          <div>
            <strong>COLLEGE SURVIVAL OS™</strong>
            <span>ACADEMIC COMMAND CENTER</span>
          </div>
        </a>

        <div className="online">
          <span />
          SYSTEM ONLINE
        </div>
      </header>

      <section className="college-content">
        <div className="top-intro">
          <div>
            <p className="eyebrow">MODULE 01 // ACADEMIC SURVIVAL</p>

            <h1>
              COLLEGE
              <br />
              <span>SURVIVAL.</span>
            </h1>

            <p className="subtitle">
              Because apparently attending class and submitting assignments
              wasn't complicated enough.
            </p>
          </div>

          <div className="danger-card">
            <span>ACADEMIC STATUS</span>

            <strong>{attendanceStatus}</strong>

            <div className="danger-line">
              <div style={{ width: `${attendance}%` }} />
            </div>

            <small>{attendance}% ATTENDANCE</small>
          </div>
        </div>

        {/* ATTENDANCE */}

        <section className="section">
          <div className="section-title">
            <span>01</span>
            <h2>ATTENDANCE SURVIVAL CALCULATOR</h2>
            <small>REALITY CHECK</small>
          </div>

          <div className="attendance-panel">
            <div className="attendance-number">
              <small>CURRENT ATTENDANCE</small>

              <strong>{attendance}%</strong>

              <p>
                {attendance < 75
                  ? "⚠ You are one attendance shortage away from becoming a legend."
                  : "✓ Somehow, you are still legally considered a student."}
              </p>
            </div>

            <div className="attendance-control">
              <label>ADJUST ATTENDANCE</label>

              <input
                type="range"
                min="0"
                max="100"
                value={attendance}
                onChange={(event) =>
                  setAttendance(Number(event.target.value))
                }
              />

              <div className="range-labels">
                <span>0%</span>
                <span>75% SAFE LINE</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ASSIGNMENTS */}

        <section className="section">
          <div className="section-title">
            <span>02</span>
            <h2>ASSIGNMENT CRISIS</h2>
            <small>{assignments.length} ACTIVE</small>
          </div>

          <div className="assignment-input">
            <input
              value={newAssignment}
              onChange={(event) => setNewAssignment(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") addAssignment();
              }}
              placeholder="Enter another responsibility you will probably ignore..."
            />

            <button onClick={addAssignment}>+ ADD</button>
          </div>

          <div className="assignments">
            {assignments.map((assignment, index) => (
              <article className="assignment" key={assignment.id}>
                <div className="assignment-index">
                  0{index + 1}
                </div>

                <div className="assignment-info">
                  <h3>{assignment.title}</h3>
                  <span>{assignment.subject}</span>
                </div>

                <div className="deadline">
                  <small>DEADLINE</small>
                  <strong>
                    {assignment.days === 1
                      ? "TOMORROW"
                      : `${assignment.days} DAYS`}
                  </strong>
                </div>

                <button
                  className="complete"
                  onClick={() => completeAssignment(assignment.id)}
                >
                  COMPLETE
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* EXAM COUNTDOWN */}

        <section className="section">
          <div className="section-title">
            <span>03</span>
            <h2>EXAM COUNTDOWN</h2>
            <small>EMOTIONAL DAMAGE TIMER</small>
          </div>

          <div className="exam-panel">
            <div>
              <span className="exam-tag">NEXT BOSS BATTLE</span>

              <h2>SEMESTER EXAMINATION</h2>

              <p>
                Recommended preparation status:
                <br />
                <b>STARTED YESTERDAY.</b>
              </p>
            </div>

            <div className="countdown">
              <div>
                <strong>12</strong>
                <span>DAYS</span>
              </div>

              <i>:</i>

              <div>
                <strong>08</strong>
                <span>HOURS</span>
              </div>

              <i>:</i>

              <div>
                <strong>42</strong>
                <span>MINUTES</span>
              </div>
            </div>
          </div>
        </section>

        {/* VERDICT */}

        <section className="verdict">
          <div className="verdict-icon">⚠</div>

          <div>
            <span>SYSTEM VERDICT</span>

            <h2>
              YOU ARE CURRENTLY
              <br />
              <em>{attendanceStatus}</em>
            </h2>

            <p>
              The system recommends attending class, completing assignments,
              and making better decisions. These recommendations are unlikely
              to be followed.
            </p>
          </div>
        </section>

        <footer className="college-footer">
          <span>COLLEGE SURVIVAL OS™</span>

          <a href="/dashboard">← DASHBOARD</a>

          <a href="/">MAIN SYSTEM</a>
        </footer>
      </section>

      <style jsx>{`
        .college-page {
          min-height: 100vh;
          background: #070708;
          color: #f5f5ef;
          position: relative;
          overflow: hidden;
        }

        .college-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.45;
          background:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .college-header {
          height: 76px;
          padding: 0 6vw;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .college-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .logo-box {
          width: 38px;
          height: 38px;
          border: 1px solid #b7ff00;
          color: #b7ff00;
          display: grid;
          place-items: center;
          font-size: 11px;
          font-weight: 900;
        }

        .college-logo strong {
          display: block;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .college-logo span {
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
          background: #b7ff00;
          border-radius: 50%;
          box-shadow: 0 0 12px #b7ff00;
        }

        .college-content {
          width: min(1200px, 88%);
          margin: auto;
          padding: 80px 0 50px;
          position: relative;
          z-index: 1;
        }

        .top-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 80px;
        }

        .eyebrow {
          color: #b7ff00;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        h1 {
          margin: 0;
          font-size: clamp(55px, 9vw, 110px);
          line-height: 0.83;
          letter-spacing: -5px;
          font-weight: 900;
        }

        h1 span {
          color: transparent;
          -webkit-text-stroke: 1px #b7ff00;
        }

        .subtitle {
          max-width: 600px;
          color: #666;
          font-size: 13px;
          line-height: 1.7;
          margin-top: 28px;
        }

        .danger-card {
          min-width: 230px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.025);
        }

        .danger-card span {
          font-size: 8px;
          letter-spacing: 2px;
          color: #666;
        }

        .danger-card strong {
          display: block;
          margin: 12px 0;
          color: #ff5555;
          font-size: 18px;
        }

        .danger-line {
          height: 4px;
          background: #222;
        }

        .danger-line div {
          height: 100%;
          background: #ff5555;
          transition: width 0.3s;
        }

        .danger-card small {
          display: block;
          margin-top: 10px;
          font-size: 8px;
          color: #777;
        }

        .section {
          margin-bottom: 75px;
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
          color: #b7ff00;
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

        .attendance-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          padding: 35px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
        }

        .attendance-number small,
        .attendance-control label {
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .attendance-number strong {
          display: block;
          font-size: 75px;
          line-height: 1;
          color: #b7ff00;
          margin: 12px 0;
        }

        .attendance-number p {
          color: #777;
          font-size: 11px;
        }

        .attendance-control {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .attendance-control input {
          width: 100%;
          margin-top: 25px;
          accent-color: #b7ff00;
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          color: #555;
          font-size: 8px;
        }

        .assignment-input {
          display: flex;
          margin-bottom: 15px;
        }

        .assignment-input input {
          flex: 1;
          background: #101011;
          border: 1px solid #222;
          padding: 17px;
          color: white;
          outline: none;
          font-size: 11px;
        }

        .assignment-input input:focus {
          border-color: #b7ff00;
        }

        .assignment-input button,
        .complete {
          border: 1px solid #b7ff00;
          background: #b7ff00;
          color: #070708;
          font-weight: 900;
          cursor: pointer;
          padding: 0 20px;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .assignments {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .assignment {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
        }

        .assignment-index {
          color: #444;
          font-size: 10px;
        }

        .assignment-info {
          flex: 1;
        }

        .assignment-info h3 {
          margin: 0 0 5px;
          font-size: 13px;
        }

        .assignment-info span {
          color: #666;
          font-size: 9px;
        }

        .deadline {
          text-align: right;
        }

        .deadline small {
          display: block;
          color: #555;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .deadline strong {
          color: #ff5555;
          font-size: 9px;
        }

        .complete {
          padding: 10px 14px;
          background: transparent;
          color: #b7ff00;
        }

        .complete:hover {
          background: #b7ff00;
          color: #070708;
        }

        .exam-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 35px;
          border: 1px solid rgba(183,255,0,0.2);
          background: rgba(183,255,0,0.025);
        }

        .exam-tag {
          color: #b7ff00;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .exam-panel h2 {
          margin: 12px 0;
          font-size: 25px;
        }

        .exam-panel p {
          color: #666;
          font-size: 10px;
          line-height: 1.6;
        }

        .exam-panel b {
          color: #ff5555;
        }

        .countdown {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .countdown div {
          text-align: center;
        }

        .countdown strong {
          display: block;
          font-size: 45px;
          color: #b7ff00;
        }

        .countdown span {
          color: #555;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .countdown i {
          color: #444;
          font-style: normal;
          font-size: 30px;
        }

        .verdict {
          display: flex;
          gap: 25px;
          padding: 35px;
          border: 1px solid rgba(255,80,80,0.25);
          background: rgba(255,50,50,0.035);
          margin-bottom: 70px;
        }

        .verdict-icon {
          color: #ff5555;
          font-size: 35px;
        }

        .verdict span {
          color: #ff5555;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .verdict h2 {
          font-size: 25px;
          line-height: 1.1;
          margin: 10px 0;
        }

        .verdict em {
          color: #b7ff00;
          font-style: normal;
        }

        .verdict p {
          color: #666;
          max-width: 700px;
          font-size: 11px;
          line-height: 1.7;
        }

        .college-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #444;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .college-footer a {
          color: #777;
          text-decoration: none;
        }

        .college-footer a:hover {
          color: #b7ff00;
        }

        @media (max-width: 800px) {
          .top-intro {
            flex-direction: column;
            align-items: flex-start;
          }

          .danger-card {
            width: 100%;
            box-sizing: border-box;
          }

          .attendance-panel {
            grid-template-columns: 1fr;
          }

          .assignment {
            flex-wrap: wrap;
          }

          .deadline {
            margin-left: auto;
          }

          .exam-panel {
            flex-direction: column;
            align-items: flex-start;
          }

          .countdown strong {
            font-size: 30px;
          }

          .college-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}