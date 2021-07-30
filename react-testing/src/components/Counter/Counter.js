import React, { useState } from "react"

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    return <div>
        <h1>Counter</h1>
        <h2 style={{
            color: counterValue >= 100 ? "green" : (counterValue <= -100 ? "red" : "black")
        }}>{counterValue}</h2>
        <input data-testid="input" type="number" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} />
        <button data-testid="subtract-btn" onClick={() => setCounterValue(prev => prev - inputValue)}>-</button>
        <button data-testid="add-btn" onClick={() => setCounterValue(prev => parseInt(prev) + parseInt(inputValue))}>+</button>

    </div>
}

export default Counter