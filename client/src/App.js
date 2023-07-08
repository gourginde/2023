import React, { useState } from 'react';
import Home from './components/Navbar/Home';
import ImportCSV from './components/Dashboard/ImportCSV';
import MLdropdown from './components/Dashboard/MLdropdown';
import Results from './components/Dashboard/Results';
import ProgressBar from './components/Dashboard/ProgressBar';
import Navbar from './components/Navbar/Navbar';
import About from './components/Navbar/About/About';
import Contact from './components/Navbar/About/About';
import './App.css';

function App() {
  const [showOtherPage, setShowOtherPage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Import CSV', 'Select Model', 'View Results', 'Dependency Graphs', 'ROI Analysis'];
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

  const handleDashboardClick = () => {
    setShowOtherPage(true);
    console.log('Dashboard clicked');
  };

  const handleHomeClick = () => {
    setShowOtherPage(false);
  };

  const handleAboutClick = () => {
    setShowOtherPage(false);
  };

  const handleContactClick = () => {
    setShowOtherPage(false);
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
        <Navbar onDashboardClick={handleDashboardClick} onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} onContactClick={handleContactClick} /> 
      </header>
      <div className="App-content">
        {!showOtherPage && <Home />} 
        {showOtherPage && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default App;
