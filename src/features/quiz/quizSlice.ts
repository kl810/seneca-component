import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    question: "An animal cell contains",
    correctCount: 0,
    isComplete: false,
    answerOptions: [
        {
            "id": 1,
            "options": ["Cell Wall", "Ribosomes"],
            "selectedAnswer": "",
            "correctAnswer": "Ribosomes",
            "isCorrect": false,
        },
        {
            "id": 2,
            "options": ["Cytoplasm", "Chloroplast"],
            "selectedAnswer": "",
            "correctAnswer": "Cytoplasm",
            "isCorrect": false,
        },
        {
            "id": 3,
            "options": ["Cellulose", "Mitochondria"],
            "selectedAnswer": "",
            "correctAnswer": "Mitochondria",
            "isCorrect": false,
        },
        {
            "id": 4,
            "options": ["Cell Wall", "Ribosomes"],
            "selectedAnswer": "",
            "correctAnswer": "Ribosomes",
            "isCorrect": false,
        }
    ]
  },
  reducers: {
    updateSelectedAnswer: (state, action) => {
      const {toggleId, selectedAnswer} = action.payload
      const activeToggle = state.answerOptions.find(toggle => toggle.id === toggleId) //find selected toggle
      if (activeToggle) {
        activeToggle.selectedAnswer = selectedAnswer          //updated selectedAnswer with value of button clicked
        activeToggle.isCorrect = (activeToggle.selectedAnswer === activeToggle.correctAnswer)   // check if selectedAnswer === correctAnswer and if true, set isCorrect to true        
      }

      const correctCount = state.answerOptions.reduce((count, option) =>    //iterate array and count number of isCorrect is true
        count + (option.isCorrect ? 1 : 0), 0);

      state.correctCount = correctCount;     //update number of correct answers

      state.isComplete = correctCount === state.answerOptions.length  //isComplete true when all answers correct
    }
  }
})

export const { updateSelectedAnswer } = quizSlice.actions

export default quizSlice.reducer