import React, { useState } from 'react';
import ImportCSV from '../ImportCSV';
import MLdropdown from '../MLdropdown';
import Results from '../Results/Results';
import ProgressBar from '../ProgressBar';
import './Services.css';

const Services = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Import CSV', 'Training Method', 'View Results', 'Dependency Graphs', 'ROI Analysis'];
  const pages = [ImportCSV, MLdropdown, Results];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleModelSelect = (selectedModel) => {
    console.log('Selected model:', selectedModel);
  };

  const handleLearningSelect = (selectedModel) => {
    console.log('Selected model:', selectedModel);
  };

  const CurrentPage = pages[currentStep];

  return (
    <div className="services-content">
      <ProgressBar steps={steps} currentStep={currentStep} />
      <CurrentPage onModelSelect={handleModelSelect} onLearningSelect={handleLearningSelect} />
      <div className="navigation-buttons">
        {currentStep > 0 && (
          <button className="prev-button" onClick={handlePrevStep}>
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button className="next-button" onClick={handleNextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
