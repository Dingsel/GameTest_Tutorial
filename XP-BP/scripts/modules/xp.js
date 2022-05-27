import { SoundOptions, world } from "mojang-minecraft"


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);

    return parseFloat(str);
}


class blocks {
    constructor(blockID, xp, xpType) {
        this.blockID = blockID
        this.xp = xp
        this.xpType = xpType
    }
}

const b = [new blocks("minecraft:stone", 1, "miningXp")]



world.events.blockBreak.subscribe(function (event) {
    const player = event.player
    const block = event.brokenBlockPermutation.type
    const sound = new SoundOptions
    sound.location = player.location
    sound.volume = 999
    sound.pitch = getRandomFloat(1.6, 2.4, 1)

    for (let i = 0; i < b.length; i++) {
        if(block.id == b[i].blockID) {
            player.runCommand(`scoreboard players add @s ${b[i].xpType} ${b[i].xp}`)
            player.runCommand(`title @s actionbar §3${capitalizeFirstLetter(b[i].xpType).slice(0, -2)} : ${b[i].xp} §aXP §3gained!`)
            player.playSound("random.orb", sound)
        }
        
    }


})  