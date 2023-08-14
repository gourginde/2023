import React from 'react';
import './Home.css'

const Home = ({}) => {

  return (
  <div className='home'>
      <div className='title'>Beyond accuracy ROI of Data Analytics</div>
      <div className='textData' style={{marginBottom:'30px'}}>
      Most Machine Learning (ML) solutions are evaluated only based on accuracy. However, ML algorithms for a given problem generally require higher computational resources than classical algorithms for the same problem. In addition, these algorithms also need large training datasets, which tends to become an effort and cost-intensive aspect. Given the above issues, this research provided a more profound outlook on the ROI (Return on Investment) of data analytics and the tradeoff between cost and benefit for an ML selection. Essentially, we tried to answer the question, “How much data analytics is enough?” and provided a rough estimate of the cost-benefit of using an ML-based solution. This research work proposed looking beyond accuracy measures and considering Return on Investment (ROI) as an additional criterion to evaluate conventional and complex ML models (such as Semisupervised and Deep Learning (DL)).
      </div>


<div class="rounded-corner" style={{justifyContent: 'center', alignContent:'center', marginLeft:'100px'}}>
  <iframe src="https://drive.google.com/file/d/1ZfNKEuENMIqCsSD50eHca0UR1uk6K5Ih/preview" width="1040" height="640"></iframe>
</div>
      <div className='headings' style={{marginTop:'50px'}}>Tool Architecture</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src="./roi.png" width="1200" height="580" alt="ROI Image"/>
</div>
<div className='headings'>Research Work</div>
<div style={{ display: 'flex', overflowX: 'auto', width: '1000px', alignContent: 'center', marginLeft: '100px', zIndex: 1  }}>
  <div style={{ position: 'relative', width: '500px', height: '400px', overflow: 'hidden', backgroundColor: 'white', marginRight: '20px' }}>
    <iframe
      src="./pdf1.pdf#toolbar=0"
      title="PDF Viewer"
      style={{ border: 'none', width: '100%', height: '100%', background: 'transparent',transform: 'scale(0.7)' }}
    />
    <a href="./pdf1.pdf#toolbar=0" target="_blank" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', background: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      &#8599; 
    </a>
  </div>
  <div style={{ position: 'relative', width: '500px', height: '400px', overflow: 'hidden', backgroundColor: 'white' }}>
    <iframe
      src="./pdf2.pdf#toolbar=0"
      title="PDF Viewer"
      style={{ border: 'none', width: '100%', height: '100%', background: 'transparent',transform: 'scale(0.7)'}}
    />
    <a href="./pdf2.pdf#toolbar=0" target="_blank" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', background: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      &#8599;
    </a>
  </div>
</div>

 {/* second row for pdf */}
<div style={{ display: 'flex', overflowX: 'auto', width: '1000px', alignContent: 'center', marginLeft: '100px', marginTop:'0px',zIndex: 1 }}>
  <div style={{ position: 'relative', width: '500px', height: '400px', overflow: 'hidden', backgroundColor: 'white', marginRight: '20px' }}>
    <iframe
      src="./pdf3.pdf#toolbar=0"
      title="PDF Viewer"
      style={{ border: 'none', width: '100%', height: '100%', background: 'transparent' ,transform: 'scale(0.7)'}}
    />
    <a href="./pdf3.pdf#toolbar=0" target="_blank" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', background: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      &#8599; 
    </a>
  </div>
  <div style={{ position: 'relative', width: '500px', height: '400px', overflow: 'hidden', backgroundColor: 'white' }}>
    <iframe
      src="./pdf4.pdf#toolbar=0"
      title="PDF Viewer"
      style={{ border: 'none', width: '100%', height: '100%', background: 'transparent', transform: 'scale(0.7)' }}
    />
    <a href="./pdf4.pdf#toolbar=0" target="_blank" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', background: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      &#8599;
    </a>
  </div>
</div>



</div>
  );
};

export default Home;
