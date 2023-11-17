import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "./config";

const ChatAssistant = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [previousChats, setPreviousChats] = useState([]);
  const [ip, setIpAddress] = useState(null);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    // Check if the chat has started by looking for a flag in localStorage
    const chatStarted = localStorage.getItem("chatStarted");

    if (!chatStarted) {
      // If the chat has not started, show the welcome message
      setMessages([
        {
          type: "assistant",
          content:
            'Hi! My name is Rollover Helper. What 401k rollover questions can I help you with?',
        },
      ]);

      // Set the flag in localStorage to indicate that the chat has started
      localStorage.setItem("chatStarted", "true");
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearPast = () => {
    setPreviousChats([]);
    // Remove the flag from localStorage when the user clicks Clear
    localStorage.removeItem("chatStarted");
  };

  const scrollToRecentBotMessage = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  const handleSendMessage = () => {
    if (!input) return;

    // Update the UI immediately with the user's message
    setMessages([...messages, { type: "user", content: input }]);
    setInput("");

    setLoading(true);

    // Make a POST request to the API (replace 'YOUR_API_ENDPOINT' with the actual endpoint)
    fetch(`${BASE_URL}/ask-question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: input, userIP: ip }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Delay to simulate bot response time (remove this in production)
        setTimeout(() => {
          // Add the bot's response
          setMessages([...messages, { type: "assistant", content: data.response }]);
          setLoading(false);

          // Scroll to the recent bot message
          scrollToRecentBotMessage();
        }, 1000); // Adjust the delay as needed
      })
      .catch((e) => {
        if (e.message === "Failed to fetch")
          alert("Network is not reachable, please check your connection");
        else alert(e.message);
        setLoading(false);
      });
  };

  const fetchPreviousChats = async () => {
    try {
      const response = await fetch(`${BASE_URL}/chats/${ip}`);
      if (response.ok) {
        const data = await response.json();
        const formattedChats = data.conversations.reduce(
          (accumulator, chat) => {
            accumulator.push(
              { type: "user", content: chat.userQuestion },
              { type: "assistant", content: chat.assistantResponse }
            );
            return accumulator;
          },
          []
        );
        // Set the formatted chats in the state
        setPreviousChats(formattedChats);
      }
    } catch (error) {
      console.error("Error fetching previous chats:", error.message);
    }
  };

  useEffect(() => {
    if (ip !== null) {
      fetchPreviousChats();
    }
  }, [ip]);

  useEffect(() => {
    if (previousChats == null || previousChats.length === 0) {
      const newMessage = [
        { type: "assistant", content: 'Hi! My name is Rollover Helper. What 401k rollover questions can I help you with?' },
      ];
      setMessages(newMessage);
    }
  }, [previousChats]);

  return (
    <div className="chat-container">
      <div className="chat-messages" ref={chatMessagesRef}>
        {previousChats.length < 100 ? (
          previousChats.map((chat, index) => (
            <div key={index} className={`message ${chat.type}`}>
              {chat.content}
            </div>
          ))
        ) : (
          <div>
            <h3>Welcome</h3>
          </div>
        )}
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your question..."
        />
        <button disabled={isLoading} onClick={handleSendMessage}>
          {isLoading ? <div id="loading"></div> : "Send"}
        </button>
      </div>
      <button className="clear-btn" onClick={clearPast}>
        Clear
      </button>
    </div>
  );
};

export default ChatAssistant;
