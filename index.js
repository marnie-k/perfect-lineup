let totalSalary = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

let countPlayerPerTeam = (lineup) => {
  return lineup.reduce((countTeam, player) => {
    countTeam[player.teamId] = countTeam[player.teamId] === undefined ? 1 : countTeam[player.teamId] + 1

    return countTeam
  }, {})
}

let countPlayerPerGame = (lineup) => {
  return lineup.reduce((countGame, player) => {
    countGame[player.gameId] = countGame[player.gameId] === undefined ? 1 : countGame[player.gameId] + 1

    return countGame
  }, {})
}

let countPlayerPerPos = (lineup) => {
  return lineup.reduce((countPos, player) => {
    countPos[player.position] = countPos[player.position] === undefined ? 1 : countPos[player.position] + 1

    return countPos
  }, {})
}

let salaryOver = (lineup) => {
  return totalSalary(lineup) > 45000
}

let teamOver = (countTeam) => {
  return Object.values(countTeam).some((count) => { return count > 2 })
}

let gameOver = (countGame) => {
  return Object.values(countGame).some((count) => { return count > 3 })
}

let posOver = (countPos) => {
  return countPos['P'] !== 1 || countPos['C'] !== 1 || countPos['1B'] !== 1 ||
  countPos['2B'] !== 1 || countPos['3B'] !== 1 || countPos['SS'] !== 1 ||
  countPos['OF'] !== 3
}

let validateLineup = (lineup) => {
  const countTeam = countPlayerPerTeam(lineup) // this may need to be teamCount
  const countGame = countPlayerPerGame(lineup) // this may need to be gameCount
  const countPos = countPlayerPerPos(lineup)

  return !salaryOver(lineup) && !teamOver(countTeam) &&
  !gameOver(countGame) && !posOver(countPos)
}

module.exports = validateLineup
