"use client";

import { useMemo, useState } from "react";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

const categories = [
  "Food",
  "Transport",
  "Shopping",
  "Entertainment",
  "College",
  "Other",
];

export default function MoneyPage() {
  const [budget, setBudget] = useState(5000);

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      name: "Biriyani",
      amount: 220,
      category: "Food",
    },
    {
      id: 2,
      name: "Auto",
      amount: 180,
      category: "Transport",
    },
    {
      id: 3,
      name: "Random Amazon purchase",
      amount: 799,
      category: "Shopping",
    },
  ]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const total = useMemo(
    () => expenses.reduce((sum, expense) => sum + expense.amount, 0),
    [expenses]
  );

  const remaining = budget - total;

  const roast = useMemo(() => {
    if (remaining < 0) {
      return "FINANCIAL COLLAPSE. You have successfully spent money that you do not possess.";
    }

    if (remaining < budget * 0.2) {
      return "EMERGENCY MODE. Your wallet has entered its final season.";
    }

    if (remaining < budget * 0.5) {
      return "CONCERNING. The month is not over, but your money is.";
    }

    return "SURPRISINGLY RESPONSIBLE. We are investigating this suspicious behaviour.";
  }, [budget, remaining]);

  function addExpense() {
    const numericAmount = Number(amount);

    if (!name.trim() || !numericAmount || numericAmount <= 0) {
      return;
    }

    setExpenses((current) => [
      ...current,
      {
        id: Date.now(),
        name: name.trim(),
        amount: numericAmount,
        category,
      },
    ]);

    setName("");
    setAmount("");
  }

  function removeExpense(id: number) {
    setExpenses((current) =>
      current.filter((expense) => expense.id !== id)
    );
  }

  return (
    <main className="money-page">
      <div className="money-grid" />

      <header className="money-header">
        <a href="/dashboard" className="money-logo">
          <div className="logo-box">SO</div>

          <div>
            <strong>SURVIVAL OS™</strong>
            <span>FINANCIAL DAMAGE CONTROL</span>
          </div>
        </a>

        <div className="online">
          <span />
          MONEY SYSTEM ONLINE
        </div>
      </header>

      <section className="money-content">
        <div className="money-intro">
          <div>
            <p className="eyebrow">MODULE 02 // FINANCIAL SURVIVAL</p>

            <h1>
              MONEY
              <br />
              <span>ROAST.</span>
            </h1>

            <p className="subtitle">
              Enter your expenses. We will calculate exactly how
              your financial decisions became everyone&apos;s problem.
            </p>
          </div>

          <div className="wallet-card">
            <small>REMAINING FUNDS</small>

            <strong className={remaining < 0 ? "negative" : ""}>
              ₹{Math.abs(remaining).toLocaleString("en-IN")}
            </strong>

            <span>
              {remaining < 0 ? "YOU ARE IN DEBT" : "AVAILABLE"}
            </span>
          </div>
        </div>

        {/* FINANCIAL OVERVIEW */}

        <section className="section">
          <div className="section-title">
            <span>01</span>
            <h2>FINANCIAL DAMAGE REPORT</h2>
            <small>LIVE ANALYSIS</small>
          </div>

          <div className="money-stats">
            <div>
              <small>MONTHLY BUDGET</small>
              <strong>₹{budget.toLocaleString("en-IN")}</strong>
            </div>

            <div>
              <small>TOTAL SPENT</small>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>

            <div>
              <small>EXPENSES</small>
              <strong>{expenses.length}</strong>
            </div>

            <div>
              <small>BURN RATE</small>
              <strong>
                {budget > 0
                  ? Math.round((total / budget) * 100)
                  : 0}
                %
              </strong>
            </div>
          </div>

          <div className="budget-control">
            <label>SET YOUR MONTHLY BUDGET</label>

            <div className="budget-input">
              <span>₹</span>

              <input
                type="number"
                value={budget}
                onChange={(event) =>
                  setBudget(Number(event.target.value))
                }
              />
            </div>
          </div>

          <div className="burn-bar">
            <div
              style={{
                width: `${Math.min(
                  budget > 0 ? (total / budget) * 100 : 0,
                  100
                )}%`,
              }}
            />
          </div>
        </section>

        {/* ADD EXPENSE */}

        <section className="section">
          <div className="section-title">
            <span>02</span>
            <h2>REPORT A FINANCIAL CRIME</h2>
            <small>ADD EXPENSE</small>
          </div>

          <div className="expense-form">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="What did you waste money on?"
            />

            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="₹ Amount"
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button onClick={addExpense}>
              + REPORT
            </button>
          </div>
        </section>

        {/* EXPENSE LIST */}

        <section className="section">
          <div className="section-title">
            <span>03</span>
            <h2>WHERE DID IT GO?</h2>
            <small>{expenses.length} INCIDENTS</small>
          </div>

          <div className="expenses">
            {expenses.map((expense, index) => (
              <article className="expense" key={expense.id}>
                <div className="expense-number">
                  0{index + 1}
                </div>

                <div className="expense-main">
                  <strong>{expense.name}</strong>
                  <span>{expense.category}</span>
                </div>

                <div className="expense-amount">
                  ₹{expense.amount.toLocaleString("en-IN")}
                </div>

                <button
                  className="delete"
                  onClick={() => removeExpense(expense.id)}
                >
                  REMOVE
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ROAST */}

        <section className="roast">
          <div className="roast-icon">💸</div>

          <div>
            <span>SYSTEM FINANCIAL VERDICT</span>

            <h2>{roast}</h2>

            <p>
              Based on extremely advanced mathematics and absolutely
              no financial qualifications whatsoever.
            </p>
          </div>
        </section>

        <footer className="money-footer">
          <span>SURVIVAL OS™</span>

          <a href="/dashboard">← DASHBOARD</a>

          <a href="/">MAIN SYSTEM</a>
        </footer>
      </section>

      <style jsx>{`
        .money-page {
          min-height: 100vh;
          background: #070708;
          color: #f5f5ef;
          position: relative;
          overflow: hidden;
        }

        .money-grid {
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

        .money-header {
          height: 76px;
          padding: 0 6vw;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .money-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .logo-box {
          width: 38px;
          height: 38px;
          border: 1px solid #ffd000;
          color: #ffd000;
          display: grid;
          place-items: center;
          font-size: 11px;
          font-weight: 900;
        }

        .money-logo strong {
          display: block;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .money-logo span {
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
          background: #ffd000;
          border-radius: 50%;
          box-shadow: 0 0 12px #ffd000;
        }

        .money-content {
          width: min(1200px, 88%);
          margin: auto;
          padding: 80px 0 50px;
          position: relative;
          z-index: 1;
        }

        .money-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 80px;
        }

        .eyebrow {
          color: #ffd000;
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
          -webkit-text-stroke: 1px #ffd000;
        }

        .subtitle {
          max-width: 600px;
          color: #666;
          font-size: 13px;
          line-height: 1.7;
          margin-top: 28px;
        }

        .wallet-card {
          min-width: 230px;
          padding: 25px;
          border: 1px solid rgba(255,208,0,0.25);
          background: rgba(255,208,0,0.03);
        }

        .wallet-card small {
          display: block;
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .wallet-card strong {
          display: block;
          color: #ffd000;
          font-size: 38px;
          margin: 12px 0 5px;
        }

        .wallet-card strong.negative {
          color: #ff4d4d;
        }

        .wallet-card span {
          color: #777;
          font-size: 8px;
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

        .section-title span {
          color: #ffd000;
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

        .money-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .money-stats > div {
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
        }

        .money-stats small {
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .money-stats strong {
          display: block;
          margin-top: 10px;
          font-size: 27px;
        }

        .budget-control {
          margin-top: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .budget-control label {
          color: #666;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .budget-input {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #444;
        }

        .budget-input span {
          color: #ffd000;
        }

        .budget-input input {
          width: 120px;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          padding: 8px;
          font-size: 15px;
        }

        .burn-bar {
          height: 5px;
          background: #222;
          margin-top: 25px;
        }

        .burn-bar div {
          height: 100%;
          background: #ffd000;
          transition: width 0.3s;
        }

        .expense-form {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr auto;
          gap: 8px;
        }

        .expense-form input,
        .expense-form select {
          min-width: 0;
          padding: 16px;
          background: #101011;
          border: 1px solid #222;
          color: white;
          outline: none;
          font-size: 10px;
        }

        .expense-form input:focus,
        .expense-form select:focus {
          border-color: #ffd000;
        }

        .expense-form button {
          border: 1px solid #ffd000;
          background: #ffd000;
          color: #070708;
          font-weight: 900;
          cursor: pointer;
          padding: 0 18px;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .expenses {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .expense {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
        }

        .expense-number {
          color: #444;
          font-size: 10px;
        }

        .expense-main {
          flex: 1;
        }

        .expense-main strong {
          display: block;
          font-size: 12px;
        }

        .expense-main span {
          display: block;
          margin-top: 5px;
          color: #666;
          font-size: 8px;
          text-transform: uppercase;
        }

        .expense-amount {
          color: #ffd000;
          font-size: 15px;
          font-weight: 900;
        }

        .delete {
          background: transparent;
          border: 1px solid #333;
          color: #777;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .delete:hover {
          border-color: #ff4d4d;
          color: #ff4d4d;
        }

        .roast {
          display: flex;
          gap: 25px;
          padding: 35px;
          border: 1px solid rgba(255,208,0,0.25);
          background: rgba(255,208,0,0.035);
          margin-bottom: 70px;
        }

        .roast-icon {
          font-size: 35px;
        }

        .roast span {
          color: #ffd000;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .roast h2 {
          font-size: 22px;
          max-width: 800px;
          line-height: 1.3;
          margin: 10px 0;
        }

        .roast p {
          color: #555;
          font-size: 9px;
        }

        .money-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #444;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .money-footer a {
          color: #777;
          text-decoration: none;
        }

        .money-footer a:hover {
          color: #ffd000;
        }

        @media (max-width: 800px) {
          .money-intro {
            flex-direction: column;
            align-items: flex-start;
          }

          .wallet-card {
            width: 100%;
            box-sizing: border-box;
          }

          .money-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .expense-form {
            grid-template-columns: 1fr;
          }

          .expense-form button {
            padding: 15px;
          }

          .expense {
            flex-wrap: wrap;
          }

          .expense-amount {
            margin-left: auto;
          }

          .money-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
