import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import meimg from './images/profpic.png';
import sports from './images/sports.JPG';
import knit from './images/knit.JPG';
import codin from './images/pandasnumpy.JPG';
import dog from './images/dogs.JPG';

const HomePage = ({ navigateTo }) => (
    <div className="container">
        <h1 style={{ fontFamily: 'Comic Sans MS, cursive' }}>Welcome to Jacqueline's Website!</h1>
        <button onClick={navigateTo}>Next</button>
    </div>
);

const NextPage = ({ navigateToHome }) => {
    const [inputValue, setInputValue] = useState('');
    const [submittedText, setSubmittedText] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [sports, knit, codin, dog];

    const handleSubmit = () => {
        setSubmittedText(inputValue);
    };

    const showNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    return (
        <div className="container">
            <h2>Jacqueline is...</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something..."
                />
                <button onClick={handleSubmit}>Submit</button>
                <div className="text">{submittedText}</div>
            </div>
            
            <div className="image-container">
                <img src={meimg} alt="Left side image" />
                
                <div className="circle">
                    <img src={images[currentImageIndex]} alt="Cool Things About Jacqueline" />
                </div>
            </div>
            
            <h3>Cool Things About Jacqueline</h3>
            <div className="random-image-container">
                <button onClick={showNextImage}>What else!</button>
            </div>

            <a href="https://www.shopjilbo.com" target="_blank" rel="noopener noreferrer">
                <button>Visit Jacqui's Designs!</button>
            </a>
            
            <button onClick={navigateToHome} style={{ marginTop: '20px' }}>Back to Home</button>
        </div>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const navigateToNextPage = () => {
        setCurrentPage('next');
    };

    const navigateToHome = () => {
        setCurrentPage('home');
    };

    return (
        <>
            {currentPage === 'home' ? (
                <HomePage navigateTo={navigateToNextPage} />
            ) : (
                <NextPage navigateToHome={navigateToHome} />
            )}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
