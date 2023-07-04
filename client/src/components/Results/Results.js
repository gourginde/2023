/* Function - Display graphs for F1 score, Recall & Precision over variable training size
        Pass In: validation data
        Pass Out: graphs
    Endfunction */
    import React, { useEffect, useState } from 'react';

    const Results = () => {
      const [graph, setGraph] = useState(null);
      const [graph1, setGraph_recall] = useState(null);
      const [graph2, setGraph_precision] = useState(null);
    
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
          <h2 style={{color:"black"}}>Results</h2>
          <img src={graph}/>
          <img src={graph1}/>
          <img src={graph2}/> 
        </div>
      );
    };
    
    export default Results;
    
