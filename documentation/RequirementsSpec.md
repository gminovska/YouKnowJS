## Actors

* Guest - user that is not logged in
* User - user that is logged in
* Admin - user with permissions to add/delete/modify some of the content

        I don't like how I define User by using the word 'user', but couldn't 
        come up with anything better. Consumer?

## User stories

###Guest
* After entering the main page I can see all the quizzes available and pick any
  of them
* I can see a footer bar with some info on app's creators with relevant links
* I can see an upper navigation bar that contains most important links
* I can see a title and logo of an app and a generic guest greeting
* If I have created an account before, I can log in
* I can create a new account  
* I can go to a global leaderboard with 50 best total scores
* If I pick a quiz I am warned that my score won't be saved unless I log in
* If I pick a quiz and decide not to log in after the warning was displayed,
  the first question from a chosen quiz is displayed
* I can choose answers and submit them by clicking a button
* I should not be able to submit an empty answer
* After submitting the answer I can see the result - information if my 
  answer was correct and an explanation on that question
* While taking a quiz I can see a progress bar that illustrates my progress
* After submitting and seeing the result, I can see the next question
  in the quiz
* After answering the last question in the quiz, I can see how I performed
  in it
* After seeing my general results in the quiz I am taken back to the main page


### User
* After entering the main page I can see all the quizzes available and pick any
  of them
* I can see a footer bar with some info on app's creators with relevant links
* I can see an upper navigation bar that contains most important links
* I can see a title and logo of an app and a personalized greeting
* I can log out
* I can go to a global leaderboard with 50 best total scores
* I can go to a page with my personal scores that will show me:
    1. My 5 last scores on each quiz
    2. My best scores for each quiz
    3. How am I placed on the global scoreboard on each quiz
* If I pick a quiz the first question from it is displayed
* I can choose answers and submit them by clicking a button
* I should not be able to submit an empty answer
* After submitting the answer I can see the result - information if my 
  answer was correct and an explanation on that question
* After submitting and seeing the result, I can see the next question
  in the quiz
* While taking a quiz I can see a progress bar that illustrates my progress
* After answering the last question in the quiz, I can see how I performed
  in it
* After seeing my personal results in the quiz I've just taken I can go to:
    1. Main page
    2. Global leaderboard
    3. My personal score page

### Admin
* I can log in 
* Link to admin login page should not be visible in the app
  I should enter my login page by typing a proper address in browser's address
  bar
* I can disable and enable quizzes. Disabled quizzes will not be visible to 
  users and guests in the main page


## Nice to have features
* Admin can add/modify/delete the content of the quizzes
* User can see some fancy diagrams in his/her personal score page


