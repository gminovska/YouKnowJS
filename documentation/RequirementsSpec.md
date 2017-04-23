## Actors

* Guest - not logged in
* User - logged in
* Admin - logged in with permission to add/delete/modify some of the content

## User stories

### Guest

* On the *main page* I can see:

    * A **header** that contains most important links:
        1. Title + logo (click: takes me back to the main page.)
        2. General leaderboard (click: I see a page with the 50 best scores and users who achieved them)
        3. Generic greeting - "Hello stranger" (non-clickable)
        4. Log in (click: I see fields where I can put my email(or username) and password to log in, 
        and an option to create an account if I don't have one)

      If I scroll down the page, the header remains fixed to the top.       

    * **Main section** with a short description of the app and all the quizzes available. 
    (and I can click on any of them.)

    * A **footer** bar with info on app's creators with relevant links

* To *create an account* I need to fill in the following required fields
    1. username
    2. email
    3. password (minimum 8 characters?)
    4. repeat password
    5. submit

If my account is created successfully, I am taken back to the main page as a user.
If there was a problem, I see a notification about what went wrong. (discuss:what can go wrong?)

* To *take a quiz*, I click on any of the quizzes available on the main page.
  * Clicking on a quiz shows me:
      * Short description of the quiz topic
      * The number and format of questions
      * Notification that my score will not be saved unless I log in
      * A button to log in (click: takes me to the log in page)
      * An button to take the quiz(click: takes me to the first quiz question)

* *During the quiz*:
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

If I click on a header link while taking a quiz: 
* I should see a warning that the quiz will be discontinued and the score not saved.
* That warning will give me an option to quit the quiz 
  and go to the link I clicked, or stay and continue

### User

To *log in*:
  * I click on the log in header link that takes me to the login page
  * I need to fill in my email/username and password

If there was a problem, I get a notification.(discuss: retrieve username/password functionality?)
If my login was successful, I am taken back to the homepage that is somewhat different 
from the guest homepage

The *differences* are:

  * The header shows me:
    * Personalized greeting - Hello username instead of the generic one
    * A log out link instead of the log in link
    * **My Scores** link - click on it will show me: (needs further refinement)
      1. My 5 last scores on each quiz
      2. My best scores for each quiz
      3. How am I placed on the global scoreboard on each quiz

  * To *take a quiz*, I click on any of the quizzes available on the main page.
    * Clicking on a quiz shows me:
        * Short description of the quiz topic
        * The number and format of questions
        * ~~Notification that my score will not be saved unless I log in~~
        * ~~A button to log in (click: takes me to the log in page)~~
        * An button to take the quiz(click: takes me to the first quiz question)
    * After seeing the results of the quiz I just took I see:
        * Button to take another quiz (click: takes me to the main page)
        * See My Scores(click: takes me to the MyScores page)


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
* User can save partial progress on a quiz and resume the quiz at a later time


