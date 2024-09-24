import React, { useState } from "react";
import Summary from "./components/Summary";
import UserName from "./components/UserName";
import NumberOfVehicles from "./components/NumberOfVehicles";
import WheelsType from "./components/WheelsType";
import VehicleModels from "./components/VehicleModels";
import DateRange from "./components/DateRange";
import './App.css'

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    vehicleModel: "",
    dateRange: { start: "", end: "" },
  });

  const handleNext = () => {
    if (isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Please complete the current question before proceeding.");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName;
      case 2:
        return formData.wheels;
      case 3:
        return formData.vehicleType;
      case 4:
        return formData.vehicleModel;
      case 5:
        return formData.dateRange.start && formData.dateRange.end;
      default:
        return false;
    }
  };

  return (
    <div>
      <h2>Rent Vehicle</h2>
      {currentStep === 1 && (
        <UserName formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 2 && (
        <NumberOfVehicles formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 3 && (
        <WheelsType formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 4 && (
        <VehicleModels formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 5 && (
        <DateRange formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 6 && <Summary formData={formData} />}

      {currentStep < 6 && (
        <button onClick={handleBack} disabled={currentStep === 1}>
          Back
        </button>
      )}
      {currentStep < 6 && (
        <button onClick={handleNext}>
          {currentStep === 5 ? "Review" : "Next"}
        </button>
      )}
    </div>
  );
};

export default App;
