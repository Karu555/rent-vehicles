import React, { useEffect, useState } from "react";

const vehicleModels = ({ formData, setFormData }) => {
  const [vehicleModels, setVehicleModels] = useState([]);

  useEffect(() => {
    if (formData.vehicleType === "Bike") {
      setVehicleModels(["Yamaha", "Honda"]);
    } else if (formData.vehicleType === "Car") {
      setVehicleModels(["Toyota", "Ford"]);
    }
  }, [formData.vehicleType]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleModel: e.target.value });
  };

  return (
    <div>
      <label>Specific Model:</label>
      {vehicleModels.map((model) => (
        <label key={model}>
          <input
            type="radio"
            name="vehicleModel"
            value={model}
            checked={formData.vehicleModel === model}
            onChange={handleChange}
          />
          {model}
        </label>
      ))}
    </div>
  );
};

export default vehicleModels;
