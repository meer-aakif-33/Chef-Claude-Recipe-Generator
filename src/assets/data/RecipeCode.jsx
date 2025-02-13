import React from "react";
import ReactMarkdown from "react-markdown";

export default function APIData({ recipe }) {
  return (
    <div className="recipe-container">
      <h2>🍽️ AI-Generated Recipe</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}
