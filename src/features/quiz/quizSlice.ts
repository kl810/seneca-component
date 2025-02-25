import { createSlice } from '@reduxjs/toolkit'
import { testData } from './testInitialState'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentIndex: 0,      // Track current question index
    quizData: testData, ...testData[0], // Store all quiz questions // Initialize state with first question
  },
  reducers: {
    updateSelectedAnswer: (state, action) => {          
      const {toggleId, selectedAnswer} = action.payload

      // Refer to { testData: answerOptions }
      const activeToggle = state.answerOptions.find(toggle => toggle.id === toggleId)           // Find selected toggle
      if (activeToggle) {
        activeToggle.selectedAnswer = selectedAnswer                               // Updated selectedAnswer with value of button clicked
        activeToggle.isCorrect = (activeToggle.selectedAnswer === activeToggle.correctAnswer)   // Check if selectedAnswer === correctAnswer and if true, set isCorrect to true        
      }

      state.correctCount = state.answerOptions.reduce((count, option) =>          
        count + (option.isCorrect ? 1 : 0), 
        0
      );

      state.isComplete = state.correctCount === state.answerOptions.length      // Check if answer is complete

      state.showNextButton = state.isComplete            // Show next button when question is complete
    },
    goToNextQuestion: (state) => {

      if (state.currentIndex <= state.quizData.length - 1) {
        state.currentIndex += 1;
        Object.assign(state, state.quizData[state.currentIndex]); // Update state with next question
        state.showNextButton = false;                            // Hide next button until next question is completed
      }

      if (state.currentIndex === state.quizData.length) {        // Check if all questions completed
        state.allQuestionsCompleted = true;
        state.showNextButton = true;
      }
    },
  }
})

export const { updateSelectedAnswer, goToNextQuestion } = quizSlice.actions

export default quizSlice.reducer