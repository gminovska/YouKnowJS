Note: 
This is a initial draft document, created so I can share my vision of the  requirements format, as well as some topics we should discuss further. 

## Actors: 

* Guest - app user that does not have an account, or not logged in yet
* User - has an account and is logged in
* Admin - creator of the app

## User Stories:
As a Guest:

* I can see all the quizzes on the main page
* I see a header with links for login,create an account and contact
* I see the app logo on the left. Clicking on it takes me to the homepage
* If I click on a quiz, I get a notification that my scores will not be saved if I am not logged in. I can chose to take the quiz anyway, login, or create an account.
* **I should not be able to see a scoreboard link. That link is available for users only.**

... 

As a User:

* I see a header with the logo, a greeting with my name (Hello, John), a logout and a scoreboard link

Scoreboard:
* A user's scores for each quiz, like a log with the date the quiz was taken, and the score. 
* User ranking per quiz
* Global leaderboard - best cumulative score

Quiz:
* I should be able to see my quiz progress - (Something like: Question 2 out of 15, or a progress bar?) 

* What happens if I click on submit without selecting an answer/answers? One possibility is that will count as incorrect and the explanation will be displayed. Another option is to be notified that I must select an answer before submitting. 

Nice to have features:
* I could skip a question and come back to it later
* As an admin, once I log in I can create new quiz, or delete/modify an existing one.
