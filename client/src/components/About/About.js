import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About SmartLearningROI</h1>
            <div className="about-content">
                <p>SmartLearningROI is an innovative platform that assists decision-makers and businesses in understanding the return on investment (ROI) of employing different machine learning models (Logistic Regression, Naive Bayes, SVM, Random Forest, and Decision Trees) using active learning (semi-supervised) and supervised learning techniques in data analytics and machine learning projects.</p>
                
                <h2>What is Active Learning?</h2>
                <p>Active learning, or semi-supervised learning, is a selective sampling strategy where the algorithm intelligently selects data points from which it can learn the most. This approach helps build more accurate models with fewer training samples. Through an iterative process, active learning reduces labeling costs and improves model efficiency by focusing on the samples that are most informative.</p>

                <h2>What is Supervised Learning?</h2>
                <p>Supervised learning is a type of machine learning where the algorithm is trained on a labeled dataset, which means that the data is annotated with tags that the algorithm tries to learn to predict. This method is highly effective for creating models that can make accurate predictions on unseen data, but it requires a significant amount of labeled data.</p>
                
                <h2>Why is ROI important?</h2>
                <p>Understanding ROI is essential in evaluating the efficiency of an investment in active learning or supervised learning. It helps decision-makers to know the potential returns before allocating resources to a project. Estimating ROI ensures that the project aligns with business goals and provides value in return for the investment. Especially in the context of data analytics, which can be resource-intensive, understanding ROI can help in making informed decisions and managing investments effectively.</p>

                <h2>Our Solution</h2>
                <p>SmartLearningROI provides a calculator that enables users to analyze the potential ROI of using active learning or supervised learning in their data analytics projects. By employing these techniques, users can achieve higher model performance with lower labeling costs. This is particularly beneficial for startup companies and organizations that heavily rely on AI/ML for success and are looking for cost-effective ways to translate data into actionable insights.</p>
                
                <h2>Objective and Impact</h2>
                <p>Our objective is to facilitate visualization and interpretation of cost and benefit factors for a given data analytics problem, and provide capabilities to vary cost values and generate interactive visuals for clarity. Our platform aims to fill the gap in the market by supporting managing investments in ML processes such as data gathering, pre-processing, estimating investment in data analytics, and predicting the value proposition of such an investment. This aids in reducing overspending through early estimation of ROI and enables decision-makers to balance effort and ROI for data analytics and machine learning.</p>
            </div>
        </div>
    );
};

export default About;
