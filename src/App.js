import React from "react";
import "./App.css";
import ChatBizWebsite from "./components/Chatbiz";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <ChatBizWebsite />
      </HelmetProvider>
    </div>
  );
}

export default App;
