import { createSlice } from '@reduxjs/toolkit'
import { testData } from './testInitialState'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentIndex: 0,
    currentQuestion: testData[0],
    questions: testData,
  },
  reducers: {
    updateSelectedAnswer: (state, action) => {
      const {toggleId, selectedAnswer} = action.payload
      const activeToggle = state.currentQuestion.answerOptions.find(toggle => toggle.id === toggleId)   
      if (activeToggle) {
        activeToggle.selectedAnswer = selectedAnswer
        activeToggle.isCorrect = (activeToggle.selectedAnswer === activeToggle.correctAnswer)
      }

      state.currentQuestion.correctCount = state.currentQuestion.answerOptions.reduce(
        (count, option) => count + (option.isCorrect ? 1 : 0), 0);

      state.currentQuestion.isComplete = state.currentQuestion.correctCount === state.currentQuestion.answerOptions.length
    },
    updateCurrentQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
        state.currentQuestion = state.questions[state.currentIndex]  
      }
    },
  }
})

export const { updateSelectedAnswer, updateCurrentQuestion } = quizSlice.actions

export default quizSlice.reducer
