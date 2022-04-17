import { world } from "mojang-minecraft"

world.events.beforeChat.subscribe(eventData => {
    eventData.cancel = true
    const msg = eventData.message
    const player = eventData.sender
    if(player.hasTag("admin")) {
    world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§4[ADMIN] ${player.name} §r> ${msg}"}]}`)
    } else {
        world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§2[PLAYER] ${player.name} §r> ${msg}"}]}`)
    }
})