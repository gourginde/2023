import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActiveLearning.css';

const ActiveLearning = () => {
  const [threshold, setThreshold] = useState(0.60);
  const [maxIterations, setMaxIterations] = useState(3);
  const [resampling, setResampling] = useState('under_sampling');
  const [classifier, setClassifier] = useState('RF');
  const [samplingType, setSamplingType] = useState('leastConfidence');
  const [testSize, setTestSize] = useState(0.2);
  const [manualAnnotationsCount, setManualAnnotationsCount] = useState(12);
  const [comments] = useState('-RF_LC-12-12');
  const [fileContent, setFileContent] = useState(''); 
  const [iterationIndex, setIterationIndex] = useState(1); // start at iteration 1
  const [displayContent, setDisplayContent] = useState(''); // content to display
  const [manuallyAnnotatedData, setManuallyAnnotatedData] = useState(''); // new state to hold manually annotated data
  const [moreContentVisible, setMoreContentVisible] = useState(false); // state to control visibility of "more" content

  const handleSendToServer = async () => {
    const response = await axios.post('/activeLearning', {
      threshold: threshold,
      max_iterations: maxIterations,
      resampling: resampling,
      classifier: classifier,
      sampling_type: samplingType,
      test_size: testSize,
      manual_annotations_count: manualAnnotationsCount,
      comments: comments
    });
    setFileContent(response.data.fileContent); // save file content to state
    console.log(response.data.fileContent);  // logging the file content

    // set displayContent to first iteration
    const iterationContent = extractIteration(response.data.fileContent, 1);
    console.log(iterationContent);  // logging the iterationContent
    setDisplayContent(iterationContent);
    setIterationIndex(1);

  };

  const extractManuallyAnnotatedData = (fileContent, iteration) => {
    const lines = fileContent.split('\n');
    let count = 0;
    let indexStart = -1;
    let indexEnd = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Manually Annotated Combinations')) {
        count += 1;
        if (count === iteration) {
          indexStart = i;
        }
      }
      if (lines[i].includes('Merging Newly Labelled Data Samples')) {
        if (count === iteration) {
          indexEnd = i;
          break;
        }
      }
    }
    return lines.slice(indexStart , indexEnd).join('\n');
  };

  const extractIteration = (fileContent, iteration) => {
    const lines = fileContent.split('\n');
    let count = 0;
    let index = -1;
  
    // Loop through the lines until we find the nth occurrence of 'Analysis DataFrame :'
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Analysis DataFrame :')) {
        count += 1;
        if (count === iteration) {
          index = i;
          break;
        }
      }
    }
  
    console.log(index);  // logging the found index
  
    // Return 27 lines above 'Analysis DataFrame :' up to 2 lines above it
    // Make sure the slice start isn't less than 0
    return lines.slice(Math.max(0, index - 27), index - 2).join('\n');
  };

  const handleIterationChange = (direction) => {
    // When "Next Iteration" or "Previous Iteration" button is clicked, update iteration index and displayContent
    let newIndex = iterationIndex;
    if (direction === 'next' && iterationIndex < maxIterations) {
      newIndex = iterationIndex + 1;
    } else if (direction === 'prev' && iterationIndex > 1) {
      newIndex = iterationIndex - 1;
    }

    const newIterationContent = extractIteration(fileContent, newIndex);
    setDisplayContent(newIterationContent);
    setIterationIndex(newIndex);
    setMoreContentVisible(false);
  };
  const handleMoreButtonClick = () => {
    // Extract the manually annotated data for the current iteration
    const newData = extractManuallyAnnotatedData(fileContent, iterationIndex);
    // Update the state with the new data
    setManuallyAnnotatedData(newData);
    // Toggle visibility of "more" content
    setMoreContentVisible(!moreContentVisible);
  };

  return (
    <div className="active-learning-container">
    <form className="active-learning">
      <section className="form-inputs">
      <div className="input-container">
        <label className="input-label">
          Threshold: {threshold}
        </label>
        <input
          className="input-slider"
          type="range"
          min="0"
          max="1"
          step="0.01" // Changed from 0.1 to 0.01
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label className="input-label">
          Max Iterations: {maxIterations}
        </label>
        <input
          className="input-slider"
          type="range"
          min="1"
          max="10"
          value={maxIterations}
          onChange={(e) => setMaxIterations(Number(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label className="input-label">
          Test Size: {testSize}
        </label>
        <input
          className="input-slider"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={testSize}
          onChange={(e) => setTestSize(Number(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label className="input-label">Sampling Type:</label>
        <select
          value={samplingType}
          onChange={(e) => setSamplingType(e.target.value)}
        >
          <option value="leastConfidence">Least Confidence</option>
          <option value="minMargin">Min Margin</option>
          <option value="entropy">Entropy</option>
        </select>
      </div>
      <div className="input-container">
        <label className="input-label">Classifier Type:</label>
        <select
          value={classifier}
          onChange={(e) => setClassifier(e.target.value)}>
          <option value="RF">Random Forest</option>
          <option value="NB">Naive Bayes</option>
          <option value="SVM">Support Vector Machine</option>
          <option value="ensemble">Ensemble</option>
        </select>
      </div>
      <div className="input-container">
        <label className="input-label">Resampling:</label>
        <select
        value={resampling}
        onChange={(e) => setResampling(e.target.value)}>
          <option value="over_sampling">Over Sampling</option>
          <option value="under_sampling">Under Sampling</option>
        </select>
      </div>

      <div className="input-container">
        <label className="input-label">Manual Annotations Count:{manualAnnotationsCount}</label>
        <input
          className="input-slider"
          type="range"
          min="1"
          max="100"
          value={manualAnnotationsCount}
          onChange={(e) => setManualAnnotationsCount(Number(e.target.value))}
        />
      </div>
      </section>


      <div className="input-container">
        <label className="input-label-iteration">Current Iteration: {iterationIndex}</label>
      </div>

      <section className="iteration-navigation">
        <button type="button" onClick={() => handleIterationChange('prev')}>Previous Iteration</button>
        <button type="button" onClick={() => handleIterationChange('next')}>Next Iteration</button>
      </section>

        <div className="file-content">
          <pre>{displayContent}</pre>
        </div>
        <button type="button" onClick={handleSendToServer}>Submit</button>
        <button type="button" onClick={handleMoreButtonClick}>More</button>

      </form>
      <div className={`annotated-content ${moreContentVisible ? 'active' : ''}`}>
        <pre>{manuallyAnnotatedData}</pre>
      </div>
    </div>
  );
};

export default ActiveLearning;