import React, { useState, useRef, useEffect } from "react";
import {
  RoseBox,
  ShinyButton,
  ShinyText,
  WaveText,
  RandomAnimate,
  useBatteryStatus,
  useColorScheme,
  useOnlineStatus,
  useLocalStorage,
  useUserCountry,
  useContinentContent,
  usePhotoCapture,
  SideText,
} from "./LaRose";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./App.css";
import Avatar from "./Magia.jpg";
import settingIcon from "./setting.svg";
import CameraIcon from "./CameraIcon.svg";
const API_KEY = "AIzaSyAWOETDeqZyrTanHs7hClr_t698-3WgR_Q";
const ChatApp = () => {
  const [messages, setMessages] = useLocalStorage("chatMessages", []); // Use useLocalStorage to persist chat messages
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [genAI, setGenAI] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false); // State to track the details toggle
  const { takePhoto, photo, videoRef, canvasRef, cameraError } =
    usePhotoCapture();
  const [CameraIconAction, setCameraIconAction] = useState("none");
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
  // Function to get the current time in AM/PM format
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24h to 12h format, with 12 instead of 0
    const formattedTime = `${hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    return formattedTime;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "" && genAI) {
      const messageTime = getCurrentTime(); // Get current time when message is sent
      // Add user message to state and localStorage with the timestamp
      const newMessages = [
        ...messages,
        { sender: "user", text: newMessage, time: messageTime },
      ];
      setMessages(newMessages);
      setLoading(true);
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Ensure correct model ID
        const response = await model.generateContent(newMessage);
        const aiText = response?.response?.text
          ? response.response.text()
          : "Sorry, I didn't understand that.";
        // Add AI response to state and localStorage with the timestamp
        const updatedMessages = [
          ...newMessages,
          { sender: "ai", text: aiText, time: getCurrentTime() },
        ];
        setMessages(updatedMessages);
      } catch (error) {
        console.error("Error getting response from Generative AI:", error);
        const errorMessages = [
          ...newMessages,
          {
            sender: "ai",
            text: "Sorry, something went wrong. Please try again.",
            time: getCurrentTime(),
          },
        ];
        setMessages(errorMessages);
      } finally {
        setLoading(false);
      }
      setNewMessage("");
    }
  };
  const handleRemoveMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };
  const colorTheme = useColorScheme();
  useEffect(() => {
    document.body.style.backgroundColor =
      colorTheme === "dark" ? "black" : "transparent";
  }, [colorTheme]);
  const isOnline = useOnlineStatus();
  // Battery Level
  const { level, charging } = useBatteryStatus();
  // UserCountry
  const { country, error } = useUserCountry();
  // useUserContinent
  const { continent } = useContinentContent();
  if (error) {
    return <p>Error: {error}</p>;
  }
  const handleToggleCameraIconActions = () => {
    setCameraIconAction(CameraIconAction === "none" ? "block" : "none");
  };
  return (
    <div className="chat-app">
      <div className="chat-header">
        <div className="header-left">
          <img
            src={Avatar} // Replace with your avatar image URL
            alt="Avatar"
            className="avatar"
          />
          <RoseBox edit={{ color: "black", fontWeight: "bold" }}>
            Magia ChatBot <span>{isOnline ? " Online " : " Offline "}</span>
          </RoseBox>
        </div>
        <div className="header-right">
          <details onToggle={() => setDetailsOpen((prev) => !prev)}>
            <summary>
              <img className="settingIcon" src={settingIcon} alt="Settings" />
            </summary>
          </details>
          <details onClick={handleToggleCameraIconActions}>
            <summary>
              <img className="settingIcon" src={CameraIcon} alt="Camera" />
            </summary>
          </details>
        </div>
      </div>
      <div className="chat-body">
        <div style={{ fontSize: "1.2rem", textAlign: "start" }}>
          {messages.map((message, index) => (
            <div id="SMS" key={index} className={`message ${message.sender}`}>
              <RandomAnimate edit={{ all: "none" }}>
                {message.text}
                {"  "}
              </RandomAnimate>
              <div className="message-time">
                <div>{message.time}</div>
                <SideText direction="right">
                  <button
                    onClick={() => handleRemoveMessage(index)}
                    className="message-remove-button"
                  >
                    X
                  </button>
                </SideText>
              </div>
            </div>
          ))}
          {loading && (
            <div className="message ai">
              <WaveText>Loading...</WaveText>
            </div>
          )}
        </div>
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
      {/* Conditional pop-up based on details open state */}
      {detailsOpen && (
        <RoseBox RoseName="infopop" autoLayout AutoHandling>
          <div>Your Country is: {country}</div>
          <div>
            Your continent is {continent || "Determining your location..."}
          </div>
          <div>
            Battery:{" "}
            {level !== null ? (
              <div>
                <p>Battery Level: {Math.round(level * 100)}%</p>
                <p>{charging ? "Charging" : "Not Charging"}</p>
              </div>
            ) : (
              <p>
                Battery Status API not supported or unable to retrieve battery
                status.
              </p>
            )}
          </div>
        </RoseBox>
      )}
      {/* Take Photo POPUP */}
      <div>
        {cameraError ? (
          <p>{cameraError}</p>
        ) : (
          <div className="videoMask">
            <video
              style={{ display: CameraIconAction }}
              className="TakeVideo"
              ref={videoRef}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatApp;
