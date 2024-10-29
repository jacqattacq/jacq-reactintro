import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NextPage from './components/NextPage';
import './styles.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jacqueline-is" element={<NextPage />} />
            </Routes>
        </Router>
    );
}

export default App;
