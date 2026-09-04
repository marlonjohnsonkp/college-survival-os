const features = [
  {
    icon: "🎓",
    title: "College Survival",
    description:
      "Attendance, assignments, exams — ellam oru command center-il. Panic complimentary.",
    status: "ONLINE",
    color: "lime",
    href: "#",
  },
  {
    icon: "🚨",
    title: "Procrastination Police",
    description:
      "Productivity avoid cheyyunna scene kandupidikkum, macha.",
    status: "WATCHING",
    color: "red",
    href: "#",
  },
  {
    icon: "💸",
    title: "Money Roast",
    description:
      "Cash evide poyi enn kandupidikkum. Heart strong aayirikkanam.",
    status: "DANGEROUS",
    color: "yellow",
    href: "#",
  },
  {
    icon: "🤖",
    title: "AI Survival Advisor",
    description:
      "Ninte chaos mix cheythu, AI full confidence-ode advice tharum.",
    status: "THINKING",
    color: "purple",
    href: "#",
  },
  {
    icon: "⚖️",
    title: "Roommate Court",
    description:
      "Roommate case serious aano? Technology full drama-ode settle cheyyum.",
    status: "IN SESSION",
    color: "blue",
    href: "#",
  },
  {
    icon: "💀",
    title: "Relationship Translator",
    description:
      '"K", "fine", "cheytho" ennokke danger level-il translate cheyyum.',
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
          <div className="brand-mark">SO</div>

          <div>
            <div className="brand-name">
              SURVIVAL OS<span>™</span>
            </div>

            <div className="brand-subtitle">
              STUDENT SURVIVAL MODE
            </div>
          </div>
        </div>

        <div className="nav-status">
          <span className="status-dot" />
          SYSTEM OK MACHANE
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse-dot" />
            VERSION 1.0 // SURVIVAL MODE ON
          </div>

          <h1>
            COLLEGE LIFE IS
            <br />
            <span className="outline-text">FULL ON SURVIVAL GAME.</span>
          </h1>

          <p className="hero-description">
            College life-ile chaos handle cheyyan, njangal oru over-smart OS undakki.
          </p>

          <div className="hero-actions">
            <a href="/dashboard" className="primary-button">
  START CHEYYAM MACHANE
  <span>↗</span>
</a>

            <a href="#features" className="secondary-button">
              ONNU NOKKAM
            </a>
          </div>

          <div className="hero-meta">
            <span>MANUAL ONNUM ILLA</span>
            <span>•</span>
            <span>REFUND CHODIKKALLE</span>
            <span>•</span>
            <span>KURE UNNECESSARY AANU</span>
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
              STUDENT START AAKUNNU...
            </div>

            <div className="terminal-line muted">
              Academic damage load aakunnu...
            </div>

            <div className="terminal-line muted">
              Cash evide poyi enn scan cheyyunnu...
            </div>

            <div className="terminal-line muted">
              Procrastination kandupidikkunnu...
            </div>

            <div className="terminal-line success">
              ✓ MACHAN SURVIVAL SYSTEM READY
            </div>

            <div className="terminal-score">
              <div>
                <span className="score-label">INNATHE SURVIVAL</span>

                <strong>67</strong>

                <span className="score-max">/100</span>
              </div>

              <div className="score-ring">
                <span>67%</span>
              </div>
            </div>

            <div className="terminal-warning">
              <span>⚠</span>
              STATUS: ORUVIDHAM OK
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" id="dashboard">
        <div className="section-heading">
          <div>
            <span className="section-number">01</span>
            <span className="section-label">
              LIVE STUDENT SCENE
            </span>
          </div>

          <span className="section-caption">
            REALITY CHECK // LIVE AAYI
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
              SURVIVAL TOOLS
            </span>
          </div>

          <span className="section-caption">
            06 TOOLS // 01 SAMBHAVAM
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
          AARUM CHODIKKATHA PROBLEM
        </div>

        <h2>
          COLLEGE ITHU CHODICHILLA,
          <br />
          <span>ENNAL NAMMAL UNDAKKI.</span>
        </h2>

        <p>Ennalum nammal build cheythu. Why? Vibes.</p>

        <div className="manifesto-grid">
          <div>
            <strong>01</strong>
            <span>CHAOS TRACK CHEYYU</span>
          </div>

          <div>
            <strong>02</strong>
            <span>CHAOS ANALYZE CHEYYU</span>
          </div>

          <div>
            <strong>03</strong>
            <span>CHAOS ROAST CHEYYU</span>
          </div>

          <div>
            <strong>04</strong>
            <span>CHAOS-IL JEEVICHU POKU</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>SURVIVAL OS™</strong>
          <span>Kaaranam illathe build cheythu. Ithippo use cheyyunnu.</span>
        </div>

        <div className="footer-right">
          <span>MADE WITH ❤️</span>
          <span>TINKERHUB-ILE USELESS PROJECTS-IL</span>
        </div>
      </footer>
    </main>
  );
}
