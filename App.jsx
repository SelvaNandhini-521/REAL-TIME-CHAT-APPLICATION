import { useEffect, useRef, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
  const hasPrompted = useRef(false); // Prevent double prompt

  useEffect(() => {
    // Ask for username only once
    if (!hasPrompted.current) {
      const name = prompt("Enter your name:");
      setUsername(name || "Anonymous");
      hasPrompted.current = true;
    }

    // Connect to WebSocket server
    socket.current = new WebSocket("ws://localhost:3000");

    // Receive message
    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    // Cleanup
    return () => socket.current.close();
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const data = {
        user: username,
        text: message,
      };
      socket.current.send(JSON.stringify(data));
      setMessage("");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Simple Chat App</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          height: 300,
          overflowY: "auto",
          marginBottom: 10,
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user === username ? "You" : "Friend"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{
          width: "75%",
          padding: 10,
          marginRight: 5,
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 15px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default App;
