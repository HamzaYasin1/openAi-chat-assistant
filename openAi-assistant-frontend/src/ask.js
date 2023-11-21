import React from "react";
import ChatAssistant from "./ChatAssistant";
import { useLocation } from 'react-router-dom';

import "./index.css";

const Ask = () => {
  const location = useLocation();

  // Access the query string from location.search
  const queryParams = new URLSearchParams(location.search);

  // Get the value of the 'search' parameter
  const searchValue = queryParams.get('search');


  console.log(searchValue);

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
        <ChatAssistant parameter={searchValue} />
      </div>
    </>
  );
};
export default Ask;
