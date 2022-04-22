import { world } from "mojang-minecraft"

world.events.tick.subscribe((event) => {
    const players = Array.from(world.getPlayers())
    try{
        world.getDimension("overworld").runCommand(`title @a actionbar Players Online : ${players.length}`)
    } catch{

    }
})