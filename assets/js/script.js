const players = [];

document.addEventListener('DOMContentLoaded', function() {
    let submitPlayerName = document.getElementById('submit-player-name');
    submitPlayerName.addEventListener('click', addPlayer);
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
