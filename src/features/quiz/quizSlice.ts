import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    question: "An animal cell contains",
    correct: 0,
    answerOptions: [
        {
            "id": 1,
            "options": ["Cell Wall", "Ribosomes"],
            "selectedAnswer": "",
            "correctAnswer": "Ribosomes",
        },
        {
            "id": 2,
            "options": ["Cytoplasm", "Chloroplast"],
            "selectedAnswer": "",
            "correctAnswer": "Cytoplasm",
        },
        {
            "id": 3,
            "options": ["Cellulose", "Mitochondria"],
            "selectedAnswer": "",
            "correctAnswer": "Mitochondria",
        },
        {
            "id": 4,
            "options": ["Cell Wall", "Ribosomes"],
            "selectedAnswer": "",
            "correctAnswer": "Ribosomes",
        }
    ]
  },
  reducers: {
    updateSelectedAnswer: (state, action) => {
      const {toggleId, selectedAnswer} = action.payload
      const activeToggle = state.answerOptions.find(toggle => toggle.id === toggleId)
      if (activeToggle) {
        activeToggle.selectedAnswer = selectedAnswer
      }
    },
  }
})

export const { updateSelectedAnswer } = quizSlice.actions


export default quizSlice.reducer