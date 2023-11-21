import React from "react";
import ChatAssistant from "./ChatAssistant";
import { useParams, useLocation } from 'react-router-dom';
import "./index.css";




const Chat = () => {
  const location = useLocation();

  // Access the query string from location.search
  const queryParams = new URLSearchParams(location.search);

  // Get the value of the 'search' parameter
  const searchValue = queryParams.get('search');

  

  return (
    <>
      <div className="container">
        <div className="header">
          <img className="pt-3 pb-2 logo" src="logo.png" alt="logo" />
          <div className="as-seen">
            <span>Strategies As Seen On</span>
            <img className=" logos-a" src="as-seen-logos.png" alt="logo" />
          </div>
        </div>
        <p
          className="pt-3 text-center main-text main-p"
          style={{
            fontSize: "24px",
            fontWeight: "500",
            fontStyle: "italic",
            margin: "0 auto",
            // maxWidth: "900px",
          }}
        >
          {" "}
          ROLLOVER AI CHATBOT
        </p>
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
          <h1></h1> 
          <ChatAssistant parameter={searchValue} />
        </div>
      </div>
      <div className="how-work">
        <div className=" main-con" style={{ width: "100%" }}>
          <div className="max-main">
            <h2>Maximizing Your Experience - Prompt Guide</h2>
            <p>
              Our AI Rollover chatbot is powered by cutting-edge language
              models.
              <br />
              Here are some tailored suggestions to help optimize your
              experience.
            </p>
            <div className="max-text">
              <div className="text-each">
                <h4>1. Begin With Clear Intent</h4>
                <p>
                  Our AI excels in contextual understanding. State the exact
                  questions you have in mind to get precise responses.
                </p>
              </div>
              <div className="text-each">
                <h4>2. Personalize Your Experience</h4>
                <p>
                  The AI rollover chatbot thrives on custom inputs. The more
                  information you give about your retirement situation, the
                  better it will assist you.
                </p>
              </div>
              <div className="text-each">
                <h4>3. Ask For Further Explanation</h4>
                <p>
                  If there is any response that doesn't make sense to you, ask
                  for further explanation. Example: "Can you explain that in
                  simple terms?"
                </p>
              </div>
              <div className="text-each">
                <h4>4. Accept Personalized Feedback</h4>
                <p>
                  If our AI chatbot recommends a specific actions for you to
                  improvement your unique retirement situation, strongly
                  consider them. Remember our chatbot is built to account for
                  millions of data points.
                </p>
              </div>
            </div>
          </div>
          <div className="roll-main">
            <p>YOUR RETIREMENT OPTIMIZER</p>
            <h2>How The Rollover Helper Works</h2>
            <div className="exp">
              <span

              >
                We took our{" "}
                <strong>30+ years of experience of helping people</strong>{" "}
                rollover their old 401ks, TSPs, IRAs, etc and trained an
                artificial intelligence powered chatbot to answer any and all
                questions you might have about rolling over an old retirement
                account. It's powerful and more importantly, it works.
              </span>
              <img className="pt-3 pb-2 mockup" src="mockup.png" alt="mockup" />
            </div>
            <span
              // style={{
              //   fontSize: "24px",
              //   letterSpacing: "1px",
              //   fontWeight: "500",
              //   fontStyle: "normal",
              // }}
            >
              Optimizing your retirement is <strong>our&nbsp;</strong>
              <strong>priority</strong>.
            </span>{" "}
            <img className="pt-3 pb-2 logos" src="as-seen-logos.png" alt="logo" />
          </div>
          {/* <div
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
          <div style={{ marginBottom: "1rem", width: "inherit" }} id="asa">
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
          </div> */}
          <div className="notice-main">
            <p style={{ textAlign: "center" }}>
              <strong>
                <span style={{ color: "rgb(199, 199, 199)" }}>
                  Rollover Helper | All Rights Reserved
                </span>
              </strong>
            </p>
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
