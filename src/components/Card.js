import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div className="card bg-dark mt-3" style={{ width: "18rem" }}>
          <img
            src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=2048x2048&w=is&k=20&c=BZiNKDrgDpdXFKimB69ynYx6kZeSQBzrWAomGs05GEg="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Something Important</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option key={"Half"} value={"Half"}>
                  Half
                </option>
                <option key={"Full"} value={"Full"}>
                  Full
                </option>
              </select>
              <div className="d-inline fs-5 h-100">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
