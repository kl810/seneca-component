# Seneca Frontend Tech Task

## Description
**Tech used:** React, Typescript, Javascript, HTML, CSS, Redux, Cypress

This component tests the user's knowledge of a topic, by having them move a series of toggles into the correct position. If all answers are correct, a button will appear and will need to be clicked to move onto the next question. When all questions in the quiz is completed, a button will appear with the text 'Quiz Completed!'. 

## UI/UX Requirements
- [x] The solution should lock once all correct answers have been selected so the toggles can no longer be switched
- [x] The toggles should animate between the two states
- [x] The background colour should change in proportion to how "correct" the answer is
- [x] The component should be responsive down to screens 320px wide

## Project Requirements
- [x] React + Typescript
- [x] The component should be reusable & extendable, it should be able to accommodate the question changing

## Extension
- [ ] The order of the questions & answer positions should be randomised
- [x] Your solution should be able to accommodate answers with both two and three toggle positions in the answers
- [x] You should make it easy to switch between the active question

## Limitations
- Quiz Data is saved as initial state in redux as opposed to being fetched from an API
- Only wrote integration tests for default page. Will need to test for complete integration and add component tests
- The text inside a button should stack when it overflows
- When page refreshes, the entire state resets and user is back to first question

## Assumptions
- There is no back button option, user will move on to next question after completing current question
- There is only one correct answer for each toggle-group 
- When 'Quiz Completed!' button is clicked, it moves onto another component or page

