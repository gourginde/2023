import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import research from '../../assets/images/research.jpg';

const Home = () => {
    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState('');
    const text = 'SmartLearningROI\n Unleash Your Potential';

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

    const handleExploreClick = () => {
        navigate('/services');
    };

    return (
        <>
            <div className="relative-wrapper">
                <div className="dark-overlay"></div>
                <img src={research} alt="Home" className="background-image" />
                <div className="typewriter-text">
                    {displayText.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })}
                </div>
            </div>
    
            <article className="home-article">
                <p>
                Smart Learning ROI is a powerful platform that empowers users to analyze the potential return on investment (ROI) of your company. Unlock the full potential of your endeavors by exploring our cutting-edge tools and experience the difference today!
                </p>
            </article>
    
            <button
                onClick={handleExploreClick}
                className="explore-button"
            >
                Explore
            </button>
        </>
    );
    
};

export default Home;
