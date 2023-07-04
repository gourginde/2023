import React, { useState } from 'react';
import Home from './components/Home';
import ImportCSV from './components/ImportCSV';
import MLdropdown from './components/MLdropdown';
import Results from './components/Results';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [showOtherPage, setShowOtherPage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Import CSV', 'Select Model', 'View Results', 'Dependency Graphs', 'ROI Analysis'];
  const pages = [ImportCSV, MLdropdown, Results];

  const handleExploreClick = () => {
    setShowOtherPage(true);
  };

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

  const CurrentPage = pages[currentStep];

  const handleModelSelect = (selectedModel) => {
    console.log('Selected model:', selectedModel);
  
  };
  const handleLearningSelect = (selectedModel) => {
    console.log('Selected model:', selectedModel);
  
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-container">
          <Navbar />
          {!showOtherPage && <Home onExploreClick={handleExploreClick} />}
        </div>
      </header>
      {showOtherPage && (
        <div className="App-content">
          <ProgressBar steps={steps} currentStep={currentStep} />
          <CurrentPage onModelSelect={handleModelSelect} onLearningSelect={handleLearningSelect}/>
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
      )}
    </div>
  );
}

export default App;
