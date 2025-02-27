import { createSlice } from '@reduxjs/toolkit'
import { testData } from './testInitialState'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentIndex: 0,      
    quizData: testData, ...testData[0], // Store all quiz questions // Initialize state with first question
  },
  reducers: {
    updateSelectedAnswer: (state, action) => {
      const {toggleId, selectedAnswer} = action.payload
      const activeToggle = state.answerOptions.find(toggle => toggle.id === toggleId)   
      if (activeToggle) {
        activeToggle.selectedAnswer = selectedAnswer
        activeToggle.isCorrect = (activeToggle.selectedAnswer === activeToggle.correctAnswer)
      }

      state.correctCount = state.answerOptions.reduce(
        (count, option) => count + (option.isCorrect ? 1 : 0), 0);

      state.isComplete = state.correctCount === state.answerOptions.length
      state.showNextButton = state.isComplete
    },
    updateCurrentQuestion: (state) => {
      if (state.currentIndex <= state.quizData.length - 1) {
        state.currentIndex += 1;
        // Update state with next question
        Object.assign(state, state.quizData[state.currentIndex]);
        state.showNextButton = false;
      }

      // Check if all questions completed
      if (state.currentIndex === state.quizData.length) {
        state.allQuestionsCompleted = true;
        state.showNextButton = true;
      }
    },
  }
})

export const { updateSelectedAnswer, updateCurrentQuestion } = quizSlice.actions

export default quizSlice.reducer