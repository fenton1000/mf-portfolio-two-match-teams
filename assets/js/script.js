const players = [];

document.addEventListener('DOMContentLoaded', function() {
    let submitPlayerName = document.getElementById('submit-player-name');
    submitPlayerName.addEventListener('click', addPlayer);
});