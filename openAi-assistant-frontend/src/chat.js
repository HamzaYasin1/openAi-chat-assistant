import React from "react";
import ChatAssistant from "./ChatAssistant";
import './index.css'; 


const Chat = () => {
  return (
    <>
    <div className="container">
      <img className="pt-3 pb-2 logo" src="logo.png" alt="logo" />
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
      <div className="chat">
        <h1>Rollover Helper</h1>
        <ChatAssistant />
      </div>
    </div>
    <div className="how-work">
      <div className=" main-con" style={{ width: "100%" }}>
        <div
          className="how-main"
          style={{ background: "#fff", width: "100%" }}
        >
          <h1>How It Works</h1>
          <p className="">
            We took our 30+ years of experience of helping people rollover
            their old 401ks, TSPs, IRAs, etc and trained an artificial
            intelligence powered chatbot to answer any and all questions you
            might have about rolling over an old retirement account. It's
            powerful and more importantly -
            <b style={{ color: "black" }}>Its Works.</b>{" "}
          </p>
        </div>
        <div style={{ marginBottom: "1rem", width: "inherit" }}>
          <h1>As Seen On</h1>
          <div className="logo-con ">
            <div className="col-lg-3  col-md-6  text-center as-logo">
              <img
                className="pt-3 pb-2 "
                width={270}
                src="logo.png"
                alt="logo"
              />
            </div>
            <div className="col-lg-3  col-md-6  text-center as-logo">
              <img
                className="pt-3 pb-2  "
                width={270}
                src="logo.png"
                alt="logo"
              />
            </div>
            <div className="col-lg-3  col-md-6  text-center as-logo">
              <img
                className="pt-3 pb-2 "
                width={270}
                src="logo.png"
                alt="logo"
              />
            </div>
            <div className="col-lg-3  col-md-6 text-center as-logo">
              <img
                className="pt-3 pb-2 text-center"
                width={270}
                src="logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="notice-main">
          <p className=" text-center">
            <b style={{ color: "#fff" }}>IMPORTANT NOTICE:</b> Trading Stock,
            Stock Options, Cryptocurrencies, and their derivatives involves a
            substantial degree of risk and may not be suitable for all
            investors. Currently, cryptocurrencies are not specifically
            regulated by any agency of the U.S. government. Past performance
            is not necessarily indicative of future results. Prosper Trading
            Academy LLC provides only training and educational information. By
            visiting the website and accessing our content, you are agreeing
            to the terms and conditions. The testimonials contained in this
            communication were not solicited, no compensation was paid, are
            not necessarily representative of the experience of all students,
            and Prosper has not verified the accuracy of the statements
            contained in any testimonial.
          </p>
        </div>
        <div className="privacy-main">
          <p className="text-center">
            <a href=""> Privacy Policy </a>
            {""}
            {""} and {""}
            <a href=""> Terms And Conditions </a>
          </p>
        </div>
      </div>
    </div>
  </>
  );
};
export default Chat;
