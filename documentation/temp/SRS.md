YouKnowJS should be a single page app that consists of several routes 
(or subpages). All of these subpages should be embedded inside a main
page.



### Main page
Main page should consist of **upper bar** and **bottom bar**. The content of
the current subpage should be displayed between these two bars.

**upper bar** should be constantly fixed to the top of the screen.
            On it's left side should be name of the app and it's logo.
            On it's right side should be a navbar with 3 buttons:
1. Home page - takes user to the homepage
2. Log in or create account / Log out - as the name suggests
3. Scoreboard - takes users to the scoreboard subpage

    **NOTE** Clicking any of the navbar buttons while taking a quiz
    should display a warning popup stating that user is about to
    quit the quiz and that his/her progress will not be saved. Below
    that information should be two buttons: 



    1. 'OK' - will quit the  quiz and take user to the demanded 
                subpage
    2. 'Cancel' - will hide the popup and keep the user in the 
                                question page.

**bottom bar** should display info about copyrights, app's creators and all
             relevant links. Constantly fixed to the bottom of the screen.






### Subpages
1. Home page - displays currently available quizzes and allows user to pick
               one of them by clicking on the link (preferably with
               an image of the relevant YDKJS book)

    **NOTE** User does not have to log in to take the quiz. But if
    he/she attempts to take the quiz while not logged in, a popup
    should appear, stating that user can take the quiz, but his/her
    score will not be saved. Under that there should be two buttons:
    1. 'OK' - takes user to the question page with the first 
            question from the chosen quiz
    2. 'Log in' - takes user to the login page

2. Question page - after user picks a quiz, each question of that quiz should
                   be displayed as a separate subpage. Question subpage should
                   consist of a question, list of possible answers with 
                   checkboxes and a 'submit answer' button. Clicking a 'submit
                   answer' button should:
    1. Display an information if the submitted answer was
       correct
    2. Display and explanation on that question
    3. Display a 'next' button. Clicking 'next' button
       should take the user to another question page, that
       displays next question in a quiz
    4. If answered question was the last question in that
       quiz, instead of 'next' button, a 'score' button 
       should be displayed. Clicking 'score' button should
       take the user to the Score page.

3. Score page - should display the user's score in that quiz. User should see
                the amount of questions answered correctly, the amount of 
                question not answered correctly and his/her score.
                Below that, there should be two buttons:
    1. 'New quiz' - takes user to the home page
    2. 'Scoreboard' - takes user to the scoreboard page

4. Scoreboard page - displays 50 best scores. Information that should be
                     displayed: 
    1. Username
    2. Score
                        
    **NOTE** The scour should be the total amount of points
    that a user collected while doing quizzes. Basically for
    each correct answer user should get a certain amount of
    points assigned to his/her account. The points for all the
    questions in a single quiz should be assigned only after
    finishing that quiz.

5. Login or create account page - should display two simple forms: one for 
                                  logging in, and one for creating an 
                                  account. Under each form should be a 'submit'
                                  button that either logs the user in, or
                                  creates an account and logs the user in.
                                  After clicking a 'submit' button user should
                                  be taken to the home page.

6. Logout page - a simple page with an information that the user logged out.


