import React, { useState, useEffect } from "react";
import { Message } from "../Types/Message";
import SocketService from "../services/SocketService";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    SocketService.connect();
    SocketService.onMessageReceived((content) => {
      setMessages((prevMessages) => [...prevMessages, content]);
    });

    return () => {
      SocketService.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const content: Message = {
        id: "",
        _id: "",
        message: newMessage,
        sender: "",
        timestamp: 0,
      };

      SocketService.sendMessage(content);
      setNewMessage("");
    }
  };
  return (
    <div className="mt-11">
      <h1 className="ml-14">Chat</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>
              {message.sender}: {message.message}
            </p>
          </div>
        ))}
      </div>
      <div>
        <input
          className="shadow h-10 w-50 ml-14"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Send a Message"
        />
        <button
          className="text-1xl bg-green-500 text-white w-20 h-10 text-center border rounded shadow ml-3"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
