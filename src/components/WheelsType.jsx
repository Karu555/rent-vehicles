import React, { useEffect, useState } from "react";

const wheelsType = ({ formData, setFormData }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    if (formData.wheels === "2") {
      setVehicleTypes(["Bike", "Scooter"]);
    } else if (formData.wheels === "4") {
      setVehicleTypes(["Car", "Truck"]);
    }
  }, [formData.wheels]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleType: e.target.value });
  };

  return (
    <div>
      <label>Type of Vehicle:</label>
      {vehicleTypes.map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="vehicleType"
            value={type}
            checked={formData.vehicleType === type}
            onChange={handleChange}
          />
          {type}
        </label>
      ))}
    </div>
  );
};

export default wheelsType;
