let validateLineup = (lineup) => {

}


/*

1. What does it do?
    Checks a lineup and returns True if all rules are met.

2. What are the inputs?
    An array - lineup[]
    consisting of objects with the keys:
      id:
      name:
      position:
      teamId:
      gameId:
      salary:

3. What is the output?
      Boolean - returns true when the lineup satisfies all conditions


## Lineup Rules
1) The total salary of all players in a lineup may not exceed $45,000
      returns false when the lineup has a total salary greater than 45000


2) Lineups may not contain more than 2 players from a single team
      returns false when the lineup includes too many players from a single team

3) Lineups may not contain more than 3 players from a single game
      returns false when the lineup includes too many players from a single game

4) Lineups must contain exactly 3 players with the position of 'OF' 
and must also contain exactly 1 player from each of the following positions: 
'P', 'C', '1B', '2B', '3B', 'SS'
      returns false when the lineup includes too many players
      returns false when the lineup does not have the right number of players at each position
      returns false when the lineup includes too few players from a single position
      returns false when the lineup does not include a player from a position

*/
module.exports = validateLineup