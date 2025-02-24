import React from "react";

function ExpenseTracker() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className="text-primary fw-bold">Expense Tracker</h3>
        <button className="btn btn-primary text-dark fw-bold">
          Add New Transaction
        </button>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <div className="text-center" style={{width: "50%"}}>
          <p>Balance is</p>
          <div className="money">
            <div>
              <h3>$</h3>
              <p>Total Income</p>
            </div>
            <div>
              <h3>$</h3>
              <p>Total Expense</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{width: "50%"}}>⚽</div>
      </div>
      <div className="info d-flex justify-content-between mt-5 p-5">
        <div style={{ width: "45%" }} className="bg-white p-3 rounded">
          <h5>Expense</h5>
          <div className="expense d-flex justify-content-between align-items-center rounded">
            <p>Expense</p>
            <p>$500</p>
          </div>
        </div>
        <div style={{ width: "45%" }} className="bg-white p-3 rounded">
          <h5>Income</h5>
          <div className="income d-flex justify-content-between   align-items-center rounded">
            <p>Income</p>
            <p>$1000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
