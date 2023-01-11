let players = [];
let mostRecentOverwritten = [];

/**
 * Function addPlayer adds user inputted player name to player object array.
 */
function addPlayer() {

    let newPlayer = document.getElementById('enter-name').value;

    for (let player of players) {
        let nameToCheck = player.playerName;
        if (newPlayer === nameToCheck) {
            window.alert('Player name already exists! Please enter alternative name');
            document.getElementById('enter-name').value = '';
            document.getElementById('enter-name').focus();
            return;
        }
    }

    if (newPlayer.trim().length === 0) {
        window.alert('Please enter a player name!');
        document.getElementById('enter-name').value = '';
        document.getElementById('enter-name').focus();
        return;
    }

    mostRecentOverwritten = recordScreenRank()

    let playerObject = {
        playerName: newPlayer,
        points: 0
    };

    players.push(playerObject);

    printPlayerList();

    document.getElementById('enter-name').value = '';
    document.getElementById('enter-name').focus();
}

/**
 * Function printPlayerList prints
 * the current player names and points to screen when called.
 */
function printPlayerList() {

    let playerList = document.getElementById('player-list');

    playerList.innerHTML = `
    <h4>Player List</h4>
    <table>
        <thead>
            <tr>
                <th>Player Name</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    let tableBody = playerList.getElementsByTagName('tbody')[0];

    for (let player of players) {
        let name = player.playerName;
        let points = player.points;

        tableBody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${points}</td>
        </tr>
        `;
    }
}

/**
 * Function createNextTeams runs the process to send Team A and Team B to the user screen
 * when the Create Teams button is clicked.
 */
function createNextTeams() {

    //First checks if the players array order has changed.

    let currentPlayerArray = [];

    for (let player of players) {

        let add = player.playerName;
        currentPlayerArray.push(add);
    }

    let arrayChanged = true;
    let indexCount = 0;

    if (currentPlayerArray.length !== mostRecentOverwritten.length) {
        arrayChanged = true;
    } else {

        for (i = 0; i < currentPlayerArray.length; i++) {
            if (currentPlayerArray[i] === mostRecentOverwritten[i]) {
                indexCount = indexCount + 1;
            }
        }

        if (indexCount === currentPlayerArray.length) {
            arrayChanged = false;
        } else {
            arrayChanged = true;
        }
    }

    mostRecentOverwritten = recordScreenRank()

    let teamA = [];
    let teamB = [];

    //Now chooses the appropriate function.

    if (arrayChanged === true) {

        let [A, B] = createTeams();

        teamA = [...A];
        teamB = [...B];

    } else {

        let [A, B] = shuffleTeams();

        teamA = [...A];
        teamB = [...B];
    }

    let teamAList = document.getElementById('team-a');
    teamAList.innerHTML = '';

    for (let player of teamA) {
        teamAList.innerHTML += `<p>${player}</p>`;
    }

    let teamBList = document.getElementById('team-b');
    teamBList.innerHTML = '';

    for (let player of teamB) {
        teamBList.innerHTML += `<p>${player}</p>`;
    }
}


/**
 * createTeams Function creates teamA and teamB from the players array. If array = [a, b, c, d],
 * then Team A = [a, d] and Team B = [b, c].
 */
function createTeams() {

    let currentPlayerArray = [];

    for (let player of players) {

        let add = player.playerName;
        currentPlayerArray.push(add);
    }

    let [firstSortA, firstSortB] = split(currentPlayerArray);

    let [teamA, teamBEnd] = split(firstSortA);

    let [teamB, teamAEnd] = split(firstSortB);

    for (let player of teamAEnd) {
        teamA.push(player);
    }

    for (let player of teamBEnd) {
        teamB.push(player);
    }

    let teams = [teamA, teamB];

    return teams;
}

/**
 * split Function takes an array and splits it in two based on even and odd index.
 * 0 index placed in evens array. Returns two arrays.
 */

function split(array) {

    let even = [];
    let odd = [];

    for (let i = 0; i < array.length; i++) {

        if (i === 0) {
            let add = array[0];
            even.push(add);
        } else if (i % 2 === 0) {
            let add = array[i];
            even.push(add);
        } else {
            let add = array[i];
            odd.push(add);
        }
    }

    let evenOdd = [even, odd];

    return evenOdd;
}

/**
 * shuffleTeams function shuffles the last team by one player to create next teams.
 */

function shuffleTeams() {

    // gathers teamA from index.html
    let teamASource = document.getElementById('team-a').children;
    let teamA = [];

    for (let player of teamASource) {
        let add = player.textContent;
        teamA.push(add);
    }

    // gathers teamB from index.html
    let teamBSource = document.getElementById('team-b').children;
    let teamB = [];

    for (let player of teamBSource) {
        let add = player.textContent;
        teamB.push(add);
    }

    let removeA = teamA[0];
    teamA.splice(0, 1);
    let removeB = teamB[0];
    teamB.splice(0, 1);

    teamA.push(removeB);
    teamB.push(removeA);

    let teams = [teamA, teamB]

    return teams;
}

/**
 * Function updatePlayerPoints takes match results inputted by the user
 * and updates player points in the player array accordingly.
 */
function updatePlayerPoints() {

    let teamAScore = document.getElementById('team-a-score').value;
    let teamBScore = document.getElementById('team-b-score').value;

    if (teamAScore.trim().length === 0 || teamBScore.trim().length === 0) {
        window.alert('Please enter team scores!');
        document.getElementById('team-a-score').value = '';
        document.getElementById('team-a-score').focus();
        return;
    }

    mostRecentOverwritten = recordScreenRank();

    /* gathers teamA from index.html */
    let teamASource = document.getElementById('team-a').children;
    let teamA = extractTextContent(teamASource);

    /* gathers teamB from index.html */
    let teamBSource = document.getElementById('team-b').children;
    let teamB = extractTextContent(teamBSource);

    let pointsAwarded;

    if (teamBScore > teamAScore) {
        pointsAwarded = teamBScore - teamAScore;
    } else {
        pointsAwarded = teamAScore - teamBScore;
    }

    if (teamAScore > teamBScore) {
        distributeTeamPoints(teamA, pointsAwarded);
    } else {
        distributeTeamPoints(teamB, pointsAwarded);
    }

    // Re-orders the player array based on latest points from highest to lowest
    players.sort(function (a, b) {
        return b.points - a.points;
    });

    printPlayerList()

    document.getElementById('team-a-score').value = '';
    document.getElementById('team-b-score').value = '';
}

/**
 * extractTextContent Function takes an array of html elements and returns an array of
 * their text content strings.
 */
function extractTextContent(elementArray) {

    let stringArray = [];

    for (let element of elementArray) {
        let add = element.textContent;
        stringArray.push(add);
    }

    return stringArray;
}

/**
 * distributeTeamPoints function is called by the updatePlayerPoints function 
 * and it adds points in the players array for players on the winning team.
 */

function distributeTeamPoints(team, pointsAwarded) {
    for (let player of team) {
        for (let i = 0; i < players.length; i++) {
            if (player === players[i].playerName) {
                players[i].points = players[i].points + pointsAwarded;
            }
        }
    }
}

/**
 * Function deleteListedPlayer deletes user selected players from the player list.
 * This function runs the deletion process and calls other functions.
 */
function deleteListedPlayer() {

    document.getElementById('warning-message').classList.add('warning-on');

    let playerDetailRows = document.getElementsByTagName('tbody')[0].children;

    let playerNameCells = [];

    for (let player of playerDetailRows) {
        let add = player.children[0];
        playerNameCells.push(add);
    }

    for (let player of playerNameCells) {
        player.classList.add('delete-player');
        player.addEventListener('click', deleteSelectedPlayer);
    }
}

/**
 * Function deleteSelectedPlayer lives inside and is called by the deletedListedPlayer function
 * as part of the deletion process once user has selected the individual player to delete.
 */
function deleteSelectedPlayer(event) {

    mostRecentOverwritten = recordScreenRank()

    let playerCell = event.target;

    let player = playerCell.textContent;

    let index;

    for (let i = 0; i < players.length; i++) {
        if (player === players[i].playerName) {
            index = i;
        }
    }

    players.splice(index, 1);

    printPlayerList()

    document.getElementById('warning-message').classList.remove('warning-on');
}

/**
 * recordScreenRank function creates an array of
 * player names as per the display on screen and returns it.
 */
function recordScreenRank() {

    let check = document.getElementsByTagName('tbody')[0];

    if (check === undefined) {
        return;
    }

    let playerDetailRows = document.getElementsByTagName('tbody')[0].children;

    let playerRank = [];

    for (let player of playerDetailRows) {
        let add = player.children[0].textContent;
        playerRank.push(add);
    }

    return playerRank;
}

/**
 * Function enterKey is called by the keydown event listener connected to the enter-name input element.
 * Calls the addPlayer function when enter key pressed.
 */

function enterKey(event) {
    if (event.key === 'Enter') {
        addPlayer();
    }
}

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('enter-name').focus();

    let submitPlayerName = document.getElementById('submit-player-name');
    submitPlayerName.addEventListener('click', addPlayer);

    let enterName = document.getElementById('enter-name');
    enterName.addEventListener('keydown', enterKey);

    let createTeams = document.getElementById('create-teams');
    createTeams.addEventListener('click', createNextTeams);

    let submitMatchResult = document.getElementById('submit-match-result');
    submitMatchResult.addEventListener('click', updatePlayerPoints);

    let deletePlayer = document.getElementById('delete-player');
    deletePlayer.addEventListener('click', deleteListedPlayer);
});