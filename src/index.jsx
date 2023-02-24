import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <div style={{ backgroundColor: "black", color: "grey" }}>
      <Header />
      <div className="px-4">
        <Counter/>
      </div>
    </div>
  </div>
);
