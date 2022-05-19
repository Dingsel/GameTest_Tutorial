import { ItemStack, MinecraftItemTypes, world } from "mojang-minecraft"

world.events.blockBreak.subscribe(event => {
    const random = function (object) {
        const keys = Object.keys(object)
        return object[keys[keys.length * Math.random() << 0]]
    }
    const playerInventory = event.player.getComponent("inventory").container
    const item = new ItemStack(random(MinecraftItemTypes), 1)
    playerInventory.addItem(item)
})