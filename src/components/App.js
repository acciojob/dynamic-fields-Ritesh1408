import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              name="name"
              value={field.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <input
              name="age"
              value={field.age}
              onChange={(e) => handleChange(index, "age", e.target.value)}
            />
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
