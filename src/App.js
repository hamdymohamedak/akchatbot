import React, { useState, useRef, useEffect } from "react";
import {
  RoseBox,
  ShinyButton,
  ShinyText,
  usePreferredLanguage,
  WaveText,
  useBatteryStatus,
  useColorScheme,
  RandomAnimate,
  useOnlineStatus,
} from "./LaRose";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./App.css";

// Ensure the API key is stored securely in environment variables
const API_KEY = "AIzaSyAWOETDeqZyrTanHs7hClr_t698-3WgR_Q";
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [genAI, setGenAI] = useState(null);
  const [batteryMessage, setBatteryMessage] = useState("");

  useEffect(() => {
    const initGenerativeAI = async () => {
      if (API_KEY) {
        try {
          const genAIInstance = new GoogleGenerativeAI(API_KEY);
          setGenAI(genAIInstance);
        } catch (error) {
          console.error("Error initializing Generative AI:", error);
        }
      } else {
        console.error("API key is missing");
      }
    };

    initGenerativeAI();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const { level, charging } = useBatteryStatus();

  useEffect(() => {
    if (level < 0.6) {
      setBatteryMessage("Your battery level is low");
    } else {
      setBatteryMessage("");
    }
  }, [level]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "" && genAI) {
      setMessages([...messages, { sender: "user", text: newMessage }]);
      setLoading(true);

      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Ensure correct model ID
        const response = await model.generateContent(newMessage);

        // Ensure the response has the expected structure
        const aiText = response?.response?.text
          ? response.response.text()
          : "Sorry, I didn't understand that.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "ai", text: aiText },
        ]);
      } catch (error) {
        console.error("Error getting response from Generative AI:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            text: "Sorry, something went wrong. Please try again.",
          },
        ]);
      } finally {
        setLoading(false);
      }

      setNewMessage("");
    }
  };

  const preferredLanguage = usePreferredLanguage();
  const textDirection = preferredLanguage === "ar" ? "rtl" : "ltr";

  const colorTheme = useColorScheme();
  useEffect(() => {
    document.body.style.backgroundColor =
      colorTheme === "dark" ? "black" : "transparent";
  }, [colorTheme]);
  const isOnline = useOnlineStatus();
  return (
    <div className="chat-app" dir={textDirection}>
      <div className="title">
        LaRose-ChatBot
      </div>
      <RoseBox edit={{ height: "5rem", width: "20rem" }} />
      <div className="chat-header">
        <div style={{ fontSize: "1.2rem", textAlign: "start" }}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <RandomAnimate edit={{ all: "none" }}>
                {message.text}
              </RandomAnimate>
            </div>
          ))}
          {loading && (
            <div className="message ai">
              <WaveText>Loading...</WaveText>
            </div>
          )}
        </div>
      </div>
      <div className="chat-body">
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <ShinyButton
          edit={{ height: "3rem", width: "10rem" }}
          disabled={loading}
        >
          <ShinyText edit={{ color: "white" }}>
            {loading ? "Sending..." : "Send"}
          </ShinyText>
        </ShinyButton>
      </form>
    </div>
  );
};

export default ChatApp;
