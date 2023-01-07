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

    let playerObject = {
        playerName: newPlayer,
        points: 0
    };

    players.push(playerObject);

    console.log(players);
}
