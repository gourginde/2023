import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Our Website</h1>
            <div className="about-content">
                <p>Smart Learning ROI is a platform that aims to assist users in understanding the return on investment (ROI) of employing active learning techniques and weakly supervised learning in data analytics and machine learning projects.</p>
                
                <h2>What is Active Learning?</h2>
                <p>Active learning is a selective sampling strategy where the algorithm intelligently selects the data points from which it can learn the most. It helps in building more accurate models with fewer training samples. Through an iterative process, active learning reduces labeling costs and improves model efficiency by focusing on samples that are the most informative.</p>

                <h2>What is Weakly Supervised Learning?</h2>
                <p>Weakly supervised learning is a type of machine learning where the training data is provided with noisy, limited, or imprecise labels. Instead of requiring precisely annotated data, weakly supervised learning techniques can work with less detailed annotations, making the process more scalable and cost-effective.</p>
                
                <h2>Why is ROI important?</h2>
                <p>Understanding ROI helps in evaluating the efficiency of an investment in active learning or weakly supervised learning. It is crucial for decision-makers to know the potential return before allocating resources to a project. Estimating ROI ensures that the project aligns with business goals and provides value in return for the investment.</p>

                <h2>Our Solution</h2>
                <p>Our platform provides a calculator that enables users to analyze the potential ROI of using active learning or weakly supervised learning in their data analytics projects. Moreover, it also offers a model trainer, where users can train models for better predictions using either active learning or weakly supervised learning strategies. By employing these techniques, users can achieve higher model performance with lower labeling costs.</p>
            </div>
        </div>
    );
};

export default About;
