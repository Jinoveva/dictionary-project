import React from "react";

export default function Phonetic(props) {
  if (!props.phonetic.audio) return null; // Don't render if no audio

  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
