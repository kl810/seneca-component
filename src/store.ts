import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './features/quiz/quizSlice'

const store = configureStore({
  reducer: {
    quiz: quizReducer
  }
})

export type RootState = ReturnType<typeof store.getState>  //Type for states

export default store
