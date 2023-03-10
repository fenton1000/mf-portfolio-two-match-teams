# Portfolio Project 2 - Match Teams README
## 1. Purpose of the project

Match Teams is designed for groups playing non-competitive team sports for fun. It allows the user to enter participants' names and the application can then create two teams from the player list. Match results can be entered and this updates player points and therefore the player rankings. Subsequent team selections are based on the latest player rankings with the aim of picking more evenly matched teams.

Player points awarded are based purely on the score difference in a given match with all players on the winning side awarded the same points. This was considered the best approach in pursuit of a Minimum Viable Product and further refinement could be considered in the future. This is discussed in more detail below.

## 2. user stories

1. As a visiting user, I want to be able to add players to a player list.
2. As a visiting user, I want the application to create two teams using all players on the list. As we are playing for fun all players will play each match even if the numbers are uneven. No player is asked to sit out a match.
3. As a visiting user, I want to be able to add match results and have the application use this information to try to create more evenly balanced teams when I next hit the create teams button.
4. As a visiting user, I also need to be able to remove a player from the list if they leave early while the remainder of the group plays on.

## 3. Features

Please note that the features section contains relevant extracts from the project wireframes. The complete wireframes are included in section 6 of this document.

### 3.1 Header

* The header contains the application name "Match Teams" and a sub-heading, "Picks Teams so You Don't have to!" to provide a strong initial indication as to what the application does.

* The header contains a link to the How it Works section as this may well be off-screen on smaller devices from the beginning and may get pushed down off-screen as players are added and teams are created. It was not considered necessary to add links to other sections as they are close to the top or within a short scrolling distance.

* A home link is also provided.

<details><summary>Fig. 3.1.1 Mobile Header</summary>
<img src="documents/mobile-header.png"
alt="wireframe of header on mobile"></details>

<details><summary>Fig. 3.1.2 Desktop Header</summary>
<img src="documents/desktop-header.png"
alt="wireframe of header on desktop"></details>

### 3.2 Add Players

* Contains an input field for name entry and a submit "Add Player!" button to allow player names to be added to the list of players.

* Prevents the same name from being submitted twice or blank name entries from being submitted.

* In both mobile and desktop applications this feature has a prominent position at the top of the screen.

<details><summary>Fig. 3.2.1 Mobile Add Players</summary>
<img src="documents/pp2-wireframe-mobile-player-names.png"
alt="wireframe of add player section on mobile"></details>

<details><summary>Fig. 3.2.2 Desktop Add Players</summary>
<img src="documents/pp2-wireframe-desktop-player-names.png"
alt="wireframe of add player section on desktop"></details>

### 3.3 Player List and Player Delete

* As players are added via the Add Player function the player names appear listed on the screen in the player list section.

* The "Delete Player!" button is located just below the player list. This allows the removal of a player from the list at any point.

<details><summary>Fig. 3.3.1 Player List and Player Delete</summary>
<img src="documents/pp2-wireframe-mobile-playerlist-and-delete.png"
alt="wireframe of player list and player delete section"></details>

### 3.4 Create Teams

* The create teams section has a button "Create Teams!". When clicked the application divides the full player list into 2 teams, A & B.

* The two team lists are displayed on the screen directly above the "Create Teams!" button.

* If match results have been added, the players on winning teams will have received points equivalent to the winning margin. The players will be ranked on this basis and the player order and points to date for each player will be shown in the player list.

* When the Create Teams! button is clicked the player list will be divided into two teams based on rank order. This is the essential element of this application. This is the means by which the application endeavours to create more evenly-matched teams over time.

* If, as a base example, there were four players on the list, A, B, C, and D in that order, the application would divide them putting A and D together on one team and B and C together on the other. A simple split of every second player, putting A and C together would always favour team A assuming the ranking reasonably reflects the players' abilities. This AD BC approach is repeated as the application works down the list and the javascript code has been designed to split and sort the player array twice on every creation event to achieve this.

* If it happens that the ranking has not changed before a particular team creation event the application is designed to shuffle the previous teams in this case, because otherwise the application would create the same teams again. It is assumed that a user clicking create teams wants new teams every time.

<details><summary>Fig. 3.4.1 Create Teams</summary>
<img src="documents/pp2-wireframe-mobile-create-teams.png"
alt="wireframe of create teams section"></details>

### 3.5 Enter Match Result

* Contains two input fields to take the score from each of the two teams, A & B.

* Has a submit button labelled "Add Match Result!"

<details><summary>Fig. 3.5.1 Enter Match Result</summary>
<img src="documents/pp2-wireframe-mobile-result.png"
alt="wireframe of enter match result section"></details>

### 3.6 How it Works

* Provides bullet point list describing how to use the application.

* Is located at the bottom of the page.

<details><summary>Fig. 3.6.1 How it Works</summary>
<img src="documents/pp2-wireframe-desktop-how-it-works.png"
alt="wireframe of how it works section"></details>

## 4. future features

There are some features that could be added in time. These generally relate to the method of ranking players through awarding points with a view to refining the process based on additional input and analysis.

1. In addition to providing match results, the user could also be provided with the additional optional ability to identify the scorers in a game and how much they scored. Player points could be awarded accordingly. This could allow scoring players on a losing team to gain points.

2. The system could award additional points to players on a winning team if they hold the opposition scoreless. This would award defensive effort.

3. The system could also track the number of wins, draws and losses for each player, provide this information to the user, and add or subtract points accordingly.

In deciding to provide the product initially without any of these features the key consideration is the user the application is aimed at. The product is aimed at the recreational player using the application for fun. They do not expect a detailed analysis or complex system of team selection. Therefore while the additional features outlined above would be interesting and add value they are not expected and therefore the product can and should be deployed in its current form now.

## 5. Typography and color scheme

### 5.1 Typography

* The chosen font is Nunito Sans with a font-weight of 500. It is considered that it conveys the simple, easy-to-read approach required.

* The font was chosen from Google Fonts with reference to www.fontpair.co

* The fall-back font is sans-serif.

### 5.2 Color Scheme

* The font-color is #131817 which is close to black and was chosen to ensure the text is easily read on lighter backgrounds.

* All other colors have been chosen to ensure clear contrast with the font-color. Varying shades of green were considered appropriate to a sports-related application.

* The background color is #9dce76. The key consideration is that it does not distract from the site content.

* The background color for the header is #9dce76 and was chosen to provide a degree of contrast from the main body of the page without being radically different. The subtle difference is important as the header is fixed and would otherwise blend into the background at certain scroll locations.

* The background color for the link hover position is the same as the main background. This provides adequate contrast with the pre-hover position.

## 6. wireframes

### 6.1 Initial Screen on Mobile Platform
![wireframe of initial screen on mobile](documents/wireframe-one.png "Initial Mobile Screen")
### 6.2 Screen on Mobile after Player List Entry
![wireframe of screen on mobile after player list entry](documents/wireframe-two.png "mobile screen with player list")
### 6.3 Screen on Mobile after Team Creation
![wireframe of screen on mobile after team creation](documents/wireframe-three.png "mobile screen with teams lists")
### 6.4 Screen on Desktop Platform
![wireframe of screen on desktop](documents/wireframe-four.png "desktop screen")

## 7. technology

The following technologies were used in developing and deploying the website:

* HTML

* CSS

* Javascript

* The IDE used was GITPOD

* The repository used is GITHUB

* The website is deployed on GITHUB pages.

* Testing was carried out using Chrome Developer Tools including lighthouse for responsiveness and accessibility.

* In addition to using Chrome Developer tools for the primary checks of responsiveness, the application was also looked at on the https://ui.dev/amiresponsive website.

* Balsamiq was used to prepare wireframes.

* Google Chrome was used as the main web browser both for accessing the IDE and the repository as well as to view the website application during development.

* Microsoft Edge and Mozilla Firefox were used when testing the site compatibility with other web browsers.

## 8. Testing

   ### 8.1 Code Validation

The code successfully passed html validation:

![html validation screenshot](documents/html-validation.png "html validation screenshot")

The code successfully passed css validation:

![css validation screenshot](documents/css-validation.png "css validation screenshot")

The code successfully passed javascript (jshint) validation:

![javascript validation screenshot](documents/jshint-validation.png "javascript validation screenshot")

The configuration used in jshint was as follows:

![javascript configuration screenshot](documents/jshint-config.png "javascript configuration screenshot")

### 8.2 Test Cases

 #### 8.2.1 User Story 1

As a visiting user, I want to be able to add players to a player list.

This requirement is met by the provision of an input field for the entry of a player name by the user and an Add Player button. The user gets immediate feedback on the screen that name entry has happened by the fact of the name appearing on the screen.

These features have certain requirements tested as follows:

Test Requirement|Met Requirement when tested
---|:---:
Input field provided for name entry|Yes
Cursor in entry field on initial page load|Yes
Inputted name appears on screen when Add Player! button pressed|Yes
Keyboard "Enter" key will also add player name|Yes
Cursor appears again in a blank entry field after name entry|Yes
Attempting to enter the same name twice will trigger an alert|Yes
Attempting to enter a blank name will trigger an alert|Yes

<details><summary>Fig. 8.2.1.1 Add Player Section</summary>
<img src="documents/add-player.png"
alt="screenshot of add player section"></details>

#### 8.2.2 User Story 2

As a visiting user, I want the application to create two teams using all players on the list. As we are playing for fun all players will play each match even if the numbers are uneven. No player is asked to sit out a match.

This requirement is met by the provision of a Create Teams! button which when clicked divides the player list into two teams A and B. Team A and Team B are printed to the screen above the Create Teams Button!

These features have certain requirements tested as follows:

Test Requirement|Met Requirement when tested
---|:---:
Create Teams button is provided|Yes
When clicked the create teams button prints Team A and Team B to screen|Yes
If player numbers are uneven teams are still created using all players|Yes
Attempting to create teams with 1 or no players returns an alert|Yes

<details><summary>Fig. 8.2.2.1 Create Teams Section</summary>
<img src="documents/create-teams.png"
alt="screenshot of create teams section"></details>

#### 8.2.3 User Story 3

As a visiting user, I want to be able to add match results and have the application use this information to try to create more evenly balanced teams when I next hit the create teams button.

This requirement is met by the provision of input fields to add team scores and an Add Match Result! button to submit them. Furthermore, the individual player points are displayed in the player list and can be seen to update upon submitting a match result. Finally the Create Teams! button when pressed on again creates teams based on the latest ranking except if the ranking remains unchanged as could occur in the event of a draw or if the score difference in a particular game is too low to impact the current rankings. In this case the teams are changed by shuffling the most recent teams and the user is advised of this on screen.

These features have certain requirements tested as follows:

Test Requirement|Met Requirement when tested
---|:---:
Add Match Result! button is provided|Yes
An input field is provided for each team score|Yes
When scores are entered and the button is clicked a confirmation message appears|Yes
If the button is clicked without a number in either field an alert is displayed|Yes
When the result is added the player points in the player list are updated|Yes
When the player points are updated the player list order is updated accordingly|Yes
When the create teams button is next clicked teams are created based on ranking and a message advising of this is displayed|Yes
If the ranking order has not changed clicking the create teams button shuffles the teams and a message advising of this is displayed|Yes
A ranking of players A, B, C, and D creates teams A with D and B with C|Yes

<details><summary>Fig. 8.2.3.1 Team Creation based on rank using A with D, B with C split</summary>
<img src="documents/ranking.png"
alt="screenshot of create teams section with ranked teams"></details>

<details><summary>Fig. 8.2.3.2 Enter match result fields and button</summary>
<img src="documents/result.png"
alt="screenshot of add match result section"></details>

<details><summary>Fig. 8.2.3.3 Player points updated</summary>
<img src="documents/player-points.png"
alt="screenshot of player list with points added based on result"></details>

#### 8.2.4 User Story 4

As a visiting user, I also need to be able to remove a player from the list if they leave early while the remainder of the group plays on.

This requirement is met by the provision of a delete button that when pressed, highlights each player in the player list allowing an individual player to be clicked on and deleted. A cancel button is also provided to allow the user to exit the delete function without deleting a player.

These features have certain requirements tested as follows:

Test Requirement|Met Requirement when tested
---|:---:
Delete Player! button is provided|Yes
When Delete Player! button is pressed all of the players on the player list are highlighted for potential deletion|Yes
A warning message regarding deletion and the cancel option is displayed|Yes
Clicking on a player deletes them from the player list|Yes
Deleted players are also removed from the currently displayed teams|Yes
Clicking the cancel button exits the delete function|Yes

<details><summary>Fig. 8.2.4.1 Delete Player</summary>
<img src="documents/delete-player.png"
alt="screenshot of delete player section"></details>

### 8.3 Fixed Bugs

1. The create teams function initially added player names to the end of the previous teams on screen rather than displaying new teams.

Solution: Changed the operator adding the first line of text on each recreation from += to = so that the first text addition on each cycle overwrites the previous information, with the remainder of the data on each cycle continuing to be added with the += operator.

2. Initially, the printPlayerList function failed to print the list to the screen in the desired table format.

Solution: The solution was to ensure the correct javascript code sequencing with the table being created on a particular line and then targetting the just created tbody html element on the following lines.

3. Initially, the shuffle function to create alternative teams if the ranking does not change could only toggle back and forth between two teams options if the ranking remained unchanged for a number of matches.

Solution: The initial system relied only on a comparison of the current teams with the next teams the ranking would provide. If they were the same, the teams would shuffle by one player. After one toggle however, the latest team would appear different from the ranking-based teams (because of the shuffle) and so the ranking-based teams would be chosen again. In the event of no change to the ranking, it reverts to the second-last team set. The current system includes a separate ranking array to record the last ranking before it is overwritten by any of the add player, delete player or add points functions. This allows a comparison of the current ranking and the one just previous before next the teams creation and the shuffle team option is always called if the ranking is unchanged. There are further checks required also to address some particular corner cases that were not considered during design and development and emerged as bugs during testing. These are addressed separately below.

4. Initially some of the buttons jumped position in an undesireable manner at certain screen widths.

Solution: This was addressed with media queries focusing mainly on element widths and max-widths.

5. When a user attempted to create teams with one or no players available in the player list the application delivered poor user interface output. See screenshots:

<details><summary>Fig. 8.3.1 Poor UI with no players but attempted team creation</summary>
<img src="documents/poor-ui-none.png"
alt="screenshot of poor ui feedback showing two undefined statements"></details>

<details><summary>Fig. 8.3.2 Poor UI with one player but attempted team creation</summary>
<img src="documents/poor-ui-one.png"
alt="screenshot of poor ui feedback showing one undefined statement"></details>

Solution: An if statement was added to the primary team creation function so that if the number of players is less than two the function gets a return instruction and a message is displayed to the user.

6. When a player is deleted, initially the application removed them from the players list immediately but not from the displayed teams. This was considered an unsatisfactory and misleading User Experience even if proceeding to create new teams did resolve the issue.

Solution: A new function was created specifically to address this issue and remove deleted players from teams and update the displayed team lists. This function is called as part of the deletion process. This was done to create a nice UX even though it is quite likely in reality that following a player leaving the Create Teams! button will be used immediately after. Consideration was given to simply calling the existing shuffle function but again from a UX viewpoint, the user may not expect a full team shuffle just by deleting. Furthermore, if they had yet to input a match result and carried out deletion first the opportunity to enter a result would be lost, probably unexpectedly from a user viewpoint.

7. In certain scenarios, it was found that the application awarded players on losing teams negative points rather than giving them as positive points to the winning team players.

Solution: The parseInt() method has been applied in the javascript extracting the score data from the input fields.

8. Close to the final deployment it was discovered that in a scenario where a user first added or deleted a player and then proceeded to enter a match score where the score difference was too low to affect the rankings the subsequent attempt to create teams would create anomalies. Team creation would ignore the added players and in the case of deletion would for example in a scenario where say there had been two teams of four with two players deleted from one team the shuffle function would be deployed and simply maintain the 4 to 2 split now existing.

Solution: When the user adds a result as above the system first creates a copy of the existing player ranking for future comparison before adding the latest points. However, if the user has added or deleted players before adding the score (rather than the other way around) these changes are already reflected in the primary array. Therefore, the copy created just before adding the scores already includes the player updates. Now if the new score doesn't change the ranking, then the next comparison before creating teams will show the ranking as unchanged and therefore call the shuffle function. This shuffles the last teams and was leading to the scenarios described above. The solution provided was to add further screening via if statements to the createNewTeams function as follows. The total number of players left on the last teams is compared to the latest player array and if this is different the array has changed. Also, the names left are compared with the latest array to cover the scenario where an equal number of players could have been added and deleted. Finally, if the difference in length of the remaining teams is greater than 1 then clearly deletions have occurred. In these scenarios, the function to create teams from the ranking is called. If several deletions but no additions have occurred across both teams but the final remaining teams are the same length or different by only one player the shuffle function is used. However, given that the deletions will have changed the teams anyway this is considered acceptable.

   ### 8.4 Supported Screens and Browsers

   #### 8.4.1 Supported Screens

The site has been tested and was found to be responsive and work for the following screen sizes using Chrome Developer Tools:

* Galaxy Fold

* Mobile 375px

* Mobile 425px

* Tablet 768px

* Laptop 1024px

* Laptop 1440px

* Screen 2225px

The Am I Responsive website generates the following screen examples:

![shows sample mobile, tablet, laptop and desktop screens with the application responding adequately](documents/amiresponsive.png "am i responsive screenshot showing example sceeen sizes")

   #### 8.4.2 Supported Browsers

The site has been tested and was found to work on the following internet browsers:

* Google Chrome

* Microsoft Edge

* Firefox

### 8.5 Accessibility

Lighthouse in Google Chrome Developer Tools was used to assess accessibility and it was found to be acceptable.

#### Fig.8.5.1 Lighthouse for Desktop

![lighthouse results showing 100 in all categories](documents/lighthouse-desktop.png "lighthouse desktop testing screenshot")

<details><summary>Fig. 8.5.2 Lighthouse for Mobile</summary>
<img src="documents/lighthouse-mobile.png"
alt="lighthouse results showing hight results in all categories."></details>

## 9. Deployment

   ### 9.1 via gitpod

The site was developed in gitpod as follows:

1. From the github repository created for the project (see below) the Gitpod button installed as a chrome browser extension was clicked. A Gitpod workspace was created.

2. To view the ongoing development in a separate browser tab, the command python3-m http.server was entered in the IDE terminal.

3. At regular appropriate intervals the latest version of the code was saved via the git add and git commit commands. Appropriate commit messages were added to control the revisions.

4. The git push command was used to push all committed code and documentation to the repository for secure storage.

   ### 9.2 via github pages

1. The Code Institute project template was accessed on github at https://github.com/Code-Institute-Org/gitpod-full-template and the Use this Template button clicked to create a project-specific repository.

2. All files and documents pushed from Gitpod appear in the repository.

3. The website is deployed to github pages as follows:

* From the project repository click on the settings button.

* Then click on Pages in the options listed to the left.

* Chose to deploy from a branch and select the main branch.

* Deploy the page.

* The web page is deployed to github pages and a link to the page is provided. This may take a few minutes.

* Click on the link to access the deployed website. The link can also be copied to anyone needing to access the site as can the repository address.

* Once deployed any further changes pushed from Gitpod will be reflected on the website following a hard refresh of the pages. It may take a few minutes for changes to transfer so it may be necessary to complete a hard refresh after a few minutes if changes do not appear reflected in the latest pages at first.

* The live site can be accessed <a href="https://fenton1000.github.io/mf-portfolio-two-match-teams/" target="_blank">here</a>

## 10. credits

* Code Institute for the Gitpod template provided at https://github.com/Code-Institute-Org/gitpod-full-template allowing easy set up of a repository and workspace as well as initial project html template.

* Code Institute Love Maths example project for general guidance as to minimun requirements and overview of approach and industry conventions. In particular for guidance on the use of Event Listeners, the .focus() method, the keydown listener and the event 'enter', alerts and emptying input fields.

* Google Fonts for imported text font.

* www.fontpair.co for guidance on font options.

* w3schools - www.w3schools.com for information on various javascript methods including event listeners and methods such as event.target and adding and removing class attributes.

* Code Institute Rock Paper Scissors Project and README example for minimun requirements.

* https://ui.dev/amiresponsive for the screen size images in section 8.4 of this README.

* MDN web docs developer.mozilla.org for general guidance on javascript rules and methods and in particular the use of 
 .removeEventListener.

* javascript.tutorial.net for guidance on the process of returning nested arrays from a function.

* Free Code Camp freecodecamp.org, "How to Clone an Array in Javascript" by Yazeed Bzadough for information on passing an array to a new variable.

* Fellow students in the KCETB-Code Institute cohort for the feedback, advice and, constant discussion of all things code.

* Ms. Irene Neville, Code Institute cohort facilitator, for the provision of or signposting towards all key pieces of information needed to ensure the successful completion of the project to the required standards.

* Mr. Rohit Sharma (Mentor) for guidance on the overall project approach, industry standards and, README requirements. Also for specific signposting towards .trim() method and js docs standards.