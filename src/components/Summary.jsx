import React from "react";

const Summary = ({ formData }) => {
  return (
    <div>
      <h3>Review your information</h3>
      <p>
        <strong>Name:</strong> {formData.firstName} {formData.lastName}
      </p>
      <p>
        <strong>Number of Wheels:</strong> {formData.wheels}
      </p>
      <p>
        <strong>Vehicle Type:</strong> {formData.vehicleType}
      </p>
      <p>
        <strong>Specific Model:</strong> {formData.vehicleModel}
      </p>
      <p>
        <strong>Date Range:</strong> {formData.dateRange.start} to{" "}
        {formData.dateRange.end}
      </p>
    </div>
  );
};

export default Summary;
