import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-card">
            <p className="definition-text">{definition.definition}</p>
            {definition.example && (
              <p className="example-text">Example: {definition.example}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
