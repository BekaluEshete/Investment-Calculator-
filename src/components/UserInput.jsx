export default function UserInput({ userInput, handleChange }) {
    function handleInputChange(field, event) {
      const rawValue = event.target.value;
  
      // Convert to number to remove leading zeros
      const numericValue = rawValue === '' ? '' : Number(rawValue);
  
      handleChange(field, numericValue);
    }
  
    return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) => handleInputChange("initialInvestment", event)}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) => handleInputChange("annualInvestment", event)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) => handleInputChange("expectedReturn", event)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => handleInputChange("duration", event)}
            />
          </p>
        </div>
      </section>
    );
  }
  