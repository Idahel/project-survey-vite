export const Name = ({ value, updateFormData }) => {

  const name = (e) => updateFormData("name", e.target.value);

  return (
    <div className="name">
    <div className="name-question">
      <label>What is your name?</label>
    </div>
    <div>
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={name}
        placeholder="Enter your name..."
      />
    </div>
  </div>
);
};


