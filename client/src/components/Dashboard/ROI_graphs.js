import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart, PointElement, LineElement} from 'chart.js';
import './ROI_graphs.css'

Chart.register(PointElement, LineElement);

const ROI_graphs = () => {
  const [graph, setGraph] = useState(null);
  const [graph1, setGraph1] = useState(null);
  const [graph2, setGraph2] = useState(null);
  const [graph3, setGraph3] = useState(null);
  const [graph4, setGraph4] = useState(null);
  const [graph5, setGraph5] = useState(null);
  const [graph6, setGraph6] = useState(null);
  const [graph7, setGraph7] = useState(null);
  const [graph8, setGraph8] = useState(null);
  const [graph9, setGraph9] = useState(null);


  useEffect(() => {
    fetchGraphData();
  }, []);

  const fetchGraphData = async () => {
    try {
      const response = await fetch('/roi-graphs', {
        method: 'POST',
      });
      const data = await response.json();
      setGraph(data.f1_score_lg);
      setGraph1(data.f1_score_nb);
      setGraph2(data.f1_score_rf);
      setGraph3(data.f1_score_svc);
      setGraph4(data.f1_score_dt);
      setGraph5(data.roi_lg);
      setGraph6(data.roi_nb);
      setGraph7(data.roi_rf);
      setGraph8(data.roi_svc);
      setGraph9(data.roi_dt);

    } catch (error) {
      console.error('Error fetching graph data:', error);
    }
  };

  const renderGraphs = (graphData1, graphData2, f1_score, roi, sizeArray) => {

    const chartData = {
      labels: sizeArray,
      datasets: [
        {
          label: f1_score,
          data: graphData1,
          backgroundColor: '#DAF0F7',
          borderColor: '#DAF0F7',
          borderWidth: 1,
          pointRadius: 0,
        },
        {
          label: roi,
          data: graphData2,
          backgroundColor: '#C8D9F0',
          borderColor: '#C8D9F0', 
          borderWidth: 1,
          pointRadius: 0,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Relative Training Size',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Score',
          },
          suggestedMin: 0,
          suggestedMax: 1,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    };

    return (
      <div>
        <Line data={chartData} options={chartOptions} />
      </div>
    );
  };

  const sizeArray = [2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="chart-container">
      
      <div>{graph5}</div>
      <div className="chart-wrapper">{renderGraphs(graph, graph5, 'F1 score', 'ROI', sizeArray)}</div>
      <div className="chart-wrapper">{renderGraphs(graph1, graph6, 'F1 score', 'ROI', sizeArray)}</div>
      <div className="chart-wrapper">{renderGraphs(graph2, graph7, 'F1 score', 'ROI', sizeArray)}</div>
      <div className="chart-wrapper">{renderGraphs(graph3, graph8, 'F1 score', 'ROI', sizeArray)}</div>
      <div className="chart-wrapper">{renderGraphs(graph4, graph9, 'F1 score', 'ROI', sizeArray)}</div>

    </div>
  );
};

export default ROI_graphs;
