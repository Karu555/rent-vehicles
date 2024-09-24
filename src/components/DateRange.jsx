import React from "react";

const dateRange = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      dateRange: { ...formData.dateRange, [e.target.name]: e.target.value },
    });
  };

  return (
    <div>
      <label>Start Date:</label>
      <input
        type="date"
        name="start"
        value={formData.dateRange.start}
        onChange={handleChange}
      />
      <label>End Date:</label>
      <input
        type="date"
        name="end"
        value={formData.dateRange.end}
        onChange={handleChange}
      />
    </div>
  );
};

export default dateRange;
