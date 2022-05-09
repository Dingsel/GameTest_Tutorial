import { world } from "mojang-minecraft"

world.events.blockBreak.subscribe(event => {
    if (event.player.hasTag("creative") == false) {
        const permutation = event.brokenBlockPermutation
        const block = event.block
        //Blacklist 
        var b = ["minecraft:stone"]
        if (b.includes(permutation.type.id)) {
        } else {
            block.setPermutation(permutation)
        }
    }
})