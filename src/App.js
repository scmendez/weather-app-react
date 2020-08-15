import React from "react";
import "./App.css";
import Weather from "./Weather";
import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Madrid" />
      <GitHubLink />
    </div>
  );
}
