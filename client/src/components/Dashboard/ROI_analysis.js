import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, PointElement, LineElement } from 'chart.js';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ROI.css';
import ROI_graphs from './ROI_graphs';

Chart.register(PointElement, LineElement);

const ROI = () => {
  const [fpCost, setFpCost] = useState(0);
  const [fnCost, setFnCost] = useState(0);
  const [tpCost, setTpCost] = useState(0);
  const [resourcesCost, setResourcesCost] = useState(0);
  const [preprocessingCost, setPreprocessingCost] = useState(0);
  const [productValue, setProductValue] = useState(0);
  const [showGraphs, setShowGraphs] = useState(false);

 
  const handleApply = () => {
    const formData = new FormData();
    formData.append('fp_cost', fpCost);
    formData.append('fn_cost', fnCost);
    formData.append('tp_cost', tpCost);
    formData.append('resources_cost', resourcesCost);
    formData.append('preprocessing_cost', preprocessingCost);
    formData.append('product_value', productValue);

    axios.post('/roi-parameters', formData)
      .then(response => {
        console.log(response.data);
        setShowGraphs(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
    <div className="roi-container">
    <div className="slider-wrapper">
      <div className="slider-row" style={{marginBottom: '10px'}}><span className="slider-value">Fp Cost : {fpCost}</span></div>
      <div className="slider-row">
        <Slider
          min={0}
          max={100}
          value={fpCost}
          onChange={value => setFpCost(parseFloat(value))}
          trackStyle={{ backgroundColor: '#28a9e2', height: '8px' }}
          handleStyle={{
            borderColor: '#28a9e2',
            height: '20px',
            width: '20px',
            marginLeft: '-7px',
            marginTop: '-6px',
          }}
          railStyle={{ backgroundColor: 'lightgray', height: '8px' }}
          className="slider"
        />
      </div>
      <div className="slider-row" style={{marginBottom: '10px'}}><span className="slider-value">Fn Cost : {fnCost}</span></div>
      <div className="slider-row">
        <Slider
          min={0}
          max={100}
          value={fnCost}
          onChange={value => setFnCost(parseFloat(value))}
          trackStyle={{ backgroundColor: '#28a9e2', height: '8px' }}
          handleStyle={{
            borderColor: '#28a9e2',
            height: '20px',
            width: '20px',
            marginLeft: '-7px',
            marginTop: '-6px',
          }}
          railStyle={{ backgroundColor: 'lightgray', height: '8px' }}
          className="slider"
        />
      </div>
      <div className="slider-row" style={{marginBottom: '10px'}}><span className="slider-value">Tp Cost : {tpCost}</span></div>
      <div className="slider-row">
        <Slider
          min={0}
          max={100}
          value={tpCost}
          onChange={value => setTpCost(parseFloat(value))}
          trackStyle={{ backgroundColor: '#28a9e2', height: '8px' }}
          handleStyle={{
            borderColor: '#28a9e2',
            height: '20px',
            width: '20px',
            marginLeft: '-7px',
            marginTop: '-6px',
          }}
          railStyle={{ backgroundColor: 'lightgray', height: '8px' }}
          className="slider"
        />
      </div>
      <div className="slider-row" style={{marginBottom: '10px'}}><span className="slider-value">Resources Cost : {resourcesCost}</span></div>
      <div className="slider-row">
        <Slider
          min={0}
          max={100}
          value={resourcesCost}
          onChange={value => setResourcesCost(parseFloat(value))}
          trackStyle={{ backgroundColor: '#28a9e2', height: '8px' }}
          handleStyle={{
            borderColor: '#28a9e2',
            height: '20px',
            width: '20px',
            marginLeft: '-7px',
            marginTop: '-6px',
          }}
          railStyle={{ backgroundColor: 'lightgray', height: '8px' }}
          className="slider"
        />
      </div>
      <div className="slider-row" style={{marginBottom: '10px'}}><span className="slider-value">Preprocessing Cost : {preprocessingCost}</span></div>
      <div className="slider-row">
        <Slider
          min={0}
          max={100}
          value={preprocessingCost}
          onChange={value => setPreprocessingCost(parseFloat(value))}
          trackStyle={{ backgroundColor: '#28a9e2', height: '8px' }}
          handleStyle={{
            borderColor: '#28a9e2',
            height: '20px',
            width: '20px',
            marginLeft: '-7px',
            marginTop: '-6px',
          }}
          railStyle={{ backgroundColor: 'lightgray', height: '8px' }}
          className="slider"
        />
      </div>
      <div className="slider-row" style={{marginBottom: '10px'}}><span className="slider-value">Product Value : {productValue}</span></div>
      <div className="slider-row">
        <Slider
          min={0}
          max={100}
          value={productValue}
          onChange={value => setProductValue(parseFloat(value))}
          trackStyle={{ backgroundColor: '#28a9e2', height: '8px' }}
          handleStyle={{
            borderColor: '#28a9e2',
            height: '20px',
            width: '20px',
            marginLeft: '-7px',
            marginTop: '-6px',
          }}
          railStyle={{ backgroundColor: 'lightgray', height: '8px' }}
          className="slider"
        />
      </div>
      <button className="button" onClick={handleApply}>Apply</button>
    </div>
    {showGraphs && <ROI_graphs />}
    </div>
    </>
  );
};

export default ROI;
