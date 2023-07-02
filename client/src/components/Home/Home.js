import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
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

    const handleExploreClick = () => {
        navigate('/services');
    };

    return (
        <>
            <div className="relative-wrapper">
                <div className="dark-overlay"></div>
                <img src="/research.jpg" alt="Home" className="background-image" />
                <div className="typewriter-text">
                    {displayText}
                </div>
            </div>

            <article className="home-article">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
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
