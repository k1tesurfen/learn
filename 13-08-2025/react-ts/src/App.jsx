import { useState, useEffect } from "react";
import "./App.css";
import TempInput from "./TempInput";

function App() {
  const [tempC, setTempC] = useState(0);

  function handleCelsiusChange(newC) {
    setTempC(Number(newC));
  }

  function handleKelvinChange(newK) {
    setTempC(Number(newK) - 273.15);
  }
  useEffect(() => {
    console.log(`Temperature in Celsius changed to: ${tempC}`);
  }, [tempC]);

  return (
    <>
      <h1>Temperature converter</h1>
      <div className="card">
        <TempInput scale="C" value={tempC} onTempChange={handleCelsiusChange} />
        <TempInput
          scale="K"
          value={tempC + 273.15}
          onTempChange={handleKelvinChange}
        />
      </div>
    </>
  );
}

export default App;
