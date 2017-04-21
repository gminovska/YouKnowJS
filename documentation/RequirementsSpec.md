## Actors

* Guest - not logged in

* User - logged in

* Admin - logged in with permission to add/delete/modify some of the content

## User stories

### Guest

* After entering the main page I can see a short description of the app plus 
  all the quizzes available and I can pick any of them.
* I can see a footer bar with some info on app's creators with relevant links

    G: Created by, GitHub repo link, what else..? Which other links you think 
       are relevant?
    K: Basically the 2 you have listed. But if you have for instance Linkedin 
       account and want to include it in the app - that's the place.

* I can see an upper navigation bar that contains most important links:
    1. Title + logo (after clicking it I go back to main page)
    2. General leaderboard
    3. Log in (that also gives an option to create account)
* I can see a title and logo of an app and a generic guest greeting

    G: Do we need a generic guest greeting? What should it say and where should 
       it be?
    K: We don't really. I was thinking that it would be something like
       "Hello stranger!" placed in the very same spot that user's 
       personalized greeting would be

* If I have created an account before, I can log in
* I can create a new account  
* I can go to a global leaderboard with 50 best total scores
* If I pick a quiz I am warned that my score won't be saved unless I log in

    G: So, when a quiz is clicked, should we display a page with the quiz 
       details (info on the quiz content, the number of questions and a 
       button to take the quiz) or should a click on a quiz directly start the
       quiz?
    K: We can have a CSS overlay on each quiz button/image that will display 
       these info on hover? **I like that idea, but hover is impossible on a mobile phone. So if we want our app to be mobile friendly, (which I think it should be)hover is a no go**  Another popup would be somewhat conflicting with
       warning... Or we can simply have a description. **Maybe the same message can inform on the quiz contents and that the scores will not be saved if not logged in. Give the option to login or take the quiz below the message**

* If I pick a quiz and decide not to log in after the warning was displayed,
  the first question from a chosen quiz is displayed
* I can choose answers and submit them by clicking a button
* I should not be able to submit an empty answer
* After submitting the answer I can see the result - information if my 
  answer was correct and an explanation on that question
* While taking a quiz I can see a progress bar that illustrates my progress
* After submitting and seeing the result, I can click a button to see the
  next question.
* After answering the last question in the quiz, I can see the amount of
  correct answers compared to total.
* After seeing my general results in the quiz I can click a button to go
  back to the main page.


### User
* After entering the main page I can see all the quizzes available and pick any
  of them
* I can see a footer bar with some info on app's creators with relevant links
* I can see an upper navigation bar that contains most important links:
    1. Title + logo (after clicking it I go back to main page)
    2. General leaderboard
    3. Log out
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
* After submitting and seeing the result, I can click a button and see the
  next question
* While taking a quiz I can see a progress bar that illustrates my progress
* After answering the last question in the quiz, I can see how I performed
  in it
* After seeing my personal results in the quiz I've just taken I can click 
  a button to go to:
  1. Main page
  2. Global leaderboard
  3. My personal score page

G: Where are those buttons? Are they below the score, or in the header that will be fixed on top and always accessible? It would be redundant if they are in both places..

* If I click on the navbar link while taking a quiz, I should see a warning that the quiz will be discontinued and the score not saved.
* That warning will give me an option to quit the quiz and go to the link I clicked, or stay and continue

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


