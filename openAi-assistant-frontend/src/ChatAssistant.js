import React, { useState, useEffect } from "react";
import { BASE_URL } from "./config";
const ChatAssistant = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [previousChats, setPreviousChats] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      if (!input) return;

      setLoading(true);
      // Make a POST request to the API (replace 'YOUR_API_ENDPOINT' with the actual endpoint)
      const response = await fetch(`${BASE_URL}/ask-question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const newMessages = [
          ...messages,
          { type: "user", content: input,  },
          { type: "assistant", content: data.response },
        ];
        setMessages(newMessages);
        setInput("");
      }
      setLoading(false);
    } catch (e) {
      if (e.message === "Failed to fetch")
        alert("Network is not reachable please check connection");
      else alert(e.message);
      setLoading(false);
    }
  };
  const fetchPreviousChats = async () => {
    try {
      const response = await fetch(`${BASE_URL}/chats/`);
      if (response.ok) {
        const data = await response.json();
        const formattedChats = data.conversations.reduce((accumulator, chat) => {
          accumulator.push(
            { type: "user", content: chat.userQuestion },
            { type: "assistant", content: chat.assistantResponse }
          );
          return accumulator;
        }, []);
  
        // Set the formatted chats in the state
        setPreviousChats(formattedChats);
      }
    } catch (error) {
      console.error('Error fetching previous chats:', error.message);
    }
  };

  useEffect(() => {
    fetchPreviousChats();
  }, []);

  // console.log(previousChats);

  return (
    <div className="chat-container">
      <div className="chat-messages">
      {previousChats.map((chat, index) => (
          <div key={index} className={`message ${chat.type}`}>
            {chat.content}
          </div>
        ))}
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
          placeholder="Type your question..."
        />
        <button disabled={isLoading} onClick={handleSendMessage}>
          {isLoading === true ? "Sending..." : "Send"}{" "}
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
