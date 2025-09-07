import React from "react";
import "./App.css";
import RestaurantAutomationWebsite from "./components/Chatbiz";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <RestaurantAutomationWebsite />
      </HelmetProvider>
    </div>
  );
}

export default App;
