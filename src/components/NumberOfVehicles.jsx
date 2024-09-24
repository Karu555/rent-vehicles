import React from "react";

const numberOfVehicles = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, wheels: e.target.value });
  };

  return (
    <div>
      <label>Number of Wheels:</label>
      <label>
        <input
          type="radio"
          name="wheels"
          value="2"
          checked={formData.wheels === "2"}
          onChange={handleChange}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="wheels"
          value="4"
          checked={formData.wheels === "4"}
          onChange={handleChange}
        />
        4
      </label>
    </div>
  );
};

export default numberOfVehicles;
