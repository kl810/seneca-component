import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    question: "An animal cell contains",
    correct: 0,
    answerOptions: [
        {
            "options": ["Cell Wall", "Ribosomes"],
            "selectedAnswer": "",
            "correctAnswer": "Ribosomes",
        },
        {
            "options": ["Cytoplasm", "Chloroplast"],
            "selectedAnswer": "",
            "correctAnswer": "Cytoplasm",
        },
        {
            "options": ["Cellulose", "Mitochondria"],
            "selectedAnswer": "",
            "correctAnswer": "Mitochondria",
        },
        {
            "options": ["Cell Wall", "Ribosomes"],
            "selectedAnswer": "",
            "correctAnswer": "Ribosomes",
        }
    ]
  },
  reducers: {

  }
})

export default quizSlice.reducer