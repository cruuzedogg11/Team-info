const team = {
  _players: [
    { firstName: "LeBron", lastName: "James", age: 38 },
    { firstName: "Steve", lastName: "Curry", age: 32 },
    { firstName: "Magic", lastName: "Johnson", age: 57 },
  ],
  _games: [
    { opponent: "Boston", teamPoints: 80, opponentPoints: 78 },
    { opponent: "Miami", teamPoints: 90, opponentPoints: 88 },
    { opponent: "Houston", teamPoints: 100, opponentPoints: 98 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints)  {
    const game =  {
      opponent: newOpponent,
      teamPoint: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 78);
team.addGame('Titans', 100, 98);

console.log(team._players);
console.log(team._games);
