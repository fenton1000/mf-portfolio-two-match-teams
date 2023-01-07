const players = [];

document.addEventListener('DOMContentLoaded', function() {
    let submitPlayerName = document.getElementById('submit-player-name');
    submitPlayerName.addEventListener('click', addPlayer);

    let createTeams = document.getElementById('create-teams');
    createTeams.addEventListener('click', createNextTeams);

    let submitMatchResult = document.getElementById('submit-match-result');
    submitMatchResult.addEventListener('click', updatePlayerPoints);

    let deletePlayer = document.getElementById('delete-player');
    deletePlayer.addEventListener('click', deleteListedPlayer);
});

/**
 * Function addPlayer adds user inputted player name to player object array.
 */
function addPlayer() {
    let newPlayer = document.getElementById('enter-name').value;

    for (player of players) {
        let nameToCheck = player.playerName;
        if (newPlayer === nameToCheck) {
            alert('Player name already exists! Please enter alternative name');
            throw 'Name already exists!';
        }
    }

    let playerObject = {
        playerName: newPlayer,
        points: 0
    };

    players.push(playerObject);

    let playerList = document.getElementById('player-list');

    playerList.innerHTML += `<p>${newPlayer}</p>`;
}

/**
 * Function createNextTeams creates two team selections from the players array
 * based on array index. Sends Team A and Team B to user screen.
 */
function createNextTeams() {

/* If array = [a, b, c, d, e, f, g, h] Team A = [a, d, e,h] and 
Team B = [b, c, f, g]. Hence the initial sort and second sort below. */

    let firstSort1 = [];
    let firstSort2 = [];

    for (let i=0; i < players.length; i++) {

        if (i === 0) {
            let add = players[0].playerName;
            firstSort1.push(add);
        } else if (i % 2 === 0) {
            let add = players[i].playerName;
            firstSort1.push(add);
        } else {
            let add = players[i].playerName;
            firstSort2.push(add);
        }
    }

    let teamA = [];
    let teamAPart2 = [];
    let teamB = [];
    let teamBPart2 = [];

    for (let i=0; i < firstSort1.length; i++) {

        if (i === 0) {
            let add = firstSort1[0];
            teamA.push(add);
        } else if (i % 2 === 0) {
            let add = firstSort1[i];
            teamA.push(add);
        } else {
            let add = firstSort1[i];
            teamBPart2.push(add);
        }
    }

    for (let i=0; i < firstSort2.length; i++) {

        if (i === 0) {
            let add = firstSort2[0];
            teamB.push(add);
        } else if (i % 2 === 0) {
            let add = firstSort2[i];
            teamB.push(add);
        } else {
            let add = firstSort2[i];
            teamAPart2.push(add);
        }
    }

    for (player of teamAPart2) {
        teamA.push(player);
    }

    for (player of teamBPart2) {
        teamB.push(player);
    }

    let teamAList = document.getElementById('team-a');

    for (player of teamA) {
        teamAList.innerHTML += `<p>${player}</p>`;
    }

    let teamBList = document.getElementById('team-b');

    for (player of teamB) {
        teamBList.innerHTML += `<p>${player}</p>`;
    }
}

/**
 * Function updatePlayerPoints takes match results inputted by the user
 * and updates player points in the player array accordingly.
 */
function updatePlayerPoints() {
    
    let teamAScore = document.getElementById('team-a-score').value;
    let teamBScore = document.getElementById('team-b-score').value;

    /* gathers teamA from index.html */
    let teamASource = document.getElementById('team-a').children;
    let teamA = [];

    for (player of teamASource) {
        let add = player.textContent;
        teamA.push(add);
    }
    /* gathers teamB from index.html */
    let teamBSource = document.getElementById('team-b').children;
    let teamB = [];

    for (player of teamBSource) {
        let add = player.textContent;
        teamB.push(add);
    }

    console.log(teamA);
    console.log(teamB);

    
    let pointsAwarded; 
    
    if (teamBScore > teamAScore) {
        pointsAwarded = teamBScore - teamAScore;
    } else {
        pointsAwarded = teamAScore - teamBScore;
    }
    
    if (teamAScore > teamBScore) {
           for (player of teamA) {
            for (let i = 0; i < players.length; i++) {
                if (player === players[i].playerName) {
                    players[i].points = players[i].points + pointsAwarded
                }
            } 
        }
    } else {
        for (player of teamB) {
            for (let i = 0; i < players.length; i++) {
                if (player === players[i].playerName) {
                    players[i].points = players[i].points + pointsAwarded
                }
            } 
        }
    }
    
    // Re-orders the player array based on latest points from highest to lowest
    players.sort( function(a,b) {return b.points - a.points});
    
    console.log(players);
}