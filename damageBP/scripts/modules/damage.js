import { world } from "mojang-minecraft"

world.events.entityHurt.subscribe(function (event) {
    const damage = event.damage
    const hurtEntity = event.hurtEntity
    const entity = world.getDimension("overworld").spawnEntity("test:damage_indicator", hurtEntity.location)
    entity.nameTag = `§c${damage}`
})