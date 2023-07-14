import React, { useEffect, useState } from 'react';

const Home = ({ onExploreClick }) => {
  const [displayText, setDisplayText] = useState('');
  const text = 'ROI';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentIndex === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayText('');
            setTimeout(() => {
              currentIndex = 0;
            }, 500);
          }, 2000);
        }
        currentIndex++;
        return text.substring(0, currentIndex);
      });
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <img src="/research.jpg" alt="Home" style={{ width: '100%', height: 'auto' }} />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            borderRadius: '7px',
            fontWeight: 'bold',
            fontSize: '50px',
            color: 'white',
          }}
        >
          {displayText}
        </div>
      </div>

      <div className='textData'>
        <br />
        <br />
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
        <br />
        <br />
      </div>
      <button
        onClick={onExploreClick}
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: '#28a9e2',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
      >
        Explore
      </button>
    </>
  );
};

export default Home;
