import { useState, useEffect, createContext } from 'react';
import './App.css';
import QuizContainer from './components/quiz-container/QuizContainer';
import DATA from './api/quizData.json';


function App() {
  return (
    <div className="App">
        <QuizContainer />
    </div>
  );
}

export default App;
