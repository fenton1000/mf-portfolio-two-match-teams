const players = [];

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('enter-name').focus();

    let submitPlayerName = document.getElementById('submit-player-name');
    submitPlayerName.addEventListener('click', addPlayer);

    let enterName = document.getElementById('enter-name');
    enterName.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addPlayer();
        }
    });

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

    for (let player of players) {
        let nameToCheck = player.playerName;
        if (newPlayer === nameToCheck) {
            alert('Player name already exists! Please enter alternative name');
            document.getElementById('enter-name').value = '';
            document.getElementById('enter-name').focus();
            throw 'Name already exists!';
        }
    }

    if (newPlayer === '') {
        alert('Please enter a player name!');
        document.getElementById('enter-name').value = '';
        document.getElementById('enter-name').focus();
        throw 'Empty string entered at name!';
    }

    if (newPlayer === ' ') {
        alert('Please enter a player name!');
        document.getElementById('enter-name').value = '';
        document.getElementById('enter-name').focus();
        throw 'Empty string entered at name!';
    }

    if (newPlayer === '  ') {
        alert('Please enter a player name!');
        document.getElementById('enter-name').value = '';
        document.getElementById('enter-name').focus();
        throw 'Empty string entered at name!';
    }

    let playerObject = {
        playerName: newPlayer,
        points: 0
    };

    players.push(playerObject);

    let playerList = document.getElementById('player-list');

    playerList.innerHTML += `<p>${newPlayer}</p>`;

    document.getElementById('enter-name').value = '';
    document.getElementById('enter-name').focus();
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

    for (let i = 0; i < players.length; i++) {

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

    for (let i = 0; i < firstSort1.length; i++) {

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

    for (let i = 0; i < firstSort2.length; i++) {

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

    for (let player of teamAPart2) {
        teamA.push(player);
    }

    for (let player of teamBPart2) {
        teamB.push(player);
    }

    // Prevent renaming same teams in event of draw
    // gathers teamACheck from index.html
    let teamACheckSource = document.getElementById('team-a').children;
    let teamACheck = [];

    for (let player of teamACheckSource) {
        let add = player.textContent;
        teamACheck.push(add);
    }
    // gathers teamBCheck from index.html
    let teamBCheckSource = document.getElementById('team-b').children;
    let teamBCheck = [];

    for (let player of teamBCheckSource) {
        let add = player.textContent;
        teamBCheck.push(add);
    }

    console.log(teamACheck);
    console.log(teamBCheck);

    let teamASame = false;
    let teamBSame = false;
    let indexA = 0;
    let indexB = 0;

    if (teamA.length !== teamACheck.length) {
        teamASame = false;
    } else {
        for (let player of teamA) {
            for (let checkPlayer of teamACheck) {
                if (player === checkPlayer) {
                    indexA = indexA + 1;
                }
            }
        }

        if (indexA === teamA.length) {
            teamASame = true;
        }
    }

    if (teamB.length !== teamBCheck.length) {
        teamBSame = false;
    } else {
        for (let player of teamB) {
            for (let checkPlayer of teamBCheck) {
                if (player === checkPlayer) {
                    indexB = indexB + 1;
                }
            }
        }

        if (indexB === teamB.length) {
            teamBSame = true;
        }
    }

    if (teamASame || teamBSame) {

        let removeA = teamA[0];
        teamA.splice(0, 1);
        let removeB = teamB[0];
        teamB.splice(0, 1);

        console.log(removeA);
        console.log(removeB);

        teamA.push(removeB);
        teamB.push(removeA);
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
 * Function updatePlayerPoints takes match results inputted by the user
 * and updates player points in the player array accordingly.
 */
function updatePlayerPoints() {

    let teamAScore = document.getElementById('team-a-score').value;
    let teamBScore = document.getElementById('team-b-score').value;

    /* gathers teamA from index.html */
    let teamASource = document.getElementById('team-a').children;
    let teamA = [];

    for (let player of teamASource) {
        let add = player.textContent;
        teamA.push(add);
    }
    /* gathers teamB from index.html */
    let teamBSource = document.getElementById('team-b').children;
    let teamB = [];

    for (let player of teamBSource) {
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
        for (let player of teamA) {
            for (let i = 0; i < players.length; i++) {
                if (player === players[i].playerName) {
                    players[i].points = players[i].points + pointsAwarded;
                }
            }
        }
    } else {
        for (let player of teamB) {
            for (let i = 0; i < players.length; i++) {
                if (player === players[i].playerName) {
                    players[i].points = players[i].points + pointsAwarded;
                }
            }
        }
    }

    // Re-orders the player array based on latest points from highest to lowest
    players.sort(function (a, b) {
        return b.points - a.points;
    });

    console.log(players);
}

/**
 * Function deleteListedPlayer deletes user selected players from the player list.
 * This function runs the deletion process and calls other functions.
 */
function deleteListedPlayer() {
    let playerList = document.getElementById('player-list').children;
    console.log(playerList);
    for (let player of playerList) {
        player.classList.add('delete-player');
        player.addEventListener('click', deleteSelectedPlayer);
    }

    /**
     * Function deleteSelectedPlayer lives inside and is called by the deletedListedPlayer function
     * as part of the deletion process once user has selected the individual player to delete.
     */
    function deleteSelectedPlayer(event) {
        let player = event.target.textContent;
        console.log(player);

        let index;

        for (let i = 0; i < players.length; i++) {
            if (player === players[i].playerName) {
                index = i;
            }
        }

        players.splice(index, 1);
        console.log(players);

        if (players.length < 1) {

            let newPlayerList = document.getElementById('player-list');
            newPlayerList.innerHTML = '';
        } else {

            let newPlayerList = document.getElementById('player-list');
            let newPlayer = players[0].playerName;

            newPlayerList.innerHTML = `<p>${newPlayer}</p>`;

            for (let i = 1; i < players.length; i++) {

                let newPlayer = players[i].playerName;
                newPlayerList.innerHTML += `<p>${newPlayer}</p>`;
            }
        }
    }
}