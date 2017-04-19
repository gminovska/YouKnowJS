## Actors

* Guest - user that is not logged in
* User - user that is logged in
* Admin - user with permissions to add/delete/modify some of the content

        I don't like how I define User by using the word 'user', but couldn't 
        come up with anything better. Consumer?

        I would avoid the use of "user" altogether. Seems redundant and somewhat ambiguous since we have User as actor. We could say 'person', but that is unnecessary and a bit silly.

        * Guest - is not logged in
        * User - is logged in
        * Admin - has permissions ...

## User stories

### Guest
* After entering the main page I can see all the quizzes available and pick any
  of them.

  G: Are the quizzes all I see on the main page? Is there some general info on what this app is? (Some sort of jumbotron with a nice image and a line or two on what this app is about?)

* I can see a footer bar with some info on app's creators with relevant links

G: Created by, GitHub repo link, what else..? Which other links you think are relevant?

* I can see an upper navigation bar that contains most important links

G: Most important links: A title/logo that I can click and will take me back to the homepage, Leaderboard, Log in. (when log in is clicked, there will be an option to create an account). Alternatively, there can be separate link "Sign Up" on the navigation.

* I can see a title and logo of an app and a generic guest greeting

G: Do we need a generic guest greeting? What should it say and where should it be?

* If I have created an account before, I can log in
* I can create a new account  
* I can go to a global leaderboard with 50 best total scores
* If I pick a quiz I am warned that my score won't be saved unless I log in

G: So, when a quiz is clicked, should we display a page with the quiz details (info on the quiz content, the number of questions and a button to take the quiz) or should a click on a quiz directly start the quiz?

* If I pick a quiz and decide not to log in after the warning was displayed,
  the first question from a chosen quiz is displayed
* I can choose answers and submit them by clicking a button
* I should not be able to submit an empty answer
* After submitting the answer I can see the result - information if my 
  answer was correct and an explanation on that question
* While taking a quiz I can see a progress bar that illustrates my progress
* After submitting and seeing the result, I can see the next question
  in the quiz

G: Do I click on a next button in order to see the next question, or it is just under the explanation of the previous?

* After answering the last question in the quiz, I can see how I performed
  in it

G: Do we display a percantage, or the number of correct questions?

* After seeing my general results in the quiz I am taken back to the main page

G: Do I click a button to go back? Am I taken back automatically after some time?


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


