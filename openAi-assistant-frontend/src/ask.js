import React from "react";
import ChatAssistant from "./ChatAssistant";
import "./index.css";

const Ask = () => {
  return (
    <>
      <div className="container">
        <h1
          className="pt-3 text-center main-text"
          style={{
            fontSize: "34px",
            fontWeight: "600",
            margin: "0 auto",
            maxWidth: "900px",
          }}
        >
          {" "}
          This A.I. Powered Bot Can Answer Any 401k/IRA/TSP Rollover Questions
          You Have
        </h1>
        <ChatAssistant />
      </div>
    </>
  );
};
export default Ask;
