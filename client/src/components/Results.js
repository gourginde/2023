/* Function - Display graphs for F1 score, Recall & Precision over variable training size
        Pass In: validation data
        Pass Out: graphs
    Endfunction */
import React, { useEffect, useState } from 'react';

const Results = () => {
  const [graph, setGraph] = useState(false);
  const [graph1, setGraph_recall] = useState(false);
  const [graph2, setGraph_precision] = useState(false);

  useEffect(() => {
    fetchF1Score();
  }, []);

  const fetchF1Score = async () => {
    const response = await fetch('http://3.86.250.113:5000/f1score', {
      method: 'POST',
    });
    const data = await response.json();
    setGraph(data.graph);
    setGraph_recall(data.graph1);
    setGraph_precision(data.graph2);

  }

  return (
    <div>
      <h3>Results</h3>
      <img src={graph}/>
      <img src={graph1}/>
      <img src={graph2}/> 
    </div>
  );
};

export default Results;
