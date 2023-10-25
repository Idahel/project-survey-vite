import {useState, useEffect} from "react";

import { Name } from "./Name";
import { FavoriteAnimal } from "./FavoriteAnimal";
import { LeastFavoriteMeal } from "./LeastFavoriteMeal";
import {LivingSituation } from "./LivingSituation";

export const MultiStepForm = () => {
    const [formData, setFormData] = useState ({
        name: "",
        favoriteAnimal: "",
        leastFavoriteMeal: "",
        livingSituation: "",
    })

    const [currentStep, setCurrentStep] = useState (1);
    const [submittedData, setSubmittedData] = useState("");


    const updateFormData = (field, value) => {
        setFormData ((values) => ({...values, [field]: value}));
    };

    const nextStep = () => {
        if (currentStep < 4) {
          const fieldName = getStepFieldName(currentStep);
          if (formData[fieldName].trim() !== "") {
            setCurrentStep(currentStep + 1);
          }
        }
      };

      const prevStep = () => {
        if (currentStep > 1) {
          if (submittedData) {
            setSubmittedData("");
          }
          setCurrentStep(currentStep - 1);
        }
      };

    const submitForm = () => {
        const formattedData = `
        ${formData.name} is a ${formData.favoriteAnimal} lover who despises ${formData.leastFavoriteMeal} and lives in a ${formData.livingSituation}`;
        setSubmittedData(formattedData);
        setCurrentStep(5);
    };

    const tryAgain = () => {
        setCurrentStep(1);
        setSubmittedData("");
        setFormData({
          name: "",
          favoriteAnimal: "",
          leastFavoriteMeal: "",
          livingSituation: "",
        });
      };

    const getStepFieldName = (step) => {
        switch (step) {
          case 1:
            return "name";
          case 2:
            return "favoriteAnimal";
          case 3:
            return "leastFavoriteMeal";
          case 4:
            return "livingSituation";
          default:
            return "";
        }
      };

      useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === "Enter") {
            if (currentStep < 4) {
              const nextButton = document.querySelector(".next-button");
              nextButton && nextButton.click();
            } else if (currentStep < 5) {
              if (formData.livingSituation) {
                const submitButton = document.querySelector(".submit-button");
                submitButton && submitButton.click();
              }
            }
          }
        };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentStep, formData.livingSituation]);
    
    return (
        <div className="form-container">
            {currentStep === 1 && ( 
            <Name value = {formData.name} updateFormData={updateFormData}/>
            )}
            {currentStep === 2 && ( 
            <FavoriteAnimal value = {formData.favoriteAnimal} updateFormData={updateFormData}/>
            )}
            {currentStep === 3 && ( 
            <LeastFavoriteMeal value = {formData.leastFavoriteMeal} updateFormData={updateFormData}/>
            )}
            {currentStep === 4 && ( 
            <LivingSituation value = {formData.livingSituation} updateFormData={updateFormData}/>
            )}
            {currentStep === 5 && submittedData && <p className="submitted-data">{submittedData}</p>}

        <div className = "multi-step-form">
            {currentStep > 1 && currentStep < 5 && (
            <button className="back-button" onClick={prevStep}>
            Back
            </button>
             )}
            {currentStep < 4 ? (
            <button className="next-button" onClick={nextStep}>
            Next
            </button>
            ) : currentStep < 5 ? (
            <button className="submit-button" onClick={submitForm} disabled={!formData.livingSituation}>
            Submit
            </button>
            ) : (
            <button className="try-again-button" onClick={tryAgain}>
            Try Again
            </button>
             )}
        </div>
        </div>
    );
};
