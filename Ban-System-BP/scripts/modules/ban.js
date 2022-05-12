import { EntityQueryOptions, EntityQueryScoreOptions, world } from "mojang-minecraft"

const ban = new EntityQueryScoreOptions()
ban.objective = "ban"
ban.minScore = 1
const banQuery = new EntityQueryOptions
banQuery.scoreOptions = [ban]


world.events.beforeChat.subscribe(event => {
    const player = event.sender
    if(player.hasTag("admin")) {
        const message = event.message
        const args = message.trim().split(/\s+/)
        if(message.startsWith(".ban")) {
            event.cancel = true
            player.runCommand(`scoreboard players set ${args[1]} ban 1`)
        }
        if(message.startsWith(".unban")) {
            event.cancel = true
            player.runCommand(`scoreboard players set ${args[1]} ban 0`)
        }
        if(message.startsWith(".kick")){
            event.cancel = true
            try {
                if(args[1] == "*") {
                    const players = Array.from(world.getPlayers())
                    for(const player of players) {
                        player.runCommand(`kick ${player.name} ${args[2]}`)
                    }
                } else {
                    player.runCommand(`kick ${args[1]} ${args[2]}`)
                }
                
            } catch (error) {
                player.runCommand(`say ${error}`)
                
                }
        }
    } else {
        player.runCommand(`say get rank noob`)
    }

})

world.events.tick.subscribe(() => {
    const players = Array.from(world.getPlayers(banQuery))
    for (const player of players) {
        player.runCommand(`kick ${player.name} You are banned!`)
    }
})   