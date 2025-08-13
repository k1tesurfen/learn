import { react } from "react";

export default function TempInput({ scale, value, onTempChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        type=""
        name={scale}
        value={value}
        onChange={(e) => onTempChange(e.target.value)}
      ></input>
      <span>{scale}</span>
    </div>
  );
}
