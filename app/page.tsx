const features = [
  {
    icon: "🎓",
    title: "College Survival",
    description:
      "Attendance, assignments, exams and academic panic in one command center.",
    status: "ONLINE",
    color: "lime",
    href: "#",
  },
  {
    icon: "🚨",
    title: "Procrastination Police",
    description:
      "Detects suspicious levels of productivity avoidance.",
    status: "WATCHING",
    color: "red",
    href: "#",
  },
  {
    icon: "💸",
    title: "Money Roast",
    description:
      "Find out exactly how your money disappeared. Prepare emotionally.",
    status: "DANGEROUS",
    color: "yellow",
    href: "#",
  },
  {
    icon: "🤖",
    title: "AI Survival Advisor",
    description:
      "Combines your chaos and produces unnecessarily confident advice.",
    status: "THINKING",
    color: "purple",
    href: "#",
  },
  {
    icon: "⚖️",
    title: "Roommate Court",
    description:
      "Settle absolutely serious disputes with absolutely unnecessary technology.",
    status: "IN SESSION",
    color: "blue",
    href: "#",
  },
  {
    icon: "💀",
    title: "Relationship Translator",
    description:
      'Translates "K", "fine", and "do whatever you want" into danger levels.',
    status: "HIGH RISK",
    color: "pink",
    href: "/translator",
  },
];


const stats = [
  { value: "74%", label: "ATTENDANCE", icon: "🎓" },
  { value: "63%", label: "PRODUCTIVITY", icon: "⚡" },
  { value: "₹1,240", label: "MONEY LEFT", icon: "💸" },
  { value: "67", label: "SURVIVAL SCORE", icon: "🧬" },
];

export default function Home() {
  return (
    <main className="landing-page">
      <div className="noise" />

      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">CS</div>

          <div>
            <div className="brand-name">
              COLLEGE SURVIVAL OS<span>™</span>
            </div>

            <div className="brand-subtitle">
              STUDENT OPERATING SYSTEM
            </div>
          </div>
        </div>

        <div className="nav-status">
          <span className="status-dot" />
          SYSTEM ONLINE
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse-dot" />
            VERSION 1.0 // SURVIVAL PROTOCOL ACTIVE
          </div>

          <h1>
            COLLEGE IS
            <br />
            <span className="outline-text">A SURVIVAL GAME.</span>
          </h1>

          <p className="hero-description">
            So we built an unnecessarily advanced operating system to help
            you survive it.
          </p>

          <div className="hero-actions">
            <a href="/dashboard" className="primary-button">
  ENTER SURVIVAL MODE
  <span>↗</span>
</a>

            <a href="#features" className="secondary-button">
              EXPLORE SYSTEM
            </a>
          </div>

          <div className="hero-meta">
            <span>NO USER MANUAL</span>
            <span>•</span>
            <span>NO REFUNDS</span>
            <span>•</span>
            <span>ABSOLUTELY UNNECESSARY</span>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <span>survival_core.exe</span>

            <span className="terminal-live">LIVE</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">&gt;</span>
              INITIALIZING STUDENT...
            </div>

            <div className="terminal-line muted">
              Loading academic damage...
            </div>

            <div className="terminal-line muted">
              Scanning financial decisions...
            </div>

            <div className="terminal-line muted">
              Detecting procrastination...
            </div>

            <div className="terminal-line success">
              ✓ HUMAN SURVIVAL SYSTEM READY
            </div>

            <div className="terminal-score">
              <div>
                <span className="score-label">CURRENT SURVIVAL</span>

                <strong>67</strong>

                <span className="score-max">/100</span>
              </div>

              <div className="score-ring">
                <span>67%</span>
              </div>
            </div>

            <div className="terminal-warning">
              <span>⚠</span>
              STATUS: BARELY FUNCTIONAL
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" id="dashboard">
        <div className="section-heading">
          <div>
            <span className="section-number">01</span>
            <span className="section-label">
              LIVE STUDENT STATUS
            </span>
          </div>

          <span className="section-caption">
            REALITY CHECK // LIVE
          </span>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-icon">{stat.icon}</div>

              <div className="stat-value">{stat.value}</div>

              <div className="stat-label">{stat.label}</div>

              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{
                    width:
                      stat.label === "MONEY LEFT"
                        ? "38%"
                        : `${parseInt(stat.value) || 67}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading">
          <div>
            <span className="section-number">02</span>

            <span className="section-label">
              SURVIVAL MODULES
            </span>
          </div>

          <span className="section-caption">
            06 SYSTEMS // 01 QUESTIONABLE DECISION
          </span>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const card = (
              <article
                className={`feature-card ${feature.color}`}
                key={feature.title}
              >
                <div className="feature-top">
                  <span className="feature-number">
                    0{index + 1}
                  </span>

                  <span className="feature-status">
                    <span className="mini-dot" />
                    {feature.status}
                  </span>
                </div>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h2>{feature.title}</h2>

                <p>{feature.description}</p>

                <div className="feature-arrow">→</div>
              </article>
            );

            if (feature.href !== "#") {
              return (
                <a
                  href={feature.href}
                  key={feature.title}
                  className="feature-link"
                >
                  {card}
                </a>
              );
            }

            return card;
          })}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-tag">
          THE PROBLEM THAT DOESN&apos;T EXIST
        </div>

        <h2>
          COLLEGE DIDN&apos;T ASK FOR
          <br />
          <span>AN OPERATING SYSTEM.</span>
        </h2>

        <p>We built one anyway.</p>

        <div className="manifesto-grid">
          <div>
            <strong>01</strong>
            <span>TRACK THE CHAOS</span>
          </div>

          <div>
            <strong>02</strong>
            <span>ANALYZE THE CHAOS</span>
          </div>

          <div>
            <strong>03</strong>
            <span>ROAST THE CHAOS</span>
          </div>

          <div>
            <strong>04</strong>
            <span>SURVIVE THE CHAOS</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>COLLEGE SURVIVAL OS™</strong>
          <span>Built unnecessarily. Used reluctantly.</span>
        </div>

        <div className="footer-right">
          <span>MADE WITH ❤️</span>
          <span>AT TINKERHUB USELESS PROJECTS</span>
        </div>
      </footer>
    </main>
  );
}