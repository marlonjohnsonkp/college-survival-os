"use client";

import { useState } from "react";

const cases = [
  {
    title: "The Unwashed Plate Incident",
    accusation:
      "The defendant left one plate in the sink for approximately 3 business days.",
    evidence:
      "A suspicious green substance was discovered near the spoon.",
    punishment: "The defendant must wash every dish in the kitchen.",
    fine: "₹50",
  },
  {
    title: "The Wi-Fi Criminal",
    accusation:
      "The defendant connected 7 devices to the Wi-Fi and started downloading a 90GB game.",
    evidence:
      "Internet speed dropped to approximately 0.7 Mbps.",
    punishment: "Defendant loses Wi-Fi privileges for 24 hours.",
    fine: "₹100",
  },
  {
    title: "The Midnight Maggi Case",
    accusation:
      "The defendant cooked Maggi at 2:47 AM and somehow used every available utensil.",
    evidence:
      "Kitchen looked like a crime scene.",
    punishment: "Defendant must clean the entire kitchen.",
    fine: "₹75",
  },
  {
    title: "The Missing Charger Mystery",
    accusation:
      "The defendant borrowed a charger and mysteriously forgot to return it.",
    evidence:
      "Defendant claims: 'I thought it was mine.'",
    punishment: "Return the charger immediately and provide snacks.",
    fine: "₹40",
  },
];

export default function RoommateCourt() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [verdict, setVerdict] = useState("");
  const [showDecision, setShowDecision] = useState(false);

  const currentCase = cases[caseIndex];

  function deliverVerdict(result: string) {
    setVerdict(result);
    setShowDecision(true);
  }

  function nextCase() {
    setCaseIndex((current) => (current + 1) % cases.length);
    setVerdict("");
    setShowDecision(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #10243a 0%, #05080d 45%, #020306 100%)",
        color: "#f4f7fb",
        padding: "28px 18px 70px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1050px",
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
                fontSize: "12px",
                letterSpacing: "3px",
                color: "#58d6ff",
                fontWeight: "700",
              }}
            >
              SURVIVAL OS™ / LEGAL DEPARTMENT
            </div>

            <h1
              style={{
                fontSize: "clamp(34px, 7vw, 70px)",
                lineHeight: "0.95",
                margin: "12px 0",
                letterSpacing: "-3px",
              }}
            >
              ROOMMATE
              <br />
              <span style={{ color: "#58d6ff" }}>COURT ⚖️</span>
            </h1>

            <p
              style={{
                color: "#9ba9b8",
                maxWidth: "600px",
                lineHeight: "1.6",
              }}
            >
              Because talking things out like emotionally mature adults is
              completely unnecessary.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #1e3447",
              padding: "12px 16px",
              borderRadius: "10px",
              background: "#08111b",
              fontSize: "12px",
              color: "#6f8497",
            }}
          >
            CASE FILE{" "}
            <strong style={{ color: "#58d6ff" }}>
              #{String(caseIndex + 1).padStart(3, "0")}
            </strong>
          </div>
        </header>

        {/* COURT STATUS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
            marginBottom: "25px",
          }}
        >
          {[
            ["COURT STATUS", "ACTIVE"],
            ["JUDGE", "YOUR ROOMMATE"],
            ["JURISDICTION", "THE HOSTEL"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#071019",
                border: "1px solid #173047",
                borderRadius: "12px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#647b8e",
                  marginBottom: "8px",
                }}
              >
                {label}
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "#58d6ff",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </section>

        {/* CASE */}
        <section
          style={{
            background:
              "linear-gradient(145deg, rgba(13,28,42,0.96), rgba(5,11,17,0.96))",
            border: "1px solid #234258",
            borderRadius: "18px",
            padding: "clamp(22px, 5vw, 42px)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#58d6ff",
              marginBottom: "12px",
              fontWeight: "700",
            }}
          >
            THE PEOPLE vs. YOUR ROOMMATE
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 5vw, 44px)",
              margin: "0 0 25px",
            }}
          >
            {currentCase.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#050a0f",
                border: "1px solid #182b3a",
                borderRadius: "12px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  color: "#647b8e",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                ACCUSATION
              </div>

              <p
                style={{
                  lineHeight: "1.7",
                  color: "#d8e1e9",
                  margin: 0,
                }}
              >
                {currentCase.accusation}
              </p>
            </div>

            <div
              style={{
                background: "#050a0f",
                border: "1px solid #182b3a",
                borderRadius: "12px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  color: "#647b8e",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                EVIDENCE
              </div>

              <p
                style={{
                  lineHeight: "1.7",
                  color: "#d8e1e9",
                  margin: 0,
                }}
              >
                {currentCase.evidence}
              </p>
            </div>
          </div>

          {/* VERDICT */}
          <div
            style={{
              marginTop: "28px",
              paddingTop: "28px",
              borderTop: "1px solid #173047",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#647b8e",
                marginBottom: "14px",
              }}
            >
              SELECT VERDICT
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => deliverVerdict("GUILTY")}
                style={{
                  flex: "1 1 180px",
                  padding: "17px",
                  borderRadius: "10px",
                  border: "1px solid #ff5864",
                  background:
                    verdict === "GUILTY" ? "#ff5864" : "rgba(255,88,100,0.08)",
                  color: "#fff",
                  fontWeight: "800",
                  cursor: "pointer",
                  letterSpacing: "1px",
                }}
              >
                ⚖️ GUILTY
              </button>

              <button
                onClick={() => deliverVerdict("NOT GUILTY")}
                style={{
                  flex: "1 1 180px",
                  padding: "17px",
                  borderRadius: "10px",
                  border: "1px solid #58d6ff",
                  background:
                    verdict === "NOT GUILTY"
                      ? "#58d6ff"
                      : "rgba(88,214,255,0.08)",
                  color: verdict === "NOT GUILTY" ? "#041018" : "#fff",
                  fontWeight: "800",
                  cursor: "pointer",
                  letterSpacing: "1px",
                }}
              >
                🕊️ NOT GUILTY
              </button>
            </div>
          </div>

          {/* DECISION */}
          {showDecision && (
            <div
              style={{
                marginTop: "25px",
                background: "#02070b",
                border: "1px solid #31536a",
                borderRadius: "14px",
                padding: "25px",
              }}
            >
              <div
                style={{
                  color: "#58d6ff",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  fontWeight: "800",
                }}
              >
                COURT DECISION
              </div>

              <h3
                style={{
                  fontSize: "32px",
                  margin: "10px 0 20px",
                  color: verdict === "GUILTY" ? "#ff5864" : "#58d6ff",
                }}
              >
                {verdict}
              </h3>

              {verdict === "GUILTY" ? (
                <div>
                  <p
                    style={{
                      color: "#d8e1e9",
                      lineHeight: "1.7",
                    }}
                  >
                    The court has reviewed the evidence and determined that
                    your roommate is officially guilty of being annoying.
                  </p>

                  <div
                    style={{
                      marginTop: "18px",
                      padding: "18px",
                      background: "rgba(255,88,100,0.07)",
                      border: "1px solid rgba(255,88,100,0.25)",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#647b8e",
                        letterSpacing: "2px",
                      }}
                    >
                      SENTENCE
                    </div>

                    <strong
                      style={{
                        display: "block",
                        marginTop: "8px",
                        color: "#fff",
                      }}
                    >
                      {currentCase.punishment}
                    </strong>

                    <div
                      style={{
                        marginTop: "12px",
                        color: "#ffb3b8",
                      }}
                    >
                      Administrative fine: {currentCase.fine}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p
                    style={{
                      color: "#d8e1e9",
                      lineHeight: "1.7",
                    }}
                  >
                    The court finds the defendant suspiciously innocent.
                    Unfortunately, this verdict does not mean they are allowed
                    to continue being annoying.
                  </p>

                  <div
                    style={{
                      marginTop: "18px",
                      padding: "18px",
                      background: "rgba(88,214,255,0.07)",
                      border: "1px solid rgba(88,214,255,0.25)",
                      borderRadius: "10px",
                      color: "#9edfff",
                    }}
                  >
                    CASE DISMISSED — but we are watching you. 👁️
                  </div>
                </div>
              )}

              <button
                onClick={nextCase}
                style={{
                  marginTop: "22px",
                  width: "100%",
                  padding: "15px",
                  borderRadius: "10px",
                  border: "1px solid #31536a",
                  background: "#0b1823",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                NEXT CASE →
              </button>
            </div>
          )}
        </section>

        {/* FOOTER ACTIONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "28px",
          }}
        >
          <a
            href="/dashboard"
            style={{
              textDecoration: "none",
              padding: "13px 20px",
              borderRadius: "9px",
              border: "1px solid #234258",
              color: "#a9bac8",
              background: "#071019",
              fontSize: "13px",
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
              border: "1px solid #234258",
              color: "#a9bac8",
              background: "#071019",
              fontSize: "13px",
            }}
          >
            MAIN OS
          </a>
        </div>

        <footer
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#3e5261",
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          ROOMMATE COURT™ — JUSTICE FOR EXTREMELY SERIOUS PROBLEMS
        </footer>
      </div>
    </main>
  );
}
