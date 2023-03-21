const getInfoGameFormat = (game) => {
    return {
        game_id: game.id,
        description: game.description,
        date: game.date,
        hour: game.hour,
        quarter: game.GameTeams.quarter,
        team_a: {
            id: game.GameTeams[0].Team.id,
            description: game.GameTeams[0].Team.name,
            score: game.GameTeams[0].score,
            fouls: game.GameTeams[0].fouls,
            players: game.TeamPlayers.filter( player => player.team_id == game.GameTeams[0].Team.id )
        },
        team_b: {
            id: game.GameTeams[1].Team.id,
            description: game.GameTeams[1].Team.name,
            score: game.GameTeams[1].score,
            fouls: game.GameTeams[1].fouls,
            players: game.TeamPlayers.filter( player => player.team_id == game.GameTeams[1].Team.id )
        }
    }
}

module.exports = { getInfoGameFormat }