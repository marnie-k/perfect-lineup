let TotalSalary = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

let countPlayerPerTeam = (lineup) => {
  return lineup.reduce((countTeam, player) =>  {
    countTeam[player.teamId] = countTeam[player.teamId] === undefined ? 1 : countTeam[player.teamId] + 1
    return countTeam
  }, {})
}

let salaryOver = (lineup) => {
  return TotalSalary(lineup) > 45000
}


let playerPerTeam = (countPlayerPerTeam) => {
  return Object.values(playerPerTeam).some((count) => { return count > 2 })
}

let validateLineup = (lineup) => {
  const playerPerTeam = countPlayerPerTeam(lineup)

  return !salaryOver(lineup) && !countPlayerPerTeam(playerPerTeam)


}


/*

1. What does it do?
    Checks a lineup and returns True if all rules are met.

2. What are the inputs?
    An array - lineup[]
    consisting of objects with the keys:
      id: string
      name: string
      position: string
      teamId: number
      gameId: number
      salary: number

3. What is the output?
      Boolean - returns true when the lineup satisfies all conditions

## Lineup Rules

2) Lineups may not contain more than 2 players from a single team
      returns false when the lineup includes too many players from a single team
      filter to new array based on teamId
      if length of new array > 2
      return false

3) Lineups may not contain more than 3 players from a single game
      returns false when the lineup includes too many players from a single game
      filter to new array based on gameId
      if length of new array > 2
      return false

4) Lineups must contain exactly 3 players with the position of 'OF' 
and must also contain exactly 1 player from each of the following positions: 
'P', 'C', '1B', '2B', '3B', 'SS'
      returns false when the lineup includes too many players
      returns false when the lineup does not have the right number of players at each position
      returns false when the lineup includes too few players from a single position
      returns false when the lineup does not include a player from a position

*/
module.exports = validateLineup